/* components/NewsContent.tsx */
import React from 'react';

const NewsContent = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12 font-serif text-justify leading-relaxed bg-transparent text-black">
      
      {/* --- PHẦN 1: HEADER & ẢNH LỚN --- */}
      <section className="mb-8">
        <div className="text-center mb-6">
           <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-60">Văn kiện Đảng toàn tập</p>
           
           <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 font-heading leading-tight" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>
             Đại hội đại biểu toàn quốc lần thứ V của Đảng
           </h2>
           
           <div className="inline-block bg-black text-[#fcf7e6] px-3 py-1 mb-4">
             <p className="italic font-bold text-sm">
               Hà Nội, ngày 27 đến 31 tháng 3 năm 1982
             </p>
           </div>
        </div>

        <div className="mb-6">
           <p className="text-base md:text-lg mb-4">
             <span className="float-left text-6xl font-bold mr-3 mt-[-10px] font-heading">T</span>
             ham dự Đại hội có 1033 đại biểu thay mặt 1.727.000 đảng viên hoạt động trong 35.146 đảng bộ cơ sở. Trong số đại biểu đó có 14 đảng viên từng tham gia các tổ chức tiền thân của Đảng; 102 đại biểu hoạt động trong các cơ sở sản xuất công nghiệp.
           </p>
        </div>

        {/* HÌNH 1: QUANG CẢNH - NỀN TRONG SUỐT */}
        <figure className="w-full mb-8 border-4 border-double border-black p-1 bg-transparent">
          <img 
            src="/daihoi/1.png" 
            alt="Quang cảnh Đại hội V" 
            className="w-full h-auto object-cover grayscale contrast-110" 
          />
          <figcaption className="text-xs md:text-sm italic text-center mt-2 pt-2 border-t border-black border-dotted">
            (Ảnh tư liệu) Toàn cảnh phiên khai mạc trọng thể tại Hội trường Ba Đình.
          </figcaption>
        </figure>
      </section>

      {/* --- PHẦN 2: NỘI DUNG CHÍNH (2 CỘT) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-start">
        
        {/* Đường kẻ dọc chia đôi */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black opacity-30 transform -translate-x-1/2 h-full"></div>

        {/* === CỘT TRÁI === */}
        <div className="space-y-8">
          
          {/* KHUNG DANH SÁCH NGƯỜI ĐỌC BÁO CÁO - BG TRANSPARENT */}
          <div className="border border-black p-4 bg-transparent shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
             <h4 className="font-bold uppercase text-center mb-3 text-sm border-b border-black pb-1 inline-block w-full">
               Nội dung làm việc chính
             </h4>
             <ul className="space-y-2 text-sm italic font-medium px-2">
               <li>- Đ/c <strong>Trường Chinh</strong> đọc lời khai mạc.</li>
               <li>- Đ/c <strong>Lê Duẩn</strong> đọc Báo cáo chính trị.</li>
               <li>- Đ/c <strong>Phạm Văn Đồng</strong> báo cáo về nhiệm vụ KT-XH.</li>
               <li>- Đ/c <strong>Lê Đức Thọ</strong> báo cáo về xây dựng Đảng.</li>
             </ul>
          </div>

          {/* MỤC 1: ĐÁNH GIÁ TÌNH HÌNH */}
          <article>
            <h3 className="text-xl font-bold uppercase mb-2 border-b-2 border-black inline-block">1. Đánh giá tình hình</h3>
            <p className="mb-4">
              Báo cáo chính trị khẳng định: Thành công rực rỡ của Đảng và nhân dân ta đã nhanh chóng thống nhất đất nước về mặt nhà nước, tăng cường khối đoàn kết toàn dân tộc; Thắng lợi trong cuộc chiến đấu bảo vệ chủ quyền lãnh thổ.
            </p>
            
            <div className="border-l-4 border-black pl-4 py-2 my-4">
              <p className="font-bold text-lg leading-tight italic">
                “Năm năm qua được ghi vào lịch sử dân tộc như một đoạn đường thắng lợi vẻ vang của cách mạng Việt Nam”.
              </p>
            </div>
          </article>

          {/* KHUNG: NHÌN NHẬN KHUYẾT ĐIỂM - BG TRANSPARENT */}
          <div className="border-2 border-black p-4 bg-transparent relative">
             <h4 className="font-bold uppercase text-center mb-3 text-lg underline underline-offset-4 decoration-2">
               Nhìn nhận khuyết điểm
             </h4>
             <p className="text-sm mb-3">
               Báo cáo cũng vạch rõ những khó khăn yếu kém. Kết quả thực hiện các kế hoạch kinh tế 5 năm (1976-1980) chưa thu hẹp được những mặt mất cân đối nghiêm trọng.
             </p>
             <div className="text-sm p-2 border border-black bg-transparent">
               <p className="font-bold underline mb-1">Nguyên nhân chủ quan:</p>
               <ul className="list-disc pl-5 space-y-1">
                 <li>Chủ quan, nóng vội đề ra chỉ tiêu quá lớn.</li>
                 <li>Duy trì quá lâu cơ chế quản lý hành chính bao cấp.</li>
                 <li>Quan liêu, xa rời thực tế, bảo thủ, trì trệ.</li>
               </ul>
             </div>
          </div>

          {/* MỤC 3: CÔNG TÁC XÂY DỰNG ĐẢNG */}
          <article>
             <h3 className="text-xl font-bold uppercase mb-3 border-b-2 border-black inline-block mt-2">3. Công tác xây dựng Đảng</h3>
             <p className="mb-3 text-sm">
               Nhiệm vụ then chốt là nâng cao tính giai cấp công nhân, tính tiên phong của Đảng, xây dựng Đảng vững mạnh về chính trị, tư tưởng và tổ chức.
             </p>
             <div className="p-3 border-l-2 border-black text-sm italic bg-transparent">
               <ul className="list-disc pl-4 space-y-1">
                 <li>Nâng cao năng lực lãnh đạo kinh tế.</li>
                 <li>Đổi mới công tác cán bộ.</li>
                 <li>Giữ gìn đoàn kết thống nhất trong Đảng.</li>
               </ul>
             </div>
          </article>
        </div>

        {/* === CỘT PHẢI === */}
        <div className="space-y-8">
          
          {/* HÌNH 2: ĐỒNG CHÍ LÊ DUẨN */}
          <figure className="w-full mb-6 border border-black p-1 shadow-sm bg-transparent">
             <img 
               src="/daihoi/2.jpg" 
               alt="Đồng chí Lê Duẩn đọc báo cáo" 
               className="w-full h-auto object-cover grayscale brightness-95" 
             />
             <figcaption className="text-xs font-bold text-center mt-1 py-1 bg-black text-white uppercase tracking-wider">
               Đ/c Tổng Bí thư LÊ DUẨN đọc Báo cáo Chính trị
             </figcaption>
          </figure>

          {/* MỤC 2: NHIỆM VỤ CHIẾN LƯỢC */}
          <article>
             <h3 className="text-xl font-bold uppercase mb-3 border-b-2 border-black inline-block">2. Hai nhiệm vụ chiến lược</h3>
             <p className="mb-3 font-medium">
               Đảng phải lãnh đạo nhân dân ta thực hiện hai nhiệm vụ chiến lược:
             </p>
             <div className="text-center font-bold text-lg border-y-2 border-black py-3 italic mb-4">
               "Xây dựng thành công chủ nghĩa xã hội và sẵn sàng chiến đấu bảo vệ Tổ quốc."
             </div>
          </article>

          {/* KHUNG: 12 NHIỆM VỤ CHỦ YẾU - BG TRANSPARENT */}
          <div className="border-2 border-black p-5 bg-transparent">
             <h4 className="font-bold uppercase text-center mb-4 text-sm border-b-2 border-black pb-2">
               12 Nhiệm vụ chủ yếu
             </h4>
             <ol className="list-decimal pl-5 space-y-2 text-sm leading-snug">
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Giải quyết những vấn đề cấp bách nhất về đời sống.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Phát triển và sắp xếp lại sản xuất, phân bố lại lao động.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Bố trí lại xây dựng cơ bản phù hợp khả năng.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Cải tiến công tác phân phối lưu thông.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Đẩy mạnh cải tạo xã hội chủ nghĩa.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Làm tốt hợp tác kinh tế quốc tế.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Thực hành tiết kiệm nghiêm ngặt.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Ứng dụng nhanh chóng khoa học kỹ thuật.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Đổi mới hệ thống quản lý kinh tế.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Đẩy mạnh văn hoá, y tế, giáo dục.</li>
               <li className="pl-2 border-b border-dashed border-black/30 pb-1">Tăng cường quản lý xã hội, an ninh.</li>
               <li className="pl-2">Bảo đảm nhu cầu kinh tế cho quốc phòng.</li>
             </ol>
          </div>

          {/* KHUNG: BAN CHẤP HÀNH - BG TRANSPARENT */}
          <div className="border-4 double border-black p-1 mt-6">
             <div className="border border-black p-4 text-center bg-transparent">
               <h4 className="uppercase font-bold text-sm mb-2">Ban Chấp Hành Trung Ương</h4>
               <div className="w-16 h-[2px] bg-black mx-auto mb-3"></div>
               <p className="text-sm"><strong>116</strong> ủy viên chính thức</p>
               <p className="text-sm"><strong>36</strong> ủy viên dự khuyết</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- PHẦN KẾT LUẬN --- */}
      <section className="mt-12 border-t-4 border-black pt-6 text-center">
        <p className="text-2xl font-bold uppercase mb-2 font-heading">
          "Tất cả vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của nhân dân"
        </p>
      </section>
    </div>
  );
};

export default NewsContent;