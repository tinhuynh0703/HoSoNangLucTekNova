// Nội dung được chuyển từ index.html theo yêu cầu giữ đầy đủ dữ liệu nguồn.
export const homeStats = [
  {
    value: "15+",
    label: "Năm Kinh Nghiệm",
    detail: "Tư vấn và thực thi giải pháp số",
  },
  {
    value: "50+",
    label: "Dự Án Thành Công",
    detail: "Khối y tế, công & doanh nghiệp",
  },
  {
    value: "20+",
    label: "Chuyên Gia & Kỹ Sư",
    detail: "Trình độ Thạc sĩ, Kỹ sư cao cấp",
  },
  {
    value: "100%",
    label: "Hài Lòng & Tin Cậy",
    detail: "Đồng hành cam kết dài lâu",
  },
] as const;

export const homePartners = [
  {
    name: "BV Phổi Đà Nẵng",
    detail: "Bệnh viện chuyên khoa cấp tỉnh",
    icon: "hospital",
  },
  {
    name: "TTYT Ngũ Hành Sơn",
    detail: "Trung tâm Y tế Quận NHS",
    icon: "health",
  },
  {
    name: "TTYT Liên Chiểu",
    detail: "Chuẩn EMR & Đơn thuốc TT26",
    icon: "health",
  },
  {
    name: "Chi cục Dân số TP Đà Nẵng",
    detail: "Cổng BI thống kê số hóa",
    icon: "population",
  },
  {
    name: "UBND Quận Ngũ Hành Sơn",
    detail: "Chính quyền điện tử & DVC",
    icon: "government",
  },
  { name: "VietinBank", detail: "Tích hợp Viện phí Smart QR", icon: "bank" },
  { name: "Vietcombank", detail: "Thanh toán không tiền mặt", icon: "bank" },
  { name: "BIDV", detail: "Giải pháp liên kết viện phí", icon: "bank" },
  {
    name: "VNPT Healthcare",
    detail: "Hạ tầng kết nối mạng y tế",
    icon: "telecom",
  },
  {
    name: "Viettel Digital",
    detail: "Đối tác giải pháp viễn thông số",
    icon: "telecom",
  },
  {
    name: "MedLatec Đà Nẵng",
    detail: "Liên thông dữ liệu xét nghiệm",
    icon: "lab",
  },
  {
    name: "BV Đa Khoa Quốc Tế Vinmec",
    detail: "Hệ thống y tế tiêu chuẩn JCI",
    icon: "hospital",
  },
  {
    name: "Zalo Cloud Partner",
    detail: "Chăm sóc bệnh nhân tự động",
    icon: "message",
  },
  {
    name: "Microsoft Solutions Partner",
    detail: "Hạ tầng Azure Cloud & AI",
    icon: "cloud",
  },
  {
    name: "Cisco Systems",
    detail: "Thiết bị mạng & bảo mật trung tâm",
    icon: "network",
  },
  {
    name: "Fortinet Security",
    detail: "An toàn thông tin cấp độ 3",
    icon: "security",
  },
  {
    name: "FPT Smart Cloud",
    detail: "Điện toán đám mây & Trí tuệ nhân tạo",
    icon: "cloud",
  },
  {
    name: "Viện KH Y Dược Đà Nẵng",
    detail: "Nghiên cứu & chuẩn hóa dữ liệu EMR",
    icon: "research",
  },
  {
    name: "Sở Y Tế Đà Nẵng",
    detail: "Quy chuẩn y tế điện tử toàn thành phố",
    icon: "health",
  },
  {
    name: "Smart City Đà Nẵng",
    detail: "Nền tảng đô thị thông minh",
    icon: "city",
  },
] as const;

export const homeFeaturedProjects = [
  {
    category: "Y Tế Thông Minh",
    title: "Bệnh Viện Điện Tử (EMR)",
    detail:
      "Triển khai hồ sơ bệnh án điện tử không giấy tờ tại Bệnh viện Phổi Đà Nẵng & TTYT Ngũ Hành Sơn, tích hợp ký số và liên thông BHYT.",
    metric: "Đơn vị: BV Phổi Đà Nẵng",
    outcome: "100% Hoàn thành",
  },
  {
    category: "Tuân Thủ Quy Chuẩn",
    title: "Đơn Thuốc Điện Tử TT 26/2025",
    detail:
      "Cập nhật chuẩn hóa mẫu đơn thuốc điện tử theo Thông tư 26/2025/TT-BYT tại Trung tâm Y tế Quận Liên Chiểu, liên thông cổng Dược Quốc Gia.",
    metric: "Đơn vị: TTYT Liên Chiểu",
    outcome: "Chuẩn Quốc Gia",
  },
  {
    category: "Tương Tác Số",
    title: "Zalo OA Tích Hợp HIS",
    detail:
      "Kênh chăm sóc người bệnh tự động: tra cứu kết quả xét nghiệm, lịch khám định kỳ và tiếp nhận phản ánh người dân qua Zalo Official Account.",
    metric: "Lượt tương tác: >100K/tháng",
    outcome: "Realtime Sync",
  },
  {
    category: "Hành Chính Công",
    title: "Cổng Dữ Liệu Dân Số",
    detail:
      "Cổng thông tin tổng hợp, phân tích và thống kê dữ liệu chuyên ngành cho Chi cục Dân số TP Đà Nẵng phục vụ điều hành và báo cáo thông minh.",
    metric: "Đơn vị: Chi cục Dân số ĐN",
    outcome: "Vận hành 24/7",
  },
  {
    category: "Tài Chính Y Tế",
    title: "Thanh Toán Không Tiền Mặt",
    detail:
      "Giải pháp Kiosk thanh toán viện phí tự động, mã VietQR động, thẻ khám chữa bệnh thông minh liên kết ngân hàng đối tác tại bệnh viện tuyến tỉnh.",
    metric: "Tốc độ: 3 giây/giao dịch",
    outcome: "Chính xác 100%",
  },
] as const;
