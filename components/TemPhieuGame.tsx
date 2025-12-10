/* components/TemPhieuGame.tsx */
'use client';

import { useState } from 'react';

// --- Types ---
type InventoryItem = {
  name: string;
  unit: string;
  quantity: number;
  icon: string;
  description?: string;
};

type InventoryKey = 'thit' | 'gao' | 'vai' | 'duong' | 'dau' | 'thoc' | 'banh' | 'ca' | 'trung' | 'sua';

type SocialClass = {
  id: string;
  name: string;
  code: string;
  description: string;
  icon: string;
  inventory: Record<InventoryKey, InventoryItem>;
};

// --- Data ---
const SOCIAL_CLASSES: SocialClass[] = [
  {
    id: 'db',
    name: 'Cán bộ cao cấp',
    code: 'Tiêu chuẩn ĐB',
    description: 'Lãnh đạo cấp cao. Phân phối tại Tôn Đản.',
    icon: '⭐',
    inventory: {
      thit: { name: 'Thịt Lợn', unit: 'kg', quantity: 2.0, icon: '🥩', description: 'Thịt nạc mông' },
      gao: { name: 'Gạo Tẻ', unit: 'kg', quantity: 15, icon: '🌾', description: 'Gạo Tám thơm' },
      vai: { name: 'Vải May', unit: 'm', quantity: 5, icon: '🧵', description: 'Vải nhập khẩu' },
      duong: { name: 'Đường', unit: 'kg', quantity: 1.5, icon: '🍬', description: 'Đường kính trắng' },
      dau: { name: 'Dầu Ăn', unit: 'lít', quantity: 1.5, icon: '🛢️', description: 'Dầu thực vật' },
      thoc: { name: 'Thóc', unit: 'kg', quantity: 10, icon: '🌽', description: 'Thóc nếp cái' },
      banh: { name: 'Bánh Mì', unit: 'ổ', quantity: 15, icon: '🍞', description: 'Bánh mì bơ' },
      ca: { name: 'Cá Tươi', unit: 'kg', quantity: 2, icon: '🐟', description: 'Cá thu' },
      trung: { name: 'Trứng', unit: 'quả', quantity: 20, icon: '🥚', description: 'Trứng gà ta' },
      sua: { name: 'Sữa Tươi', unit: 'lít', quantity: 5, icon: '🥛', description: 'Sữa bò tươi' }
    }
  },
  {
    id: 'e',
    name: 'Cán bộ CNVC',
    code: 'Tiêu chuẩn E',
    description: 'Cán bộ, giáo viên, nhân viên hành chính.',
    icon: '👔',
    inventory: {
      thit: { name: 'Thịt Lợn', unit: 'kg', quantity: 0.5, icon: '🥩', description: 'Thịt ba chỉ' },
      gao: { name: 'Gạo Tẻ', unit: 'kg', quantity: 5, icon: '🌾', description: 'Gạo mậu dịch' },
      vai: { name: 'Vải May', unit: 'm', quantity: 2, icon: '🧵', description: 'Vải phin' },
      duong: { name: 'Đường', unit: 'kg', quantity: 0.5, icon: '🍬', description: 'Đường đỏ' },
      dau: { name: 'Dầu Ăn', unit: 'lít', quantity: 0.5, icon: '🛢️', description: 'Dầu lẻ' },
      thoc: { name: 'Thóc', unit: 'kg', quantity: 3, icon: '🌽', description: 'Thóc tẻ' },
      banh: { name: 'Bánh Mì', unit: 'ổ', quantity: 5, icon: '🍞', description: 'Bánh mì bột' },
      ca: { name: 'Cá Khô', unit: 'kg', quantity: 0.4, icon: '🐟', description: 'Cá mắm' },
      trung: { name: 'Trứng', unit: 'quả', quantity: 6, icon: '🥚', description: 'Trứng vịt' },
      sua: { name: 'Sữa Đặc', unit: 'hộp', quantity: 2, icon: '🥛', description: 'Sữa Ông Thọ' }
    }
  },
  {
    id: 'n',
    name: 'Nhân dân',
    code: 'Tiêu chuẩn N',
    description: 'Người dân lao động tự do, xã viên HTX.',
    icon: '👨‍🌾',
    inventory: {
      thit: { name: 'Thịt', unit: 'kg', quantity: 0.3, icon: '🥩', description: 'Thịt bạc nhạc' },
      gao: { name: 'Gạo', unit: 'kg', quantity: 3, icon: '🌾', description: 'Gạo hẩm, mốc' },
      vai: { name: 'Vải', unit: 'm', quantity: 1, icon: '🧵', description: 'Vải thô' },
      duong: { name: 'Đường', unit: 'kg', quantity: 0.2, icon: '🍬', description: 'Đường phế phẩm' },
      dau: { name: 'Dầu', unit: 'lít', quantity: 0.3, icon: '🛢️', description: 'Dầu luyn' },
      thoc: { name: 'Thóc', unit: 'kg', quantity: 2, icon: '🌽', description: 'Thóc lép' },
      banh: { name: 'Bánh Mì', unit: 'ổ', quantity: 3, icon: '🍞', description: 'Bánh mì đen' },
      ca: { name: 'Cá', unit: 'kg', quantity: 0.2, icon: '🐟', description: 'Đầu cá khô' },
      trung: { name: 'Trứng', unit: 'quả', quantity: 3, icon: '🥚', description: 'Trứng ung' },
      sua: { name: 'Sữa', unit: 'hộp', quantity: 0, icon: '🥛', description: 'Không có tiêu chuẩn' }
    }
  }
];

export default function TemPhieuGame() {
  const [selectedClass, setSelectedClass] = useState<SocialClass | null>(null);
  const [inventory, setInventory] = useState<Record<InventoryKey, InventoryItem> | null>(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'warning'>('success');
  const [showDoiMoi, setShowDoiMoi] = useState(false);
  const [purchaseHistory, setPurchaseHistory] = useState<string[]>([]);
  // Đã xóa state selectedImage vì không dùng Modal nữa

  // Shop state
  const [shopStock, setShopStock] = useState<Record<InventoryKey, number>>({
    thit: 10, gao: 20, vai: 8, duong: 5, dau: 6, thoc: 15, banh: 12, ca: 7, trung: 18, sua: 9
  });

  // Queue state
  const [isQueuing, setIsQueuing] = useState(false);
  const [queueProgress, setQueueProgress] = useState(0);
  const [queueItem, setQueueItem] = useState<InventoryKey | null>(null);

  // --- Handlers ---

  const handleSelectClass = (socialClass: SocialClass) => {
    setSelectedClass(socialClass);
    setInventory(JSON.parse(JSON.stringify(socialClass.inventory))); // Deep copy
    setMessage('');
    setPurchaseHistory([]);
    setShowDoiMoi(false);
    setIsQueuing(false);
    setQueueProgress(0);

    // Randomize shop stock slightly
    setShopStock({
        thit: Math.floor(Math.random() * 8) + 3,
        gao: Math.floor(Math.random() * 15) + 10,
        vai: Math.floor(Math.random() * 6) + 2,
        duong: Math.floor(Math.random() * 5) + 2,
        dau: Math.floor(Math.random() * 5) + 3,
        thoc: Math.floor(Math.random() * 10) + 8,
        banh: Math.floor(Math.random() * 10) + 5,
        ca: Math.floor(Math.random() * 6) + 2,
        trung: Math.floor(Math.random() * 12) + 8,
        sua: Math.floor(Math.random() * 7) + 3
    });
  };

  const handleBuy = (item: InventoryKey) => {
    if (!inventory || isQueuing) return;

    if (inventory[item].quantity <= 0) {
      setMessage(`⚠ Hết phiếu mua ${inventory[item].name}!`);
      setMessageType('error');
      return;
    }

    if (shopStock[item] <= 0) {
      setMessage(`📢 Cửa hàng báo HẾT ${inventory[item].name.toUpperCase()}!`);
      setMessageType('warning');
      return;
    }

    // Start Queuing logic
    setIsQueuing(true);
    setQueueItem(item);
    setQueueProgress(0);
    setMessage('Đang xếp hàng... Đề nghị bà con giữ trật tự.');
    setMessageType('warning');

    const queueTime = Math.random() * 2000 + 2000;
    const interval = 50;
    const steps = queueTime / interval;
    let currentStep = 0;

    const queueInterval = setInterval(() => {
      currentStep++;
      setQueueProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(queueInterval);

        // 20% chance to run out of stock while queuing
        const isSoldOut = Math.random() < 0.2;

        if (isSoldOut) {
          setMessage(`😞 Đến lượt thì ${inventory[item].name} vừa hết! Mời bà con quay lại sau.`);
          setMessageType('error');
          setShopStock(prev => ({ ...prev, [item]: 0 }));
        } else {
          // Success logic
          const itemData = inventory[item];
          
          setInventory(prev => {
             if (!prev) return null;
             const newQuantity = parseFloat((prev[item].quantity - 1).toFixed(1));
             return {
                 ...prev,
                 [item]: { ...prev[item], quantity: newQuantity < 0 ? 0 : newQuantity }
             };
          });

          setShopStock(prev => ({ ...prev, [item]: Math.max(0, prev[item] - 1) }));
          
          setMessage(`✅ Đã mua thành công 1 ${itemData.unit} ${itemData.name}.`);
          setMessageType('success');
          setPurchaseHistory(prev => [
            `${new Date().toLocaleTimeString('vi-VN')}: Mua 1 ${itemData.unit} ${itemData.name}`,
            ...prev
          ]);
        }
        setIsQueuing(false);
        setQueueProgress(0);
        setQueueItem(null);
      }
    }, interval);
  };

  const allItemsUsed = inventory ? Object.values(inventory).every(item => item.quantity <= 0) : false;

  // --- RENDER: SELECT CLASS SCREEN ---
  if (!selectedClass) {
    return (
      <div className="border-4 double border-black bg-paper p-6 relative shadow-xl">
         {/* Decorative Header */}
        <div className="text-center mb-8 border-b-2 border-black pb-4">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-2 tracking-tighter">
            Trải Nghiệm Tem Phiếu
          </h1>
          <p className="italic font-serif text-lg">"Phân phối theo lao động - Hưởng thụ theo cống hiến"</p>
        </div>

        {/* Introduction */}
        <div className="mb-8 text-justify">
           <p className="mb-2"><span className="font-bold text-4xl float-left mr-2 leading-none">T</span>rong thời kỳ bao cấp (1976-1986), mọi nhu yếu phẩm đều được Nhà nước phân phối qua hệ thống tem phiếu. Vị trí xã hội khác nhau sẽ có tiêu chuẩn khác nhau.</p>
           <p className="font-bold italic">Hãy chọn một thành phần để bắt đầu trải nghiệm cuộc sống xếp hàng:</p>
        </div>

        {/* Class Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_CLASSES.map((socialClass) => (
            <button
              key={socialClass.id}
              onClick={() => handleSelectClass(socialClass)}
              className="group border-2 border-black p-4 hover:bg-ink hover:text-paper transition-all duration-300 relative overflow-hidden text-left"
            >
              <div className="absolute top-2 right-2 text-4xl opacity-20 group-hover:opacity-100 grayscale transition-opacity">
                {socialClass.icon}
              </div>
              <h3 className="text-xl font-bold uppercase border-b border-current mb-2 pb-1 inline-block">
                {socialClass.code}
              </h3>
              <div className="text-lg font-bold mb-1">{socialClass.name}</div>
              <p className="text-xs italic opacity-80">{socialClass.description}</p>
              
              <div className="mt-4 text-xs border-t border-dashed border-current pt-2">
                 Ví dụ: {socialClass.inventory.thit.quantity}kg thịt, {socialClass.inventory.gao.quantity}kg gạo...
              </div>
            </button>
          ))}
        </div>

        {/* Gallery Preview (Mini) - Hình vuông nhỏ (80x80px) */}
        <div className="mt-10 border-t-2 border-black pt-6">
            <h4 className="font-bold uppercase text-sm mb-8 text-center decoration-wavy underline">
              Tư liệu hiện vật
            </h4>

            {/* CẬP NHẬT GRID: grid-cols-2 trên mobile, md:grid-cols-3 trên tablet trở lên để thành "3 trên 3 dưới" */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 justify-items-center">

                {/* Ảnh 1: Tem Phiếu */}
                <a
                  href="/temphieu/tem1.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block"
                >
                  <img
                    src="/temphieu/tem1.webp"
                    alt="Phiếu Mua Hàng"
                    className="object-cover w-full h-full p-0.5"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-paper/80 px-1 text-black">
                    Phiếu Mua Hàng
                  </span>
                </a>

                {/* Ảnh 2: Sổ Gạo */}
                <a
                  href="/temphieu/tem2.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block"
                >
                  <img src="/temphieu/tem2.png" alt="Sổ Gạo" className="object-cover w-full h-full p-0.5" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-paper/80 px-1 text-black">
                      Sổ Gạo
                  </span>
                </a>

                {/* Ảnh 3: Tem Lương Thực */}
                <a
                  href="/temphieu/tem3.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block"
                >
                  <img src="/temphieu/tem3.webp" alt="Tem Lương Thực" className="object-cover w-full h-full p-0.5" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-paper/80 px-1 text-black">
                      Tem Lương Thực
                  </span>
                </a>

                {/* Ảnh 4: Bìa Mua Hàng */}
                <a
                  href="/temphieu/tem4.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block"
                >
                  <img src="/temphieu/tem4.jpg" alt="Bìa Mua Hàng" className="object-cover w-full h-full p-0.5" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-paper/80 px-1 text-black">
                      Bìa Mua Hàng
                  </span>
                </a>

                {/* --- ẢNH MỚI THÊM 1 (PLACEHOLDER) --- */}
                {/* Bạn hãy thay thế href và src bằng đường dẫn ảnh thật của bạn */}
                <a
                  href="/temphieu/tem5.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block"
                >
                   {/* Sử dụng ảnh placeholder tạm thời để giữ chỗ */}
                  <img
                      src="/temphieu/tem5.jpg"
                      alt="Cảnh xếp hàng mua đồ mậu dịch"
                      className="object-cover w-full h-full p-0.5"
                  />
                  {/* Thay đổi phụ đề ở đây */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-paper/80 px-1 text-black">
                      Cảnh xếp hàng mua đồ mậu dịch
                  </span>
                </a>

                {/* --- ẢNH MỚI THÊM 2 (PLACEHOLDER) --- */}
                {/* Bạn hãy thay thế href và src bằng đường dẫn ảnh thật của bạn */}
                 <a
                  href="/temphieu/tem6.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block"
                >
                   {/* Sử dụng ảnh placeholder tạm thời để giữ chỗ */}
                  <img
                      src="/temphieu/tem6.webp"
                      alt="Cửa hàng mậu dịch"
                      className="object-cover w-full h-full p-0.5"
                  />
                   {/* Thay đổi phụ đề ở đây */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-paper/80 px-1 text-black">
                      Cửa hàng mậu dịch
                  </span>
                </a>

            </div>

            <p className="text-center text-[10px] italic mt-10 opacity-60 pb-4">(Bấm vào ảnh để mở link gốc)</p>
        </div>
      </div>
    );
  }

// ... phần còn lại của component giữ nguyên ...

  // --- RENDER: MAIN GAME SCREEN ---
  return (
    <div className="border-4 border-black bg-paper p-2 md:p-6 relative min-h-[600px] shadow-2xl">
      
      {/* Header Game */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-4 mb-6 gap-4">
        <div>
           <div className="text-xs font-bold uppercase tracking-[0.2em] mb-1">Cửa hàng mậu dịch số 1</div>
           <h2 className="text-3xl font-bold uppercase leading-none">Sổ Mua Hàng</h2>
           <div className="mt-2 text-sm font-bold bg-black text-paper inline-block px-2 py-1">
             Hộ: {selectedClass.name} ({selectedClass.code})
           </div>
        </div>
        <button 
          onClick={() => { setSelectedClass(null); setInventory(null); }}
          className="border-2 border-black px-4 py-1 hover:bg-retro-red hover:text-white hover:border-retro-red font-bold uppercase text-sm transition-colors"
        >
          ← Chọn lại hộ
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: INVENTORY (Sổ Lương Thực) */}
        <div className="lg:col-span-5 space-y-4">
            <div className="border-2 border-black p-4 bg-[#fdfbf7] relative">
                {/* Stamps visuals */}
                <div className="absolute -top-3 left-4 bg-paper px-2 font-bold uppercase text-sm border border-black">
                    Sổ Lương Thực
                </div>
                
                <div className="space-y-3 mt-2">
                    {inventory && Object.entries(inventory).map(([key, item]) => (
                        <div key={key} className={`flex justify-between items-center border-b border-dotted border-black pb-2 ${item.quantity <= 0 ? 'opacity-40 line-through decoration-retro-red decoration-2' : ''}`}>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <div className="font-bold text-sm uppercase">{item.name}</div>
                                    <div className="text-[10px] italic">{item.description}</div>
                                </div>
                            </div>
                            <div className="font-mono font-bold">
                                {item.quantity > 0 ? `${item.quantity}` : '0'} <span className="text-xs font-serif">{item.unit}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* History Log */}
            <div className="border border-black p-2 h-32 overflow-y-auto bg-black/5 font-mono text-xs">
                <div className="font-bold border-b border-black mb-1">Ghi chép mua hàng:</div>
                {purchaseHistory.length === 0 ? <span className="italic opacity-50">Chưa mua gì hôm nay...</span> : (
                    <ul className="list-disc pl-4 space-y-1">
                        {purchaseHistory.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                )}
            </div>
        </div>

        {/* RIGHT COLUMN: SHOP (Quầy Mậu Dịch) */}
        <div className="lg:col-span-7">
            <div className="border-2 border-black p-1">
                <div className="border border-black p-4 bg-paper">
                    <h3 className="text-center font-bold uppercase text-xl mb-4 decoration-double underline underline-offset-4">
                        Quầy Phân Phối
                    </h3>

                    {/* Status Message Area */}
                    <div className="min-h-[60px] mb-4 flex items-center justify-center">
                        {isQueuing ? (
                            <div className="w-full">
                                <p className="text-xs font-bold uppercase mb-1 animate-pulse text-center">Đang xếp hàng...</p>
                                <div className="w-full h-6 border-2 border-black p-[2px]">
                                    <div 
                                        className="h-full bg-black transition-all duration-75" 
                                        style={{ width: `${queueProgress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ) : message ? (
                            <div className={`w-full p-2 border text-center font-bold text-sm ${messageType === 'error' ? 'border-retro-red text-retro-red bg-red-50' : messageType === 'warning' ? 'border-black bg-yellow-100' : 'border-black bg-green-50'}`}>
                                {message}
                            </div>
                        ) : (
                            <div className="text-center italic text-sm opacity-60">
                                "Vui lòng xếp hàng, trật tự, xuất trình bìa gạo, sổ mua hàng"
                            </div>
                        )}
                    </div>

                    {/* Shop Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {inventory && Object.entries(inventory).map(([key, item]) => {
                             const itemKey = key as InventoryKey;
                             const stock = shopStock[itemKey];
                             const outOfStock = stock <= 0;
                             const userOutOfTicket = item.quantity <= 0;

                             return (
                                 <button
                                     key={key}
                                     disabled={userOutOfTicket || isQueuing || outOfStock}
                                     onClick={() => handleBuy(itemKey)}
                                     className="relative group border border-black aspect-square flex flex-col items-center justify-center p-2 transition-all hover:bg-black hover:text-white disabled:hover:bg-transparent disabled:hover:text-ink disabled:opacity-50 disabled:cursor-not-allowed"
                                 >
                                     {/* Out of stock stamp */}
                                     {outOfStock && (
                                         <div className="absolute inset-0 flex items-center justify-center z-10">
                                             <div className="border-2 border-retro-red text-retro-red font-bold uppercase text-xs px-2 py-1 -rotate-12 bg-paper/80">
                                                 Hết hàng
                                             </div>
                                         </div>
                                     )}
                                     
                                     {/* User out of ticket stamp */}
                                     {!outOfStock && userOutOfTicket && (
                                         <div className="absolute inset-0 flex items-center justify-center z-10">
                                              <div className="border-2 border-black text-black font-bold uppercase text-xs px-2 py-1 rotate-12 bg-paper/80">
                                                 Hết phiếu
                                             </div>
                                         </div>
                                     )}

                                     <div className="text-3xl mb-1">{item.icon}</div>
                                     <div className="font-bold text-xs uppercase text-center leading-tight">{item.name}</div>
                                     <div className="text-[10px] mt-1 font-mono">Kho: {stock}</div>
                                 </button>
                             )
                        })}
                    </div>
                </div>
            </div>

            {/* Doi Moi Modal Trigger */}
            {allItemsUsed && !showDoiMoi && (
                <div className="mt-6 text-center animate-bounce">
                    <p className="mb-2 italic text-sm">Cuộc sống quá khó khăn?</p>
                    <button 
                        onClick={() => setShowDoiMoi(true)} 
                        className="bg-retro-red text-white font-bold py-2 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        Tìm hiểu về Đổi Mới (1986)
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* DOI MOI MODAL (Overlay) */}
      {showDoiMoi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowDoiMoi(false)}>
            <div className="bg-paper border-4 border-black max-w-2xl w-full p-6 md:p-10 shadow-2xl relative" onClick={e => e.stopPropagation()}>
                <button 
                    onClick={() => setShowDoiMoi(false)}
                    className="absolute top-4 right-4 text-2xl font-bold hover:text-retro-red"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-bold text-retro-red uppercase text-center mb-6 border-b-2 border-retro-red pb-4">
                    Đại Hội VI - Gió Mới (12/1986)
                </h2>

                <div className="space-y-4 text-justify leading-relaxed">
                    <p className="font-bold">
                        Đất nước đã từng trải qua những năm tháng khó khăn như bạn vừa trải nghiệm: Tem phiếu hạn chế, xếp hàng cả ngày vẫn về tay không, ngăn sông cấm chợ.
                    </p>
                    <p>
                        Trước tình hình đó, <span className="font-bold">Đại hội Đảng lần thứ VI (12/1986)</span> đã đề ra đường lối <span className="text-retro-red font-bold uppercase">Đổi Mới</span> toàn diện:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 italic">
                        <li>Xóa bỏ cơ chế tập trung quan liêu, bao cấp.</li>
                        <li>Phát triển nền kinh tế hàng hóa nhiều thành phần.</li>
                        <li>Mở cửa hội nhập kinh tế quốc tế.</li>
                    </ul>
                    <div className="bg-black text-paper p-4 mt-6 text-center font-bold uppercase border-2 border-retro-red">
                        Kết quả: Việt Nam từ nước thiếu đói trở thành nước xuất khẩu gạo hàng đầu thế giới!
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
}