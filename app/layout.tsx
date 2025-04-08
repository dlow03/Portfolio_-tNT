import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import ThemeSwitcher from "@/components/theme-switcher"
import DarkModeButton from "@/components/dark-mode-button"
import LightModeButton from "@/components/light-mode-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nguyen Thanh Dat - Graphic Designer Portfolio",
  description: "Portfolio website showcasing the work of Nguyen Thanh Dat, a professional graphic designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const theme = (cookieStore.get("theme")?.value as "light" | "dark") || "dark"

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className={inter.className}>
        <ThemeSwitcher theme={theme} />
        <DarkModeButton />
        <LightModeButton />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Text changing animation
              const texts = ["I'm a Graphic Designer", "I'm a UI/UX Designer", "I'm a Brand Designer", "I'm a Visual Artist"];
              const element = document.querySelector('.changing-text');
              let index = 0;
              
              if (element) {
                setInterval(() => {
                  element.style.opacity = '0';
                  setTimeout(() => {
                    element.textContent = texts[index];
                    element.style.opacity = '1';
                    index = (index + 1) % texts.length;
                  }, 500);
                }, 3000);
              }
              
              // Skill bar animation
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const skillItems = document.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                      setTimeout(() => {
                        const progressBar = item.querySelector('.skill-progress');
                        const percentText = item.querySelector('.flex span:last-child');
                        if (progressBar && percentText) {
                          const percent = percentText.textContent.replace('%', '');
                          item.classList.add('animate');
                          progressBar.style.setProperty('--progress-width', percent + '%');
                        }
                      }, index * 200);
                    });
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.5 });
              
              const skillsSection = document.querySelector('.skills');
              if (skillsSection) {
                observer.observe(skillsSection);
              }

            });
          `,
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'