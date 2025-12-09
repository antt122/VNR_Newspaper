'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsContent from "@/components/NewsContent";
import TemPhieuGame from "@/components/TemPhieuGame";
import RadioPlayer from "@/components/RadioPlayer";

type ViewMode = 'NEWS' | 'GAME' | 'RADIO';

export default function Home() {
  const [view, setView] = useState<ViewMode>('NEWS');

  return (
    <main className="font-serif leading-relaxed text-justify min-h-screen flex flex-col">
      <Header />

      {/* 🧭 NAVIGATION MENU - Thanh điều hướng kiểu Mục lục báo */}
      <nav className="mb-8 border-y-4 border-double border-black py-3 bg-[#f0e6d2]">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-12 font-bold uppercase text-xs md:text-base tracking-widest">
          <li>
            <button 
              onClick={() => setView('NEWS')}
              className={`px-4 py-1 border border-transparent transition-all ${view === 'NEWS' ? 'border-black bg-black text-paper' : 'hover:border-black hover:bg-black/5'}`}
            >
              📰 Tin Chính Trị
            </button>
          </li>
          <li>
            <button 
              onClick={() => setView('GAME')}
              className={`px-4 py-1 border border-transparent transition-all ${view === 'GAME' ? 'border-black bg-black text-paper' : 'hover:border-black hover:bg-black/5'}`}
            >
              🎫 Cửa Hàng Mậu Dịch
            </button>
          </li>
          <li>
            <button 
              onClick={() => setView('RADIO')}
              className={`px-4 py-1 border border-transparent transition-all ${view === 'RADIO' ? 'border-black bg-black text-paper' : 'hover:border-black hover:bg-black/5'}`}
            >
              📻 Văn Nghệ CN
            </button>
          </li>
        </ul>
      </nav>

      {/* KHU VỰC HIỂN THỊ NỘI DUNG (Thay đổi dựa theo nút bấm) */}
      <div className="flex-1">
        
        {/* 1. Hiển thị Tin Tức */}
        {view === 'NEWS' && <NewsContent />}

        {/* 2. Hiển thị Game */}
        {view === 'GAME' && (
          <div className="animate-in zoom-in-95 duration-300">
            <TemPhieuGame />
          </div>
        )}

        {/* 3. Hiển thị Đài Radio */}
        {view === 'RADIO' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
             <div className="text-center mb-8 italic">
                "Mời quý thính giả đón nghe chương trình phát thanh..."
             </div>
             <RadioPlayer />
             
             {/* Trang trí thêm cho phần Radio đỡ trống */}
             <div className="mt-12 p-6 border border-black border-dashed text-center opacity-70">
                <h4 className="font-bold uppercase mb-2">Lịch Phát Sóng</h4>
                <ul className="text-sm space-y-1">
                   <li>06:00 - Thể dục buổi sáng</li>
                   <li>12:00 - Bản tin thời sự</li>
                   <li>18:00 - Kể chuyện cảnh giác</li>
                   <li>21:00 - Đọc truyện đêm khuya</li>
                </ul>
             </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}