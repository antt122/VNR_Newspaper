import React from 'react';

const NewsContent = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Headline Chính */}
      <section className="mb-8 text-center border-b-2 border-black pb-6">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 leading-tight">
          Đại hội đại biểu toàn quốc lần thứ V của Đảng (1982)
        </h2>
        <div className="flex justify-center gap-8 text-sm italic font-bold">
          <span>📅 Tháng 3 năm 1982</span>
          <span>📍 Thủ đô Hà Nội</span>
        </div>
      </section>

      {/* Layout chia cột báo chí */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        
        {/* Đường kẻ dọc chia cột (chỉ hiện trên desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black opacity-30 transform -translate-x-1/2"></div>

        {/* CỘT TRÁI */}
        <div className="space-y-8">
          <article>
            <p className="drop-cap mb-4">
              Đại hội đại biểu toàn quốc lần thứ V của Đảng Cộng sản Việt Nam đã họp nội bộ từ ngày 15 đến 24-3-1982 và họp công khai từ ngày 27 đến ngày 31-3-1982 tại Thủ đô Hà Nội.
            </p>
            <p className="mb-4">
              Tham dự Đại hội có 1.033 đại biểu thay mặt hơn 1.727.000 đảng viên. Đại hội cũng đón 47 đoàn đại biểu quốc tế.
            </p>
          </article>

          <article className="border-t border-black pt-4">
            <h3 className="text-xl font-bold uppercase mb-2 border-b-2 border-black w-max inline-block pr-4">🌎 Bối cảnh lịch sử</h3>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong>Tình hình Kinh tế - Xã hội thế giới:</strong> Liên Xô và các nước XHCN Đông Âu gặp khó khăn, bắt đầu lâm vào khủng hoảng.</li>
              <li><strong>Khu vực Đông Nam Á:</strong> Các thế lực phản động quốc tế tăng cường can thiệp, đặc biệt là các hoạt động chống phá cách mạng Việt Nam.</li>
              <li><strong>Tình hình Việt Nam:</strong> Đất nước ở trong tình thế vừa có hòa bình, vừa phải đương đầu với một kiểu chiến tranh phá hoại nhiều mặt, đồng thời phải sẵn sàng đối phó với chiến tranh xâm lược quy mô lớn. Mỹ tiếp tục thực hiện chính sách bao vây, cấm vận Việt Nam.</li>
            </ul>
          </article>

          <article className="border-t border-black pt-4">
            <h3 className="text-xl font-bold uppercase mb-2">📝 Nội dung cơ bản của Đại hội V</h3>
            <p className="mb-3 italic">Đại hội đã thảo luận và thông qua các văn kiện quan trọng như: Báo cáo chính trị; Phương hướng, nhiệm vụ và những mục tiêu chủ yếu về kinh tế và xã hội trong 5 năm (1981-1985).</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold underline decoration-1 underline-offset-2">1. Thắng lợi trong 5 năm thực hiện Nghị quyết Đại hội IV</h4>
                <ul className="list-square pl-5 mt-1 text-sm">
                  <li>Thống nhất đất nước về mặt Nhà nước.</li>
                  <li>Giành thắng lợi trong cuộc chiến tranh bảo vệ Tổ quốc ở hai đầu biên giới.</li>
                  <li>Đạt được những thành tựu đáng kể trên mặt trận kinh tế.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold underline decoration-1 underline-offset-2">2. Hai nhiệm vụ chiến lược của cách mạng</h4>
                <p className="ml-4 border-l-2 border-black pl-3 my-2 italic font-medium">
                  "Xây dựng thành công chủ nghĩa xã hội. Sẵn sàng chiến đấu, bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa."
                </p>
              </div>

              <div>
                <h4 className="font-bold underline decoration-1 underline-offset-2">3. Về chặng đường đầu tiên của thời kỳ quá độ (1981-1990)</h4>
                <p>Nhiệm vụ cấp thiết: Ổn định tình hình kinh tế - xã hội.</p>
                <p><strong>Trọng tâm:</strong> Phát triển nông nghiệp (mặt trận hàng đầu), sản xuất hàng tiêu dùng và công nghiệp nặng quan trọng.</p>
                <div className="mt-2 bg-black/5 p-3 border border-black text-sm">
                  <strong>Thành phần kinh tế:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Miền Bắc: 3 thành phần.</li>
                    <li>Miền Nam: 5 thành phần (Quốc doanh, tập thể, công tư hợp doanh, cá thể, tư bản tư nhân).</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* CỘT PHẢI */}
        <div className="space-y-8">
           <article>
            <h4 className="font-bold underline decoration-1 underline-offset-2 mb-2">4. Đổi mới cơ chế quản lý</h4>
            <p className="mb-2"><strong>Chủ trương:</strong> Đổi mới đồng bộ, lấy kế hoạch nhà nước làm trung tâm, coi trọng các đòn bẩy kinh tế.</p>
            <p className="font-bold">Khẳng định: Kế hoạch nhà nước là cương lĩnh thứ hai của Đảng.</p>
          </article>

          <article className="border p-4 border-double border-4 border-black">
            <h4 className="font-bold text-center uppercase mb-3 border-b border-black pb-1">5. Chỉ tiêu Kinh tế - Xã hội (1981 - 1985)</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex justify-between border-b border-dotted border-black pb-1">
                <span>Nông nghiệp tăng:</span>
                <span>6 - 7%</span>
              </li>
              <li className="flex justify-between border-b border-dotted border-black pb-1">
                <span>Công nghiệp tăng:</span>
                <span>4 - 5%</span>
              </li>
              <li className="flex justify-between border-b border-dotted border-black pb-1">
                <span>Thu nhập quốc dân:</span>
                <span>4,5 - 5%</span>
              </li>
              <li className="flex justify-between">
                <span>Lương thực tăng:</span>
                <span>32%</span>
              </li>
            </ul>
          </article>

          <article>
             <h4 className="font-bold underline decoration-1 underline-offset-2 mb-2">6. Về công tác đối ngoại</h4>
             <p className="mb-2">Đoàn kết và hợp tác toàn diện với Liên Xô; quan hệ đặc biệt với Lào và Campuchia. Thiết lập quan hệ với tất cả các nước trên cơ sở bình đẳng và cùng có lợi.</p>
             
             <h4 className="font-bold underline decoration-1 underline-offset-2 mt-4 mb-2">7. Về công tác xây dựng Đảng</h4>
             <p>Đồng chí <strong>Lê Duẩn</strong> được bầu lại làm Tổng Bí thư.</p>
          </article>

          <article className="border-t-4 border-black pt-4 mt-6">
            <h3 className="text-xl font-bold uppercase mb-2">📈 Thành tựu & Hạn chế</h3>
            
            <div className="mb-4">
              <span className="bg-black text-paper px-2 py-0.5 text-xs font-bold uppercase mr-2">Thành tựu</span>
              <p className="inline">Nông nghiệp phát triển (Khoán 100), xây dựng thủy điện Hòa Bình, Trị An, khai thác dầu mỏ.</p>
            </div>
             <div>
              <span className="border border-black px-2 py-0.5 text-xs font-bold uppercase mr-2">Hạn chế</span>
              <p className="inline">Kinh tế mất cân đối, sản xuất chậm, đời sống khó khăn. Cơ chế bao cấp chưa được xóa bỏ triệt để.</p>
            </div>
          </article>

          <article className="bg-retro-red/10 p-4 border border-retro-red mt-4 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper px-2 text-retro-red font-bold text-xs uppercase border border-retro-red">Đột phá</div>
             <h4 className="font-bold text-retro-red mb-2 text-center">💡 Bước đột phá đổi mới kinh tế thứ hai</h4>
             <p className="text-sm italic text-center mb-2">(Hội nghị Trung ương 8 khóa V - 6/1985)</p>
             <p className="text-sm">Chủ trương xóa bỏ quan liêu bao cấp, thực hiện cơ chế một giá. Tuy nhiên, cuộc tổng điều chỉnh Giá - Lương - Tiền (9/1985) gặp sai lầm do nóng vội dẫn đến lạm phát.</p>
          </article>
        </div>
      </div>

      {/* Phần Ý Nghĩa */}
      <section className="mt-12 border-t-2 border-black pt-6">
        <h3 className="text-2xl font-bold uppercase text-center mb-4">⭐ Ý nghĩa lịch sử</h3>
        <div className="columns-1 md:columns-2 gap-8 text-lg font-medium">
          <p className="mb-4">
            Đại hội V phản ánh tư duy đổi mới từng bước của Đảng trong việc tìm tòi, tổng kết thực tiễn, đề ra những hướng đi sát hợp với điều kiện cụ thể của đất nước trong chặng đường đầu tiên của thời kỳ quá độ.
          </p>
          <p>
            Những tư duy này, dù chưa toàn diện, nhưng là những bước chuẩn bị quan trọng, tạo tiền đề cho bước phát triển nhảy vọt ở <strong>Đại hội VI (1986)</strong> – Đại hội mở đầu công cuộc Đổi mới.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsContent;