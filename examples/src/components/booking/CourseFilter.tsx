import React from 'react';
import { Badge } from '@/components/ui/badge';

interface CourseFilterProps {
  selectedType: string | null;
  onTypeChange: (type: string | null) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ selectedType, onTypeChange }) => {
  const courseTypes = [
    { value: null, label: '全部' },
    { value: 'group', label: '团课' },
    { value: 'premium', label: '精品课' },
    { value: 'private', label: '私教课' },
  ];

  return (
    <div className="flex space-x-2 mb-4 px-4 overflow-x-auto">
      {courseTypes.map((type) => (
        <Badge
          key={type.value || 'all'}
          variant={selectedType === type.value ? 'default' : 'outline'}
          className={`cursor-pointer whitespace-nowrap transition-all duration-300 ${
            selectedType === type.value 
              ? 'bg-pink-500 hover:bg-pink-600' 
              : 'hover:bg-pink-50 hover:text-pink-600'
          }`}
          onClick={() => onTypeChange(type.value)}
        >
          {type.label}
        </Badge>
      ))}
    </div>
  );
};

export default CourseFilter;