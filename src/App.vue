<script setup>
import { ref, onMounted, onUnmounted, computed, reactive } from 'vue'
import logoImage from '@/assets/logo.png'
import {
  Menu,
  X,
  Download,
  Building2,
  Users,
  Award,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Shield,
  FileText,
  CheckCircle2,
  ArrowRight,
  Brain,
  Globe,
  Monitor,
  Cloud,
  ShoppingCart,
  Wrench,
  Handshake,
  Eye,
  Cog,
  Target,
  ChevronLeft,
  ChevronRight,
  Crown,
  BarChart3,
  Megaphone,
  Folder,
  Lightbulb,
  Calculator,
  Headphones,
  FileCheck,
  Database,
  Webhook,
  QrCode,
} from 'lucide-vue-next'

// Navigation state
const mobileMenuOpen = ref(false)

// Scroll to top button state
const showScrollTop = ref(false)

// Image Carousel state
const currentImageIndex = ref(0)
const carouselImages = ref([
  { id: 1, title: 'Lĩnh vực hoạt động', description: '7 lĩnh vực chuyên môn của TEKNOVA' },
  { id: 2, title: 'Tầm nhìn - Sứ mệnh', description: 'Giá trị cốt lõi và định hướng phát triển' },
  { id: 3, title: 'Cơ cấu tổ chức', description: 'Hệ thống quản lý chuyên nghiệp' },
  { id: 4, title: 'Dự án tiêu biểu', description: 'Các công trình đã hoàn thành' },
])

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % carouselImages.value.length
}

const prevImage = () => {
  currentImageIndex.value =
    currentImageIndex.value === 0 ? carouselImages.value.length - 1 : currentImageIndex.value - 1
}

// Personnel Carousel state
const currentPersonnelIndex = ref(0)

// Calculate number of slides (3 items per slide on desktop, responsive via CSS)
const totalPersonnelSlides = computed(() => {
  return Math.ceil(personnel.value.length / 3)
})

const nextPersonnel = () => {
  currentPersonnelIndex.value = (currentPersonnelIndex.value + 1) % totalPersonnelSlides.value
}

const prevPersonnel = () => {
  currentPersonnelIndex.value =
    currentPersonnelIndex.value === 0
      ? totalPersonnelSlides.value - 1
      : currentPersonnelIndex.value - 1
}

// Smooth scroll function
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

// Stats data with numeric values for animation
const stats = reactive([
  {
    value: 15,
    suffix: '+',
    label: 'Năm kinh nghiệm',
    icon: Award,
    animated: false,
    displayValue: 0,
  },
  {
    value: 50,
    suffix: '+',
    label: 'Dự án thành công',
    icon: Briefcase,
    animated: false,
    displayValue: 0,
  },
  { value: 20, suffix: '+', label: 'Chuyên gia', icon: Users, animated: false, displayValue: 0 },
  {
    value: 100,
    suffix: '%',
    label: 'Hài lòng khách hàng',
    icon: CheckCircle2,
    animated: false,
    displayValue: 0,
  },
])

// Services data - 7 lĩnh vực hoạt động
const services = [
  {
    title: 'Tư vấn giải pháp Công nghệ Thông tin (CNTT)',
    icon: Brain,
    color: 'blue',
    description: 'Tư vấn và đề xuất các giải pháp CNTT phù hợp với nhu cầu doanh nghiệp',
  },
  {
    title: 'Cung cấp và triển khai các dịch vụ CNTT',
    icon: Globe,
    color: 'blue',
    description: 'Triển khai và vận hành các dịch vụ CNTT chuyên nghiệp, hiệu quả',
  },
  {
    title: 'Phát triển, lập trình phần mềm',
    icon: Monitor,
    color: 'blue',
    description: 'Phát triển phần mềm tùy chỉnh, ứng dụng web và mobile theo yêu cầu',
  },
  {
    title: 'Giải pháp Chuyển đổi số – AI – Big Data – Cloud',
    icon: Cloud,
    color: 'blue',
    description: 'Chuyển đổi số toàn diện với AI, Big Data và điện toán đám mây',
  },
  {
    title: 'Phân phối và kinh doanh sản phẩm, thiết bị công nghệ',
    icon: ShoppingCart,
    color: 'green',
    description: 'Phân phối các sản phẩm và thiết bị công nghệ chính hãng, chất lượng',
  },
  {
    title: 'Đầu tư, hợp tác đầu tư',
    icon: Handshake,
    color: 'purple',
    description: 'Đầu tư và hợp tác đầu tư trong các lĩnh vực phù hợp với quy định pháp luật',
  },
]

// Vision, Mission, Philosophy data
const companyValues = {
  vision: {
    icon: Eye,
    title: 'Tầm nhìn',
    content:
      'Teknova hướng tới trở thành doanh nghiệp công nghệ uy tín, minh bạch và phát triển bền vững, tiên phong tạo ra các sản phẩm công nghệ nền tảng, hữu ích, góp phần xây dựng xã hội số hiện đại, văn minh và lành mạnh.',
    motto: 'Công nghệ nền tảng, giá trị bền lâu.',
  },
  mission: {
    icon: Target,
    title: 'Sứ mệnh',
    content: [
      'Cung cấp các giải pháp công nghệ và dịch vụ kỹ thuật chất lượng cao, lấy hiệu quả thực tế và giá trị sử dụng làm thước đo.',
      'Đồng hành cùng khách hàng trong quá trình xây dựng, triển khai và vận hành các hệ thống CNTT, chuyển đổi số và hạ tầng kỹ thuật.',
      'Phát triển các sản phẩm công nghệ nền tảng, dễ tiếp cận, phục vụ con người và xã hội theo định hướng bền vững.',
      'Xây dựng Teknova trở thành đối tác công nghệ đáng tin cậy, lâu dài của khách hàng và các bên liên quan.',
    ],
  },
  philosophy: {
    icon: Shield,
    title: 'Triết lý kinh doanh',
    mainTitle: 'Lấy chữ TÍN làm nền tảng',
    description:
      'Teknova xác định TÍN là giá trị cốt lõi, xuyên suốt trong mọi hoạt động sản xuất – kinh doanh và quản trị doanh nghiệp.',
    principles: [
      {
        title: 'Thực người',
        content:
          'Minh bạch trong quản trị và nhân sự; trung thực về năng lực; tôn trọng con người và đề cao đạo đức nghề nghiệp.',
      },
      {
        title: 'Thực việc',
        content:
          'Làm đúng - làm đủ - làm đến cùng; cam kết trong khả năng và chịu trách nhiệm đến kết quả cuối cùng.',
      },
      {
        title: 'Thực giá trị',
        content:
          'Mỗi sản phẩm, mỗi dịch vụ Teknova cung cấp đều phải đáng tin cậy, hữu ích, mang lại giá trị bền lâu cho khách hàng và xã hội.',
      },
    ],
    motto: 'Uy tín không đến từ lời hứa, mà được chứng minh bằng kết quả và thời gian.',
  },
}

// Organization Structure data
const organizationStructure = {
  board: {
    name: 'HĐQT',
    icon: Crown,
    level: 1,
  },
  director: {
    name: 'GIÁM ĐỐC',
    icon: Building2,
    level: 2,
    reportsTo: 'HĐQT',
  },
  departments: [
    {
      name: 'PHÒNG KỸ THUẬT',
      icon: Cog,
      level: 3,
      units: [
        { name: 'BP. R&D', icon: Lightbulb },
        { name: 'BP. TRIỂN KHAI', icon: Wrench },
      ],
    },
    {
      name: 'PHÒNG KINH DOANH',
      icon: BarChart3,
      level: 3,
      units: [
        { name: 'BP. KD DỰ ÁN', icon: Building2 },
        { name: 'BP. KD SẢN PHẨM', icon: FileText },
      ],
    },
    {
      name: 'PHÒNG MARKETING',
      icon: Megaphone,
      level: 3,
      units: [
        { name: 'BP. CSKH', icon: Headphones },
        { name: 'BP. MARKETING', icon: Megaphone },
      ],
    },
    {
      name: 'PHÒNG TỔNG HỢP',
      icon: Folder,
      level: 3,
      units: [
        { name: 'BP. KẾ TOÁN', icon: Calculator },
        { name: 'BP. HC/NS', icon: Users },
      ],
    },
  ],
}

// Personnel data - 11 chuyên gia
const personnel = ref([
  {
    name: 'Trần Bình Sơn',
    position: 'MBA, Electronics Engineer',
    experience: 'Trên 20 năm kinh nghiệm',
    expertise: 'Viễn thông - CNTT và Tư vấn chuyên ngành',
  },
  {
    name: 'Lê Trọng Nhân',
    position: 'Tiến sĩ Xử lý Tín hiệu và Viễn thông',
    experience: 'Trên 15 năm kinh nghiệm',
    expertise: 'Ngành CNTT',
  },
  {
    name: 'Võ Quang Hòa',
    position: 'Kỹ sư Công nghệ Thông tin',
    experience: '13 năm kinh nghiệm',
    expertise: 'Ngành CNTT',
  },
  {
    name: 'Nguyễn Hoài Nhân',
    position: 'Kỹ sư Công nghệ Thông tin',
    experience: '12 năm kinh nghiệm',
    expertise: 'Ngành CNTT',
  },
  {
    name: 'Lê Hoàng Hải',
    position: 'Thạc sĩ Khoa học Máy tính',
    experience: 'Trên 10 năm kinh nghiệm',
    expertise: 'Ngành CNTT',
  },
  {
    name: 'Trần Minh Chiến',
    position: 'Kỹ sư Công nghệ Thông tin',
    experience: '02 năm kinh nghiệm',
    expertise: 'Ngành CNTT và Tư vấn chuyên ngành',
  },
  {
    name: 'Lê Thiện Nhân',
    position: 'Kỹ sư Công nghệ Kỹ thuật Máy tính',
    experience: '01 năm kinh nghiệm',
    expertise: 'Ngành CNTT',
  },
  {
    name: 'Dương Mạnh Quân',
    position: 'Cử nhân Công nghệ Thông tin',
    experience: '01 năm kinh nghiệm',
    expertise: 'Ngành CNTT',
  },
  {
    name: 'Nguyễn Thị Dung',
    position: 'Kế toán',
    experience: 'Trên 5 năm kinh nghiệm',
    expertise: 'Kế toán',
  },
  {
    name: 'Nguyễn Thị Thúy Vân',
    position: 'Nhân sự',
    experience: 'Trên 10 năm kinh nghiệm',
    expertise: 'Quản lý nhân sự',
  },
])

// Projects/Partners data - 6 dự án tiêu biểu
const projects = [
  {
    name: 'Cập nhật mẫu đơn thuốc điện tử',
    client: 'Trung tâm Y tế Khu vực Liên Chiểu',
    type: 'Phần mềm',
    category: 'Lập trình, triển khai phần mềm',
    icon: FileCheck,
    description: 'Cập nhật mẫu đơn thuốc điện tử theo Thông tư số 26/2025/TT-BYT',
    location: '525 Tôn Đức Thắng, Phường Hòa Khánh, Đà Nẵng',
    color: 'blue',
  },
  {
    name: 'Phần mềm quảng bá Zalo OA',
    client: 'Bệnh Viện Phổi Đà Nẵng',
    type: 'Phần mềm',
    category: 'Lập trình, triển khai phần mềm',
    icon: Webhook,
    description:
      'Cung cấp Phần mềm quảng bá miễn phí thông tin Bệnh viện Phổi Đà Nẵng qua Zalo OA (tích hợp với phần mềm HIS)',
    location: 'Tổ 53 Phước Lý, Hòa Minh, Liên Chiểu, Đà Nẵng',
    color: 'blue',
  },
  {
    name: 'Bệnh án điện tử (EMR)',
    client: 'Bệnh Viện Phổi Đà Nẵng',
    type: 'Phần mềm',
    category: 'Lập trình, triển khai phần mềm',
    icon: Database,
    description: 'Cung cấp dịch vụ thuê phần mềm Bệnh án điện tử (EMR)',
    location: 'Tổ 53 Phước Lý, Hòa Minh, Liên Chiểu, Đà Nẵng',
    color: 'blue',
  },
  {
    name: 'Bệnh án điện tử (EMR)',
    client: 'Trung tâm Y tế Khu vực Ngũ Hành Sơn',
    type: 'Phần mềm',
    category: 'Lập trình, triển khai phần mềm',
    icon: Database,
    description: 'Thuê phần mềm Bệnh án điện tử (EMR) năm 2025',
    location: 'Phường Ngũ Hành Sơn, Thành phố Đà Nẵng',
    color: 'blue',
  },
  {
    name: 'Web tổng hợp và thống kê dữ liệu',
    client: 'Chi cục Dân số Thành phố Đà Nẵng',
    type: 'Phần mềm',
    category: 'Lập trình, triển khai phần mềm',
    icon: Monitor,
    description: 'Xây dựng Web tổng hợp và thống kê dữ liệu báo cáo của tuyến cơ sở',
    location: '118 Lê Đình Lý, phường Thanh Khê, Thành phố Đà Nẵng',
    color: 'blue',
  },
  {
    name: 'Hệ thống thanh toán không tiền mặt ở một số bệnh viện',
    client: 'Bệnh viện',
    type: 'Phần mềm',
    category: 'Lập trình, triển khai phần mềm',
    icon: QrCode,
    description: 'Xây dựng hệ thống thanh toán không tiền mặt tại một số bệnh viện',
    location: 'Đà Nẵng',
    color: 'blue',
  },
  {
    name: 'Chuyển đổi số Phường Ngũ Hành Sơn',
    client: 'Phường Ngũ Hành Sơn',
    type: 'Phần mềm',
    category: 'Lập trình, triển khai phần mềm',
    icon: Cloud,
    description: 'Triển khai chuyển đổi số toàn diện tại Phường Ngũ Hành Sơn, Đà Nẵng',
    location: 'Phường Ngũ Hành Sơn, Thành phố Đà Nẵng',
    color: 'blue',
  },
]

// Download PDF handler
const downloadProfile = () => {
  // Placeholder - replace with actual PDF URL
  alert('Tính năng tải Profile PDF sẽ được cập nhật sớm!')
  // window.open('/path-to-profile.pdf', '_blank')
}

// Auto-play carousel
let carouselInterval = null
let personnelInterval = null

// Scroll animation observer
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el)
  })
}

// Scroll handlers
const handleClickOutside = (event) => {
  if (mobileMenuOpen.value && !event.target.closest('.mobile-menu')) {
    mobileMenuOpen.value = false
  }
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Animate counter function
const animateCounter = (stat) => {
  if (stat.animated) return

  stat.animated = true
  const duration = 2000 // 2 seconds
  const steps = 60
  const increment = stat.value / steps
  const stepDuration = duration / steps

  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= stat.value) {
      stat.displayValue = stat.value
      clearInterval(timer)
    } else {
      stat.displayValue = Math.floor(current)
    }
  }, stepDuration)
}

// Setup stats counter animation
const setupStatsAnimation = () => {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => {
            if (!stat.animated) {
              animateCounter(stat)
            }
          })
          statsObserver.disconnect()
        }
      })
    },
    { threshold: 0.5 },
  )

  const statsSection = document.getElementById('stats-section')
  if (statsSection) {
    statsObserver.observe(statsSection)
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)

  // Auto-play image carousel
  carouselInterval = setInterval(() => {
    nextImage()
  }, 5000) // Change image every 5 seconds

  // Auto-play personnel carousel
  personnelInterval = setInterval(() => {
    nextPersonnel()
  }, 6000) // Change slide every 6 seconds

  // Setup scroll animations
  setTimeout(() => {
    setupScrollAnimations()
    setupStatsAnimation()
  }, 100)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)

  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
  if (personnelInterval) {
    clearInterval(personnelInterval)
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white">
    <!-- Navbar -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <div class="flex items-center space-x-2">
              <img :src="logoImage" alt="TEKNOVA Logo" class="h-10 w-auto object-contain" />
              <span class="text-xl font-bold text-white">TEKNOVA</span>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <button
                @click="scrollToSection('home')"
                class="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all hover:scale-105 relative group"
              >
                Trang chủ
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                ></span>
              </button>
              <button
                @click="scrollToSection('about')"
                class="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all hover:scale-105 relative group"
              >
                Giới thiệu
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                ></span>
              </button>
              <button
                @click="scrollToSection('services')"
                class="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all hover:scale-105 relative group"
              >
                Dịch vụ
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                ></span>
              </button>
              <button
                @click="scrollToSection('gallery')"
                class="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all hover:scale-105 relative group"
              >
                Hình ảnh
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                ></span>
              </button>
              <button
                @click="scrollToSection('organization')"
                class="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all hover:scale-105 relative group"
              >
                Tổ chức
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                ></span>
              </button>
              <button
                @click="scrollToSection('projects')"
                class="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all hover:scale-105 relative group"
              >
                Dự án
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                ></span>
              </button>
              <button
                @click="scrollToSection('contact')"
                class="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-all hover:scale-105 relative group"
              >
                Liên hệ
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                ></span>
              </button>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-slate-300 hover:text-white p-2"
            >
              <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="mobileMenuOpen"
          class="md:hidden mobile-menu bg-slate-800 border-t border-slate-700"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <button
              @click="scrollToSection('home')"
              class="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Trang chủ
            </button>
            <button
              @click="scrollToSection('about')"
              class="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Giới thiệu
            </button>
            <button
              @click="scrollToSection('services')"
              class="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Dịch vụ
            </button>
            <button
              @click="scrollToSection('gallery')"
              class="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Hình ảnh
            </button>
            <button
              @click="scrollToSection('organization')"
              class="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Tổ chức
            </button>
            <button
              @click="scrollToSection('projects')"
              class="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Dự án
            </button>
            <button
              @click="scrollToSection('contact')"
              class="block w-full text-left text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Liên hệ
            </button>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div
          class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 animate-gradient"
        >
          <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div class="relative px-6 py-24 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span class="block animate-fade-in-down">Đổi mới Sáng tạo</span>
                <span
                  class="block text-blue-400 animate-fade-in-up"
                  style="animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards"
                  >TEKNOVA</span
                >
              </h1>
              <p
                class="mt-4 text-lg font-semibold text-blue-300 uppercase tracking-wider animate-fade-in"
                style="animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards"
              >
                NOW OR NEVER
              </p>
              <p
                class="mt-6 text-lg leading-8 text-slate-300 sm:text-xl animate-fade-in"
                style="animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards"
              >
                Công ty Cổ phần Đổi mới Sáng tạo TEKNOVA - Lập trình, phát triển phần mềm, tư vấn
                giải pháp và thực hiện chuyển đổi số trong lĩnh vực y tế, giáo dục, hành chính
                công...Tư vấn, thiết kế và thi công hệ thống mạng CNTT
              </p>
              <p
                class="mt-4 text-base leading-7 text-slate-400 animate-fade-in"
                style="animation-delay: 0.8s; opacity: 0; animation-fill-mode: forwards"
              >
                Đội ngũ chuyên gia Thạc sĩ, Kỹ sư với trên 10-20 năm kinh nghiệm
              </p>
              <div
                class="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up"
                style="animation-delay: 1s; opacity: 0; animation-fill-mode: forwards"
              >
                <button
                  @click="downloadProfile"
                  class="group flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-all hover:scale-105 hover-glow"
                >
                  <Download class="w-5 h-5 group-hover:animate-bounce" />
                  Tải Profile PDF
                </button>
                <button
                  @click="scrollToSection('services')"
                  class="group flex items-center gap-2 rounded-lg bg-slate-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-600 transition-all hover-lift"
                >
                  Tìm hiểu thêm
                  <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats-section" class="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            :class="[
              'text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:scale-105 hover-lift',
              'scroll-animate fade-up',
              `stagger-${index + 1}`,
            ]"
          >
            <component
              :is="stat.icon"
              class="w-8 h-8 mx-auto mb-3 text-blue-400 animate-float"
              :style="{ animationDelay: `${index * 0.2}s` }"
            />
            <div class="text-3xl font-bold text-white mb-1">
              {{ stat.displayValue }}{{ stat.suffix }}
            </div>
            <div class="text-sm text-slate-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Carousel Section -->
    <section id="gallery" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 scroll-animate fade-down">
          <h2 class="text-3xl font-bold text-white sm:text-4xl mb-4">Hình ảnh</h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">
            Khám phá các hoạt động và thành tựu của TEKNOVA
          </p>
        </div>

        <div class="relative max-w-5xl mx-auto scroll-animate scale">
          <!-- Carousel Container -->
          <div
            class="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover-glow transition-smooth"
          >
            <!-- Images -->
            <div class="relative w-full h-full">
              <transition name="carousel-fade" mode="out-in">
                <div :key="currentImageIndex" class="absolute inset-0">
                  <div
                    class="w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 flex items-center justify-center"
                  >
                    <div class="text-center px-8 animate-scale-in">
                      <div
                        class="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float"
                      >
                        <FileText class="w-12 h-12 text-blue-400" />
                      </div>
                      <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
                        {{ carouselImages[currentImageIndex].title }}
                      </h3>
                      <p class="text-slate-300 text-lg">
                        {{ carouselImages[currentImageIndex].description }}
                      </p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="prevImage"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all z-10 hover-scale hover-glow"
            >
              <ChevronLeft class="w-6 h-6" />
            </button>
            <button
              @click="nextImage"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all z-10 hover-scale hover-glow"
            >
              <ChevronRight class="w-6 h-6" />
            </button>

            <!-- Indicators -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <button
                v-for="(image, index) in carouselImages"
                :key="image.id"
                @click="currentImageIndex = index"
                :class="[
                  'w-2 h-2 rounded-full transition-all',
                  index === currentImageIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-slate-600 hover:bg-slate-500',
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section - Vision, Mission, Philosophy -->
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate fade-down">
          <h2 class="text-3xl font-bold text-white sm:text-4xl mb-4">Về TEKNOVA</h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">
            Tầm nhìn, Sứ mệnh và Triết lý kinh doanh của chúng tôi
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Vision -->
          <div
            class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all scroll-animate fade-left hover-lift stagger-1"
          >
            <div class="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <component :is="companyValues.vision.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ companyValues.vision.title }}</h3>
            <p class="text-slate-300 mb-4 leading-relaxed">{{ companyValues.vision.content }}</p>
            <p class="text-blue-400 font-semibold italic">{{ companyValues.vision.motto }}</p>
          </div>

          <!-- Mission -->
          <div
            class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-green-500 transition-all scroll-animate fade-up hover-lift stagger-2"
          >
            <div class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <component :is="companyValues.mission.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ companyValues.mission.title }}</h3>
            <ul class="space-y-3 text-slate-300 text-sm leading-relaxed">
              <li
                v-for="(item, index) in companyValues.mission.content"
                :key="index"
                class="flex items-start gap-2"
              >
                <CheckCircle2 class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Philosophy -->
          <div
            class="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all scroll-animate fade-right hover-lift stagger-3"
          >
            <div class="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <component :is="companyValues.philosophy.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">{{ companyValues.philosophy.title }}</h3>
            <p class="text-purple-400 font-semibold mb-4">
              {{ companyValues.philosophy.mainTitle }}
            </p>
            <p class="text-slate-300 text-sm mb-6 leading-relaxed">
              {{ companyValues.philosophy.description }}
            </p>
            <div class="space-y-4">
              <div v-for="(principle, index) in companyValues.philosophy.principles" :key="index">
                <h4 class="text-white font-semibold mb-1">{{ principle.title }}</h4>
                <p class="text-slate-400 text-xs leading-relaxed">{{ principle.content }}</p>
              </div>
            </div>
            <p class="text-purple-400 text-sm font-semibold italic mt-6">
              {{ companyValues.philosophy.motto }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate fade-down">
          <h2 class="text-3xl font-bold text-white sm:text-4xl mb-4">Lĩnh vực hoạt động</h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">7 lĩnh vực chuyên môn của TEKNOVA</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(service, index) in services"
            :key="index"
            :class="[
              'bg-slate-800/50 rounded-xl p-6 border transition-all hover:shadow-xl hover:scale-105 hover-lift',
              'scroll-animate fade-up',
              `stagger-${(index % 6) + 1}`,
              service.color === 'blue'
                ? 'border-slate-700 hover:border-blue-500 hover-glow'
                : service.color === 'green'
                  ? 'border-slate-700 hover:border-green-500 hover-glow'
                  : 'border-slate-700 hover:border-purple-500 hover-glow',
            ]"
          >
            <div
              :class="[
                'w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:rotate-6',
                service.color === 'blue'
                  ? 'bg-blue-600'
                  : service.color === 'green'
                    ? 'bg-green-600'
                    : 'bg-purple-600',
              ]"
            >
              <component :is="service.icon" class="w-7 h-7 text-white" />
            </div>
            <h3 class="text-lg font-bold text-white mb-3">{{ service.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Organization Structure Section -->
    <section id="organization" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate fade-down">
          <h2 class="text-3xl font-bold text-white sm:text-4xl mb-4">Cơ cấu tổ chức</h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">
            Hệ thống quản lý chuyên nghiệp và hiệu quả
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <!-- Board of Directors -->
          <div class="text-center mb-8 scroll-animate fade-down">
            <div
              class="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-4 rounded-xl shadow-lg hover-scale hover-glow transition-smooth"
            >
              <component
                :is="organizationStructure.board.icon"
                class="w-8 h-8 text-white animate-pulse-slow"
              />
              <span class="text-xl font-bold text-white">{{
                organizationStructure.board.name
              }}</span>
            </div>
          </div>

          <!-- Director -->
          <div class="text-center mb-12 scroll-animate fade-up">
            <div
              class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 rounded-xl shadow-lg hover-scale hover-glow transition-smooth"
            >
              <component :is="organizationStructure.director.icon" class="w-8 h-8 text-white" />
              <span class="text-xl font-bold text-white">{{
                organizationStructure.director.name
              }}</span>
            </div>
          </div>

          <!-- Departments -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(dept, index) in organizationStructure.departments"
              :key="index"
              :class="[
                'bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover-lift',
                'scroll-animate fade-up',
                `stagger-${index + 1}`,
              ]"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <component :is="dept.icon" class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-base font-bold text-white">{{ dept.name }}</h3>
              </div>
              <div class="space-y-2">
                <div
                  v-for="(unit, unitIndex) in dept.units"
                  :key="unitIndex"
                  class="flex items-center gap-2 p-2 bg-slate-900/50 rounded-lg"
                >
                  <component :is="unit.icon" class="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span class="text-sm text-slate-300">{{ unit.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Personnel Section - Carousel -->
    <section id="personnel" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate fade-down">
          <h2 class="text-3xl font-bold text-white sm:text-4xl mb-4">Đội ngũ chuyên gia</h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">
            Đội ngũ Thạc sĩ, Tiến sĩ, Kỹ sư giàu kinh nghiệm với trên 10-20 năm trong ngành
          </p>
        </div>

        <!-- Personnel Carousel -->
        <div class="relative">
          <!-- Navigation Arrows -->
          <button
            @click="prevPersonnel"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-slate-800/90 hover:bg-slate-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover-scale hover-glow"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>
          <button
            @click="nextPersonnel"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-slate-800/90 hover:bg-slate-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover-scale hover-glow"
          >
            <ChevronRight class="w-6 h-6" />
          </button>

          <!-- Carousel Container -->
          <div class="overflow-hidden px-8 md:px-12">
            <div
              class="relative flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentPersonnelIndex * 100}%)` }"
            >
              <!-- Slide -->
              <div
                v-for="(slide, slideIndex) in totalPersonnelSlides"
                :key="slideIndex"
                class="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
              >
                <!-- Personnel Cards -->
                <div
                  v-for="(person, personIndex) in personnel.slice(
                    slideIndex * 3,
                    slideIndex * 3 + 3,
                  )"
                  :key="`${slideIndex}-${personIndex}`"
                  class="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:scale-105 hover-lift"
                >
                  <div
                    class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-4 mx-auto hover-scale transition-transform"
                  >
                    <Users class="w-8 h-8 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-white text-center mb-2">{{ person.name }}</h3>
                  <p class="text-blue-400 text-sm text-center mb-3 font-semibold">
                    {{ person.position }}
                  </p>
                  <div class="space-y-2 text-sm">
                    <div class="flex items-center gap-2 text-slate-400">
                      <Award class="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span>{{ person.experience }}</span>
                    </div>
                    <div class="flex items-start gap-2 text-slate-400">
                      <Briefcase class="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{{ person.expertise }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Indicators -->
          <div class="flex justify-center gap-2 mt-8">
            <button
              v-for="(slide, index) in totalPersonnelSlides"
              :key="index"
              @click="currentPersonnelIndex = index"
              :class="[
                'h-2 rounded-full transition-all',
                index === currentPersonnelIndex
                  ? 'bg-blue-500 w-8'
                  : 'bg-slate-600 hover:bg-slate-500 w-2',
              ]"
            />
          </div>
        </div>

        <!-- Personnel Count -->
        <div class="text-center mt-8">
          <p class="text-slate-400 text-sm">
            Hiển thị {{ currentPersonnelIndex * 3 + 1 }}-{{
              Math.min((currentPersonnelIndex + 1) * 3, personnel.length)
            }}
            / {{ personnel.length }} chuyên gia
          </p>
        </div>
      </div>
    </section>

    <!-- Project Gallery Section -->
    <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate fade-down">
          <h2 class="text-3xl font-bold text-white sm:text-4xl mb-4">Dự án tiêu biểu</h2>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto">
            Các dự án và đối tác lớn đã tin tưởng lựa chọn TEKNOVA
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            :class="[
              'bg-slate-800/50 rounded-xl p-6 border transition-all hover:shadow-xl hover:scale-105 group hover-lift',
              'scroll-animate fade-up',
              `stagger-${(index % 6) + 1}`,
              project.color === 'blue'
                ? 'border-slate-700 hover:border-blue-500 hover-glow'
                : 'border-slate-700 hover:border-green-500 hover-glow',
            ]"
          >
            <!-- Icon & Type Badge -->
            <div class="flex items-start justify-between mb-4">
              <div
                :class="[
                  'w-14 h-14 rounded-xl flex items-center justify-center transition-transform hover:scale-110 hover:rotate-6',
                  project.color === 'blue'
                    ? 'bg-gradient-to-br from-blue-500 to-blue-700'
                    : 'bg-gradient-to-br from-green-500 to-green-700',
                ]"
              >
                <component :is="project.icon" class="w-7 h-7 text-white" />
              </div>
              <span
                :class="[
                  'text-xs px-3 py-1 rounded-full font-medium',
                  project.color === 'blue'
                    ? 'bg-blue-600/20 text-blue-300'
                    : 'bg-green-600/20 text-green-300',
                ]"
              >
                {{ project.type }}
              </span>
            </div>

            <!-- Project Name -->
            <h3
              :class="[
                'text-lg font-bold mb-2 transition-colors',
                project.color === 'blue'
                  ? 'text-white group-hover:text-blue-400'
                  : 'text-white group-hover:text-green-400',
              ]"
            >
              {{ project.name }}
            </h3>

            <!-- Client/Partner -->
            <div class="flex items-start gap-2 mb-3">
              <Building2 class="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <p class="text-sm text-blue-400 font-semibold">{{ project.client }}</p>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-400 mb-4 leading-relaxed">{{ project.description }}</p>

            <!-- Category -->
            <div class="mb-3">
              <span class="text-xs text-slate-500 italic">{{ project.category }}</span>
            </div>

            <!-- Location -->
            <div class="flex items-start gap-2 pt-3 border-t border-slate-700">
              <MapPin class="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
              <p class="text-xs text-slate-500 leading-relaxed">{{ project.location }}</p>
            </div>
          </div>
        </div>

        <!-- Project Stats -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-slate-800/30 rounded-lg">
            <div class="text-2xl font-bold text-blue-400 mb-1">{{ projects.length }}</div>
            <div class="text-sm text-slate-400">Dự án tiêu biểu</div>
          </div>
          <div class="text-center p-4 bg-slate-800/30 rounded-lg">
            <div class="text-2xl font-bold text-green-400 mb-1">38</div>
            <div class="text-sm text-slate-400">Dự án Phần mềm</div>
          </div>
          <div class="text-center p-4 bg-slate-800/30 rounded-lg">
            <div class="text-2xl font-bold text-purple-400 mb-1">
              {{ new Set(projects.map((p) => p.client)).size }}
            </div>
            <div class="text-sm text-slate-400">Đối tác</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-slate-800 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Company Info -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <img :src="logoImage" alt="TEKNOVA Logo" class="h-10 w-auto object-contain" />
              <span class="text-xl font-bold text-white">TEKNOVA</span>
            </div>
            <p class="text-slate-400 text-sm mb-4">Công ty Cổ phần Đổi mới Sáng tạo TEKNOVA</p>
            <p class="text-slate-400 text-sm">
              Chuyên cung cấp giải pháp Phần mềm y tế, giáo dục,...
            </p>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Thông tin liên hệ</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <MapPin class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-slate-300 text-sm font-medium">Địa chỉ</p>
                  <p class="text-slate-400 text-sm">K131/18 Lý Thái Tổ, Đà Nẵng</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Phone class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-slate-300 text-sm font-medium">Điện thoại</p>
                  <a href="tel:0935722579" class="text-slate-400 text-sm hover:text-slate-200">
                    0935 722 579
                  </a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <Mail class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-slate-300 text-sm font-medium">Email</p>
                  <a
                    href="mailto:Teknova0925@gmail.com"
                    class="text-slate-400 text-sm hover:text-slate-200"
                  >
                    Teknova0925@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Liên kết nhanh</h3>
            <div class="space-y-2">
              <button
                @click="scrollToSection('home')"
                class="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                Trang chủ
              </button>
              <button
                @click="scrollToSection('about')"
                class="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                Giới thiệu
              </button>
              <button
                @click="scrollToSection('services')"
                class="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                Dịch vụ
              </button>
              <button
                @click="scrollToSection('gallery')"
                class="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                Hình ảnh
              </button>
              <button
                @click="scrollToSection('organization')"
                class="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                Tổ chức
              </button>
              <button
                @click="scrollToSection('projects')"
                class="block text-slate-400 hover:text-white text-sm transition-colors"
              >
                Dự án
              </button>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-slate-700 text-center">
          <p class="text-slate-400 text-sm">
            © {{ new Date().getFullYear() }} TEKNOVA. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>

    <!-- Scroll To Top Button -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-500 transition-all hover-scale hover-glow"
      aria-label="Scroll to top"
    >
      <ArrowRight class="w-6 h-6 -rotate-90" />
    </button>
  </div>
</template>

<style scoped>
/* Grid pattern background */
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
