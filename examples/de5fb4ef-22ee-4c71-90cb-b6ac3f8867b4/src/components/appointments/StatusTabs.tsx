import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface StatusTabsProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
}

const StatusTabs: React.FC<StatusTabsProps> = ({ selectedStatus, onStatusChange }) => {
  const statusOptions = [
    { value: 'all', label: '全部' },
    { value: 'booked', label: '待签到' },
    { value: 'checked_in', label: '已签到' },
    { value: 'completed', label: '待评价' },
    { value: 'cancelled', label: '已取消' },
  ];

  return (
    <div className="px-4 mb-4">
      <Tabs value={selectedStatus} onValueChange={onStatusChange}>
        <TabsList className="grid w-full grid-cols-5 text-xs">
          {statusOptions.map((option) => (
            <TabsTrigger 
              key={option.value} 
              value={option.value}
              className="text-xs px-1"
            >
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default StatusTabs;