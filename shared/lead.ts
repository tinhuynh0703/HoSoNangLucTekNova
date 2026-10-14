import { z } from "zod";

export const leadSchema = z
  .object({
    kind: z.enum(["contact", "solution"]),
    name: z
      .string()
      .trim()
      .min(2, "Vui lòng nhập họ tên (ít nhất 2 ký tự).")
      .max(100),
    phone: z
      .string()
      .trim()
      .regex(/^(\+?84|0)[0-9 .-]{8,13}$/, "Số điện thoại chưa hợp lệ."),
    email: z.union([z.email("Email chưa hợp lệ."), z.literal("")]),
    organization: z.string().trim().max(150),
    interest: z
      .string()
      .trim()
      .min(1, "Vui lòng chọn lĩnh vực quan tâm.")
      .max(100),
    message: z.string().trim().max(2000),
    website: z.string().max(0),
  })
  .superRefine((lead, context) => {
    if (lead.kind === "solution" && !lead.email) {
      context.addIssue({
        code: "custom",
        path: ["email"],
        message: "Vui lòng nhập email công việc.",
      });
    }
  });
export type Lead = z.infer<typeof leadSchema>;
