'use client';
import { useState, useRef, useEffect } from 'react';

// 1. Định nghĩa kiểu dữ liệu cho một bài hát (Interface)
interface Track {
  id: string;
  title: string;
  fileName: string;
  program: string;
  time: string;
}

export default function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  
  // 2. Khai báo rõ ref này dùng cho thẻ HTMLAudioElement
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist: Track[] = [
    {
      id: 'morning',
      title: "Bài thể dục buổi sáng",
      fileName: "theduc.m4a",
      program: "Chào buổi sáng",
      time: "06:00 AM"
    },
    {
      id: 'noon',
      title: "Bản tin đặc biệt trưa 30/4",
      fileName: "tintuc.m4a",
      program: "Thời sự Trưa",
      time: "12:00 PM"
    },
    {
      id: 'evening',
      title: "Kể Chuyện Cảnh Giác VOV",
      fileName: "chuyenngobuon.m4a",
      program: "Câu chuyện Cảnh giác",
      time: "07:00 PM"
    },
    {
      id: 'night',
      title: "Bà Nội - Giọng Đọc NSƯT", 
      fileName: "chuyenbanoi.m4a",
      program: "Đọc truyện đêm khuya",
      time: "10:30 PM"
    }
  ];

  const currentTrack = playlist[currentTrackIndex];

  // 3. SỬA LỖI CHÍNH Ở ĐÂY: Thêm ": number" vào sau direction
  const changeTrack = (direction: number) => {
    let newIndex = currentTrackIndex + direction;
    
    // Loop lại danh sách nếu đi quá giới hạn
    if (newIndex < 0) newIndex = playlist.length - 1;
    if (newIndex >= playlist.length) newIndex = 0;

    setCurrentTrackIndex(newIndex);
    setIsPlaying(true); 
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Chặn autoplay:", e));
      }
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <div className="border-4 border-black bg-[#e8dfc7] p-6 max-w-md mx-auto relative shadow-xl mt-8 font-sans">
      {/* --- Visual Loa đài --- */}
      <div className="flex gap-2 mb-4">
         <div className="w-1/3 aspect-square bg-black/90 rounded-full flex items-center justify-center border-4 border-gray-600 shadow-inner">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping opacity-20"></div>
         </div>
         <div className="w-2/3 flex flex-col justify-between">
            <div className="bg-[#3e4435] h-full border-2 border-black/50 inset-shadow rounded p-2 text-xs font-mono text-[#a8bfa1] flex flex-col justify-between shadow-inner">
               <div className="flex justify-between items-start">
                 <span>FM 99.9Mhz</span>
                 <span className="text-[10px] border border-[#a8bfa1] px-1 rounded">{currentTrack.time}</span>
               </div>
               <div className="truncate whitespace-nowrap overflow-hidden">
                 {isPlaying ? 'ĐANG PHÁT SÓNG...' : 'ĐÃ TẠM DỪNG'}
               </div>
               <div className="border-t border-[#a8bfa1]/30 pt-1 mt-1">
                 VOV Giao Thông
               </div>
            </div>
         </div>
      </div>

      {/* --- Màn hình hiển thị tên chương trình --- */}
      <div className="text-center border-y-2 border-black py-3 mb-6 bg-[#dcd3b8]">
        <h4 className="text-xs uppercase tracking-widest text-gray-600 mb-1">{currentTrack.program}</h4>
        <h3 className="font-bold text-lg leading-tight min-h-[3.5rem] flex items-center justify-center px-2">
           {currentTrack.title}
        </h3>
      </div>

      {/* --- Bộ điều khiển --- */}
      <div className="flex justify-center items-center gap-6">
        <button 
          onClick={() => changeTrack(-1)}
          className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black flex items-center justify-center hover:bg-gray-400 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          ⏮
        </button>

        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-16 h-16 rounded-full border-4 border-black flex items-center justify-center text-2xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${isPlaying ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'}`}
        >
          {isPlaying ? '■' : '▶'}
        </button>

        <button 
          onClick={() => changeTrack(1)}
          className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black flex items-center justify-center hover:bg-gray-400 active:scale-95 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          ⏭
        </button>
      </div>

      <div className="mt-6 text-center text-sm font-medium text-gray-700 h-6">
        {isPlaying ? (
           <div className="flex justify-center items-center gap-2 animate-pulse text-red-700">
             <span>📡</span> Đang phát âm thanh...
           </div>
        ) : (
           <span className="text-gray-500 italic">(Đài đã tắt)</span>
        )}
      </div>
      
      <audio 
         ref={audioRef}
         src={`/video/${currentTrack.fileName}`} 
         onEnded={() => changeTrack(1)}
      />
    </div>
    
  );
} 