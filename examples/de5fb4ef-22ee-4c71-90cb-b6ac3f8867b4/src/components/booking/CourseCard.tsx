import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Clock, Users, MapPin, Star } from 'lucide-react';
import { formatTime, getDifficultyStars, getCourseTypeText, getCourseTypeColor } from '../../lib/utils';
import { useBooking } from '../../hooks/useBooking';
import type { Course } from '../../types/types';

interface CourseCardProps {
  course: Course;
  onBookingSuccess?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onBookingSuccess }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { bookCourse, loading } = useBooking();

  const handleBook = async () => {
    const success = await bookCourse(course);
    if (success && onBookingSuccess) {
      onBookingSuccess();
    }
  };

  const isFullyBooked = course.current_bookings >= course.max_capacity;
  const availableSpots = course.max_capacity - course.current_bookings;

  return (
    <Card 
      className={`mx-4 mb-4 transition-all duration-500 cursor-pointer ${
        isExpanded ? 'shadow-lg scale-[1.02]' : 'hover:shadow-md'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className={getCourseTypeColor(course.type)}>
                {getCourseTypeText(course.type)}
              </Badge>
              <h3 className="font-semibold text-gray-800">{course.title}</h3>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{formatTime(course.start_time)}-{formatTime(course.end_time)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users size={14} />
                <span className={isFullyBooked ? 'text-red-500' : 'text-green-600'}>
                  {course.current_bookings}/{course.max_capacity}人
                </span>
              </div>
            </div>

            {course.instructor && (
              <div className="flex items-center space-x-2 mb-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={course.instructor.avatar_url} />
                  <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">{course.instructor.name}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-end space-y-2">
            {isFullyBooked ? (
              <Badge variant="destructive">已满员</Badge>
            ) : (
              <Badge variant="outline" className="text-green-600 border-green-600">
                剩余{availableSpots}位
              </Badge>
            )}
          </div>
        </div>

        {/* 展开内容 */}
        <div 
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t pt-3 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span className="text-gray-600">{course.room}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={14} />
                <span className="text-gray-600">
                  难度 {getDifficultyStars(course.difficulty)}
                </span>
              </div>
            </div>

            {course.description && (
              <p className="text-sm text-gray-600 leading-relaxed">
                {course.description}
              </p>
            )}

            {course.instructor && (
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={course.instructor.avatar_url} />
                    <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{course.instructor.name}</h4>
                    <p className="text-sm text-gray-600">{course.instructor.bio}</p>
                    <div className="flex space-x-1 mt-1">
                      {JSON.parse(course.instructor.specialties_json || '[]').map((specialty: string, index: number) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleBook();
              }}
              disabled={isFullyBooked || loading}
              className={`w-full ${
                isFullyBooked 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
              }`}
            >
              {loading ? '预约中...' : isFullyBooked ? '已满员' : '立即预约'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;