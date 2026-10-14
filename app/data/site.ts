export const company = {
  name: "Công ty Cổ phần Đổi mới Sáng tạo TEKNOVA",
  shortName: "TEKNOVA",
  tagline: "Now or Never",
  phone: "0935 722 579",
  phoneHref: "tel:0935722579",
  email: "Teknova0925@gmail.com",
  emailHref: "mailto:Teknova0925@gmail.com",
  address: "K131/18 Lý Thái Tổ, Quận Thanh Khê, TP. Đà Nẵng",
  hours: "Thứ 2 – Thứ 6, 08:00 – 17:30",
} as const;

export const navigation = [
  { label: "Trang chủ", to: "/" },
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Lĩnh vực hoạt động", to: "/linh-vuc-hoat-dong" },
  { label: "Dự án tiêu biểu", to: "/du-an" },
] as const;

export const services = [
  {
    number: "01",
    title: "Tư vấn giải pháp CNTT",
    detail:
      "Tư vấn và khảo sát hiện trạng, xây dựng kiến trúc tổng thể và đề xuất lộ trình công nghệ tối ưu chi phí, phù hợp mục tiêu của tổ chức.",
    icon: "waypoints",
    badge: "ISO 27001",
  },
  {
    number: "02",
    title: "Cung cấp & Triển khai dịch vụ CNTT",
    detail:
      "Thiết kế, tích hợp và triển khai hệ thống phần mềm nghiệp vụ, giải pháp quản trị số vận hành ổn định, sẵn sàng mở rộng quy mô.",
    icon: "network",
    badge: "Triển khai 24/7",
  },
  {
    number: "03",
    title: "Phát triển, lập trình phần mềm",
    detail:
      "Gia công & phát triển phần mềm theo yêu cầu đặc thù: Web App, Mobile App iOS/Android, nền tảng số hóa quản lý tài liệu và nhân sự.",
    icon: "code",
    badge: "Web & Mobile",
  },
  {
    number: "04",
    title: "Chuyển đổi số – AI – Big Data – Cloud",
    detail:
      "Hiện đại hóa toàn diện với công nghệ phân tích dữ liệu lớn, trợ lý ảo thông minh, hồ sơ số EMR y tế và hạ tầng điện toán đám mây bảo mật cao.",
    icon: "database",
    badge: "Nổi bật",
  },
  {
    number: "05",
    title: "Phân phối thiết bị công nghệ",
    detail:
      "Cung cấp máy chủ máy trạm, thiết bị mạng Cisco/Fortinet, Kiosk tra cứu thông tin y tế, máy in thẻ thông minh và thiết bị chuyên dụng y tế.",
    icon: "server",
    badge: "Chính Hãng",
  },
  {
    number: "06",
    title: "Đầu tư & hợp tác phát triển",
    detail:
      "Đồng hành cùng các đối tác doanh nghiệp, bệnh viện triển khai mô hình xã hội hóa CNTT, BOT công nghệ theo đúng quy chuẩn pháp luật.",
    icon: "handshake",
    badge: "Hợp tác BOT",
  },
] as const;

export const solutions = [
  {
    label: "01 / Y tế số",
    title: "Bệnh án điện tử (EMR)",
    detail:
      "Nhóm giải pháp quản lý hồ sơ bệnh án và luồng thông tin khám chữa bệnh.",
    tag: "Hồ sơ & quy trình",
  },
  {
    label: "02 / Kết nối",
    title: "Đơn thuốc điện tử",
    detail:
      "Quản lý thông tin kê đơn và trao đổi dữ liệu theo nhu cầu tích hợp.",
    tag: "Dữ liệu y tế",
  },
  {
    label: "03 / Tương tác",
    title: "Zalo OA tích hợp HIS",
    detail: "Kết nối kênh thông tin người bệnh với hệ thống quản lý bệnh viện.",
    tag: "Trải nghiệm người bệnh",
  },
  {
    label: "04 / Khu vực công",
    title: "Dữ liệu dân số",
    detail:
      "Tổ chức dữ liệu và hỗ trợ quy trình nghiệp vụ cho cơ quan hành chính.",
    tag: "Quản trị dữ liệu",
  },
  {
    label: "05 / Thanh toán",
    title: "Thanh toán không tiền mặt",
    detail:
      "Hỗ trợ luồng thanh toán số và đối soát trong cơ sở cung cấp dịch vụ.",
    tag: "Vận hành số",
  },
] as const;
