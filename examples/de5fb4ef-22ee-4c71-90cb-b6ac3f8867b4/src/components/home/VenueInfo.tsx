import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VenueInfo: React.FC = () => {
  const handleCall = () => {
    window.location.href = 'tel:400-123-4567';
  };

  return (
    <Card className="mx-4 -mt-6 relative z-10 shadow-lg border-0 bg-white/95 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-2">场馆介绍</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">拾光瑜伽馆位于市中心核心地段，拥有专业的瑜伽设施和优雅的练习环境。我们致力于为每位会员提供身心平衡的瑜伽体验，让您在繁忙的都市生活中找到内心的宁静与力量。</p>
            <div className="flex items-center space-x-4 text-sm">
              <button 
                onClick={handleCall}
                className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Phone size={14} />
                <span>400-123-4567</span>
              </button>
              <div className="flex items-center space-x-1 text-gray-500">
                <MapPin size={14} />
                <span>朝阳门店</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VenueInfo;