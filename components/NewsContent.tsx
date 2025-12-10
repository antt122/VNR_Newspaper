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
           <p className="text-base md:text-lg mb-4 first-letter:float-left first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:mt-[-10px] first-letter:font-heading">
             Tham dự Đại hội có 1033 đại biểu thay mặt 1.727.000 đảng viên. Đại hội diễn ra trong bối cảnh đất nước vừa bước ra khỏi chiến tranh nhưng lại đối mặt với cuộc khủng hoảng kinh tế - xã hội trầm trọng.
           </p>
        </div>

        {/* HÌNH 1: QUANG CẢNH */}
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

      {/* --- PHẦN 2: NỘI DUNG CHÍNH (GRID 2 CỘT) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-start">
        
        {/* Đường kẻ dọc chia đôi (chỉ hiện trên desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black opacity-30 transform -translate-x-1/2 h-full"></div>

        {/* === CỘT TRÁI === */}
        <div className="space-y-8">
          
          {/* MỤC 1: ĐÁNH GIÁ & HẠN CHẾ */}
          <article>
            <h3 className="text-xl font-bold uppercase mb-2 border-b-2 border-black inline-block">1. Đánh giá tình hình</h3>
            <p className="mb-3 font-bold text-sm">
               Thắng lợi: Thống nhất đất nước về mặt nhà nước, thắng lợi trong chiến tranh bảo vệ biên giới Tây Nam và biên giới phía Bắc.
            </p>
            
            {/* Thực trạng kinh tế (QUAN TRỌNG) */}
            <div className="bg-black/5 p-3 mb-4 border-l-4 border-black">
                <p className="italic text-sm">
                    "Tuy nhiên, nền kinh tế vẫn lâm vào khủng hoảng, mất cân đối trầm trọng, sản xuất trì trệ, lưu thông phân phối rối ren, đời sống nhân dân rất khó khăn."
                </p>
            </div>

            {/* Hạn chế của Đại hội V (BẮT BUỘC CÓ) */}
            <div className="border border-black p-3 bg-transparent">
                <h4 className="font-bold underline mb-2 text-sm uppercase">Sai lầm chủ quan:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                        <strong>Nóng vội cải tạo XHCN:</strong> Vẫn đặt mục tiêu hoàn thành cải tạo ở miền Nam trong 5 năm (1981-1985).
                    </li>
                    <li>
                        <strong>Tư duy cũ:</strong> Chưa thấy hết sự cần thiết của kinh tế nhiều thành phần; vẫn duy trì bao cấp nặng nề.
                    </li>
                    <li>
                        Ưu tiên công nghiệp nặng chưa hợp lý.
                    </li>
                </ul>
            </div>
          </article>

          {/* MỤC 2: NHIỆM VỤ CHIẾN LƯỢC */}
          <article>
             <h3 className="text-xl font-bold uppercase mb-3 border-b-2 border-black inline-block mt-2">2. Đường lối Đại hội</h3>
             <p className="mb-3 text-sm">
               Đại hội đề ra hai nhiệm vụ chiến lược: <strong>Xây dựng thành công chủ nghĩa xã hội và sẵn sàng chiến đấu bảo vệ Tổ quốc.</strong>
             </p>
          </article>

          {/* KHUNG: 12 NHIỆM VỤ (ĐÃ KHÔI PHỤC FULL) */}
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

        </div>

        {/* === CỘT PHẢI === */}
        <div className="space-y-8">
          
          {/* KHUNG: BAN CHẤP HÀNH (ĐÃ KHÔI PHỤC) */}
          <div className="border-4 double border-black p-1">
             <div className="border border-black p-4 text-center bg-transparent">
               <h4 className="uppercase font-bold text-sm mb-2">Ban Chấp Hành Trung Ương</h4>
               <div className="w-16 h-[2px] bg-black mx-auto mb-3"></div>
               <div className="flex justify-around items-center">
                   <div>
                       <p className="text-3xl font-bold font-heading">116</p>
                       <p className="text-xs uppercase">Chính thức</p>
                   </div>
                   <div className="h-8 w-[1px] bg-black"></div>
                   <div>
                       <p className="text-3xl font-bold font-heading">36</p>
                       <p className="text-xs uppercase">Dự khuyết</p>
                   </div>
               </div>
             </div>
          </div>

          {/* HÌNH 2 */}
          <figure className="w-full mb-4 border border-black p-1 shadow-sm bg-transparent">
              <img 
                src="/daihoi/2.jpg" 
                alt="Đồng chí Lê Duẩn" 
                className="w-full h-auto object-cover grayscale brightness-95" 
              />
              <figcaption className="text-xs font-bold text-center mt-1 py-1 bg-black text-white uppercase tracking-wider">
                Đ/c Tổng Bí thư LÊ DUẨN đọc Báo cáo Chính trị
              </figcaption>
          </figure>

          {/* MỤC 3: KẾT QUẢ 1982-1985 (PHẦN MỚI CẦN THIẾT) */}
          <article>
              <h3 className="text-xl font-bold uppercase mb-3 border-b-2 border-black inline-block">3. Giai đoạn 1982 - 1985</h3>
              <p className="text-sm mb-2">
                  Các cân đối lớn của nền kinh tế tiếp tục bị phá vỡ. Việc cải cách giá - lương - tiền năm 1985 do nóng vội đã dẫn đến lạm phát phi mã.
              </p>

              {/* LẠM PHÁT SIÊU TỐC - Dẫn chứng quan trọng */}
              <div className="border border-black p-4 bg-transparent relative mt-4">
                 <p className="text-xs uppercase font-bold border-b border-black inline-block mb-2">Hội nghị TW 8 (6/1985)</p>
                 <div className="flex items-center justify-between">
                     <span className="text-sm font-bold">Lạm phát năm 1986:</span>
                     <span className="text-4xl font-bold font-heading">774%</span>
                 </div>
                 <p className="text-xs italic mt-2 text-right">
                     (Khủng hoảng kinh tế lên tới đỉnh điểm)
                 </p>
              </div>
          </article>

          {/* MỤC 4: BƯỚC ĐỘT PHÁ THỨ BA (NỘI DUNG QUAN TRỌNG NHẤT) */}
          <div className="border-4 double border-black p-1 bg-[#fcf7e6]/50">
             <div className="border border-black p-4 bg-transparent">
                 <h4 className="font-bold uppercase text-center text-lg mb-2 underline decoration-2 underline-offset-4">
                    Bước đột phá thứ ba
                 </h4>
                 <p className="text-center text-xs font-bold mb-3 bg-black text-white py-1">HỘI NGHỊ BỘ CHÍNH TRỊ (8/1986)</p>
                 
                 <p className="text-sm mb-3 text-justify">
                     Đây là mốc son quyết định, đưa ra những quan điểm mới ("Kết luận đối với một số vấn đề kinh tế") để chuẩn bị cho Đại hội VI:
                 </p>

                 <ul className="space-y-3 text-sm">
                     <li className="flex items-start">
                         <span className="font-bold mr-2 text-lg leading-none">1.</span>
                         <span>
                            <strong>Cơ cấu sản xuất:</strong> Tập trung thực hiện 3 chương trình mục tiêu: 
                            <span className="block font-bold mt-1 italic text-xs uppercase border border-black p-1 text-center bg-transparent">
                                Lương thực TP - Hàng tiêu dùng - Xuất khẩu
                            </span>
                         </span>
                     </li>
                     <li className="flex items-start">
                         <span className="font-bold mr-2 text-lg leading-none">2.</span>
                         <span>
                            <strong>Cải tạo XHCN:</strong> Thừa nhận cơ cấu kinh tế <strong>nhiều thành phần</strong>.
                         </span>
                     </li>
                     <li className="flex items-start">
                         <span className="font-bold mr-2 text-lg leading-none">3.</span>
                         <span>
                            <strong>Quản lý kinh tế:</strong> Xóa bỏ bao cấp, chuyển sang <strong>hạch toán kinh doanh</strong>.
                         </span>
                     </li>
                 </ul>
             </div>
          </div>

          {/* Ý NGHĨA */}
          <div className="bg-black/5 p-4 border-l-4 border-black mt-4">
              <p className="text-sm italic text-justify font-medium">
                  → Những bước đột phá này đã làm thay đổi tư duy của Đảng, tạo cơ sở lý luận và thực tiễn quan trọng để Đại hội VI (12/1986) đề ra đường lối <strong>Đổi mới</strong> toàn diện.
              </p>
          </div>

        </div>
      </div>

      {/* --- PHẦN KẾT LUẬN --- */}
      <section className="mt-12 border-t-4 border-black pt-6 text-center">
        <p className="text-xl md:text-2xl font-bold uppercase mb-2 font-heading">
          "Tất cả vì Tổ quốc xã hội chủ nghĩa, vì hạnh phúc của nhân dân"
        </p>
      </section>
    </div>
  );
};

export default NewsContent;