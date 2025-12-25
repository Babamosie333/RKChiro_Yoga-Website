import React, { useState, useEffect } from 'react';
import ViewToggle from '../components/booking/ViewToggle';
import CourseFilter from '../components/booking/CourseFilter';
import CalendarView from '../components/booking/CalendarView';
import CourseCard from '../components/booking/CourseCard';
import { api } from '../db/supabase';
import type { Course } from '../types/types';

const Booking: React.FC = () => {
  const [view, setView] = useState<'day' | 'week'>('week');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, [selectedDate]);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const dateStr = selectedDate.toISOString().split('T')[0];
      const data = await api.getCourses(dateStr);
      setCourses(data);
    } catch (error) {
      console.error('加载课程失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course => {
    if (selectedType && course.type !== selectedType) {
      return false;
    }
    return true;
  });

  const handleBookingSuccess = () => {
    loadCourses(); // 重新加载课程数据
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-4">约课</h1>
        <ViewToggle view={view} onViewChange={setView} />
      </div>

      <CourseFilter selectedType={selectedType} onTypeChange={setSelectedType} />
      
      <CalendarView selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            <p className="mt-2 text-gray-600">加载中...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">当日暂无课程安排</p>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onBookingSuccess={handleBookingSuccess}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Booking;