import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CalendarViewProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({ selectedDate, onDateChange }) => {
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  const dates = generateDates();
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  return (
    <Card className="mx-4 mb-4">
      <CardContent className="p-4">
        <div className="flex space-x-2 overflow-x-auto">
          {dates.map((date) => {
            const isSelected = date.toDateString() === selectedDate.toDateString();
            const isToday = date.toDateString() === new Date().toDateString();
            
            return (
              <button
                key={date.toISOString()}
                onClick={() => onDateChange(date)}
                className={`flex-shrink-0 flex flex-col items-center p-3 rounded-lg transition-all duration-300 min-w-[60px] ${
                  isSelected 
                    ? 'bg-pink-500 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-50 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                <span className="text-xs mb-1">
                  {weekdays[date.getDay()]}
                </span>
                <span className="text-lg font-semibold">
                  {date.getDate()}
                </span>
                {isToday && !isSelected && (
                  <div className="w-1 h-1 bg-pink-500 rounded-full mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarView;