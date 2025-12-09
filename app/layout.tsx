import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Báo Thời Bao Cấp - Tin Chính Trị",
  description: "Kỷ yếu Đại hội Đảng lần thứ V (1982)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased bg-paper text-ink min-h-screen relative">
        {/* Lớp phủ tạo hiệu ứng giấy */}
        <div className="bg-noise mix-blend-multiply"></div>
        <div className="relative z-10 max-w-[1000px] mx-auto p-4 md:p-8 shadow-2xl bg-paper min-h-screen border-x border-black/10">
          {children}
        </div>
      </body>
    </html>
  );
}