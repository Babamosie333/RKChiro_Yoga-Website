import { useState, useCallback } from 'react';
import { useToast } from './useToast';
import type { Course, Booking } from '../types/types';

// 模拟预约数据
let mockBookings: Booking[] = [];

export function useBooking() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const bookCourse = useCallback(async (course: Course): Promise<boolean> => {
    if (course.current_bookings >= course.max_capacity) {
      toast({
        title: "课程已满",
        description: "该课程已达到最大容量",
        variant: "destructive",
      });
      return false;
    }

    setLoading(true);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // 检查是否已预约
      const hasBooked = mockBookings.some(
        booking => booking.course_id === course.id && booking.status === 'booked'
      );

      if (hasBooked) {
        toast({
          title: "已预约该课程",
          description: "您已经预约了这节课程",
          variant: "destructive",
        });
        return false;
      }

      // 创建新预约
      const newBooking: Booking = {
        id: `booking-${Date.now()}`,
        user_id: 'mock-user-id',
        course_id: course.id,
        course: course,
        status: 'booked',
        booking_time: new Date().toISOString(),
        evaluation_comment: '',
        created_at: new Date().toISOString()
      };

      mockBookings.push(newBooking);

      toast({
        title: "预约成功",
        description: `已成功预约 ${course.title}`,
      });
      return true;
    } catch (error) {
      console.error('预约失败:', error);
      toast({
        title: "预约失败",
        description: "请稍后重试",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const cancelBooking = useCallback(async (bookingId: string): Promise<boolean> => {
    setLoading(true);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const bookingIndex = mockBookings.findIndex(b => b.id === bookingId);
      if (bookingIndex !== -1) {
        mockBookings[bookingIndex].status = 'cancelled';
        
        toast({
          title: "取消成功",
          description: "已取消课程预约",
        });
        return true;
      } else {
        throw new Error('预约不存在');
      }
    } catch (error) {
      console.error('取消预约失败:', error);
      toast({
        title: "取消失败",
        description: "请稍后重试",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const checkIn = useCallback(async (bookingId: string): Promise<boolean> => {
    setLoading(true);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const bookingIndex = mockBookings.findIndex(b => b.id === bookingId);
      if (bookingIndex !== -1) {
        mockBookings[bookingIndex].status = 'checked_in';
        mockBookings[bookingIndex].check_in_time = new Date().toISOString();
        
        toast({
          title: "签到成功",
          description: "已成功签到，请准时上课",
        });
        return true;
      } else {
        throw new Error('预约不存在');
      }
    } catch (error) {
      console.error('签到失败:', error);
      toast({
        title: "签到失败",
        description: "请稍后重试",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const evaluate = useCallback(async (
    bookingId: string, 
    rating: number, 
    comment: string
  ): Promise<boolean> => {
    setLoading(true);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const bookingIndex = mockBookings.findIndex(b => b.id === bookingId);
      if (bookingIndex !== -1) {
        mockBookings[bookingIndex].evaluation_rating = rating;
        mockBookings[bookingIndex].evaluation_comment = comment;
        mockBookings[bookingIndex].status = 'completed';
        
        toast({
          title: "评价成功",
          description: "感谢您的评价",
        });
        return true;
      } else {
        throw new Error('预约不存在');
      }
    } catch (error) {
      console.error('评价失败:', error);
      toast({
        title: "评价失败",
        description: "请稍后重试",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const getUserBookings = useCallback(async (status?: string): Promise<Booking[]> => {
    if (status && status !== 'all') {
      return mockBookings.filter(booking => booking.status === status);
    }
    return mockBookings;
  }, []);

  return {
    loading,
    bookCourse,
    cancelBooking,
    checkIn,
    evaluate,
    getUserBookings
  };
}