'use client';
import { useState } from 'react';

export default function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="border-4 border-black bg-[#e8dfc7] p-6 max-w-md mx-auto relative shadow-xl mt-8">
      {/* Loa đài - Visual trang trí */}
      <div className="flex gap-2 mb-4">
         <div className="w-1/3 aspect-square bg-black/80 rounded-full flex items-center justify-center border-4 border-gray-600">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
         </div>
         <div className="w-2/3 flex flex-col justify-between">
            <div className="bg-black/10 h-full border-inner border-black rounded p-2 text-xs font-mono">
               Tần số: 99.9 Mhz<br/>
               Đài Tiếng Nói Việt Nam
            </div>
         </div>
      </div>

      <h3 className="font-bold uppercase text-lg text-center border-y border-black py-2 mb-4">
        📻 Chương trình Văn Nghệ
      </h3>

      <div className="flex justify-center gap-4">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full border-2 border-black flex items-center justify-center font-bold transition-all ${isPlaying ? 'bg-retro-red text-white' : 'bg-gray-300 text-black'}`}
        >
          {isPlaying ? '■' : '▶'}
        </button>
      </div>

      <div className="mt-4 text-center italic text-sm">
        {isPlaying ? (
           <span className="animate-pulse text-retro-red">"Đây là Tiếng nói Việt Nam..." 🎶</span>
        ) : (
           <span>(Bấm nút để nghe đài)</span>
        )}
      </div>
      
      {/* Thẻ audio ẩn (bạn có thể thay link nhạc mp3 thật vào đây) */}
      {isPlaying && (
         <audio autoPlay loop src="https://upload.wikimedia.org/wikipedia/commons/7/77/Voice_of_Vietnam_interval_signal.ogg" />
      )}
    </div>
  );
}