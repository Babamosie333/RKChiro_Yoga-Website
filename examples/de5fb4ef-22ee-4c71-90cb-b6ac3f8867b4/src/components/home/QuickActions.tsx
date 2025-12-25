import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking');
  };

  const handleQRScan = () => {
    // 模拟扫码签到
    alert('扫码签到功能（需要摄像头权限）');
  };

  return (
    <div className="fixed bottom-20 right-4 z-20 flex flex-col space-y-3">
      <Button
        onClick={handleBooking}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg transform hover:scale-110 transition-all duration-300"
        size="icon"
      >
        <Calendar size={24} className="text-white" />
      </Button>
      
      <Button
        onClick={handleQRScan}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg transform hover:scale-110 transition-all duration-300"
        size="icon"
      >
        <QrCode size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default QuickActions;