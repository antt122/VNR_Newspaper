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
          
          {/* MỤC 1: ĐÁNH GIÁ TÌNH HÌNH & HẠN CHẾ (SỬA LẠI THEO YÊU CẦU) */}
          <article>
            <h3 className="text-xl font-bold uppercase mb-2 border-b-2 border-black inline-block">1. Đánh giá & Hạn chế</h3>
            <p className="mb-3 font-bold text-sm">
               Thắng lợi: Thống nhất đất nước về mặt nhà nước, thắng lợi trong chiến tranh bảo vệ biên giới Tây Nam và biên giới phía Bắc.
            </p>
            
            {/* THÊM: Thực trạng kinh tế khó khăn */}
            <div className="bg-black/5 p-3 mb-4 border-l-4 border-black">
                <p className="italic text-sm">
                    "Tuy nhiên, nền kinh tế vẫn lâm vào khủng hoảng, mất cân đối trầm trọng, sản xuất trì trệ, lưu thông phân phối rối ren, đời sống nhân dân rất khó khăn."
                </p>
            </div>

            {/* THÊM: Hạn chế của Đại hội V (MỤC QUAN TRỌNG) */}
            <div className="border border-black p-3 bg-transparent">
                <h4 className="font-bold underline mb-2 text-sm uppercase">Sai lầm chủ quan của Đại hội V:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                        <strong>Nóng vội trong cải tạo XHCN:</strong> Vẫn đặt mục tiêu hoàn thành cải tạo XHCN ở miền Nam trong vòng 5 năm (1981-1985).
                    </li>
                    <li>
                        <strong>Tư duy cũ:</strong> Chưa thấy hết sự cần thiết khách quan của nền kinh tế nhiều thành phần; vẫn duy trì cơ chế tập trung quan liêu bao cấp.
                    </li>
                    <li>
                        Tiếp tục đặt nặng công nghiệp nặng trong điều kiện chưa cho phép.
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
             
             {/* 12 Nhiệm vụ (Rút gọn để tiết kiệm diện tích) */}
             <div className="text-sm border-t border-b border-black py-2 my-3">
                 <p className="font-bold mb-1">12 Nhiệm vụ chủ yếu (Tóm tắt):</p>
                 <p className="italic text-xs leading-relaxed">
                     Giải quyết nhu cầu cấp bách về đời sống; Phát triển & sắp xếp lại sản xuất; Đẩy mạnh cải tạo XHCN; Thực hành tiết kiệm; Đổi mới quản lý; Tăng cường an ninh quốc phòng...
                 </p>
             </div>
          </article>

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
        </div>

        {/* === CỘT PHẢI === */}
        <div className="space-y-8">
          
          {/* MỤC 3: KẾT QUẢ 1982-1985 (MỚI BỔ SUNG) */}
          <article>
              <h3 className="text-xl font-bold uppercase mb-3 border-b-2 border-black inline-block">3. Giai đoạn 1982 - 1985</h3>
              <p className="text-sm mb-2">
                  Sau Đại hội V, tình hình kinh tế - xã hội vẫn diễn biến phức tạp. Mặc dù có một số tiến bộ về văn hóa, xã hội, nhưng các cân đối lớn của nền kinh tế tiếp tục bị phá vỡ.
              </p>

              {/* HỘI NGHỊ TW 8 & LẠM PHÁT SIÊU TỐC */}
              <div className="border-2 border-black p-4 bg-transparent relative mt-4">
                 <span className="absolute -top-3 left-4 bg-[#fcf7e6] px-2 font-bold text-sm border border-black">Bước đột phá thứ hai (6/1985)</span>
                 <p className="text-sm mt-1">
                     Hội nghị TW 8 (khóa V) chủ trương xóa bỏ bao cấp, thực hiện cơ chế <strong>"Giá - Lương - Tiền"</strong>.
                 </p>
                 <div className="mt-2 bg-black text-white p-2 text-center">
                     <p className="text-xs uppercase font-bold">Hậu quả do nóng vội:</p>
                     <p className="text-lg font-bold">LẠM PHÁT 1986: 774%</p>
                 </div>
                 <p className="text-xs italic mt-2 text-justify">
                     Việc điều chỉnh giá - lương - tiền khi chưa chuẩn bị kỹ đã khiến cuộc khủng hoảng kinh tế lên đến đỉnh điểm, đặt ra yêu cầu bức thiết phải Đổi mới toàn diện.
                 </p>
              </div>
          </article>

          {/* MỤC 4: BƯỚC ĐỘT PHÁ THỨ BA (QUAN TRỌNG NHẤT - BỔ SUNG MỚI) */}
          <div className="border-4 double border-black p-1">
             <div className="border border-black p-4 bg-transparent">
                 <h4 className="font-bold uppercase text-center text-lg mb-2 underline decoration-2 underline-offset-4">
                    Bước đột phá thứ ba
                 </h4>
                 <p className="text-center text-xs font-bold mb-3 bg-black/10 py-1">HỘI NGHỊ BỘ CHÍNH TRỊ (8/1986)</p>
                 
                 <p className="text-sm mb-3 text-justify">
                     Đây là mốc son quyết định, đưa ra những quan điểm mới để soạn thảo văn kiện Đại hội VI:
                 </p>

                 <ul className="space-y-3 text-sm">
                     <li className="flex items-start">
                         <span className="font-bold mr-2 text-lg leading-none">•</span>
                         <span>
                            <strong>Cơ cấu lại sản xuất:</strong> Chuyển hướng trọng tâm sang thực hiện 3 chương trình kinh tế lớn: 
                            <span className="block font-bold mt-1 ml-1 border-l-2 border-black pl-2 italic">
                                Lương thực thực phẩm - Hàng tiêu dùng - Hàng xuất khẩu
                            </span>
                         </span>
                     </li>
                     <li className="flex items-start">
                         <span className="font-bold mr-2 text-lg leading-none">•</span>
                         <span>
                            <strong>Cải tạo XHCN:</strong> Thừa nhận cơ cấu kinh tế <strong>nhiều thành phần</strong>.
                         </span>
                     </li>
                     <li className="flex items-start">
                         <span className="font-bold mr-2 text-lg leading-none">•</span>
                         <span>
                            <strong>Cơ chế quản lý:</strong> Xóa bỏ cơ chế tập trung quan liêu bao cấp, chuyển sang <strong>hạch toán kinh doanh XHCN</strong>.
                         </span>
                     </li>
                 </ul>
             </div>
          </div>

          {/* MỤC: Ý NGHĨA LỊCH SỬ */}
          <div className="bg-black/5 p-4 border-l-4 border-black">
              <h4 className="font-bold uppercase text-sm mb-1">Ý nghĩa chuyển giao:</h4>
              <p className="text-sm italic text-justify">
                  Những tìm tòi, thử nghiệm và cả những thất bại đau đớn trong giai đoạn 1982-1986 đã cung cấp bài học thực tiễn quý giá, làm cơ sở để Đảng ta hoạch định đường lối <strong>Đổi mới</strong> toàn diện tại Đại hội VI (12/1986).
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