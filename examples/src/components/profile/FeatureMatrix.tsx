import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  Gift, 
  Activity, 
  Bot, 
  FileCheck, 
  Settings,
  ChevronRight 
} from 'lucide-react';

const FeatureMatrix: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: '我的订单',
      description: '查看预约记录',
      action: () => navigate('/appointments')
    },
    {
      icon: Gift,
      title: '体验课',
      description: '剩余2次体验机会',
      action: () => alert('体验课功能')
    },
    {
      icon: Activity,
      title: '我的体测',
      description: '历史体测数据',
      action: () => alert('体测数据功能')
    },
    {
      icon: Bot,
      title: '我的AI体测',
      description: '3D体型分析报告',
      action: () => alert('AI体测功能')
    },
    {
      icon: FileCheck,
      title: '我的合同',
      description: '电子协议存档',
      action: () => alert('合同管理功能')
    },
    {
      icon: Settings,
      title: '设置',
      description: '通知管理/账号安全',
      action: () => alert('设置功能')
    },
  ];

  return (
    <Card className="mx-4 mt-4 mb-20">
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 mb-4">功能菜单</h3>
        <div className="space-y-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={feature.action}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100">
                  <Icon size={20} className="text-pink-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{feature.title}</div>
                  <div className="text-sm text-gray-500">{feature.description}</div>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureMatrix;