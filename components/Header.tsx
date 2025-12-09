/* components/Header.tsx */
import React from 'react';

// Định nghĩa kiểu dữ liệu nhận vào
interface HeaderProps {
  subTitle?: string; // Dấu ? nghĩa là không bắt buộc (mặc định sẽ là Tin Chính Trị)
}

const Header = ({ subTitle = "TIN CHÍNH TRỊ" }: HeaderProps) => {
  return (
    <header className="border-b-4 border-black mb-8 pb-4 font-serif text-center">
      <div className="flex justify-between items-end border-b border-black pb-2 mb-2 text-xs uppercase tracking-widest font-bold">
        <span>Cơ quan ngôn luận</span>
        <span>Hà Nội - 1982</span>
        <span>Số đặc biệt</span>
      </div>
      
      <div className="py-2">
        <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-1">Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam</h3>
        <h4 className="text-xs font-bold italic mb-4">Độc lập - Tự do - Hạnh phúc</h4>
        
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase scale-y-110 tracking-tighter mb-2" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>
          Báo Thời Bao Cấp
        </h1>
        <div className="flex items-center justify-center gap-4 my-3">
          <div className="h-[2px] w-12 bg-black"></div>
          
          {/* Thay đổi nội dung tĩnh thành biến subTitle */}
          <h2 className="text-xl md:text-2xl font-bold uppercase bg-ink text-paper px-4 py-1 min-w-[200px]">
            {subTitle}
          </h2>
          
          <div className="h-[2px] w-12 bg-black"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;