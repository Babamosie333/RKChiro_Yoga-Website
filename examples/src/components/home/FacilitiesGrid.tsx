import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FacilitiesGrid: React.FC = () => {
  const facilities = [
    { icon: '🚿', name: '淋浴间' },
    { icon: '📦', name: '储物柜' },
    { icon: '🧘‍♀️', name: '辅具区' },
    { icon: '🍵', name: '茶歇区' },
  ];

  return (
    <Card className="mx-4 mt-4">
      <CardContent className="p-4 border-none border-[rgba(0,0,0,0.02)] border-[0px] border-none border-[transparent]">
        <h3 className="font-semibold text-gray-800 mb-4">场馆设施</h3>
        <div className="grid grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm">
                <span className="text-2xl">{facility.icon}</span>
              </div>
              <span className="text-sm text-gray-600 text-center">
                {facility.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilitiesGrid;