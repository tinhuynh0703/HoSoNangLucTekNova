ưC H U Y Ê N ĐỀ K IỂM ĐỊN H T H IẾT KẾ T RẢI N G H IỆM N GƯỜI D Ù N G & G I A O D IỆN ( U I / U X )

# BÁO CÁO THẨM ĐỊNH CHUYÊN SÂU UI/UX & ĐỀ

# XUẤT THIẾT KẾ GIAO DIỆN MỚI

### ĐỐI TƯỢNG ĐÁNH GIÁ: CỔNG THÔNG TIN DOANH NGHIỆP TEKNOVA (TEKNOVA.COM.VN)

TÓM TẮT MỤC TIÊU & GIẢI PHÁP: Báo cáo phân tích chuyên sâu các khuyết tật trải nghiệm người dùng (UX) và giao diện (UI) trên website hiện tại theo 10 Nguyên lý Heuristics của Jakob Nielsen, chuẩn tiếp cận WCAG 2.1 và bộ quy chuẩn khử AI-Slop (Hallmark 2026).

Tài liệu đồng thời cung cấp Bản vẽ Mockup giao diện mới trực quan 100% bằng CSS (xóa bỏ hoàn toàn định dạng ASCII thô sơ), quy chuẩn 8 trạng thái nút bấm trực quan, và Danh mục đề xuất chỉnh sửa chi tiết kèm mã nguồn mẫu (Tailwind/Vue) để đội ngũ phát triển áp dụng trực tiếp vào dự án.

WEBSITE THẨM ĐỊNH https://www.teknova.com.vn/ (Rendered DOM & CSS Decompilation)

ĐƠN VỊ CHỦ QUẢN Công ty Cổ phần Đổi mới Sáng tạo TEKNOVA (Đà Nẵng)

CHUYÊN TRÁCH THẨM ĐỊNH Hội đồng Chuyên gia Trải nghiệm Người dùng (UX/UI Auditor & Anti-AI-Slop Specialist)

KHUNG ĐÁNH GIÁ CHUẨN Jakob Nielsen 10 Heuristics · W3C WCAG 2.1 AA/AAA · Hallmark Anti-Slop 2026

KẾT QUẢ ĐIỂM SỐ Điểm Khả Dụng: 3.45 / 10 · Điểm Tiếp Cận (Lighthouse): 68 / 100

MÃ HỒ SƠ & THỜI ĐIỂM TKN-UIUX-2026-V2 · Tháng 10 / Năm 2026

TÀI LIỆU CHUYÊN ĐỀ THIẾT KẾ GIAO DIỆN - LƯU HÀNH NỘI BỘ VÀ PHÒNG SẢN PHẨM HỒ SƠ BẢN QUYỀN THẨM ĐỊNH SỐ HÓA

BÁO CÁO CHUYÊN SÂU UI/UX TEKNOVA · TKN-UIUX-2026-V2 MỤC 1.0: ĐÁNH GIÁ 10 NGUYÊN LÝ HEURISTICS

# 1.0 BẢNG ĐIỂM KHẢ DỤNG (JAKOB NIELSEN 10 HEURISTICS)

Khảo sát kiểm định khả dụng áp dụng khung 10 nguyên lý Heuristics kinh điển của Jakob Nielsen kết hợp công cụ đo lường tự động của Google Lighthouse trên website thực tế:

Nguyên Lý Heuristic (Jakob Nielsen) Điểm / 10 Trạng Thái Hiện Trạng Đánh Giá & Bằng Chứng Thực Tế Trên Teknova.com.vn

1. Hiển thị trạng thái hệ thống

(Visibility of status)

3. 5 / 10 KÉM Nút "Tải Profile PDF" không có trạng thái tải, nhấp vào bắn ra popup

alert; các nút điều hướng không có active state khi cuộn trang.

2. Khớp với thế giới thực (Match

real world)

4. 0 / 10 LỆCH PHA Dùng khẩu hiệu "NOW OR NEVER" và nền tối kiểu game/crypto, hoàn

toàn xa lạ với văn hóa an toàn và chuẩn mực của khối Y tế công.

3. Quyền kiểm soát của người

dùng (User control)

3. 0 / 10 BỨC BỐI Cưỡng chế nền tối (Dark mode), không cho phép đổi nền sáng;

trang dài hơn 8.100px nhưng không có nút quay lại đầu trang nổi.

4. Tính nhất quán và tiêu chuẩn

(Consistency)

3. 5 / 10 MÂU THUẪN Tiêu đề ghi 7 lĩnh vực nhưng hiển thị 6 thẻ; các nút menu là thẻ

<button> cuộn DOM thay vì liên kết <a href> chuẩn web.

5. Phòng ngừa lỗi (Error

prevention)

4. 0 / 10 YẾU Không có form thu thập dữ liệu; số điện thoại và email ở chân trang

là chữ tĩnh, không thể bấm gọi được dẫn đến nguy cơ quay số sai.

6. Nhận biết hơn là nhớ lại

(Recognition vs recall)

3. 0 / 10 NẶNG ĐẦU Toàn bộ dự án và dịch vụ là văn bản thuần tuý; không có ảnh chụp

màn hình phần mềm khiến người xem phải tự tưởng tượng giao diện.

7. Linh hoạt và hiệu quả

(Flexibility & efficiency)

3. 0 / 10 KÉM Không có bộ lọc theo nhóm đối tượng (Y tế vs Hành chính công);

khách hàng muốn tìm giải pháp EMR phải cuộn qua cả trang dài.

8. Thiết kế tối giản và thẩm mỹ

(Aesthetic design)

4. 5 / 10 RƯỜM RÀ Dính nặng AI slop: 15 hiệu ứng animation float/bounce trôi nổi không

cần thiết; mục "Hình ảnh" rỗng không có tấm ảnh nào.

9. Nhận biết và xử lý lỗi (Help

recognize errors)

3. 5 / 10 KÉM Thông báo alert lỗi ngắn cụt lủn, không cung cấp giải pháp thay thế

(ví dụ: liên hệ hotline để nhận profile qua Zalo).

10. Trợ giúp và tài liệu (Help &

docs)

2. 5 / 10 THIẾU VẮNG Không có tài liệu kỹ thuật, không có bảng thông số phân hệ EMR,

không có hướng dẫn kết nối Zalo OA hay giải đáp câu hỏi (FAQ).

ĐIỂM TRUNG BÌNH TOÀN DIỆN HEURISTICS

3. 45 / 10 MỨC BÁO ĐỘNG Trải nghiệm người dùng dưới mức tiêu chuẩn B2B Enterprise

TỬ HUYỆT 1: GIAO DIỆN NGÕ CỤT (DEAD-END UI) TỬ HUYỆT CRO

Giao diện tạo ra các thành phần "mời gọi tương tác giả": các thẻ có mũi tên nhưng bấm không phản hồi; nút "Tìm hiểu thêm" chỉ cuộn tới mục tiếp theo mà không cung cấp nội dung sâu. Đỉnh điểm là nút "Tải Profile PDF" kích hoạt lệnh alert() như bản nháp chưa hoàn thiện.

TỬ HUYỆT 2: CƯỠNG CHẾ MÀU TỐI (DARK THEME) CĂNG THẲNG THỊ GIÁC

Bác sĩ, giám đốc bệnh viện và cán bộ văn phòng làm việc 8–10 tiếng mỗi ngày trên văn bản nền trắng. Khi truy cập vào Teknova với nền đen tuyền slate-900, mắt phải điều tiết đột ngột, gây hiện tượng quầng sáng mờ khiến họ có xu hướng tắt trang web chỉ sau vài giây.

Báo Cáo Thẩm Định UI/UX Teknova · TKN-UIUX-2026-V2 Trang 2 / 8

BÁO CÁO CHUYÊN SÂU UI/UX TEKNOVA · TKN-UIUX-2026-V2 MỤC 2.0: KIỂM TOÁN TIẾP CẬN WCAG 2.1 & HALLMARK

# 2.0 KIỂM TOÁN TIẾP CẬN WCAG 2.1 & NHẬN DIỆN AI SLOP

### 2.1 Lỗi Vỡ Khung & Cắt Chữ Khi Phóng To 200% (WCAG 1.4.4 Level AA)

BẰNG CHỨNG MÃ NGUỒN: Thẻ card dịch vụ sử dụng chiều cao cố định gán cứng: class="h-[320px] overflow-hidden rounded-xl bgslate-800/50". Khi người dùng lớn tuổi (45–60 tuổi) phóng to chữ lên 150%–200%, khối chữ mô tả dài vượt quá 320px và bị thuộc tính overflow-hidden cắt cụt mất 3–4 dòng mô tả cuối. Thanh Header Fixed (h-16) chiếm tới 38% chiều cao màn hình.

### 2.2 Thử Nghiệm Tỷ Lệ Tương Phản Màu Sắc (WCAG 1.4.3 Contrast)

Thành Phần Giao Diện Màu Chữ / Màu Nền Tỷ Lệ Đo Được Chuẩn Tối Thiểu Kết Luận Kiểm Định

Văn bản mô tả phụ (Mục Dự án) #64748b trên #0f172a 3.82 : 1 4.50 : 1 (AA) TRƯỢT CHUẨN Gây nhòe chữ

khi đọc nhanh.

Icon Lucide trang trí phụ #475569 trên #1e293b 2.39 : 1 3.00 : 1 (Non-text) TRƯỢT CHUẨN Gần như vô hình

trên màn hình thường.

Thẻ nhãn thông số kỹ thuật (Tags) #94a3b8 trên #1e293b 4.12 : 1 4.50 : 1 (AA) CHƯA ĐẠT Khó đọc dưới ánh

sáng đèn tuýp.

Tiêu đề chính (Heading H1/H2) #ffffff trên #0f172a 15.4 : 1 4.50 : 1 (AA) ĐẠT CHUẨN Đảm bảo độ rõ nét

cơ bản.

### 2.3 Đối Chiếu 6 Anti-Patterns "AI Slop" Theo Chuẩn Hallmark 2026

Hallmark Anti-Pattern Biểu Hiện Trên Website Teknova Lý Do Bị Coi Là "AI Slop" Giải Pháp Khử Bỏ Triệt Để

The Gradient Hero bg-gradient-to-br from-slate-800 to-blue-900 lồng lưới chấm bg-gridpattern.

Khuôn mẫu mặc định của 95% prompt AI tạo trang tech trong giai đoạn 2023–2025.

Chuyển sang nền phẳng sáng màu (Solid Warm Canvas) có cấu trúc khối nội dung chặt chẽ.

Floating / Bounce Icons Icon Lucide trôi nổi (animate-float), nút tải nảy tưng tưng (animatebounce).

Chuyển động vô nghĩa, đánh lừa thị giác để che đậy sự thiếu hụt nội dung sản phẩm thật.

Bỏ toàn bộ keyframe rung lắc; chỉ dùng micro-interaction tinh tế (150ms ease-out) khi hover.

Empty "Hình Ảnh" Box Mục có tên "Hình ảnh" nhưng bên trong chỉ là các khối màu gradient lồng icon SVG generic.

AI sinh ra khung mockup và nhà phát triển không có ảnh thật để thay thế.

Xóa bỏ carousel trừu tượng; thay bằng Bento Grid chứa ảnh chụp màn hình phần mềm EMR thật.

Invented Stat Bar Dải số liệu: 15+ năm, 50+ dự án, 20+ chuyên gia, 100% hài lòng xếp thành 4 ô đều nhau.

Là cách AI tự "bịa" ra chỉ số theo khuôn mẫu để lấp đầy khoảng trống dưới Hero.

Thay bằng thanh đối tác có kiểm chứng: Logo Bệnh viện Phổi, TTYT Liên Chiểu.

Card-in-Card Syndrome Hộp chứa bo góc rounded-xl lồng trong một hộp lớn khác với viền border-slate-700.

AI lạm dụng chia hộp vì dễ viết CSS Grid mà không cần suy nghĩ về phân cấp thị giác.

Giảm bớt tầng lớp viền hộp; sử dụng khoảng trắng (negative space) để phân tầng.

Monolithic Single-Page Dồn toàn bộ 10 phần tử khác nhau vào một trang cuộn dài 8.177px chạy một mạch.

AI thường nhả toàn bộ trang trong 1 file code duy nhất để tiết kiệm số lần prompt.

Tách trang thành cổng thông tin đa trang (Multi-page) với URL riêng cho từng giải pháp.

Báo Cáo Thẩm Định UI/UX Teknova · TKN-UIUX-2026-V2 Trang 3 / 8

BÁO CÁO CHUYÊN SÂU UI/UX TEKNOVA · TKN-UIUX-2026-V2 MỤC 3.0: DESIGN SYSTEM & 8 TRẠNG THÁI NÚT BẤM

# 3.0 BẢN ĐẶC TẢ HỆ THỐNG THIẾT KẾ MỚI (DESIGN SYSTEM)

### 3.1 Bảng Màu Nhận Diện Chuẩn Mực (Light Enterprise Medical Palette)

Primary Navy #0F172A Chữ chính, tiêu đề H1/H2 (Tương phản 14.5:1 - AAA)

Medical Cyan #0284C7 Nút CTA chính, liên kết, điểm nhấn y tế

Enterprise Blue #1D4ED8 Trạng thái hover, đường viền phân cấp

Warm Canvas #F8FAFC Màu nền toàn trang, dịu mắt phòng khám

Verified Green #16A34A Chứng nhận chuẩn BYT, biểu tượng bảo mật

### 3.2 Quy Chuẩn 8 Trạng Thái Tương Tác Component (Rendered CSS Buttons)

Khắc phục triệt để lỗi "Dead-End UI", mọi nút bấm và thẻ tương tác trên website mới bắt buộc phải lập trình đầy đủ 8 trạng thái tương tác độc lập theo tiêu chuẩn công thái học:

1. DEFAULT STATE

Đăng Ký Xem Demo

Nền xanh #0284C7, chữ trắng, bo góc 4px

2. HOVER STATE

Đăng Ký Xem Demo

Nền sẫm #0369A1, bóng mờ shadow-md

3. FOCUS-VISIBLE

Đăng Ký Xem Demo

Viền đôi 2.5px rõ ràng cho phím Tab

4. ACTIVE (CLICK)

Lún nhẹ 1px translateY, màu #075985

5. DISABLED STATE

Mờ 60% opacity, con trỏ not-allowed

6. LOADING STATE

Khóa nhấp đúp, spinner xoay nhẹ

7. ERROR STATE

⚠ Vui lòng thử lại

Viền đỏ #DC2626, thông báo lỗi

8. SUCCESS STATE

✓ Đã gửi thành công

Nền xanh lá #16A34A, xác nhận 3 giây

### 3.3 Hệ Thống Phông Chữ & Phân Cấp Kiểu Chữ (Typography Scale)

Cấp Bậc (Role) Phông Chữ & Độ Đậm Kích Cỡ / Dòng Mục Đích Sử Dụng Trong Giao Diện

Display / Hero Be Vietnam Pro Bold (700) 32px / 1.25 Tiêu đề màn hình đầu trang, thông điệp định vị cốt lõi của Teknova.

Heading H1 Be Vietnam Pro SemiBold (600) 24px / 1.30 Tiêu đề các mục lớn (Giải pháp Y tế, Hồ sơ Dự án, Đội ngũ chuyên gia).

Heading H2 / Card Be Vietnam Pro SemiBold (600) 16px / 1.35 Tiêu đề các thẻ giải pháp (Bệnh án điện tử EMR, Đơn thuốc điện tử TT26).

Body Text (Chính) Be Vietnam Pro Regular (400) 13.5px / 1.60 Nội dung bài viết, thuyết minh tính năng, văn bản hành chính.

Caption / Tags Be Vietnam Pro Medium (500) 11.5px / 1.40 Thẻ nhãn thông số kỹ thuật (Ký số TSA, Chuẩn QĐ 130, HL7/FHIR).

Báo Cáo Thẩm Định UI/UX Teknova · TKN-UIUX-2026-V2 Trang 4 / 8

Đăng Ký Xem Demo

Đăng Ký Xem Demo ⌛ Đang gửi yêu cầu...

BÁO CÁO CHUYÊN SÂU UI/UX TEKNOVA · TKN-UIUX-2026-V2 MỤC 4.0: MOCKUP GIAO DIỆN TRANG CHỦ MỚI

# 4.0 BẢN VẼ MOCKUP GIAO DIỆN TRANG CHỦ MỚI (VISUAL UI MOCKUP)

Dưới đây là bản mô phỏng trực quan giao diện trang chủ mới được xây dựng hoàn toàn bằng HTML & CSS UI Components, minh họa

### chính xác bố cục chuẩn B2B GovTech/MedTech (Light theme, thanh đối tác thực tế, dashboard phần mềm EMR và Bento Grid):

https://www.teknova.com.vn/

### T TEKNOVA Trang Chủ Giải Pháp Y Tế ▾ Hành Chính Công Dự Án Tiêu Biểu Đội Ngũ Đặt Lịch Demo EMR

GIẢI PHÁP CHUYỂN ĐỔI SỐ Y TẾ TIÊN PHONG TẠI ĐÀ NẴNG

# BỆNH ÁN ĐIỆN TỬ (EMR) & NỀN TẢNG Y TẾ SỐ HỢP CHUẨN BỘ Y TẾ

Đồng hành cùng Bệnh viện Phổi Đà Nẵng, TTYT Liên Chiểu và các cơ sở y tế triển khai bệnh án không giấy, tích hợp Chữ ký số tập trung Cloud CA có gắn Dấu thời gian (TSA) sẵn sàng liên thông giám định BHYT.

Tải Hồ Sơ Năng Lực (PDF) Yêu Cầu Khảo Sát 1-1

TEKNOVA EMR

- Bệnh án nội trú

- Đơn thuốc điện tử

- Ký số & Tem TSA

- Giám định BHYT

BẢNG ĐIỀU KHIỂN BỆNH VIỆN - NĂM 2026 ● ĐÃ KÝ SỐ HỢP LỆ

Hồ sơ EMR đã ký

### 14,820

Đơn thuốc TT26

### 98.6%

Liên thông BHYT

### Hợp chuẩn QĐ

### 130

Danh sách bệnh nhân nội trú gần nhất (Mã hóa bảo mật): #BN-9281 · Khoa Hô hấp · Ký số TSA: 09:15 09/10/2026 · Trạng thái: Hợp lệ BHYT

ĐƯỢC TIN CẬY TRIỂN KHAI TẠI CÁC ĐƠN VỊ Y TẾ TRỌNG ĐIỂM:

🏥 BỆNH VIỆN PHỔI ĐÀ NẴNG 🏥 TTYT LIÊN CHIỂU 🏥 TTYT NGŨ HÀNH SƠN 🏛 CHI CỤC DÂN SỐ TP. ĐÀ NẴNG

01 · Y TẾ SỐ

### Bệnh Án Điện Tử EMR

Tích hợp Chữ ký số Cloud CA & dấu thời gian TSA, sẵn sàng bỏ bệnh án giấy.

02 · ĐƠN THUỐC ĐIỆN TỬ

### Thông Tư 26/2025/TT-BYT

Đồng bộ dữ liệu hai chiều Cổng Đơn thuốc Quốc gia, cấp mã đơn thuốc tự động.

03 · ZALO OA Y TẾ

### Tích Hợp HIS Bệnh Viện

Tiếp nhận người bệnh, tra cứu lịch khám bảo mật 2 lớp chống lộ dữ liệu nhạy cảm.

Báo Cáo Thẩm Định UI/UX Teknova · TKN-UIUX-2026-V2 Trang 5 / 8

BÁO CÁO CHUYÊN SÂU UI/UX TEKNOVA · TKN-UIUX-2026-V2 MỤC 5.1: ĐỀ XUẤT SỬA ĐỔI HERO & BENTO GRID

# 5.1 ĐỀ XUẤT CHỈNH SỬA CHI TIẾT (HERO SECTION & DỊCH VỤ)

Dưới đây là bảng đối chiếu chi tiết Trước (Hiện tại) vs Sau (Đề xuất) kèm mã nguồn kỹ thuật cụ thể để lập trình viên có thể thay thế trực tiếp vào mã nguồn Vue/Tailwind:

### 1. Khắc Phục Khối Hero Section (Chuyển Sang Light Theme)

Hiện Trạng Cần Loại Bỏ (Mã Nguồn Cũ) Đề Xuất Thay Thế Mới (Chuẩn B2B GovTech)

Nền tối bg-slate-900, gradient tím/xanh đen.

Lưới chấm mờ bg-grid-pattern opacity-10.

Slogan thể thao mạo hiểm "NOW OR NEVER".

Nút "Tải Profile PDF" gọi hàm JS alert lỗi.

Nền phẳng sáng màu bg-slate-50 / bg-white.

Huy hiệu chứng thực: "Giải pháp y tế số tiên phong tại Đà Nẵng".

Thông điệp giá trị: "Bệnh án điện tử EMR hợp chuẩn Bộ Y tế".

Nút tải tệp PDF thật 8 trang lưu tĩnh trên máy chủ.

<!-- MÃ NGUỒN TAILWIND ĐỀ XUẤT THAY THẾ CHO HERO SECTION --> <section class="bg-slate-50 border-b border-slate-200 pt-20 pb-16 px-4 sm:px-6 lg:px-8"> <div class="max-w-6xl mx-auto text-center"> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bgsky-100 text-sky-800 mb-4"> HỢP CHUẨN THÔNG TƯ 46/2018 & THÔNG TƯ 26/2025 BỘ Y TẾ </span> <h1 class="text-3xl sm:text-5xl font-extrabold textslate-900 tracking-tight leading-tight mb-4"> Bệnh Án Điện Tử (EMR) <span class="Chuyển Đổi Số Y Tế</span> Toàn Diện </h1> <p class="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"> Đồng hành cùng Bệnh viện Phổi Đà Nẵng và các cơ sở y tế triển khai bệnh án không giấy, tích hợp Ký số Cloud CA & dấu thời gian TSA sẵn sàng liên thông giám định BHYT. </p> <div class="flex flex-wrap justify-center gap-4"> <a href="/docs/Teknova_Profile_2026.pdf" download class="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-sm transition"> Tải Profile Năng Lực (PDF) </a> <a href="#demo-form" class="px-6 py-3 rounded-lg bg-white hover:bg-slate-100 textslate-800 border border-slate-300 font-semibold transition"> Đăng Ký Khảo Sát 1-1 </a> </div> </div> </section>

### 2. Khắc Phục Danh Mục Dịch Vụ (Chuyển Thành Bento Grid)

Hiện Trạng Lỗi Đề Xuất Khắc Phục

Tiêu đề ghi "7 lĩnh vực" nhưng hiển thị 6 thẻ.

Chiều cao cố định h-[320px] zoom 200% bị cắt chữ.

Chứa icon xoay rung lắc animate-float.

Sửa tiêu đề đồng nhất với nội dung.

Dùng min-h-[280px] linh hoạt không bao giờ cắt chữ.

Bỏ animation; thêm thẻ tag thông số kỹ thuật (Ký số, QĐ 130).

<!-- MÃ NGUỒN BENTO GRID CO DÃN CHUẨN WCAG 2.1 --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="p-6 roundedxl bg-white border border-slate-200 hover:border-sky-500 shadow-sm transition flex flex-col justify-between"> <div> <div class="text-xs fontbold text-sky-600 uppercase tracking-wider mb-2">Giải Pháp Trọng Điểm</div> <h3 class="text-lg font-bold text-slate-900 mb-3">Bệnh Án Điện Tử (EMR)</h3> <p class="text-sm text-slate-600 leading-relaxed mb-4"> Giải pháp thuê phần mềm trọn gói (OPEX) tích hợp Ký số Cloud CA và Dấu thời gian TSA, đảm bảo tính pháp lý trước BHXH. </p> </div> <a href="/giai-phap/benh-an-dien-tu-emr" class="text-sm font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1"> Xem chi tiết phân hệ → </a> </div> </div>

Báo Cáo Thẩm Định UI/UX Teknova · TKN-UIUX-2026-V2 Trang 6 / 8

BÁO CÁO CHUYÊN SÂU UI/UX TEKNOVA · TKN-UIUX-2026-V2 MỤC 5.2: ĐỀ XUẤT SỬA ĐỔI FORM, WCAG & FOOTER

# 5.2 ĐỀ XUẤT CHỈNH SỬA CHI TIẾT (FORM CHUYỂN ĐỔI, WCAG & FOOTER)

### 3. Khắc Phục Điểm Chết CRO: Bổ Sung Form Demo Một Chạm

Loại bỏ hoàn toàn thông báo alert() gây mất khách hàng; thay thế bằng biểu mẫu thu thập thông tin tối giản 2 trường thông tin (Progressive Lead Form) kết nối trực tiếp về Zalo Ban Giám đốc:

<!-- FORM ĐĂNG KÝ DEMO TỰ ĐỘNG CHUYỂN TIẾP THÔNG BÁO VỀ ZALO/EMAIL --> <section id="demo-form" class="bg-sky-50 border-y border-sky-100 py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-2xl font-bold text-slate-900 mb-2">Đăng Ký Khảo Sát Hạ Tầng & Xem Demo Phần Mềm</h2> <p class="text-sm text-slate-600 mb-6">Chuyên viên giải pháp Teknova sẽ liên hệ tư vấn trực tiếp trong vòng 15 phút. </p> <form @submit.prevent="submitLead" class="flex flex-col sm:flex-row gap-3 justify-center"> <input type="text" v-model="form.hospital" placeholder="Tên đơn vị (BV / TTYT / Phường)" required class="px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-sky-500 flex-1" /> <input type="tel" v-model="form.phone" placeholder="Số điện thoại / Zalo cán bộ" required class="px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-sky-500 flex-1" /> <button type="submit" class="px-6 py-3 bg-sky- 600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-sm transition"> Gửi Yêu Cầu (3 Giây) </button> </form> </div> </section>

### 4. Khắc Phục Lỗi Tiếp Cận WCAG 2.1 (Focus Visible & Skip Link)

/_ FILE: src/assets/main.css - BỔ SUNG CHUẨN TIẾP CẬN BÀN PHÍM VÀ ZOOM CHỮ _/ :focus-visible { outline: 2.5px solid #0284c7 !important; outline-offset: 2px !important; } /_ Nút Skip Link ẩn đầu trang cho người dùng phím Tab _/ .skip-link { position: absolute; top: -40px; left: 16px; background: #0284c7; color: #ffffff; padding: 8px 16px; z-index: 9999; border-radius: 4px; font-weight: 600; transition: top 0.2s easein-out; } .skip-link:focus { top: 16px; }

### 5. Khắc Phục Chân Trang: Liên Kết Điện Thoại & Chính Sách Bảo Mật

Hiện Trạng Chân Trang (Footer Cũ) Đề Xuất Chân Trang Mới Hợp Chuẩn

Email hiển thị: Teknova0925@gmail.com.

Số điện thoại là chữ tĩnh, không bấm gọi được.

Không có Chính sách bảo mật Nghị định 13/2023.

Email tên miền: contact@teknova.com.vn.

Gắn thẻ <a href="tel:0935722579"> bấm gọi ngay.

Có liên kết Chính sách bảo mật & Điều khoản dịch vụ.

<!-- MÃ NGUỒN CHÂN TRANG FOOTER CHUẨN B2B DOANH NGHIỆP --> <footer class="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 text-sm"> <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8 mb-6"> <div> <div class="text-white font-bold text-base mb-1">CÔNG TY CỔ PHẦN ĐỔI MỚI SÁNG TẠO TEKNOVA</div> <div class="text-xs text-slate-400">K131/18 Lý Thái Tổ, Q. Thanh Khê, TP. Đà Nẵng</div> </div> <div class="flex gap-6 text-sm"> <a href="tel:0935722579" class="text-sky-400 hover:underline fontsemibold">📞 0935 722 579</a> <a href="mailto:contact@teknova.com.vn" class="text-sky-400 hover:underline">✉ contact@teknova.com.vn</a> </div> </div> <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between text-xs text-slate-500 gap-2"> <span>© 2026 TEKNOVA INNOVATION JSC. Bảo lưu mọi quyền.</span> <div class="flex gap-4"> <a href="/chinh-sach-bao-mat" class="hover:text-slate-300">Chính Sách Bảo Mật (Nghị Định 13)</a> <a href="/dieu-khoan" class="hover:text-slate-300">Điều Khoản Dịch Vụ</a> </div> </div> </footer>

Báo Cáo Thẩm Định UI/UX Teknova · TKN-UIUX-2026-V2 Trang 7 / 8

BÁO CÁO CHUYÊN SÂU UI/UX TEKNOVA · TKN-UIUX-2026-V2 MỤC 6.0: SƠ ĐỒ ĐA TRANG & TIÊU CHUẨN NGHIỆM THU

## 6.0 SƠ ĐỒ KIẾN TRÚC ĐA TRANG & TIÊU CHUẨN NGHIỆM THU

### 6.1 Sơ Đồ Cấu Trúc Các Phân Hệ Trang Con (Sitemap Hierarchy)

Đường Dẫn URL Đề Xuất Nội Dung & Thành Phần Trực Quan Mục Tiêu Nghiệp Vụ & Chuyển Đổi B2B

/ (Trang Chủ) Định vị thương hiệu, Dải logo đối tác, Bento Grid 3 giải pháp, Form demo 1 chạm. Xây dựng niềm tin tức thì trong 5 giây đầu tiên với Giám đốc Bệnh viện.

/giai-phap/benh-an-dien-tu-emr Bảng phân hệ EMR, Quy chuẩn Ký số Cloud CA & Tem TSA, Đề cương mời thầu mẫu. Cung cấp thông số kỹ thuật cho Hội đồng Đấu thầu lập đề cương mua sắm.

/giai-phap/don-thuoc-dien-tu Quy trình kết nối Cổng Đơn thuốc Quốc gia theo Thông tư 26/2025/TT-BYT. Thu hút các phòng khám và TTYT đang bị thúc ép tiến độ liên thông đơn thuốc.

/mo-hinh-hop-tac/thue-dich-vu Giải thích gói thuê OPEX theo Quyết định 80/2014 & Nghị định 73/2019; Bảng giá khung. Giúp bệnh viện giải ngân ngay từ nguồn thu thường xuyên mà không cần chờ vốn đầu tư.

/du-an/benh-vien-phoi-da-nang Case study chi tiết: Bài toán, kết quả triển khai EMR, ảnh nghiệm thu thực tế. Cung cấp bằng chứng xã hội (Social Proof) xác thực năng lực triển khai thực tế.

/lien-he Bản đồ trụ sở K131/18 Lý Thái Tổ, Hotline gọi ngay, Chat Zalo OA 24/7. Tiếp nhận ngay lập tức các yêu cầu báo giá và khảo sát hiện trường tại Đà Nẵng.

### 6.2 Tiêu Chuẩn Nghiệm Thu Đóng Gói Thiết Kế (UI/UX Acceptance Rubric)

Google Lighthouse Accessibility: Điểm số đạt tối thiểu 95 / 100 trên cả phiên bản Desktop và Mobile.

Độ tương phản màu sắc: 100% văn bản đạt tỷ lệ tương phản tối thiểu 7.0 : 1 (đáp ứng tiêu chuẩn cao nhất WCAG Level AAA). Hoàn thiện 100% Affordance: Không còn bất kỳ nút bấm, thẻ card hay liên kết nào nhấp vào mà không có phản hồi hoặc kích hoạt lệnh alert lỗi. Tương thích đa kích thước: Hiển thị hoàn hảo, không cắt chữ khi thu phóng văn bản lên 200%; menu fixed không che khuất nội dung.

Chuyển đổi khách hàng: Form đăng ký khảo sát gửi thông báo tự động về điện thoại Ban Giám đốc trong vòng 5 giây.

KẾT LUẬN TỔNG THỂ TỪ CHUYÊN GIA UI/UX: Một website B2B chuyên ngành Y tế thành công không cần hiệu ứng phô trương, mà cần sự chuẩn mực, độ tin cậy và khả năng cung cấp thông tin tức thời. Việc áp dụng trọn vẹn bộ đề xuất chỉnh sửa trên sẽ đưa diện mạo số của Teknova xứng tầm với năng lực thực chiến, giúp công ty tự tin chinh phục các gói thầu số hóa y tế lớn trong giai đoạn 2026–2030.

Báo Cáo Thẩm Định UI/UX Teknova · TKN-UIUX-2026-V2 Trang 8 / 8
