// Nội dung được chuyển từ duan.html theo yêu cầu hiển thị đầy đủ dữ liệu nguồn.
export const projectStats = [
  {
    value: "38+",
    label: "Hệ thống phần mềm vận hành",
    detail: "Triển khai ổn định",
  },
  {
    value: "07",
    label: "Đại dự án cấp đô thị & bệnh viện",
    detail: "Cấp Sở & Bệnh viện TW",
  },
  {
    value: "06+",
    label: "Đối tác y tế công lập cấp tỉnh",
    detail: "Tích hợp EMR chuẩn BYT",
  },
] as const;

export const projectFilters = [
  { id: "all", label: "Tất cả dự án" },
  { id: "emr", label: "Y tế & Bệnh viện điện tử (EMR)" },
  { id: "public-admin", label: "Hành chính công & Dân số" },
  { id: "zalo-oa", label: "Tích hợp Zalo OA & Tiện ích số" },
  { id: "cashless", label: "Thanh toán số không tiền mặt" },
] as const;

export type Project = {
  id: string;
  category: Exclude<(typeof projectFilters)[number]["id"], "all">;
  categoryLabel: string;
  year: string;
  client: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  highlights?: string[];
  technologies: string[];
  action: string;
  badge?: string;
  status: "SOURCE_ONLY";
};

export const projects: Project[] = [
  {
    id: "benh-an-dien-tu",
    category: "emr",
    categoryLabel: "Y tế & Bệnh viện số",
    year: "Năm 2024 - 2025",
    client: "Bệnh viện Phổi Đà Nẵng",
    title: "Hệ thống Bệnh án điện tử (EMR) chuẩn Bộ Y tế",
    summary:
      "Cung cấp gói giải pháp dịch vụ thuê phần mềm Bệnh án điện tử toàn diện: Quản lý hồ sơ bệnh nhân không giấy tờ, tích hợp chữ ký số bác sĩ (PKI), liên thông chuẩn HL7/FHIR và đồng bộ thông suốt với hệ thống PACS/RIS/LIS.",
    metrics: [
      {
        label: "Tỷ lệ số hóa hồ sơ điều trị",
        value: "100% Không dùng bệnh án giấy",
      },
    ],
    highlights: [
      "Chữ ký số SmartCA",
      "Bảo mật dữ liệu y tế",
      "Chuẩn liên thông BYT",
    ],
    technologies: ["PostgreSQL", "Microservices", "Docker"],
    action: "Xem chi tiết giải pháp",
    badge: "Khách hàng chính thức",
    status: "SOURCE_ONLY",
  },
  {
    id: "emr-trung-tam-y-te",
    category: "emr",
    categoryLabel: "Y tế cơ sở",
    year: "2025",
    client: "TTYT Ngũ Hành Sơn",
    title: "Bệnh án điện tử EMR 2025",
    summary:
      "Thuê phần mềm Bệnh án điện tử nâng cấp toàn diện quy trình khám chữa bệnh ngoại trú & nội trú, tự động cảnh báo tương tác thuốc và chuẩn hóa viện phí.",
    metrics: [{ label: "Tốc độ xử lý hồ sơ", value: "Giảm 65%" }],
    technologies: ["HL7 / Cloud EMR"],
    action: "Chi tiết",
    status: "SOURCE_ONLY",
  },
  {
    id: "don-thuoc-dien-tu",
    category: "emr",
    categoryLabel: "Tuân thủ quy chế",
    year: "2025",
    client: "TTYT Liên Chiểu",
    title: "Đơn thuốc điện tử TT 26/2025/TT-BYT",
    summary:
      "Cập nhật biểu mẫu và phân hệ kê đơn thuốc điện tử quốc gia, định danh mã liên thông đơn thuốc, gửi tự động SMS/Zalo cho người bệnh.",
    metrics: [{ label: "Liên thông cổng Dược QG", value: "100% Hợp chuẩn" }],
    technologies: ["API Quốc gia / HL7"],
    action: "Chi tiết",
    status: "SOURCE_ONLY",
  },
  {
    id: "zalo-oa-y-te",
    category: "zalo-oa",
    categoryLabel: "Zalo Official Account",
    year: "2024",
    client: "Bệnh viện Phổi Đà Nẵng",
    title: "Quảng bá & Đồng bộ kết quả qua Zalo OA",
    summary:
      "Giải pháp tích hợp cổng Zalo OA với HIS bệnh viện: Tự động gửi kết quả xét nghiệm, lịch hẹn tái khám, hướng dẫn dùng thuốc bảo mật đến trực tiếp điện thoại công dân.",
    metrics: [
      { label: "Tỷ lệ tương tác bệnh nhân", value: "+340% Sau triển khai" },
    ],
    technologies: ["Zalo Open API / Webhook"],
    action: "Chi tiết",
    status: "SOURCE_ONLY",
  },
  {
    id: "du-lieu-dan-so",
    category: "public-admin",
    categoryLabel: "Dữ liệu & Thống kê",
    year: "2024",
    client: "Chi cục Dân số TP Đà Nẵng",
    title: "Hệ thống Web Thống kê Dân số Toàn diện",
    summary:
      "Xây dựng nền tảng Web tổng hợp số liệu dân cư, dashboard trực quan hóa biến động dân số, hỗ trợ chỉ đạo điều hành và tự động hóa xuất báo cáo định kỳ các cấp cơ sở.",
    metrics: [{ label: "Tuyến xã/phường kết nối", value: "56/56 Đơn vị" }],
    technologies: ["BI Analytics / SQL"],
    action: "Chi tiết",
    status: "SOURCE_ONLY",
  },
  {
    id: "thanh-toan-so",
    category: "cashless",
    categoryLabel: "FinTech Y tế",
    year: "2024 - 2025",
    client: "Chuỗi cơ sở KCB Đà Nẵng",
    title: "Hệ thống Thanh toán Viện phí Không dùng Tiền mặt",
    summary:
      "Giải pháp liên thông cổng thanh toán QR Động Napas 247, thẻ ngân hàng và ví điện tử tích hợp sâu vào hóa đơn bệnh viện. Giảm thời gian chờ đợi tại quầy thu viện phí từ 25 phút xuống dưới 45 giây.",
    metrics: [
      { label: "Tỷ lệ thanh toán không tiền mặt", value: "78.5%" },
      { label: "Thời gian đối soát", value: "Tức thời (Real-time)" },
    ],
    technologies: ["VietQR / ISO 8583 / PCI-DSS"],
    action: "Xem giải pháp FinTech",
    status: "SOURCE_ONLY",
  },
  {
    id: "cong-chuyen-doi-so",
    category: "public-admin",
    categoryLabel: "Chính quyền điện tử",
    year: "2024",
    client: "UBND Phường Ngũ Hành Sơn",
    title: "Cổng Chuyển đổi số & Quản trị Hành chính Công Cấp Phường",
    summary:
      "Số hóa toàn diện 100% thủ tục hành chính, tra cứu tiến độ xử lý hồ sơ trực tuyến cho người dân, đồng bộ lịch công tác số và phân loại phản ánh kiến nghị tại địa bàn cơ sở.",
    metrics: [
      { label: "Hài lòng của người dân", value: "99.2% Đánh giá tốt" },
      { label: "Hồ sơ giải quyết đúng hạn", value: "100% Tuyệt đối" },
    ],
    technologies: ["Single-Sign-On / DVC QG"],
    action: "Xem giải pháp Chính phủ số",
    status: "SOURCE_ONLY",
  },
];

export const projectPartners = [
  { name: "Bệnh viện Phổi Đà Nẵng", detail: "Bệnh viện Hạng I • EMR BYT" },
  { name: "TTYT Quận Ngũ Hành Sơn", detail: "Hệ thống Smart EMR" },
  { name: "TTYT Quận Liên Chiểu", detail: "Đơn thuốc TT26" },
  { name: "Chi cục Dân số - KHHGĐ ĐN", detail: "Chính quyền số" },
  { name: "Vietcombank", detail: "Fintech Viện phí • VietQR 247" },
  { name: "UBND Phường Ngũ Hành Sơn", detail: "Hành chính công" },
  { name: "Zalo Cloud Partner", detail: "Zalo OA Gateway" },
  { name: "VNPT Healthcare", detail: "Hạ tầng Viễn thông" },
  { name: "FPT Smart Cloud", detail: "Đám mây & AI" },
  { name: "Fortinet & Cisco", detail: "Bảo mật Cấp độ 3" },
  { name: "VietinBank & BIDV", detail: "Cổng liên thông Napas" },
  { name: "Microsoft Solutions", detail: "Đối tác Cloud & Dev" },
] as const;

export const projectTrustStats = [
  { value: "50+", label: "Cơ sở Y tế & Cơ quan hành chính" },
  { value: "100%", label: "Nghiệm thu đạt chuẩn BYT & Thông tư liên quan" },
  { value: "99.98%", label: "Uptime & Cam kết SLA hỗ trợ 24/7/365" },
] as const;

export const projectModalDetails = [
  {
    label: "Mô hình triển khai",
    value: "Thuê phần mềm trọn gói (SaaS/On-Premise)",
  },
  { label: "Hỗ trợ kỹ thuật", value: "24/7 SLA Cấp 1" },
  {
    label: "Tiêu chuẩn an toàn TT",
    value: "Hồ sơ bảo đảm an toàn hệ thống cấp độ 3",
  },
] as const;
