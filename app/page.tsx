/* app/page.tsx */
'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsContent from "@/components/NewsContent";
import TemPhieuGame from "@/components/TemPhieuGame";
import RadioPlayer from "@/components/RadioPlayer";
import TVPlayer from "@/components/TVPlayer"; // THÊM IMPORT TVPlayer

// Thêm 'TV' vào ViewMode
type ViewMode = 'NEWS' | 'GAME' | 'RADIO' | 'TV';

export default function Home() {
  const [view, setView] = useState<ViewMode>('NEWS');

  // Hàm xác định tiêu đề phụ dựa trên mục đang chọn
  const getSubTitle = () => {
    switch (view) {
      case 'GAME': return 'ĐỜI SỐNG DÂN SINH';
      case 'RADIO': return 'VĂN HÓA - VĂN NGHỆ';
      case 'TV': return 'TRUYỀN HÌNH - PHIM ẢNH'; 
      default: return 'TIN CHÍNH TRỊ';
    }
  };

  // Hàm xác định tiêu đề bên cạnh (culturalTitle) cho Header
  const getCulturalTitle = () => {
    switch (view) {
      case 'RADIO': return '📻 ĐÀI PHÁT THANH'; 
      case 'TV': return '📺 TRUYỀN HÌNH'; 
      default: return 'KHOA HỌC'; 
    }
  };


  return (
    <main className="font-serif leading-relaxed text-justify min-h-screen flex flex-col">
      <Header 
        subTitle={getSubTitle()} 
        culturalTitle={getCulturalTitle()} 
      />

      {/* 🧭 NAVIGATION MENU */}
      <nav className="mb-8 border-y-4 border-double border-black py-3 bg-[#f0e6d2]">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold uppercase text-xs md:text-base tracking-widest">
          <li>
            <button 
              onClick={() => setView('NEWS')}
              className={`px-4 py-1 border border-transparent transition-all ${view === 'NEWS' ? 'border-black bg-black text-[#fcf7e6]' : 'hover:border-black hover:bg-black/5'}`}
            >
              📰 Tin Chính Trị
            </button>
          </li>
          <li>
            <button 
              onClick={() => setView('GAME')}
              className={`px-4 py-1 border border-transparent transition-all ${view === 'GAME' ? 'border-black bg-black text-[#fcf7e6]' : 'hover:border-black hover:bg-black/5'}`}
            >
              🎫 Cửa Hàng Mậu Dịch
            </button>
          </li>
          <li>
            <button 
              onClick={() => setView('RADIO')}
              className={`px-4 py-1 border border-transparent transition-all ${view === 'RADIO' ? 'border-black bg-black text-[#fcf7e6]' : 'hover:border-black hover:bg-black/5'}`}
            >
              📻 Đài Phát Thanh
            </button>
          </li>
          {/* MỤC TV MỚI */}
          <li>
            <button 
              onClick={() => setView('TV')}
              className={`px-4 py-1 border border-transparent transition-all ${view === 'TV' ? 'border-black bg-black text-[#fcf7e6]' : 'hover:border-black hover:bg-black/5'}`}
            >
              📺 Chương Trình TV
            </button>
          </li>
        </ul>
      </nav>

      {/* KHU VỰC HIỂN THỊ NỘI DUNG */}
      <div className="flex-1 p-4"> 
        
        {/* 1. Hiển thị Tin Tức */}
        {view === 'NEWS' && <NewsContent />}

        {/* 2. Hiển thị Game (Giữ nguyên) */}
        {view === 'GAME' && (
          <div className="animate-in zoom-in-95 duration-300">
            <TemPhieuGame />
          </div>
        )}

        {/* 3. Hiển thị Đài Radio (Giữ nguyên) */}
        {view === 'RADIO' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
              <div className="text-center mb-8 italic opacity-80">
                "Đây là Tiếng nói Việt Nam, phát thanh từ Hà Nội..."
              </div>
              <RadioPlayer />
              <div className="mt-12 p-6 border border-black border-dashed text-center opacity-70 bg-black/5 mx-auto max-w-lg">
                <h4 className="font-bold uppercase mb-4 decoration-wavy underline">Lịch Phát Sóng Đài</h4>
                <ul className="text-sm space-y-2 font-mono">
                    <li>06:00 - 📻 Thể dục buổi sáng</li>
                    <li>12:00 - 📰 Bản tin thời sự trưa</li>
                    <li>21:00 - 📖 Đọc truyện đêm khuya</li>
                </ul>
              </div>
          </div>
        )}

        {/* 4. Hiển thị TV (SỬ DỤNG TVPlayer VÀ ĐƯỜNG DẪN VIDEO CỦA BẠN) */}
        {view === 'TV' && (
            <div className="animate-in fade-in duration-500 flex justify-center py-8">
                <TVPlayer 
                  // Sử dụng đường dẫn tương đối từ thư mục public
                  videoSrc="/video/My Video1.mp4" 
                  title="PHIM TÀI LIỆU: CUỘC SỐNG THỜI BAO CẤP"
                />
            </div>
        )}

      </div>

      <Footer />
    </main>
  );
}