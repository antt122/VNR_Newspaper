// components/TVPlayer.tsx
import React from 'react';

interface TVPlayerProps {
  // Đường dẫn video tương đối từ thư mục public
  videoSrc: string; 
  title: string;
}

const TVPlayer = ({ videoSrc, title }: TVPlayerProps) => {
  return (
    // Sử dụng Tailwind CSS để tạo hiệu ứng TV cũ
    <div className="mx-auto max-w-4xl p-6 border-4 border-black bg-[#404040] shadow-[8px_8px_0px_rgba(0,0,0,0.5)] rounded-xl transform rotate-1 scale-105">
      
      {/* Khung Màn hình */}
      <div className="bg-black p-2 border border-white/20 rounded-lg">
        <video 
          // Đặt đường dẫn video tại đây
          src={videoSrc} 
          controls 
          className="w-full h-auto max-h-[500px] object-cover rounded"
          autoPlay={false} // Khuyến nghị không tự động phát
          loop={true}      
          muted={true}     
          // Bạn có thể đặt một ảnh poster để hiển thị khi video chưa tải
          // poster="/images/tv-static.jpg" 
        >
          Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>
      </div>

      {/* Thông tin kênh/tiêu đề */}
      <div className="mt-4 flex justify-between items-center text-[#fcf7e6]">
        <span className="text-lg font-bold uppercase">{title}</span>
        <div className="flex items-center gap-2">
            <span className="text-sm">Kênh: VTV1</span>
            <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse"></div>
        </div>
      </div>

      {/* Trang trí nút vặn TV */}
      <div className="absolute -top-4 right-10 w-8 h-8 bg-[#8b8b8b] border-2 border-black rounded-full shadow-inner transform rotate-12"></div>
      <div className="absolute -top-4 right-20 w-8 h-8 bg-[#8b8b8b] border-2 border-black rounded-full shadow-inner transform -rotate-12"></div>
    </div>
  );
};

export default TVPlayer;