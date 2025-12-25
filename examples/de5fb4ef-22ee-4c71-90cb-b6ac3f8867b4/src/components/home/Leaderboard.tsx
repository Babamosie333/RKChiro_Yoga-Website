import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Leaderboard: React.FC = () => {
  const rankings = [
    { rank: 1, name: '李**', count: 28, icon: '👑', color: 'text-yellow-600', avatar: 'https://images.unsplash.com/photo-010-xxxxxxxx55-2616b612b786?w=100&h=100&fit=crop&crop=face' },
    { rank: 2, name: '王**', count: 25, icon: '🥈', color: 'text-gray-500', avatar: 'https://images.unsplash.com/photo-010-xxxxxxxx33-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { rank: 3, name: '张**', count: 22, icon: '🥉', color: 'text-amber-600', avatar: 'https://images.unsplash.com/photo-010-xxxxxxxx69-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  ];

  return (
    <Card className="mx-4 mt-4">
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 mb-4">本月练习排行榜</h3>
        <div className="space-y-3">
          {rankings.map((member) => (
            <div 
              key={member.rank}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100"
            >
              <span className="text-xl">{member.icon}</span>
              <Avatar className="w-10 h-10">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${member.color}`}>{member.name}</span>
                  <span className="text-sm text-gray-600">{member.count}次</span>
                </div>
                <div className="text-xs text-gray-500">
                  {member.rank === 1 ? '金牌学员' : member.rank === 2 ? '银牌学员' : '铜牌学员'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;