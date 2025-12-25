import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Calendar } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../db/supabase';

const AchievementSection: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalBookings: 0,
    completedBookings: 0,
    monthlyRank: 0
  });

  useEffect(() => {
    if (user) {
      loadStats();
    }
  }, [user]);

  const loadStats = async () => {
    if (!user) return;
    const userStats = await api.getUserStats(user.id);
    setStats(userStats);
  };

  return (
    <Card className="mx-4 mt-4">
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 mb-4">成就体系</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
            <div className="flex items-center space-x-3">
              <Trophy className="text-yellow-600" size={20} />
              <div>
                <div className="font-medium text-gray-800">月度排行</div>
                <div className="text-sm text-gray-600">本月练习{stats.completedBookings}次</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-yellow-600">第{stats.monthlyRank}名</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="text-green-600" size={16} />
              <span className="font-medium text-gray-800">练习日历</span>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded text-xs flex items-center justify-center ${
                    Math.random() > 0.7 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">绿色表示已上课日期</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementSection;