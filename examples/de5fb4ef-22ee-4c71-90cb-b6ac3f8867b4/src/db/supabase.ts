import { createClient } from '@supabase/supabase-js';
import type { User, Instructor, Course, Booking, MembershipCard, Announcement } from '../types/types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 模拟数据
const mockInstructors: Instructor[] = [
  {
    id: 'instructor-1',
    name: '美美老师',
    avatar_url: `${import.meta.env.BASE_URL}assets/images/instructor-1.jpg`,
    years_experience: 5,
    specialties_json: '["流瑜伽", "孕产瑜伽"]',
    bio: '资深瑜伽导师，专注身心平衡',
    created_at: new Date().toISOString()
  },
  {
    id: 'instructor-2',
    name: '静静老师',
    avatar_url: `${import.meta.env.BASE_URL}assets/images/instructor-2.jpg`,
    years_experience: 8,
    specialties_json: '["普拉提", "核心力量"]',
    bio: '普拉提认证教练，擅长核心训练',
    created_at: new Date().toISOString()
  },
  {
    id: 'instructor-3',
    name: '雅雅老师',
    avatar_url: `${import.meta.env.BASE_URL}assets/images/instructor-3.jpg`,
    years_experience: 6,
    specialties_json: '["阴瑜伽", "冥想"]',
    bio: '阴瑜伽专家，注重内在修行',
    created_at: new Date().toISOString()
  },
  {
    id: 'instructor-4',
    name: '晓晓老师',
    avatar_url: `${import.meta.env.BASE_URL}assets/images/instructor-4.jpg`,
    years_experience: 7,
    specialties_json: '["高温瑜伽", "力量瑜伽"]',
    bio: '高级瑜伽导师，专业技能全面',
    created_at: new Date().toISOString()
  }
];

const mockAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title: '国庆假期通知',
    content: '10月1-3日闭馆，课程顺延，感谢理解！',
    is_important: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'ann-2',
    title: '新课程上线',
    content: '本月新增普拉提大器械课程，欢迎体验',
    is_important: false,
    created_at: new Date().toISOString()
  },
  {
    id: 'ann-3',
    title: '会员福利',
    content: '钻石会员专享私教课程8折优惠',
    is_important: false,
    created_at: new Date().toISOString()
  }
];

const generateMockCourses = (): Course[] => {
  const courses: Course[] = [];
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];
    
    // 每天生成3-5个课程
    const coursesPerDay = Math.floor(Math.random() * 3) + 3;
    
    for (let j = 0; j < coursesPerDay; j++) {
      const instructor = mockInstructors[Math.floor(Math.random() * mockInstructors.length)];
      const courseTypes = ['group', 'premium', 'private'];
      const type = courseTypes[Math.floor(Math.random() * courseTypes.length)] as 'group' | 'premium' | 'private';
      
      const courseTitles = {
        group: ['流瑜伽·晨间唤醒', '核心力量训练', '髋腿练习', '紧致侧腰'],
        premium: ['普拉提大器械', '后弯练习', '小蛮腰', '背部伸展前屈', '紧致盆骨'],
        private: ['个人定制瑜伽', '一对一指导', '私人瑜伽课程']
      };
      
      const titles = courseTitles[type];
      const title = titles[Math.floor(Math.random() * titles.length)];
      
      const startHour = 8 + j * 2;
      const startTime = `${startHour.toString().padStart(2, '0')}:30`;
      const endTime = `${(startHour + 1).toString().padStart(2, '0')}:30`;
      
      const maxCapacity = type === 'private' ? 1 : type === 'premium' ? 6 : 10;
      const currentBookings = Math.floor(Math.random() * (maxCapacity + 1));
      
      courses.push({
        id: `course-${i}-${j}`,
        title,
        type,
        instructor_id: instructor.id,
        instructor,
        date: dateStr,
        start_time: startTime,
        end_time: endTime,
        max_capacity: maxCapacity,
        current_bookings: currentBookings,
        difficulty: Math.floor(Math.random() * 5) + 1,
        room: type === 'private' ? '私教室' : type === 'premium' ? '小班课教室' : '大教室A',
        description: `专业的${title}课程，适合不同水平的练习者`,
        is_active: true,
        created_at: new Date().toISOString()
      });
    }
  }
  
  return courses;
};

const mockCourses = generateMockCourses();

const mockMembershipCards: MembershipCard[] = [
  {
    id: 'card-1',
    user_id: 'mock-user-id',
    card_type: 'times',
    total_times: 50,
    remaining_times: 32,
    valid_from: '2024-01-01',
    valid_until: '2024-12-31',
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'card-2',
    user_id: 'mock-user-id',
    card_type: 'monthly',
    total_times: 30,
    remaining_times: 15,
    valid_from: '2024-12-01',
    valid_until: '2024-12-31',
    is_active: true,
    created_at: new Date().toISOString()
  }
];

export const api = {
  // 用户相关
  async getUserById(id: string): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('获取用户失败:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('获取用户异常:', error);
      return null;
    }
  },

  async getAllUsers(): Promise<User[]> {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*');
      
      if (error) {
        console.error('获取用户列表失败:', error);
        return [];
      }
      
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('获取用户列表异常:', error);
      return [];
    }
  },

  async getUsersCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        console.error('获取用户数量失败:', error);
        return 0;
      }
      
      return count || 0;
    } catch (error) {
      console.error('获取用户数量异常:', error);
      return 0;
    }
  },

  async createUser(userData: Partial<User>): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert({
          id: userData.id,
          phone: userData.phone || '',
          nickname: userData.nickname || '瑜伽爱好者',
          avatar_url: userData.avatar_url || '',
          role: userData.role || 'user',
          points: userData.points || 0
        })
        .select()
        .single();
      
      if (error) {
        console.error('创建用户失败:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('创建用户异常:', error);
      return null;
    }
  },

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) {
        console.error('更新用户失败:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('更新用户异常:', error);
      return null;
    }
  },

  // 教练相关
  async getInstructors(): Promise<Instructor[]> {
    return mockInstructors;
  },

  // 课程相关
  async getCourses(date?: string): Promise<Course[]> {
    if (date) {
      return mockCourses.filter(course => course.date === date);
    }
    return mockCourses;
  },

  async getCourseById(id: string): Promise<Course | null> {
    return mockCourses.find(course => course.id === id) || null;
  },

  // 预约相关
  async getUserBookings(userId: string, status?: string): Promise<Booking[]> {
    // 这个方法在 useBooking hook 中被重写了
    return [];
  },

  async createBooking(bookingData: Partial<Booking>): Promise<Booking | null> {
    return null;
  },

  async updateBooking(id: string, updates: Partial<Booking>): Promise<Booking | null> {
    return null;
  },

  async updateCourseBookingCount(courseId: string): Promise<void> {
    // 模拟更新
  },

  // 会员卡相关
  async getUserMembershipCards(userId: string): Promise<MembershipCard[]> {
    return mockMembershipCards;
  },

  // 公告相关
  async getAnnouncements(): Promise<Announcement[]> {
    return mockAnnouncements;
  },

  // 统计相关
  async getUserStats(userId: string): Promise<{
    totalBookings: number;
    completedBookings: number;
    monthlyRank: number;
  }> {
    return {
      totalBookings: 28,
      completedBookings: 25,
      monthlyRank: 5
    };
  }
};