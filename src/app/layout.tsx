import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Wonderia Piano — A Magical Piano Adventure",
  description:
    "Transform piano practice into a magical adventure. Game-based learning, real-time feedback, and your personal musical buddy Momo.",
  openGraph: {
    title: "Wonderia Piano — A Magical Piano Adventure",
    description:
      "Transform piano practice into a magical adventure. Game-based learning, real-time feedback, and your personal musical buddy Momo.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          // 1. 完全还原 SVG 的线性渐变
          background: "linear-gradient(180deg, #FFFDF0 0%, #FFFADA 100%)",
          
          // 2. 关键：背景固定，不随页面滚动而移动
          // 这样无论页面多长（即便达到 SVG 里的 4761px），背景始终平滑锁定在视口
          backgroundAttachment: "fixed",
          
          // 3. 确保背景覆盖整个屏幕高度
          backgroundSize: "100% 100%",
          
          // 4. 默认文字颜色
          color: "#2D1509",
        }}
      >
        {/* 导航栏 */}
        <Navbar />

        {/* 使用 main 标签包裹 children 
           flex-grow 确保内容不足一屏时，Footer 也能被推到底部
        */}
        <main className="flex-grow w-full relative">
          {children}
        </main>

        {/* 页脚 */}
        <Footer />

        {/* 回到顶部 */}
        <BackToTop />
      </body>
    </html>
  );
}