import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(time: string): string {
  return time.slice(0, 5);
}

export function formatDate(date: string): string {
  const d = new Date(date);
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const weekday = weekdays[d.getDay()];
  return `${month}月${day}日（${weekday}）`;
}

export function getDifficultyStars(difficulty: number): string {
  return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty);
}

export function getStatusText(status: string): string {
  const statusMap: Record<string, string> = {
    'booked': '待签到',
    'checked_in': '已签到',
    'completed': '已完成',
    'cancelled': '已取消'
  };
  return statusMap[status] || status;
}

export function getStatusColor(status: string): string {
  const colorMap: Record<string, string> = {
    'booked': 'bg-blue-100 text-blue-800',
    'checked_in': 'bg-green-100 text-green-800',
    'completed': 'bg-gray-100 text-gray-800',
    'cancelled': 'bg-red-100 text-red-800'
  };
  return colorMap[status] || 'bg-gray-100 text-gray-800';
}

export function getCourseTypeText(type: string): string {
  const typeMap: Record<string, string> = {
    'group': '团课',
    'premium': '精品课',
    'private': '私教课'
  };
  return typeMap[type] || type;
}

export function getCourseTypeColor(type: string): string {
  const colorMap: Record<string, string> = {
    'group': 'bg-purple-100 text-purple-800',
    'premium': 'bg-pink-100 text-pink-800',
    'private': 'bg-orange-100 text-orange-800'
  };
  return colorMap[type] || 'bg-gray-100 text-gray-800';
}