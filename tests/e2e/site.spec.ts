import { expect, test } from "@playwright/test";

test("main routes render server content and legacy URLs redirect", async ({
  page,
}) => {
  const routes = [
    ["/", "Kiến tạo Giải pháp"],
    ["/gioi-thieu", "Đội ngũ chuyên gia tiên phong"],
    ["/linh-vuc-hoat-dong", "Lĩnh vực Hoạt động"],
    ["/du-an", "Các dự án tiêu biểu"],
    ["/lien-he", "Nói với chúng tôi"],
  ] as const;
  for (const [route, heading] of routes) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      heading,
    );
  }
  for (const [legacy, current] of [
    ["/index.html", "/"],
    ["/gioithieu.html", "/gioi-thieu"],
    ["/lichvuc.html", "/linh-vuc-hoat-dong"],
    ["/duan.html", "/du-an"],
  ]) {
    await page.goto(legacy);
    await expect(page).toHaveURL(
      new RegExp(`${current.replaceAll("/", "\\/")}$`),
    );
  }
});

test("visible internal links resolve and unknown routes return 404", async ({
  page,
  request,
}) => {
  const hrefs = new Set<string>();
  for (const route of [
    "/",
    "/gioi-thieu",
    "/linh-vuc-hoat-dong",
    "/du-an",
    "/lien-he",
  ]) {
    await page.goto(route);
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((links) =>
        links.map((link) => link.getAttribute("href") || ""),
      )) {
      if (href.startsWith("/") && !href.startsWith("//"))
        hrefs.add(href.split("#")[0] || "/");
    }
  }
  for (const href of hrefs)
    expect((await request.get(href)).status(), href).toBeLessThan(400);
  expect((await request.get("/does-not-exist")).status()).toBe(404);
});

test("service tabs, project filter and dialog work by keyboard", async ({
  page,
}) => {
  await page.goto("/linh-vuc-hoat-dong");
  const first = page.getByRole("tab", { name: /Y tế & Bệnh án Điện tử/ });
  await first.focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    page.getByRole("tab", { name: /Phần mềm & App theo yêu cầu/ }),
  ).toHaveAttribute("aria-selected", "true");
  await page.goto("/du-an");
  await page.waitForFunction(() =>
    Boolean(
      (
        document.querySelector("#__nuxt") as
          (HTMLElement & { __vue_app__?: unknown }) | null
      )?.__vue_app__,
    ),
  );
  await expect(page.getByText("38+", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "Hệ thống Bệnh án điện tử (EMR) chuẩn Bộ Y tế",
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: /Tích hợp Zalo OA/ }).click();
  await expect(page.getByRole("status")).toContainText("1 hạng mục");
  await page.getByRole("button", { name: /Xem hồ sơ tham chiếu/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("+340% Sau triển khai");
  for (const viewport of [
    { width: 1280, height: 800 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    const bounds = await page.getByRole("dialog").boundingBox();
    expect(bounds).not.toBeNull();
    expect(
      Math.abs(bounds!.x + bounds!.width / 2 - viewport.width / 2),
    ).toBeLessThan(24);
    expect(
      Math.abs(bounds!.y + bounds!.height / 2 - viewport.height / 2),
    ).toBeLessThan(24);
    expect(bounds!.height).toBeLessThanOrEqual(viewport.height - 24);
  }
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("mobile navigation and unavailable lead delivery are honest", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Mở menu" }).click();
  await page
    .getByRole("navigation", { name: "Điều hướng di động" })
    .getByRole("link", { name: "Giới thiệu" })
    .click();
  await expect(page).toHaveURL(/\/gioi-thieu$/);
  await page.getByLabel("Họ và tên").fill("Nguyễn Văn A");
  await page.getByLabel("Số điện thoại").fill("0935722579");
  await page
    .getByLabel("Lĩnh vực quan tâm")
    .selectOption({ label: "Giải pháp Y tế Bệnh viện (HIS/EMR)" });
  await page.getByRole("button", { name: "Gửi thông tin ngay" }).click();
  await expect(page.getByRole("status")).toContainText("chưa sẵn sàng");
});
