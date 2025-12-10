/* components/Header.tsx */
import React from 'react';

interface HeaderProps {
  subTitle?: string;
}

const Header = ({ subTitle = "TIN CHÍNH TRỊ" }: HeaderProps) => {
  return (
    <header className="border-b-4 border-black mb-8 pb-4 font-serif text-center">
      {/* --- Dòng thông tin nhỏ trên cùng --- */}
      <div className="flex justify-between items-end border-b border-black pb-2 mb-2 text-xs uppercase tracking-widest font-bold opacity-70">
        <span>Cơ quan ngôn luận</span>
        <span>Hà Nội - 1982</span>
        <span>Số đặc biệt</span>
      </div>
      
      <div className="py-2">
        {/* --- LOGO CỜ ĐẢNG --- */}
        {/* Vì để trong public nên src là "/co-dang.webp" */}
        <div className="flex justify-center mb-3">
            <img 
              src="codang/codangnuoc.jpg" 
              alt="Huy hiệu Cờ Đảng" 
              className="w-20 h-auto object-contain drop-shadow-md"
            />
        </div>

        {/* --- QUỐC HIỆU --- */}
        <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-1">
          Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam
        </h3>
        <h4 className="text-xs font-bold italic mb-4">
          Độc lập - Tự do - Hạnh phúc
        </h4>
        
        {/* --- TÊN BÁO (Style to, đậm) --- */}
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase scale-y-110 tracking-tighter mb-2 leading-none" 
            style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.15)' }}>
          Báo Thời Bao Cấp
        </h1>

        {/* --- KHUNG TIÊU ĐỀ PHỤ --- */}
        <div className="flex items-center justify-center gap-4 my-4">
          <div className="h-[2px] w-12 bg-black"></div>
          
          <h2 className="text-xl md:text-2xl font-bold uppercase bg-black text-[#fcf7e6] px-6 py-1 min-w-[200px] transform -skew-x-6 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
            <span className="block transform skew-x-6">{subTitle}</span>
          </h2>
          
          <div className="h-[2px] w-12 bg-black"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;