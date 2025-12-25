import React, { useState, useEffect } from 'react';
import StatusTabs from '../components/appointments/StatusTabs';
import AppointmentCard from '../components/appointments/AppointmentCard';
import { useBooking } from '../hooks/useBooking';
import type { Booking } from '../types/types';

const Appointments: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const { getUserBookings } = useBooking();

  useEffect(() => {
    loadBookings();
  }, [selectedStatus]);

  const loadBookings = async () => {
    setLoading(true);
    try {
      const status = selectedStatus === 'all' ? undefined : selectedStatus;
      const data = await getUserBookings(status);
      setBookings(data);
    } catch (error) {
      console.error('加载预约记录失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    loadBookings();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-4">已约课程</h1>
      </div>

      <StatusTabs selectedStatus={selectedStatus} onStatusChange={setSelectedStatus} />

      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            <p className="mt-2 text-gray-600">加载中...</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">暂无预约记录</p>
          </div>
        ) : (
          bookings.map((booking) => (
            <AppointmentCard 
              key={booking.id} 
              booking={booking} 
              onUpdate={handleUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Appointments;