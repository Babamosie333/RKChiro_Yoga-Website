import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { api } from '../../db/supabase';
import type { Instructor } from '../../types/types';

const FeaturedInstructors: React.FC = () => {
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    loadInstructors();
  }, []);

  const loadInstructors = async () => {
    const data = await api.getInstructors();
    setInstructors(data);
  };

  // 计算累计授课节数的函数
  const calculateTotalClasses = (yearsExperience: number) => {
    // 假设每年平均授课300节（每周约6节课）
    return yearsExperience * 300;
  };

  if (instructors.length === 0) {
    return null;
  }

  return (
    <Card className="mx-4 mt-4">
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 mb-4">金牌教练</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2 bg-[transparent]">
          {instructors.map((instructor, index) => {
            const specialties = JSON.parse(instructor.specialties_json || '[]');
            const totalClasses = calculateTotalClasses(instructor.years_experience);
            
            // 使用本地头像图片
            const avatarImages = [
              `${import.meta.env.BASE_URL}assets/images/instructor-1.jpg`,
              `${import.meta.env.BASE_URL}assets/images/instructor-2.jpg`,
              `${import.meta.env.BASE_URL}assets/images/instructor-3.jpg`,
              `${import.meta.env.BASE_URL}assets/images/instructor-4.jpg`
            ];
            
            return (
              <div 
                key={instructor.id}
                className="flex-shrink-0 w-32 p-3 from-purple-50 to-pink-50 text-center border-solid border-[1px] border-[transparent] bg-[#ffffffff] rounded-[5px]"
              >
                <Avatar className="w-16 h-16 mx-auto mb-2">
                  <AvatarImage src={avatarImages[index % avatarImages.length]} />
                  <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                </Avatar>
                <h4 className="font-medium text-gray-800 text-sm mb-1">{instructor.name}</h4>
                <p className="text-xs text-gray-500 mb-2">
                  累计授课
                  <span className="font-bold text-pink-600 mx-1">{totalClasses}</span>
                  节
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedInstructors;