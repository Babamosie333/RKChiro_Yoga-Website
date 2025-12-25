export interface User {
  id: string;
  phone: string;
  nickname: string;
  avatar_url: string;
  role: 'admin' | 'user';
  points: number;
  created_at: string;
}

export interface Instructor {
  id: string;
  name: string;
  avatar_url: string;
  years_experience: number;
  specialties_json: string;
  bio: string;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  type: 'group' | 'premium' | 'private';
  instructor_id: string;
  instructor?: Instructor;
  date: string;
  start_time: string;
  end_time: string;
  max_capacity: number;
  current_bookings: number;
  difficulty: number;
  room: string;
  description: string;
  is_active: boolean;
  created_at: string;
}

export interface Booking {
  id: string;
  user_id: string;
  course_id: string;
  course?: Course;
  status: 'booked' | 'checked_in' | 'completed' | 'cancelled';
  booking_time: string;
  check_in_time?: string;
  evaluation_rating?: number;
  evaluation_comment: string;
  created_at: string;
}

export interface MembershipCard {
  id: string;
  user_id: string;
  card_type: 'times' | 'monthly' | 'yearly';
  total_times: number;
  remaining_times: number;
  valid_from: string;
  valid_until: string;
  is_active: boolean;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  is_important: boolean;
  created_at: string;
}