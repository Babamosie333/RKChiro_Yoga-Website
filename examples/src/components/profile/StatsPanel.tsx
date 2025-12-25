import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Gift, Star } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../db/supabase';
import type { MembershipCard } from '../../types/types';

const StatsPanel: React.FC = () => {
  const { user } = useAuth();
  const [membershipCards, setMembershipCards] = useState<MembershipCard[]>([]);

  useEffect(() => {
    if (user) {
      loadMembershipCards();
    }
  }, [user]);

  const loadMembershipCards = async () => {
    if (!user) return;
    const cards = await api.getUserMembershipCards(user.id);
    setMembershipCards(cards);
  };

  const totalCards = membershipCards.length;

  const stats = [
    {
      icon: CreditCard,
      label: '会员卡',
      value: totalCards,
      color: 'from-blue-500 to-indigo-500',
      onClick: () => alert('查看会员卡详情')
    },
    {
      icon: Star,
      label: '积分',
      value: 1280,
      color: 'from-yellow-500 to-orange-500',
      onClick: () => alert('查看积分详情')
    },
    {
      icon: Gift,
      label: '优惠券',
      value: 3,
      color: 'from-pink-500 to-purple-500',
      onClick: () => alert('查看优惠券')
    },
  ];

  return (
    <Card className="mx-4 mt-4">
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 mb-4">数据看板</h3>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <button
                key={index}
                onClick={stat.onClick}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`p-2 rounded-full bg-gradient-to-r ${stat.color}`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsPanel;