import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 pt-4 border-t-2 border-black text-center text-sm font-serif">
      <div className="grid grid-cols-3 gap-4 mb-4 text-xs uppercase font-bold border-b border-black pb-4">
        <div>Tổng biên tập: Tập thể</div>
        <div>Trụ sở: Hà Nội</div>
        <div>Giá: 5 hào</div>
      </div>
      <p className="italic opacity-80">
        "Lưu hành nội bộ - Tài liệu nghiên cứu lịch sử Đảng"
      </p>
    </footer>
  );
};

export default Footer;