/*
# 瑜悦瑜伽约课系统数据库初始化

1. 新建表
   - `users` - 用户信息表
     - `id` (uuid, 主键)
     - `phone` (text, 手机号)
     - `nickname` (text, 昵称)
     - `avatar_url` (text, 头像链接)
     - `role` (text, 角色: admin/user)
     - `points` (integer, 积分)
     - `created_at` (timestamp, 创建时间)

   - `instructors` - 教练信息表
     - `id` (uuid, 主键)
     - `name` (text, 姓名)
     - `avatar_url` (text, 头像)
     - `years_experience` (integer, 教学年限)
     - `specialties_json` (text, 专长标签JSON)
     - `bio` (text, 简介)
     - `created_at` (timestamp)

   - `courses` - 课程信息表
     - `id` (uuid, 主键)
     - `title` (text, 课程名称)
     - `type` (text, 课程类型: group/premium/private)
     - `instructor_id` (uuid, 教练ID)
     - `date` (date, 上课日期)
     - `start_time` (time, 开始时间)
     - `end_time` (time, 结束时间)
     - `max_capacity` (integer, 最大容量)
     - `current_bookings` (integer, 当前预约人数)
     - `difficulty` (integer, 难度等级1-5)
     - `room` (text, 教室)
     - `description` (text, 课程描述)
     - `is_active` (boolean, 是否有效)
     - `created_at` (timestamp)

   - `bookings` - 预约记录表
     - `id` (uuid, 主键)
     - `user_id` (uuid, 用户ID)
     - `course_id` (uuid, 课程ID)
     - `status` (text, 状态: booked/checked_in/completed/cancelled)
     - `booking_time` (timestamp, 预约时间)
     - `check_in_time` (timestamp, 签到时间)
     - `evaluation_rating` (integer, 评分1-5)
     - `evaluation_comment` (text, 评价内容)
     - `created_at` (timestamp)

   - `membership_cards` - 会员卡表
     - `id` (uuid, 主键)
     - `user_id` (uuid, 用户ID)
     - `card_type` (text, 卡类型: times/monthly/yearly)
     - `total_times` (integer, 总次数)
     - `remaining_times` (integer, 剩余次数)
     - `valid_from` (date, 有效期开始)
     - `valid_until` (date, 有效期结束)
     - `is_active` (boolean, 是否有效)
     - `created_at` (timestamp)

   - `announcements` - 公告表
     - `id` (uuid, 主键)
     - `title` (text, 标题)
     - `content` (text, 内容)
     - `is_important` (boolean, 是否重要)
     - `created_at` (timestamp)

2. 安全设置
   - 启用所有表的RLS
   - 添加用户数据访问策略
*/

-- 用户信息表
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text UNIQUE NOT NULL,
  nickname text DEFAULT '',
  avatar_url text DEFAULT '',
  role text DEFAULT 'user',
  points integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 教练信息表
CREATE TABLE IF NOT EXISTS instructors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  avatar_url text DEFAULT '',
  years_experience integer DEFAULT 0,
  specialties_json text DEFAULT '[]',
  bio text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- 课程信息表
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text DEFAULT 'group',
  instructor_id uuid REFERENCES instructors(id),
  date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  max_capacity integer DEFAULT 10,
  current_bookings integer DEFAULT 0,
  difficulty integer DEFAULT 1,
  room text DEFAULT '',
  description text DEFAULT '',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- 预约记录表
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  course_id uuid REFERENCES courses(id),
  status text DEFAULT 'booked',
  booking_time timestamptz DEFAULT now(),
  check_in_time timestamptz,
  evaluation_rating integer,
  evaluation_comment text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- 会员卡表
CREATE TABLE IF NOT EXISTS membership_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  card_type text DEFAULT 'times',
  total_times integer DEFAULT 0,
  remaining_times integer DEFAULT 0,
  valid_from date DEFAULT CURRENT_DATE,
  valid_until date,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- 公告表
CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  is_important boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- 启用RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- 用户策略
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- 教练策略（所有人可读）
CREATE POLICY "Everyone can read instructors"
  ON instructors
  FOR SELECT
  TO authenticated
  USING (true);

-- 课程策略（所有人可读）
CREATE POLICY "Everyone can read courses"
  ON courses
  FOR SELECT
  TO authenticated
  USING (true);

-- 预约策略
CREATE POLICY "Users can read own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- 会员卡策略
CREATE POLICY "Users can read own cards"
  ON membership_cards
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- 公告策略（所有人可读）
CREATE POLICY "Everyone can read announcements"
  ON announcements
  FOR SELECT
  TO authenticated
  USING (true);

-- 插入示例数据
INSERT INTO instructors (name, avatar_url, years_experience, specialties_json, bio) VALUES
('美美老师', '/assets/images/instructor-1.jpg', 5, '["流瑜伽", "孕产瑜伽"]', '资深瑜伽导师，专注身心平衡'),
('静静老师', '/assets/images/instructor-2.jpg', 8, '["普拉提", "核心力量"]', '普拉提认证教练，擅长核心训练'),
('雅雅老师', '/assets/images/instructor-3.jpg', 6, '["阴瑜伽", "冥想"]', '阴瑜伽专家，注重内在修行'),
('晓晓老师', '/assets/images/instructor-4.jpg', 7, '["高温瑜伽", "力量瑜伽"]', '高级瑜伽导师，专业技能全面');

INSERT INTO announcements (title, content, is_important) VALUES
('国庆假期通知', '10月1-3日闭馆，课程顺延，感谢理解！', true),
('新课程上线', '本月新增普拉提大器械课程，欢迎体验', false),
('会员福利', '钻石会员专享私教课程8折优惠', false);

-- 插入示例课程数据
INSERT INTO courses (title, type, instructor_id, date, start_time, end_time, max_capacity, difficulty, room, description) 
SELECT 
  '流瑜伽·晨间唤醒', 'group', i.id, CURRENT_DATE + 1, '08:30', '09:40', 10, 2, '大教室A', '温和的流瑜伽练习，适合晨练'
FROM instructors i WHERE i.name = '美美老师';

INSERT INTO courses (title, type, instructor_id, date, start_time, end_time, max_capacity, difficulty, room, description) 
SELECT 
  '核心力量训练', 'group', i.id, CURRENT_DATE + 1, '19:00', '20:00', 8, 3, '小教室B', '专注核心肌群的力量训练'
FROM instructors i WHERE i.name = '静静老师';

INSERT INTO courses (title, type, instructor_id, date, start_time, end_time, max_capacity, difficulty, room, description) 
SELECT 
  '阴瑜伽·深度放松', 'premium', i.id, CURRENT_DATE + 2, '20:00', '21:30', 6, 1, '静音室', '深度放松的阴瑜伽练习'
FROM instructors i WHERE i.name = '雅雅老师';