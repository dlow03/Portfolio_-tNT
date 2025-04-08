"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

// Sample story data
const stories = [
  {
    id: "story1",
    title: "Khởi đầu sự nghiệp thiết kế",
    description:
      "Hành trình bắt đầu từ niềm đam mê vẽ vời thời thơ ấu đến công việc thiết kế chuyên nghiệp. Những bước đi đầu tiên trong ngành thiết kế đồ họa và những bài học quý giá tôi đã học được.",
    image: "/placeholder.svg?height=600&width=800",
    date: "2016",
    content: `Tôi bắt đầu sự nghiệp thiết kế từ những ngày còn là sinh viên tại Đại học Mỹ thuật. Niềm đam mê với nghệ thuật và thiết kế đã thôi thúc tôi không ngừng học hỏi và sáng tạo.

Sau khi tốt nghiệp, tôi quyết định thử sức với vai trò freelancer, làm việc với các doanh nghiệp nhỏ để giúp họ xây dựng nhận diện thương hiệu. Những năm đầu tiên đã dạy tôi giá trị của việc lắng nghe khách hàng và chuyển tầm nhìn của họ thành hình ảnh trực quan hấp dẫn.

Mỗi dự án đều là một thử thách và cơ hội để tôi phát triển kỹ năng, từ thiết kế logo, bộ nhận diện thương hiệu đến các ấn phẩm quảng cáo.`,
  },
  {
    id: "story2",
    title: "Dự án đột phá với Studio Creative",
    description:
      "Cơ hội làm việc với Studio Creative đã mở ra chương mới trong sự nghiệp thiết kế của tôi. Dự án này đã giúp tôi khẳng định vị thế và mở rộng tầm nhìn trong ngành.",
    image: "/placeholder.svg?height=600&width=800",
    date: "2018",
    content: `Năm 2018 đánh dấu một bước ngoặt quan trọng khi tôi có cơ hội hợp tác với Studio Creative - một trong những studio thiết kế hàng đầu tại Việt Nam.

Dự án đầu tiên của chúng tôi là thiết kế lại toàn bộ nhận diện thương hiệu cho một thương hiệu thời trang nổi tiếng. Thách thức lớn nhất là làm sao để giữ được tinh thần cốt lõi của thương hiệu trong khi vẫn mang đến một diện mạo hiện đại, tươi mới.

Sau 3 tháng làm việc không ngừng nghỉ, chúng tôi đã hoàn thành dự án với kết quả vượt ngoài mong đợi. Bộ nhận diện mới không chỉ được khách hàng đánh giá cao mà còn giành được giải thưởng thiết kế uy tín trong ngành.

Dự án này đã dạy tôi rất nhiều về quy trình làm việc chuyên nghiệp, cách quản lý thời gian và đặc biệt là tầm quan trọng của việc hợp tác trong một dự án lớn.`,
  },
  {
    id: "story3",
    title: "Khám phá thiết kế UI/UX",
    description:
      "Hành trình mở rộng kỹ năng sang lĩnh vực thiết kế giao diện người dùng và trải nghiệm người dùng. Quá trình học hỏi và áp dụng các nguyên tắc UX vào công việc thiết kế.",
    image: "/placeholder.svg?height=600&width=800",
    date: "2019",
    content: `Năm 2019, tôi quyết định mở rộng kỹ năng của mình sang lĩnh vực thiết kế UI/UX. Đây là một bước đi táo bạo nhưng cần thiết trong thời đại số hóa.

Tôi bắt đầu với những khóa học online, tham gia các workshop và thực hành không ngừng nghỉ. Việc chuyển từ thiết kế đồ họa truyền thống sang thiết kế UI/UX đòi hỏi một tư duy hoàn toàn khác - không chỉ về mặt thẩm mỹ mà còn về tính năng và trải nghiệm người dùng.

Dự án UI/UX đầu tiên của tôi là thiết kế lại ứng dụng di động cho một startup trong lĩnh vực fintech. Quá trình này đầy thử thách nhưng cũng vô cùng thú vị. Tôi học được cách nghĩ về luồng người dùng, tính khả dụng và cách thiết kế phải phục vụ cho mục đích cụ thể.

Sau 6 tháng, ứng dụng được ra mắt và nhận được phản hồi tích cực từ người dùng. Tỷ lệ tương tác tăng 40% và thời gian sử dụng ứng dụng cũng tăng đáng kể.`,
  },
  {
    id: "story4",
    title: "Xuất bản sách về nguyên tắc thiết kế",
    description:
      "Chia sẻ kiến thức và kinh nghiệm qua cuốn sách đầu tay về các nguyên tắc thiết kế hiện đại. Quá trình nghiên cứu, viết và xuất bản cuốn sách đầu tiên.",
    image: "/placeholder.svg?height=600&width=800",
    date: "2021",
    content: `Năm 2021, tôi thực hiện một ước mơ lớn: xuất bản cuốn sách đầu tiên về các nguyên tắc thiết kế hiện đại. Cuốn sách "Thiết kế trong kỷ nguyên số" là tổng hợp kiến thức và kinh nghiệm tôi đã tích lũy trong suốt sự nghiệp.

Quá trình viết sách kéo dài gần một năm, từ việc lên ý tưởng, nghiên cứu, viết bản thảo đến thiết kế layout và làm việc với nhà xuất bản. Đây là một hành trình đầy thử thách nhưng cũng vô cùng bổ ích.

Cuốn sách không chỉ đề cập đến các nguyên tắc thiết kế cơ bản mà còn phân tích sâu về xu hướng thiết kế hiện đại, cách áp dụng công nghệ vào quy trình thiết kế và làm thế nào để tạo ra những sản phẩm không chỉ đẹp mà còn hiệu quả.

Đến nay, cuốn sách đã được dịch ra 3 ngôn ngữ và trở thành tài liệu tham khảo cho nhiều sinh viên và nhà thiết kế trẻ. Điều này khiến tôi vô cùng tự hào và thôi thúc tôi tiếp tục chia sẻ kiến thức của mình với cộng đồng.`,
  },
  {
    id: "story5",
    title: "Giảng dạy và chia sẻ kiến thức",
    description:
      "Hành trình trở thành giảng viên và mentor, truyền đạt kiến thức cho thế hệ nhà thiết kế trẻ. Những bài học và niềm vui khi được đồng hành cùng các nhà thiết kế tương lai.",
    image: "/placeholder.svg?height=600&width=800",
    date: "2022",
    content: `Năm 2022, tôi bắt đầu hành trình mới với vai trò giảng viên tại một trường đại học danh tiếng và mentor cho các nhà thiết kế trẻ. Đây là cách tôi muốn đóng góp cho cộng đồng và truyền lại kiến thức cho thế hệ tiếp theo.

Việc giảng dạy đòi hỏi tôi phải liên tục cập nhật kiến thức và xu hướng mới nhất trong ngành. Mỗi buổi học là một cơ hội để tôi không chỉ chia sẻ mà còn học hỏi từ những góc nhìn mới mẻ của sinh viên.

Bên cạnh giảng dạy, tôi còn tổ chức các workshop và webinar về thiết kế. Những sự kiện này thu hút hàng trăm người tham gia từ khắp nơi trên thế giới, tạo nên một cộng đồng học hỏi và chia sẻ sôi động.

Niềm vui lớn nhất của tôi là khi thấy các học trò và mentee của mình phát triển và thành công trong sự nghiệp. Nhiều người trong số họ hiện đang làm việc tại các công ty thiết kế hàng đầu hoặc thậm chí tự khởi nghiệp với studio riêng.`,
  },
]

export default function MyStories() {
  const [expandedStory, setExpandedStory] = useState<string | null>(null)
  const storyRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleStory = (id: string) => {
    if (expandedStory === id) {
      setExpandedStory(null)
    } else {
      setExpandedStory(id)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    storyRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      storyRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="w-full">
      <div className="space-y-16">
        {stories.map((story, index) => (
          <div
            key={story.id}
            ref={(el) => (storyRefs.current[index] = el)}
            className={`group animate-on-scroll ${index % 2 === 0 ? "from-left" : "from-right"}`}
          >
            <div
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
                <div className="relative h-64 md:h-80 lg:h-96 w-full transform transition-transform duration-700 group-hover:scale-105">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 text-sm text-white bg-green-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {story.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-green-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {story.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{story.description}</p>

                <button
                  onClick={() => toggleStory(story.id)}
                  className="inline-flex items-center text-green-600 dark:text-green-400 font-medium mt-2 group-hover:translate-x-1 transition-transform duration-300"
                >
                  {expandedStory === story.id ? "Thu gọn" : "Xem chi tiết"}
                  <ChevronRight
                    className={`ml-1 w-5 h-5 transition-transform duration-300 ${
                      expandedStory === story.id ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedStory === story.id ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-green-200/50 dark:border-green-400/20">
                    <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">{story.content}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider except for last item */}
            {index < stories.length - 1 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent dark:via-green-500/30 my-16"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

