import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ViewToggleProps {
  view: 'day' | 'week';
  onViewChange: (view: 'day' | 'week') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <div className="flex justify-center mb-4">
      <Tabs value={view} onValueChange={(value) => onViewChange(value as 'day' | 'week')}>
        <TabsList className="grid w-48 grid-cols-2">
          <TabsTrigger value="day">日课表</TabsTrigger>
          <TabsTrigger value="week">周课表</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ViewToggle;