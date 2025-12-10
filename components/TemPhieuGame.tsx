/* components/TemPhieuGame.tsx */
'use client';

import { useState, useEffect, useRef } from 'react';

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
  
  // Shop state (Kho hàng)
  const [shopStock, setShopStock] = useState<Record<InventoryKey, number>>({
    thit: 10, gao: 20, vai: 8, duong: 5, dau: 6, thoc: 15, banh: 12, ca: 7, trung: 18, sua: 9
  });

  // --- LOGIC STATES ---
  const [isQueuing, setIsQueuing] = useState(false);
  const [isAtCounter, setIsAtCounter] = useState(false);
  
  // Xếp hàng
  const [peopleAhead, setPeopleAhead] = useState<number>(0); 
  const [queueTurnTimer, setQueueTurnTimer] = useState<number>(0);

  // Mua hàng (Chờ 10s)
  const [processingItem, setProcessingItem] = useState<InventoryKey | null>(null);
  const [processTimer, setProcessTimer] = useState<number>(0);

  // --- EFFECT 1: XỬ LÝ XẾP HÀNG (QUEUE) - SỬA LỖI -1 ---
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isQueuing) {
      interval = setInterval(() => {
        // Logic NPC mua hàng
        if (Math.random() < 0.4) {
             setShopStock(prevStock => {
                const keys = Object.keys(prevStock) as InventoryKey[];
                const randomKey = keys[Math.floor(Math.random() * keys.length)];
                if (prevStock[randomKey] > 0) {
                    return { ...prevStock, [randomKey]: prevStock[randomKey] - 1 };
                }
                return prevStock;
             });
        }

        // Logic đếm ngược lượt người
        setQueueTurnTimer((prevTimer) => {
          if (prevTimer <= 1) {
             // Hết thời gian của 1 lượt
             // Kiểm tra xem còn người phía trước không
             if (peopleAhead > 0) {
                 setPeopleAhead(prev => prev - 1); // Giảm người
                 return 15; // Reset 15s cho người tiếp theo
             } else {
                 // Đã hết người -> Vào quầy NGAY LẬP TỨC
                 finishQueue();
                 return 0;
             }
          }
          return prevTimer - 1;
        });

      }, 1000);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isQueuing, peopleAhead]); // Quan trọng: dependency peopleAhead để biết khi nào dừng

  // Hàm helper để kết thúc xếp hàng an toàn
  const finishQueue = () => {
      setIsQueuing(false);
      setIsAtCounter(true);
      setMessage('📢 ĐẾN LƯỢT BẠN! Mậu dịch viên hỏi: "Mua gì nói nhanh?"');
      setMessageType('success');
  };

  // --- EFFECT 2: XỬ LÝ MUA HÀNG (WAIT 10s) ---
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (processingItem && processTimer > 0) {
        interval = setInterval(() => {
            setProcessTimer(prev => prev - 1);
        }, 1000);
    } else if (processingItem && processTimer === 0) {
        // Hết 10s chờ -> Thực hiện giao dịch
        completeTransaction(processingItem);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processingItem, processTimer]);


  // --- FUNCTIONS ---

  const handleStartQueue = () => {
      setIsQueuing(true);
      setIsAtCounter(false);
      setMessage('Đang xếp hàng... Kho hàng đang vơi đi từng giây!');
      setMessageType('warning');
      
      // Random đợi từ 1 đến 3 người
      const randomPeople = Math.floor(Math.random() * 3) + 1; 
      setPeopleAhead(randomPeople);
      setQueueTurnTimer(15); 
  };

  const handleBuyClick = (item: InventoryKey) => {
    if (!inventory || !isAtCounter || processingItem) return;

    if (inventory[item].quantity <= 0) {
        setMessage(`⚠ Hết phiếu mua ${inventory[item].name}!`);
        setMessageType('error');
        return;
    }
    if (shopStock[item] <= 0) {
        setMessage(`😞 Hết hàng rồi!`);
        setMessageType('error');
        return;
    }

    setProcessingItem(item);
    setProcessTimer(10); // Đợi 10 giây
    setMessage(`⏳ Mậu dịch viên đang đi lấy ${inventory[item].name}... (Chờ 10s)`);
    setMessageType('warning');
  };

  const completeTransaction = (item: InventoryKey) => {
    if (shopStock[item] <= 0) {
         setMessage(`😞 Đắng lòng! Vừa vào kho lấy thì phát hiện hết hàng!`);
         setMessageType('error');
         setProcessingItem(null);
         return;
    }

    setInventory(prev => {
        if (!prev) return null;
        const newQuantity = parseFloat((prev[item].quantity - 1).toFixed(1));
        return {
            ...prev,
            [item]: { ...prev[item], quantity: newQuantity < 0 ? 0 : newQuantity }
        };
    });

    setShopStock(prev => ({ 
        ...prev, 
        [item]: Math.max(0, prev[item] - 1) 
    }));
    
    const itemData = inventory![item];
    setPurchaseHistory(prev => [
      `${new Date().toLocaleTimeString('vi-VN')}: Mua 1 ${itemData.unit} ${itemData.name}`,
      ...prev
    ]);

    setMessage(`✅ Xong! Đã nhận 1 ${itemData.unit} ${itemData.name}.`);
    setMessageType('success');
    
    setProcessingItem(null);
  };

  const handleLeaveCounter = () => {
      setIsAtCounter(false);
      setMessage('Đã rời quầy. Muốn mua thêm phải xếp hàng lại.');
      setMessageType('warning');
  };

  const handleSelectClass = (socialClass: SocialClass) => {
    setSelectedClass(socialClass);
    setInventory(JSON.parse(JSON.stringify(socialClass.inventory))); 
    setMessage('');
    setPurchaseHistory([]);
    setShowDoiMoi(false);
    setIsQueuing(false);
    setIsAtCounter(false);
    setPeopleAhead(0);
    setProcessingItem(null);

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

  const allItemsUsed = inventory ? Object.values(inventory).every(item => item.quantity <= 0) : false;

  // --- RENDER ---
  if (!selectedClass) {
    return (
      <div className="border-4 double border-black bg-paper p-6 relative shadow-xl">
        <div className="text-center mb-8 border-b-2 border-black pb-4">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-2 tracking-tighter">
            Trải Nghiệm Tem Phiếu
          </h1>
          <p className="italic font-serif text-lg">"Phân phối theo lao động - Hưởng thụ theo cống hiến"</p>
        </div>
        <div className="mb-8 text-justify">
           <p className="mb-2"><span className="font-bold text-4xl float-left mr-2 leading-none">T</span>rong thời kỳ bao cấp (1976-1986), mọi nhu yếu phẩm đều được Nhà nước phân phối qua hệ thống tem phiếu. Vị trí xã hội khác nhau sẽ có tiêu chuẩn khác nhau.</p>
           <p className="font-bold italic">Hãy chọn một thành phần để bắt đầu trải nghiệm cuộc sống xếp hàng:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_CLASSES.map((socialClass) => (
            <button
              key={socialClass.id}
              onClick={() => handleSelectClass(socialClass)}
              className="group border-2 border-black p-4 hover:bg-black hover:text-[#fcf7e6] transition-all duration-300 relative overflow-hidden text-left"
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
        
        {/* Gallery Preview */}
        <div className="mt-10 border-t-2 border-black pt-6">
            <h4 className="font-bold uppercase text-sm mb-8 text-center decoration-wavy underline">
              Tư liệu hiện vật
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 justify-items-center">
                <a href="/temphieu/tem1.webp" target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block">
                  <img src="/temphieu/tem1.webp" alt="Phiếu Mua Hàng" className="object-cover w-full h-full p-0.5" />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-[#fcf7e6]/80 px-1 text-black">Phiếu Mua Hàng</span>
                </a>
                <a href="/temphieu/tem2.png" target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block">
                  <img src="/temphieu/tem2.png" alt="Sổ Gạo" className="object-cover w-full h-full p-0.5" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-[#fcf7e6]/80 px-1 text-black">Sổ Gạo</span>
                </a>
                <a href="/temphieu/tem3.webp" target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block">
                  <img src="/temphieu/tem3.webp" alt="Tem Lương Thực" className="object-cover w-full h-full p-0.5" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-[#fcf7e6]/80 px-1 text-black">Tem Lương Thực</span>
                </a>
                <a href="/temphieu/tem4.jpg" target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block">
                  <img src="/temphieu/tem4.jpg" alt="Bìa Mua Hàng" className="object-cover w-full h-full p-0.5" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-[#fcf7e6]/80 px-1 text-black">Bìa Mua Hàng</span>
                </a>
                <a href="/temphieu/tem5.jpg" target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block">
                   <img src="/temphieu/tem5.jpg" alt="Cảnh xếp hàng" className="object-cover w-full h-full p-0.5" />
                   <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-[#fcf7e6]/80 px-1 text-black">Cảnh xếp hàng</span>
                </a>
                 <a href="/temphieu/tem6.webp" target="_blank" rel="noopener noreferrer" className="relative w-20 h-20 border-2 border-black bg-gray-200 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block">
                   <img src="/temphieu/tem6.webp" alt="Cửa hàng mậu dịch" className="object-cover w-full h-full p-0.5" />
                   <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max text-center text-[9px] font-bold uppercase bg-[#fcf7e6]/80 px-1 text-black">Cửa hàng mậu dịch</span>
                </a>
            </div>
            <p className="text-center text-[10px] italic mt-10 opacity-60 pb-4">(Bấm vào ảnh để mở link gốc)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-4 border-black bg-paper p-2 md:p-6 relative min-h-[600px] shadow-2xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-4 mb-6 gap-4">
        <div>
           <div className="text-xs font-bold uppercase tracking-[0.2em] mb-1">Cửa hàng mậu dịch số 1</div>
           <h2 className="text-3xl font-bold uppercase leading-none">Sổ Mua Hàng</h2>
           <div className="mt-2 text-sm font-bold bg-black text-[#fcf7e6] inline-block px-2 py-1">
             Hộ: {selectedClass.name} ({selectedClass.code})
           </div>
        </div>
        <button 
          onClick={() => { setSelectedClass(null); setInventory(null); }}
          className="border-2 border-black px-4 py-1 hover:bg-[#D9381E] hover:text-white hover:border-[#D9381E] font-bold uppercase text-sm transition-colors"
        >
          ← Chọn lại hộ
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: SỔ LƯƠNG THỰC */}
        <div className="lg:col-span-5 space-y-4">
            <div className="border-2 border-black p-4 bg-[#fdfbf7] relative">
                <div className="absolute -top-3 left-4 bg-paper px-2 font-bold uppercase text-sm border border-black">
                    Sổ Lương Thực
                </div>
                <div className="space-y-3 mt-2">
                    {inventory && Object.entries(inventory).map(([key, item]) => (
                        <div key={key} className={`flex justify-between items-center border-b border-dotted border-black pb-2 ${item.quantity <= 0 ? 'opacity-40 line-through decoration-[#D9381E] decoration-2' : ''}`}>
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
            <div className="border border-black p-2 h-32 overflow-y-auto bg-black/5 font-mono text-xs">
                <div className="font-bold border-b border-black mb-1">Ghi chép mua hàng:</div>
                <ul className="list-disc pl-4 space-y-1">
                    {purchaseHistory.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
            </div>
        </div>

        {/* RIGHT COLUMN: QUẦY MẬU DỊCH */}
        <div className="lg:col-span-7">
            <div className="border-2 border-black p-1">
                <div className={`border border-black p-4 bg-paper relative transition-all duration-500 ${isAtCounter ? 'shadow-[inset_0_0_20px_rgba(255,215,0,0.2)]' : ''}`}>
                    
                    {/* OVERLAY: Nút "Vào Xếp Hàng" */}
                    {!isAtCounter && !isQueuing && (
                        <div className="absolute inset-0 z-20 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4">
                            <p className="font-bold text-lg mb-4">Bạn chưa vào quầy!</p>
                            <button 
                                onClick={handleStartQueue}
                                className="bg-black text-white text-xl font-bold uppercase py-4 px-8 border-4 border-double border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform"
                            >
                                Lấy tích kê (Xếp hàng)
                            </button>
                        </div>
                    )}

                    <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
                        <h3 className="text-center font-bold uppercase text-xl decoration-double underline underline-offset-4">
                            Quầy Phân Phối
                        </h3>
                        {isAtCounter && !processingItem && (
                            <button 
                                onClick={handleLeaveCounter}
                                className="text-xs font-bold underline hover:text-[#D9381E]"
                            >
                                Rời quầy
                            </button>
                        )}
                    </div>

                    {/* STATUS AREA */}
                    <div className="min-h-[100px] mb-4">
                        {isQueuing ? (
                            // --- GIAO DIỆN KHI XẾP HÀNG ---
                            <div className="w-full border-2 border-black p-2 bg-[#f0f0f0]">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs font-bold uppercase animate-pulse text-[#D9381E]">
                                        Đang xếp hàng...
                                    </span>
                                    {/* ĐẾM NGƯỢC GIÂY */}
                                    <span className="font-mono bg-black text-white px-2 py-1 text-sm font-bold">
                                        ⏱ {queueTurnTimer}s
                                    </span>
                                </div>
                                
                                {/* MINH HỌA NGƯỜI ĐẾM NGƯỢC */}
                                <div className="flex flex-col items-center justify-center mt-2 p-2 border border-dashed border-gray-400 bg-white">
                                    <div className="flex items-end gap-3 mb-1">
                                        <span className="text-3xl">🏪</span> {/* Quầy */}
                                        {Array.from({ length: peopleAhead }).map((_, i) => (
                                            <span key={i} className="text-2xl animate-pulse">👤</span>
                                        ))}
                                        
                                        {/* THAY ĐỔI: Chữ Tôi được làm đẹp hơn */}
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl animate-bounce">🙋‍♂️</span>
                                            <span className="text-[10px] font-bold border-2 border-black px-1 mt-1 uppercase tracking-wider">BẠN</span>
                                        </div>
                                    </div>
                                    <p className="text-xs font-bold uppercase mt-1">
                                        Còn <span className="text-[#D9381E] text-lg">{peopleAhead}</span> lượt người nữa
                                    </p>
                                </div>

                                <p className="text-center text-[10px] italic mt-1 opacity-70">
                                    (Người trước đang mua liên tục... kho hàng đang vơi đi!)
                                </p>
                            </div>
                        ) : (
                            // --- GIAO DIỆN KHI ĐÃ VÀO QUẦY / MESSAGE ---
                            <div className={`w-full p-2 border-2 text-center font-bold text-sm h-full flex items-center justify-center flex-col ${messageType === 'error' ? 'border-[#D9381E] text-[#D9381E] bg-red-50' : messageType === 'warning' ? 'border-black bg-yellow-100' : 'border-black bg-green-50'}`}>
                                <p>{message || "Mời bà con trật tự mua hàng!"}</p>
                                
                                {/* PROGRESS BAR 10s KHI MUA HÀNG */}
                                {processingItem && (
                                    <div className="w-full mt-3">
                                        <div className="w-full h-6 border-2 border-black bg-white relative rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-[#D9381E] transition-all duration-1000 ease-linear"
                                                style={{ width: `${((10 - processTimer) / 10) * 100}%` }}
                                            ></div>
                                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-black drop-shadow-md">
                                                Chờ lấy hàng: {processTimer}s
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* SHOP GRID */}
                    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 ${!isAtCounter ? 'opacity-20 pointer-events-none' : ''}`}>
                        {inventory && Object.entries(inventory).map(([key, item]) => {
                             const itemKey = key as InventoryKey;
                             const stock = shopStock[itemKey];
                             const outOfStock = stock <= 0;
                             const userOutOfTicket = item.quantity <= 0;
                             const isThisItemProcessing = processingItem === itemKey;
                             const isAnyItemProcessing = processingItem !== null;

                             return (
                                 <button
                                     key={key}
                                     // Khóa nút khi: Hết hàng OR Hết phiếu OR Đang xử lý
                                     disabled={userOutOfTicket || outOfStock || isAnyItemProcessing}
                                     onClick={() => handleBuyClick(itemKey)}
                                     className={`relative group border border-black aspect-square flex flex-col items-center justify-center p-2 transition-all 
                                        ${outOfStock || userOutOfTicket ? 'opacity-60 bg-gray-100' : 'hover:bg-black hover:text-white'}
                                        ${isThisItemProcessing ? 'bg-yellow-100 animate-pulse ring-4 ring-[#D9381E]' : ''}
                                     `}
                                 >
                                     {outOfStock && <div className="absolute inset-0 flex items-center justify-center z-10"><div className="border border-[#D9381E] text-[#D9381E] font-bold text-[10px] px-1 -rotate-12 bg-white">HẾT</div></div>}
                                     {!outOfStock && userOutOfTicket && <div className="absolute inset-0 flex items-center justify-center z-10"><div className="border border-black text-black font-bold text-[10px] px-1 rotate-12 bg-white">HẾT PHIẾU</div></div>}

                                     <div className="text-3xl mb-1">{item.icon}</div>
                                     <div className="font-bold text-xs uppercase text-center leading-tight">{item.name}</div>
                                     <div className="text-[10px] mt-1 font-mono">Kho: {stock}</div>

                                     {isThisItemProcessing && (
                                         <div className="absolute top-1 right-1 w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                     )}
                                 </button>
                             )
                        })}
                    </div>
                </div>
            </div>

            {/* DOI MOI BUTTON */}
            {allItemsUsed && !showDoiMoi && (
                <div className="mt-6 text-center animate-bounce">
                    <button 
                        onClick={() => setShowDoiMoi(true)} 
                        className="bg-[#D9381E] text-white font-bold py-2 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase"
                    >
                        Tìm hiểu về Đổi Mới (1986)
                    </button>
                </div>
            )}
        </div>
      </div>

      {/* MODAL ĐỔI MỚI */}
      {showDoiMoi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowDoiMoi(false)}>
            <div className="bg-[#fcf7e6] border-4 border-black max-w-2xl w-full p-6 md:p-10 shadow-2xl relative" onClick={e => e.stopPropagation()}>
                <button onClick={() => setShowDoiMoi(false)} className="absolute top-4 right-4 text-2xl font-bold hover:text-[#D9381E]">✕</button>
                <h2 className="text-3xl font-bold text-[#D9381E] uppercase text-center mb-6 border-b-2 border-[#D9381E] pb-4">Đại Hội VI (12/1986)</h2>
                <div className="space-y-4 text-justify leading-relaxed">
                    <p>Cuộc sống bao cấp đầy khó khăn như bạn vừa trải nghiệm đã đặt ra yêu cầu bức thiết phải thay đổi.</p>
                    <p className="font-bold uppercase text-[#D9381E]">Đại hội VI đã quyết định:</p>
                    <ul className="list-disc pl-6 italic">
                        <li>Xóa bỏ bao cấp.</li>
                        <li>Phát triển kinh tế nhiều thành phần.</li>
                        <li>Mở cửa hội nhập.</li>
                    </ul>
                </div>
            </div>
        </div>
      )}

    </div>
  );
}