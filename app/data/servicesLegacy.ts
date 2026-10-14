// Nội dung của trang lĩnh vực hoạt động được chuyển từ lichvuc.html.
export const serviceStats = [
  { value: "100%", label: "Chuẩn BYT & BHYT" },
  { value: "99.98%", label: "SLA Vận hành Cloud" },
  { value: "45+", label: "Dự án Bệnh viện & Tỉnh" },
  { value: "< 15m", label: "Phản hồi khẩn cấp 24/7" },
] as const;

export const servicePartners = [
  { name: "BV Phổi Đà Nẵng", icon: "hospital" },
  { name: "TTYT Ngũ Hành Sơn", icon: "health" },
  { name: "TTYT Liên Chiểu", icon: "health" },
  { name: "Vinmec Healthcare", icon: "hospital" },
  { name: "Medlatec Group", icon: "lab" },
  { name: "Viettel Digital", icon: "telecom" },
  { name: "VNPT Healthcare", icon: "telecom" },
  { name: "Cisco Systems", icon: "network" },
  { name: "Fortinet Security", icon: "security" },
  { name: "Microsoft Partner", icon: "cloud" },
  { name: "Vietcombank", icon: "bank" },
  { name: "VietinBank", icon: "bank" },
  { name: "BIDV Smart Banking", icon: "bank" },
  { name: "Zalo OA Cloud", icon: "message" },
  { name: "FPT Smart Cloud", icon: "cloud" },
  { name: "Chi cục Dân số Đà Nẵng", icon: "population" },
  { name: "Đà Nẵng Smart City", icon: "city" },
  { name: "Trục Liên thông Dữ liệu", icon: "network" },
] as const;

export type ServicePillar = {
  id: string;
  tab: string;
  badge: string;
  code?: string;
  title: string;
  description: string;
  features: { title: string; detail: string }[];
  aside: {
    eyebrow: string;
    title: string;
    description: string;
    labels?: string[];
    metrics?: { label: string; value: string }[];
    badge?: string;
  };
  cta?: string;
};

export const servicePillars: ServicePillar[] = [
  {
    id: "emr",
    tab: "Y tế & Bệnh án Điện tử (EMR)",
    badge: "KHUNG THÔNG TƯ 46 & TT 26/2025/TT-BYT",
    code: "MÃ: TEK-EMR-PRO",
    title:
      "Giải pháp Bệnh án Điện tử Thông minh (Smart EMR) & Hệ sinh thái Y tế Số",
    description:
      "Hệ thống EMR đạt chuẩn không sử dụng hồ sơ bệnh án giấy, đồng bộ dữ liệu hình ảnh PACS, kết quả xét nghiệm LIS và cổng thông tin Giám định BHYT theo thời gian thực.",
    features: [
      {
        title: "Đơn thuốc điện tử quốc gia",
        detail:
          "Liên thông mã định danh người kê đơn, dược thư quốc gia tự động cảnh báo dị ứng.",
      },
      {
        title: "Thanh toán không tiền mặt",
        detail:
          "Tích hợp VietQR tĩnh/động, POS ngân hàng, thẻ khám bệnh thông minh liên kết viện phí.",
      },
      {
        title: "Ký số tập trung HSM / Token",
        detail:
          "Tích hợp ký số điện tử bác sĩ, hộ lý theo chuẩn bảo mật PKI không cần tháo token rời.",
      },
      {
        title: "Cổng giám định BHYT 4210",
        detail:
          "XML liên thông tức thì, tự động kiểm tra đối chiếu thẻ và chi phí tránh xuất toán.",
      },
    ],
    aside: {
      eyebrow: "Kiến trúc Luồng EMR",
      badge: "HL7 FHIR v4",
      title: "Mô hình Đồng bộ Dữ liệu Y tế Tức thì",
      description:
        "Mọi tác vụ từ Tiếp đón → Khám lâm sàng → Chỉ định CLS → Thu ngân được phản hồi trong vòng < 0.2s với kiến trúc Message Queue RabbitMQ & Redis Cluster.",
      labels: ["Trạm tiếp nhận (HIS)", "Lưu trữ PACS/LIS", "Cổng BHYT"],
      metrics: [
        { label: "Độ trễ trung bình", value: "142ms" },
        { label: "Quy chuẩn", value: "Đạt chuẩn Bộ TT&TT" },
      ],
    },
    cta: "Nhận đề án triển khai EMR Bệnh viện",
  },
  {
    id: "custom",
    tab: "Phần mềm & App theo yêu cầu",
    badge: "DEVELOPMENT EXCELLENCE",
    title: "Phát triển Phần mềm & Hệ thống Theo Yêu cầu Chuyên biệt",
    description:
      "Thiết kế giải pháp chuyên biệt từ kiến trúc Microservices đến ứng dụng di động đa nền tảng (Flutter / React Native), phục vụ các bài toán vận hành phức tạp của khối doanh nghiệp và cơ quan công quyền.",
    features: [
      {
        title: "Hệ thống ERP / CRM May đo",
        detail:
          "Quản trị chuỗi cung ứng, kho vận, nhân sự và tài chính tích hợp hóa đơn điện tử và chữ ký số.",
      },
      {
        title: "Web & Mobile App Tiện ích",
        detail:
          "Ứng dụng chăm sóc công dân, ứng dụng đặt lịch dịch vụ, thanh toán số với trải nghiệm người dùng siêu mượt.",
      },
      {
        title: "Quản trị CSDL Chuyên ngành",
        detail:
          "Chuẩn hóa cơ sở dữ liệu quốc gia về tài nguyên, lao động, hộ tịch với kiến trúc phân tán High-Availability.",
      },
      {
        title: "API Gateway & Trục Liên thông",
        detail:
          "Kết nối LGSP/NGSP quốc gia, mở cổng API tích hợp hệ thống cũ (Legacy system) an toàn.",
      },
    ],
    aside: {
      eyebrow: "Ngăn xếp Công nghệ Hiện đại",
      title: "Nền tảng sẵn sàng mở rộng",
      description:
        "Mã nguồn sạch, tự động hóa kiểm thử CI/CD và kiến trúc Containerized sẵn sàng mở rộng quy mô triệu người dùng.",
      labels: [
        "Golang",
        "Node.js",
        "Next.js / React",
        "Flutter",
        "PostgreSQL",
        "Kubernetes",
        "Kafka",
      ],
      metrics: [
        { label: "Từ ý tưởng đến Prototype chạy thử nghiệm", value: "14 Ngày" },
      ],
    },
  },
  {
    id: "ai",
    tab: "AI, Cloud & Dữ liệu lớn",
    badge: "INTELLIGENCE ARCHITECTURE",
    title: "Chuyển đổi số, Trí tuệ Nhân tạo & Điện toán Đám mây",
    description:
      "Giải phóng giá trị từ dữ liệu phân tán. Chúng tôi tích hợp mô hình ngôn ngữ lớn (LLM On-Premise), giải pháp OCR thông minh và nền tảng BI trực quan giúp lãnh đạo ra quyết định chính xác theo thời gian thực.",
    features: [
      {
        title: "Trung tâm Điều hành Thông minh (IOC & BI Dashboard)",
        detail:
          "Tổng hợp chỉ số toàn diện của bệnh viện, sở ngành trên màn hình đồ thị trực quan, cảnh báo vượt ngưỡng tự động.",
      },
      {
        title: "OCR & Số hóa Hồ sơ Lưu trữ Văn bản",
        detail:
          "Nhận diện ký tự quang học tiếng Việt độ chính xác > 98.5%, tự động bóc tách trường dữ liệu hồ sơ bệnh án cũ và công văn.",
      },
      {
        title: "Trợ lý Ảo AI Tự vận hành (Internal Enterprise AI)",
        detail:
          "Tra cứu quy trình nội bộ, hỗ trợ giải đáp thủ tục công dân 24/7 với dữ liệu được mã hóa cục bộ hoàn toàn.",
      },
    ],
    aside: {
      eyebrow: "Năng lực Lưu trữ & Xử lý Đám mây",
      title: "Hạ tầng Hybrid Cloud",
      description:
        "Hạ tầng Hybrid Cloud đạt chứng nhận an toàn dữ liệu ISO/IEC 27001 và chuẩn an toàn thông tin cấp độ 3.",
      metrics: [
        { label: "Tốc độ xử lý bóc tách OCR", value: "~ 0.8 giây / trang" },
        { label: "Tỷ lệ nén dữ liệu y tế PACS", value: "Giảm 65% dung lượng" },
      ],
    },
    cta: "Đăng ký khảo sát AI & Cloud",
  },
  {
    id: "infra",
    tab: "Hạ tầng & An toàn Thông tin",
    badge: "ENTERPRISE DEFENSE",
    title: "Hạ tầng Trung tâm Dữ liệu & An toàn Thông tin Cấp độ",
    description:
      "Cung cấp trọn gói từ thiết bị phần cứng chính hãng (Cisco, Dell, Fortinet) đến dịch vụ đánh giá lỗ hổng bảo mật Pentest, thiết lập phòng thủ chuyên sâu theo Nghị định 85/2016/NĐ-CP.",
    features: [
      {
        title: "Máy chủ & SAN Storage",
        detail:
          "Thiết kế cụm máy chủ ảo hóa VMware/Proxmox, dự phòng nóng N+1 chống gián đoạn dịch vụ.",
      },
      {
        title: "Tường lửa & Bảo mật Mạng",
        detail:
          "Triển khai giải pháp Next-Gen Firewall (NGFW), chống DDoS, phân tách mạng nội bộ và vùng DMZ.",
      },
      {
        title: "Đánh giá An toàn Cấp độ 3",
        detail:
          "Lập hồ sơ đề xuất cấp độ, kiểm thử mã độc và tối ưu hóa hệ điều hành bảo vệ dữ liệu bí mật.",
      },
      {
        title: "Sao lưu DR & Phục hồi Thảm họa",
        detail:
          "Giải pháp backup tự động đa điểm theo nguyên tắc 3-2-1, khôi phục dữ liệu tức thì khi gặp sự cố.",
      },
    ],
    aside: {
      eyebrow: "Đối tác Công nghệ Hạ tầng",
      title: "Hệ sinh thái thiết bị",
      description:
        "TEKNOVA là đơn vị tích hợp hệ thống uy tín liên kết phân phối cùng các tập đoàn công nghệ hàng đầu thế giới.",
      labels: ["DELL EMC", "CISCO", "FORTINET", "HPE"],
    },
    cta: "Yêu cầu báo giá thiết bị & Hạ tầng",
  },
];

export const serviceProcess = [
  {
    step: "01",
    title: "Khảo sát & Kiến trúc",
    detail:
      "Đánh giá thực trạng hạ tầng, tiếp nhận yêu cầu nghiệp vụ chi tiết và lập hồ sơ phân tích tính khả thi kỹ thuật.",
    output: "Bản vẽ SRS & Luồng dữ liệu",
  },
  {
    step: "02",
    title: "Thiết kế & Prototype",
    detail:
      "Xây dựng bản mẫu tương tác UI/UX, mô phỏng trải nghiệm thao tác của người dùng cuối và thống nhất kiến trúc CSDL.",
    output: "Interactive Prototype & DB Schema",
  },
  {
    step: "03",
    title: "Phát triển & Thử nghiệm",
    detail:
      "Lập trình Agile/Scrum theo từng sprint, kiểm thử tải (Load Test), rà soát bảo mật mã nguồn và tập huấn chuyển giao.",
    output: "Hệ thống chạy thử (UAT) đạt chuẩn",
  },
  {
    step: "04",
    title: "Bảo trì & Hỗ trợ 24/7",
    detail:
      "Triển khai chính thức lên môi trường Production, giám sát thông số thời gian thực và hỗ trợ ứng cứu kỹ thuật 24/7.",
    output: "SLA bảo dưỡng & Biên bản nghiệm thu",
  },
] as const;

export const serviceSla = [
  {
    criterion: "Tính liên tục hệ thống (Uptime)",
    level: "≥ 99.9% / năm",
    standard: "Tier-3 Data Center, Dual-WAN HA",
    handling: "Tự động chuyển đổi dự phòng < 30 giây",
  },
  {
    criterion: "Ứng cứu khẩn cấp (Emergency SLA)",
    level: "≤ 15 phút phản hồi",
    standard: "Trực vận hành 24/7/365 Dedicated",
    handling: "Cử kỹ sư can thiệp từ xa / tại chỗ",
  },
  {
    criterion: "Tuân thủ Pháp lý Y tế & Dữ liệu",
    level: "100% Khớp quy chuẩn",
    standard: "TT 46/2018/TT-BYT & TT 26/2025/TT-BYT",
    handling: "Cập nhật miễn phí theo thông tư mới",
  },
  {
    criterion: "Bảo mật An toàn Thông tin",
    level: "Cấp độ 3 Nhà nước",
    standard: "Nghị định 85/2016/NĐ-CP & ISO 27001",
    handling: "Mã hóa AES-256 dữ liệu tại chỗ & đường truyền",
  },
] as const;
