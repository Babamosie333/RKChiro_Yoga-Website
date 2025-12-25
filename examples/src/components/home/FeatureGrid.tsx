import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const FeatureGrid: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: '🎪', name: '活动专区', path: '/activities' },
    { icon: '💳', name: '优惠卡项', path: '/cards' },
    { icon: '🌟', name: '特色课程', path: '/courses' },
    { icon: '📸', name: '会员案例', path: '/cases' },
  ];

  const handleFeatureClick = (path: string) => {
    // 暂时显示提示，实际项目中可以导航到对应页面
    alert(`即将跳转到${path}页面`);
  };

  return (
    <Card className="mx-4 mt-4 mb-20">
      <CardContent className="p-4">

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleFeatureClick(feature.path)}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-all duration-300 transform hover:scale-105 border border-indigo-100"
            >
              <span className="text-3xl">{feature.icon}</span>
              <span className="text-sm font-medium text-gray-700">{feature.name}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureGrid;