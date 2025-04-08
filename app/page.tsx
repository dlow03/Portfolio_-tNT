import Image from "next/image"
import { ArrowRight, Mail, Phone, User } from "lucide-react"
import MyStories from "@/components/my-stories"
import Figma from "../public/images/figma.png"
import Photoshop from "../public/images/ps.png"
import InDesign from "../public/images/indesign.png"
import Canva from "../public/images/canva.png"
import Illustrator from "../public/images/ai.png"
import bocbang from "../public/images/bocbangpng.png"
export default function Home() {
  const portfolioImages = [
    '/images/project1.png',
    '/images/project2.png',
    '/images/project3.png',
    '/images/project4.png',
    '/images/project5.png',
    '/images/project6.png',
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section with Futuristic Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white dark:from-black dark:via-green-950/30 dark:to-black">
        {/* Background Gradient Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-200/20 via-transparent to-transparent dark:from-green-900/20"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-emerald-200/20 via-transparent to-transparent dark:from-emerald-900/20"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-green-300/5 dark:bg-green-600/5 filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-300/5 dark:bg-emerald-600/5 filter blur-3xl"></div>

          {/* Green Liners */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

          {/* Diagonal Liners */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/30 to-transparent dark:via-green-500/30 transform -rotate-12"></div>
            <div className="absolute top-2/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent dark:via-emerald-500/20 transform rotate-12"></div>
            <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/30 to-transparent dark:via-green-500/30 transform -rotate-5"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-30">
          <div className="backdrop-blur-md bg-white/70 dark:bg-green-950/20 border-b border-green-200/50 dark:border-green-500/20">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-md flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-400/20">
                  D
                </div>
                <span className="ml-3 text-green-900 dark:text-white font-medium hidden sm:block">Dat Design</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-green-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors relative nav-link"
                >
                  Trang Chủ
                  <span className="nav-link-indicator bg-gradient-to-r from-green-400 to-emerald-400"></span>
                </a>
                <a
                  href="#portfolio"
                  className="text-green-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors relative nav-link"
                >
                  Sản Phẩm
                  <span className="nav-link-indicator bg-gradient-to-r from-green-400 to-emerald-400"></span>
                </a>
                <a
                  href="#about"
                  className="text-green-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors relative nav-link"
                >
                  Về Chúng Tôi
                  <span className="nav-link-indicator bg-gradient-to-r from-green-400 to-emerald-400"></span>
                </a>
              </div>

              <button className="bg-green-100/80 dark:bg-green-950/40 backdrop-blur-sm text-green-900 dark:text-white px-4 py-2 rounded-full border border-green-300/50 dark:border-green-400/30 hover:bg-green-200/80 dark:hover:bg-green-400/10 transition-colors shadow-lg shadow-green-200/20 dark:shadow-green-900/20 hover:shadow-green-300/20 dark:hover:shadow-green-400/20">
                ĐĂNG NHẬP
              </button>
            </div>
          </div>
        </nav>

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col items-center justify-center pt-20 pb-10">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="hero-content order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-green-100/50 dark:bg-green-400/10 backdrop-blur-sm rounded-full border border-green-300/50 dark:border-green-400/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6 animate-fade-in">
                Graphic Designer & Visual Artist
              </div>

              <h1 className="hero-title mb-6">
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl font-black text-green-900 dark:text-white drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] dark:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] mb-2 animate-slide-up"
                  style={{ animationDelay: "200ms" }}
                >
                  CREATIVE.
                </span>
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl font-black text-green-900 dark:text-white drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] dark:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] mb-2 animate-slide-up"
                  style={{ animationDelay: "400ms" }}
                >
                  PASSIONATE.
                </span>
                <span
                  className="block text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 dark:from-green-300 dark:to-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] dark:drop-shadow-[0_0_8px_rgba(34,197,94,0.7)] animate-slide-up"
                  style={{ animationDelay: "600ms" }}
                >
                  DESIGNER.
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in"
                style={{ animationDelay: "800ms" }}
              >
                Turning ideas into visual experiences with modern design solutions that captivate and inspire.
              </p>

              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in"
                style={{ animationDelay: "1000ms" }}
              >
                <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover-lift hover:gap-3 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                  Explore my work <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 px-8 py-3 rounded-full font-medium hover:bg-green-100/50 dark:hover:bg-green-400/10 transition-colors duration-300 hover-lift">
                  Contact me
                </button>
              </div>
            </div>

            {/* Right Content - Digital Card */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="digital-card-container relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-300/20 to-emerald-300/20 dark:from-green-400/20 dark:to-emerald-500/20 rounded-2xl blur-xl opacity-70 animate-pulse-slow"></div>
                <div
                  className="relative bg-white/80 dark:bg-green-950/40 backdrop-blur-md border border-green-300/50 dark:border-green-400/30 p-8 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.2)] dark:shadow-[0_0_30px_rgba(34,197,94,0.3)] transform hover:scale-105 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: "1200ms" }}
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-right-12 w-24 h-24 rounded-full border-4 border-green-300/50 dark:border-green-400/30 overflow-hidden shadow-xl">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Nguyen Thanh Dat"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>

                  <div className="pt-12 lg:pt-0 lg:pl-4">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
                      <div className="text-xs text-green-500 dark:text-green-300 font-medium tracking-wider">DLOW</div>
                      <h3 className="text-2xl font-bold text-green-900 dark:text-white">NGUYỄN THÀNH ĐẠT</h3>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                      • Graphic Designer • Visual Artist • UI/UX Designer
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100/80 dark:bg-green-400/20 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Datnguyenthanh153@gmail.com</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100/80 dark:bg-green-400/20 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">+84 365 963 262</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-green-200/50 dark:border-green-400/20">
                      <div className="flex justify-between">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-900 dark:text-white">3+</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Years Exp.</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-900 dark:text-white">20+</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-900 dark:text-white">30+</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] dark:shadow-[0_0_10px_rgba(34,197,94,0.7)] animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/3 w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] dark:shadow-[0_0_10px_rgba(34,197,94,0.7)] animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] dark:shadow-[0_0_10px_rgba(34,197,94,0.7)] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-300 dark:bg-white rounded-full shadow-[0_0_5px_rgba(134,239,172,0.7)] dark:shadow-[0_0_5px_rgba(255,255,255,0.7)] animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] dark:shadow-[0_0_10px_rgba(34,197,94,0.7)] animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/5 right-1/5 w-1 h-1 bg-green-300 dark:bg-white rounded-full shadow-[0_0_5px_rgba(134,239,172,0.7)] dark:shadow-[0_0_5px_rgba(255,255,255,0.7)] animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-green-300/30 dark:border-green-400/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-20 h-20 border border-green-300/30 dark:border-green-400/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-green-300/30 dark:border-green-400/20 rounded-full"></div>
      </section>

      {/* Avatar and Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-white to-green-50/30 dark:from-black dark:to-green-950/30 backdrop-blur-sm relative">
        {/* Green Liner */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-300/30 dark:border-green-500/20 shadow-xl">
            <Image src="/placeholder.svg?height=256&width=256" alt="Nguyen Thanh Dat" fill className="object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-green-900 dark:text-white mb-4">Nguyen Thanh Dat</h2>
            <div className="h-12 overflow-hidden relative">
              <p className="text-2xl font-medium text-green-600 dark:text-green-400 changing-text">
                I'm a Graphic Designer
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mt-6 max-w-xl">
              Đam mê tạo ra những thiết kế ấn tượng về mặt thị giác, truyền đạt hiệu quả.
              Với con mắt thẩm mỹ về chi tiết và tư duy sáng tạo, tôi hiện thực hóa ý tưởng thông qua các giải pháp thiết kế chu đáo.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        className="py-20 px-4 bg-gradient-to-r from-green-50/30 to-white dark:from-green-950/30 dark:to-black relative"
        id="about"
      >
        {/* Green Liner */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              About Me
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-900 dark:text-white">Hành Trình Của Tôi</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                Hành trình thiết kế của tôi bắt đầu ba năm trước, khi tôi không ngừng khám phá và thử sức với nhiều lĩnh vực khác nhau trước khi tìm thấy niềm đam mê thực sự với thiết kế đồ họa.
                Chính sự tò mò và khát khao sáng tạo đã đưa tôi đến cơ hội hợp tác với nhiều khách hàng thuộc đa dạng ngành nghề.
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                Với tôi, một thiết kế tuyệt vời không chỉ đơn thuần là đẹp mắt, mà còn phải giải quyết vấn đề, tạo ra những trải nghiệm sâu sắc và kết nối cảm xúc với con người.
                Mỗi dự án là một câu chuyện mới, và tôi luôn mong muốn biến từng thiết kế thành một cầu nối truyền tải thông điệp một cách mạnh mẽ và ý nghĩa nhất.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-900 dark:text-white">Phương Pháp Thiết Kế Của Tôi</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start approach-item">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Nghiên cứu sâu – Mọi quyết định đều dựa trên dữ liệu và sự thấu hiểu người dùng.</span>
                </li>
                <li className="flex items-start approach-item">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Lấy người dùng làm trung tâm – Thiết kế trực quan, dễ tiếp cận cho mọi đối tượng.</span>
                </li>
                <li className="flex items-start approach-item">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Tỉ mỉ & chính xác – Chú trọng từng chi tiết để đảm bảo chất lượng hoàn hảo.</span>
                </li>
                <li className="flex items-start approach-item">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Luôn học hỏi – Cập nhật xu hướng, không ngừng cải thiện kỹ năng.</span>
                </li>
                <li className="flex items-start approach-item">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Hợp tác hiệu quả – Giao tiếp rõ ràng, làm việc chặt chẽ để tạo ra giá trị tốt nhất.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-white to-green-50/30 dark:from-black dark:to-green-950/30 relative">
        {/* Green Liner */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              Experience
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
          </h2>

          <div className="space-y-12">
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300/50 dark:bg-gray-200/20"></div>
              <div className="hidden md:flex absolute left-0 top-0 -ml-3.5 items-center justify-center w-7 h-7 rounded-full border-2 border-green-500 dark:border-green-400 bg-white dark:bg-black timeline-dot"></div>

              <div className="md:ml-12">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-white">Fresher UI/UX</h3>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100/50 dark:bg-green-400/10 px-3 py-1 rounded-full">
                    2024 - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Studio thiết kế sáng tạo</p>
                <p className="text-gray-700 dark:text-gray-200 mt-4">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Được tiếp tục xúc với hơn 20 dự án thực tế, trong đó có 10 dự án thành công và 10 dự án đang phát triển.
                  </span>
                  <br />
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Làm việc trong môi trường chuyên nghiệp tiếp tục nâng cao kỹ năng</span>
                  <br />
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Tìm ra phong cách thiết kế riêng, không ngừng học hỏi, cập nhật xu hướng và mở rộng cơ hội phát triển sự nghiệp. </span>
                </p>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300/50 dark:bg-gray-200/20"></div>
              <div className="hidden md:flex absolute left-0 top-0 -ml-3.5 items-center justify-center w-7 h-7 rounded-full border-2 border-emerald-500 dark:border-emerald-400 bg-white dark:bg-black timeline-dot"></div>

              <div className="md:ml-12">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-white">Freelancer</h3>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100/50 dark:bg-emerald-400/10 px-3 py-1 rounded-full">
                    2022-2024
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Graphic Designer</p>
                <p className="text-gray-700 dark:text-gray-200 mt-4">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Tôi không chỉ tập trung vào việc học mà còn chủ động nhận các dự án freelancer để trau dồi kinh nghiệm thực tế.</span>
                  <br />
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  <span>Việc này giúp tôi áp dụng kiến thức vào các tình huống thực tiễn, rèn luyện tư duy thiết kế và nâng cao kỹ năng giao tiếp với khách hàng.</span>
                  <br />
                </p>
              </div>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300/50 dark:bg-gray-200/20"></div>
              <div className="hidden md:flex absolute left-0 top-0 -ml-3.5 items-center justify-center w-7 h-7 rounded-full border-2 border-green-500 dark:border-green-400 bg-white dark:bg-black timeline-dot"></div>

              <div className="md:ml-12">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-white">Graphic Design Student</h3>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100/50 dark:bg-green-400/10 px-3 py-1 rounded-full">
                    2021 - 2022
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Sinh viên khoa thiết kế</p>
                <p className="text-gray-700 dark:text-gray-200 mt-4">
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  Bắt đầu khám phá thế giới thiết kế, tìm hiểu các nguyên tắc cơ bản về thiết kế.
                  <br />
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  Làm quen với các công cụ thiết kế, tham gia cộng đồng thiết kế để mở rộng tư duy.
                  <br />
                  <span className="text-green-600 dark:text-green-400 mr-2 approach-dot">•</span>
                  Dành nhiều thời gian thực hành, xây dựng các dự án cá nhân.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Messy Circles */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50/30 to-white dark:from-green-950/30 dark:to-black relative">
        {/* Green Liner */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

        {/* Diagonal Green Liners */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/20 to-transparent dark:via-green-500/20 transform -rotate-12"></div>
          <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/20 to-transparent dark:via-green-500/20 transform rotate-12"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              Skills
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {/* Figma - Largest Circle */}
            <div className="skill-circle-container group">
              <div className="messy-circle messy-circle-lg border-4 border-green-400/50 flex items-center justify-center relative bg-white/30 dark:bg-black/30 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent animate-pulse-slow"></div>
                <div className="relative z-10 p-6 flex items-center justify-center w-full h-full">
                  <Image src={Figma} alt="Figma" width={160} height={160} className="text-green-500 dark:text-green-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-green-900 dark:text-white text-center">Figma</h3>
                </div>
                <div className="messy-blob messy-blob-1"></div>
                <div className="messy-blob messy-blob-2"></div>
                <div className="messy-blob messy-blob-3"></div>
              </div>
            </div>

            {/* Adobe Photoshop - Second Largest Circle */}
            <div className="skill-circle-container group">
              <div className="messy-circle messy-circle-md-lg border-4 border-green-400/50 flex items-center justify-center relative bg-white/30 dark:bg-black/30 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent animate-pulse-slow animation-delay-300"></div>
                <div className="relative z-10 p-6 flex items-center justify-center w-full h-full">
                  <Image src={Illustrator} alt="Illustrator" width={110} height={110} className="text-green-500 dark:text-green-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-green-900 dark:text-white text-center">Illustrator</h3>
                </div>
                <div className="messy-blob messy-blob-1"></div>
                <div className="messy-blob messy-blob-2"></div>
                <div className="messy-blob messy-blob-3"></div>
              </div>
            </div>

            {/* Adobe Illustrator - Medium Circle */}
            <div className="skill-circle-container group">
              <div className="messy-circle messy-circle-md border-4 border-green-400/50 flex items-center justify-center relative bg-white/30 dark:bg-black/30 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent animate-pulse-slow animation-delay-600"></div>
                <div className="relative z-10 p-5 flex items-center justify-center w-full h-full">
                  <Image src={Photoshop} alt="Photoshop" width={70} height={70} className="text-green-500 dark:text-green-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-green-900 dark:text-white text-center">Photoshop</h3>
                </div>
                <div className="messy-blob messy-blob-1"></div>
                <div className="messy-blob messy-blob-2"></div>
                <div className="messy-blob messy-blob-3"></div>
              </div>
            </div>

            {/* Canva - Small Circle */}
            <div className="skill-circle-container group">
              <div className="messy-circle messy-circle-sm border-4 border-green-400/50 flex items-center justify-center relative bg-white/30 dark:bg-black/30 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent animate-pulse-slow animation-delay-900"></div>
                <div className="relative z-10 p-4 flex items-center justify-center w-full h-full">
                  <Image src={Canva} alt="Canva" width={50} height={50} className="text-green-500 dark:text-green-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base font-bold text-green-900 dark:text-white text-center">Canva</h3>
                </div>
                <div className="messy-blob messy-blob-1"></div>
                <div className="messy-blob messy-blob-2"></div>
                <div className="messy-blob messy-blob-3"></div>
              </div>
            </div>

            {/* Adobe InDesign - Smallest Circle */}
            <div className="skill-circle-container group">
              <div className="messy-circle messy-circle-xs border-4 border-green-400/50 flex items-center justify-center relative bg-white/30 dark:bg-black/30 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-transparent animate-pulse-slow animation-delay-1200"></div>
                <div className="relative z-10 p-3 flex items-center justify-center w-full h-full">
                  <Image src={InDesign} alt="Indesign" width={50} height={50} className="text-green-500 dark:text-green-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 dark:from-black/80 to-transparent p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xs font-bold text-green-900 dark:text-white text-center">InDesign</h3>
                </div>
                <div className="messy-blob messy-blob-1"></div>
                <div className="messy-blob messy-blob-2"></div>
                <div className="messy-blob messy-blob-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="py-20 px-4 bg-gradient-to-r from-white to-green-50/30 dark:from-black dark:to-green-950/30 relative"
        id="portfolio"
      >
        {/* Green Liner */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              Portfolio
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div key={index} className="portfolio-item-enhanced">
                <Image
                  src={image}
                  alt={`Portfolio item ${index + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{ width: '100%', height: '80%' }}
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">Project Title {index + 1}</h3>
                  <p className="portfolio-category">Branding / Illustration</p>
                </div>
              </div>
            ))}
          </div>


          <div className="text-center mt-12">
            <button className="border-2 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-100/50 dark:hover:bg-green-400/10 transition-colors duration-300 px-8 py-3 rounded-full font-medium hover-lift">
              Khám phá tất cả ✨
            </button>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50/30 to-white dark:from-green-950/30 dark:to-black relative">
        {/* Green Liner */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

        {/* Diagonal Green Liners */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/20 to-transparent dark:via-green-500/20 transform rotate-6"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/20 to-transparent dark:via-green-500/20 transform -rotate-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              My Story
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
          </h2>

          <MyStories />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-white to-green-50/30 dark:from-black dark:to-green-950/30 relative">
        {/* Green Liner */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/50"></div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              Contact
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-900 dark:text-white">Thông tin liên hệ</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-8">
                Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội để trở thành một phần trong tầm nhìn của bạn.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100/80 dark:bg-green-400/20 flex items-center justify-center mr-4 contact-icon">
                    <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Name</p>
                    <p className="font-medium text-green-900 dark:text-white">Nguyễn Thành Đạt</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100/80 dark:bg-green-400/20 flex items-center justify-center mr-4 contact-icon">
                    <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Email</p>
                    <p className="font-medium text-green-900 dark:text-white">Datnguyenthanh153@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100/80 dark:bg-green-400/20 flex items-center justify-center mr-4 contact-icon">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">Phone</p>
                    <p className="font-medium text-green-900 dark:text-white">+84 365 963 262</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-black/30 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition form-input"
                    placeholder="Họ và tên"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-black/30 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition form-input"
                    placeholder="Email của bạn"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-1">
                    Ghi chú
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-black/30 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition resize-none form-input"
                    placeholder="Nhập tin nhắn của bạn ở đây..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-shadow hover-lift"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-black border-t border-green-200/50 dark:border-green-500/20 text-gray-700 dark:text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p>© Copyright {new Date().getFullYear()} Nguyen Thanh Dat</p>
        </div>
      </footer>
    </main>
  )
}

