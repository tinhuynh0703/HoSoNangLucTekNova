import { leadSchema } from "~~/shared/lead";

export default defineEventHandler(async (event) => {
  const parsed = leadSchema.safeParse(await readBody(event));
  if (!parsed.success)
    throw createError({
      statusCode: 400,
      statusMessage: "Dữ liệu không hợp lệ.",
    });
  const config = useRuntimeConfig(event);
  const url = config.leadWebhookUrl as string | undefined;
  if (!url)
    throw createError({
      statusCode: 503,
      statusMessage: "Kênh tiếp nhận trực tuyến chưa được cấu hình.",
    });
  try {
    const response = await $fetch.raw(url, {
      method: "POST",
      headers: {
        ...(config.leadWebhookToken
          ? { Authorization: `Bearer ${config.leadWebhookToken}` }
          : {}),
      },
      body: { ...parsed.data, receivedAt: new Date().toISOString() },
      timeout: 10000,
      retry: 0,
    });
    if (response.status < 200 || response.status >= 300)
      throw new Error("Delivery rejected");
    return { accepted: true };
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage:
        "Chưa thể tiếp nhận yêu cầu. Vui lòng liên hệ qua điện thoại hoặc email.",
    });
  }
});
