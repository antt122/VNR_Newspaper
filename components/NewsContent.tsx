/* components/NewsContent.tsx */
import React from 'react';

const NewsContent = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12 font-serif text-justify leading-relaxed bg-transparent text-black">
      
      {/* --- PHẦN 1: HEADER (GIỮ NGUYÊN) --- */}
      <section className="mb-6 border-b-4 border-double border-black pb-6">
        <div className="text-center mb-6">
           <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-60">Văn kiện Đảng toàn tập</p>
           
           <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 font-heading leading-tight" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>
             Đại hội đại biểu toàn quốc lần thứ V của Đảng
           </h2>
           
           <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-bold italic">
             <span className="bg-black text-[#fcf7e6] px-3 py-1">Hà Nội: 15/3 - 31/3/1982</span>
           </div>
        </div>

        {/* SAPO: ĐOẠN MỞ ĐẦU */}
        <div className="text-base md:text-lg font-medium italic px-4 md:px-12 mb-6 text-center opacity-90">
             "Trước bối cảnh đất nước lâm vào khủng hoảng kinh tế - xã hội nghiêm trọng, Đại hội V đặt ra câu hỏi sinh tử: Vì sao tình hình lại sa sút và làm thế nào để thoát ra khỏi cuộc khủng hoảng đang ở mức 'dưới đáy'?"
        </div>

        {/* HÌNH 1: QUANG CẢNH */}
        <figure className="w-full mb-4 border-2 border-black p-1 bg-transparent">
          <img 
            src="/daihoi/1.png" 
            alt="Quang cảnh Đại hội V" 
            className="w-full h-auto object-cover grayscale contrast-110 max-h-[400px]" 
          />
          <figcaption className="text-xs italic text-center mt-1 pt-1 border-t border-black/50">
            Quang cảnh phiên khai mạc trọng thể tại Hội trường Ba Đình với 1.033 đại biểu tham dự. (Ảnh tư liệu)
          </figcaption>
        </figure>
      </section>

      {/* --- PHẦN 2: NỘI DUNG CHI TIẾT (CHIA 2 CỘT) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
        
        {/* === CỘT TRÁI === */}
        <div className="space-y-6">
            
            {/* MỤC 1: BỐI CẢNH KINH TẾ - XÃ HỘI */}
            <article>
                <h3 className="font-bold uppercase text-lg border-b-2 border-black inline-block mb-3">1. Những điểm sáng và khoảng tối</h3>
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-[-8px] font-heading">
                    Đến đầu năm 1982, bức tranh kinh tế có những mảng sáng. Trong nông nghiệp, hình thức <strong>Khoán sản phẩm (Chỉ thị 100)</strong> đã được áp dụng rộng rãi, đem lại hiệu quả rõ rệt. Năng suất và sản lượng lương thực đều tăng, bước đầu khắc phục được sự trì trệ trong các Hợp tác xã.
                </p>
                <p className="mt-3">
                    Trong công nghiệp, việc thực hiện <strong>Quyết định 25-CP và 26-CP</strong> đã tạo luồng gió mới trong thi đua sản xuất tại các xí nghiệp quốc doanh. Đời sống người lao động ở một số nơi từng bước được cải thiện.
                </p>
            </article>

            {/* BOX KHỦNG HOẢNG */}
            <div className="border-4 double border-black p-4 bg-black/5">
                <h4 className="font-bold uppercase text-center text-sm underline mb-2">Thực trạng "Dưới đáy"</h4>
                <p className="italic text-justify text-sm">
                    "Tuy nhiên, đổi mới chỉ là bước đầu. Nền kinh tế vẫn mất cân đối nghiêm trọng. Thu nhập quốc dân không đủ bảo đảm tiêu dùng xã hội (phải dựa vào vay và viện trợ). <strong>Lương thực, vải mặc và hàng tiêu dùng thiết yếu đều thiếu thốn gay gắt.</strong>"
                </p>
            </div>

            {/* MỤC 2: TỰ PHÊ BÌNH (Rất quan trọng) */}
            <article>
                <h3 className="font-bold uppercase text-lg border-b-2 border-black inline-block mb-3 mt-4">2. Đảng nghiêm khắc tự phê bình</h3>
                <p>
                    Báo cáo Chính trị tại Đại hội đã thẳng thắn chỉ rõ: Bên cạnh thắng lợi, chúng ta có rất nhiều khuyết điểm. Kết quả thực hiện kế hoạch 5 năm (1976-1980) chưa thu hẹp được mất cân đối.
                </p>
                <p className="mt-2">
                    Trên mặt trận kinh tế, văn hóa, trận địa xã hội chủ nghĩa đang bị những nhân tố tư bản chủ nghĩa và phi xã hội chủ nghĩa xâm lấn.
                </p>
                
                {/* Trích dẫn nổi bật */}
                <blockquote className="border-l-4 border-black pl-4 my-4 font-bold italic text-lg leading-snug">
                    "Đó là những khuyết điểm, sai lầm rất nghiêm trọng. Ban Chấp hành Trung ương xin nghiêm khắc tự phê bình trước Đại hội."
                </blockquote>
                <p>
                    Đại hội đề nghị sau đợt này sẽ tiến hành phê bình sâu sắc trong toàn Đảng, toàn quân để sửa chữa.
                </p>
            </article>
        </div>

        {/* === CỘT PHẢI === */}
        <div className="space-y-6">
            
            {/* THÔNG TIN LÃNH ĐẠO */}
            <div className="bg-[#f0e6d2] p-4 border border-black shadow-[4px_4px_0px_black]">
                <div className="flex gap-4">
                    <img src="/daihoi/2.jpg" alt="Lê Duẩn" className="w-24 h-32 object-cover border border-black grayscale"/>
                    <div>
                        <h4 className="font-bold uppercase text-sm border-b border-black mb-1">Kết quả Bầu cử</h4>
                        <ul className="text-sm list-disc pl-4 space-y-1 mt-2">
                            <li><strong>BCH Trung ương:</strong> 116 ủy viên chính thức, 36 dự khuyết.</li>
                            <li><strong>Tổng Bí thư:</strong> Đồng chí <strong>LÊ DUẨN</strong> tái đắc cử.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* MỤC 3: HAI NHIỆM VỤ CHIẾN LƯỢC */}
            <article>
                <h3 className="font-bold uppercase text-lg border-b-2 border-black inline-block mb-3">3. Hai nhiệm vụ chiến lược</h3>
                <p className="mb-2">
                    Trên cơ sở phân tích sâu sắc tình hình, Báo cáo Chính trị đề ra hai nhiệm vụ chiến lược xuyên suốt cho toàn Đảng, toàn dân:
                </p>
                <ul className="list-decimal pl-5 font-bold space-y-2 mb-4">
                    <li className="uppercase">Xây dựng thành công chủ nghĩa xã hội.</li>
                    <li className="uppercase">Sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc Việt Nam XHCN.</li>
                </ul>
                <p className="text-sm italic border-t border-black/30 pt-2">
                    Đồng thời, tăng cường đoàn kết đặc biệt với Lào, Campuchia và hợp tác toàn diện với Liên Xô.
                </p>
            </article>

            {/* MỤC 4: NHIỆM VỤ CẤP BÁCH 1981-1985 */}
            <article>
                <h3 className="font-bold uppercase text-lg border-b-2 border-black inline-block mb-3">4. Mục tiêu 5 năm (1981 - 1985)</h3>
                <p className="text-justify mb-3">
                    Đại hội xác định mục tiêu là cơ bản ổn định tình hình kinh tế - xã hội, đáp ứng những nhu cầu cấp bách nhất (ăn, mặc, ở, học hành, chữa bệnh).
                </p>
                
                {/* LIST BOX */}
                <div className="border border-black p-3">
                    <h5 className="font-bold uppercase text-xs mb-2 text-center ">Tư duy đổi mới bước đầu:</h5>
                    <ul className="text-sm space-y-2 list-square marker:text-black pl-4">
                        <li>
                            <span className="font-bold">Nông nghiệp là mặt trận hàng đầu:</span> Thay đổi tư duy so với việc ưu tiên quá mức công nghiệp nặng trước đây.
                        </li>
                        <li>
                            <span className="font-bold">Kinh tế nhiều thành phần:</span> Xác định rõ việc duy trì nền kinh tế nhiều thành phần ở miền Nam trong chặng đường trước mắt.
                        </li>
                    </ul>
                </div>
            </article>

            {/* MỤC 5: XÂY DỰNG ĐẢNG */}
            <article>
                 <h3 className="font-bold uppercase text-lg border-b-2 border-black inline-block mb-3">5. Công tác Xây dựng Đảng</h3>
                 <p className="text-sm text-justify">
                    Khẳng định Đảng Cộng sản Việt Nam là một Đảng Mác - Lênin kiên cường. Tuy nhiên, cần nâng cao tính giai cấp công nhân và tính tiên phong. Làm cho Đảng luôn trong sạch, vững mạnh, gắn bó mật thiết với quần chúng để lãnh đạo nhân dân vượt qua khó khăn lịch sử này.
                 </p>
            </article>
        </div>

      </div>

      {/* --- PHẦN KẾT (FOOTER CỦA BÀI BÁO) --- */}
      <section className="mt-8 border-t-4 border-black pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-2/3">
                  <p className="font-bold uppercase text-sm">Ý nghĩa lịch sử:</p>
                  <p className="text-sm italic">
                      Đại hội V đánh dấu bước trưởng thành về tư duy: Biết nhìn thẳng vào sự thật, xác định đúng chặng đường đầu tiên của thời kỳ quá độ, đặt nền móng cho những đổi mới mạnh mẽ hơn sau này.
                  </p>
              </div>
              <div className="w-full md:w-1/3 text-right">
                  <span className="inline-block border-2 border-black px-4 py-2 font-bold uppercase text-xs tracking-widest bg-black text-white">
                      Theo Văn kiện Đảng
                  </span>
              </div>
          </div>
      </section>
    </div>
  );
};

export default NewsContent;