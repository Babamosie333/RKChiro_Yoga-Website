import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Clock, MapPin, Star, Calendar, User, CreditCard, Hash } from 'lucide-react';
import { formatTime, formatDate, getDifficultyStars, getCourseTypeText, getCourseTypeColor, getStatusText, getStatusColor } from '../../lib/utils';
import { useBooking } from '../../hooks/useBooking';
import EvaluationDialog from './EvaluationDialog';
import type { Booking } from '../../types/types';

interface AppointmentCardProps {
  booking: Booking;
  onUpdate?: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ booking, onUpdate }) => {
  const [showEvaluation, setShowEvaluation] = useState(false);
  const { cancelBooking, checkIn, loading } = useBooking();

  if (!booking.course) return null;

  const course = booking.course;
  const instructor = course.instructor;

  const handleCancel = async () => {
    if (window.confirm('确定要取消这个预约吗？')) {
      const success = await cancelBooking(booking.id);
      if (success && onUpdate) {
        onUpdate();
      }
    }
  };

  const handleCheckIn = async () => {
    const success = await checkIn(booking.id);
    if (success && onUpdate) {
      onUpdate();
    }
  };

  const handleEvaluate = () => {
    setShowEvaluation(true);
  };

  const onEvaluationSuccess = () => {
    setShowEvaluation(false);
    if (onUpdate) {
      onUpdate();
    }
  };

  const canCheckIn = booking.status === 'booked';
  const canCancel = booking.status === 'booked';
  const canEvaluate = booking.status === 'checked_in';

  return (
    <>
      <Card className="mx-4 mb-4 hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Badge className={getCourseTypeColor(course.type)}>
                {getCourseTypeText(course.type)}
              </Badge>
              <h3 className="font-semibold text-gray-800">{course.title}</h3>
            </div>
            <Badge className={getStatusColor(booking.status)}>
              {getStatusText(booking.status)}
            </Badge>
          </div>

          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{formatDate(course.date)} {formatTime(course.start_time)}-{formatTime(course.end_time)}</span>
            </div>

            {instructor && (
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{instructor.name}</span>
              </div>
            )}

            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{course.room} | 难度{getDifficultyStars(course.difficulty)}</span>
            </div>

            <div className="flex items-center space-x-1">
              <CreditCard size={14} />
              <span>支付：1次（{getCourseTypeText(course.type)}卡）</span>
            </div>

            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Hash size={12} />
              <span>订单号：{booking.id.slice(-8)}</span>
            </div>
          </div>

          {booking.status === 'booked' && (
            <div className="bg-blue-50 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2 text-blue-700">
                <Clock size={14} />
                <span className="text-sm">开课前30分钟可签到</span>
              </div>
            </div>
          )}

          {booking.evaluation_rating && (
            <div className="bg-green-50 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <Star size={14} className="text-yellow-500" />
                <span className="text-sm font-medium">您的评价：{booking.evaluation_rating}星</span>
              </div>
              {booking.evaluation_comment && (
                <p className="text-sm text-gray-600">{booking.evaluation_comment}</p>
              )}
            </div>
          )}

          <div className="flex space-x-2">
            {canCheckIn && (
              <Button
                onClick={handleCheckIn}
                disabled={loading}
                className="flex-1 bg-green-500 hover:bg-green-600"
              >
                {loading ? '签到中...' : '签到'}
              </Button>
            )}

            {canEvaluate && (
              <Button
                onClick={handleEvaluate}
                className="flex-1 bg-blue-500 hover:bg-blue-600"
              >
                评价课程
              </Button>
            )}

            {canCancel && (
              <Button
                onClick={handleCancel}
                disabled={loading}
                variant="outline"
                className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
              >
                {loading ? '取消中...' : '取消预约'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <EvaluationDialog
        open={showEvaluation}
        onOpenChange={setShowEvaluation}
        booking={booking}
        onSuccess={onEvaluationSuccess}
      />
    </>
  );
};

export default AppointmentCard;