import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { api } from '../../db/supabase';
import type { Announcement } from '../../types/types';

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    const data = await api.getAnnouncements();
    setAnnouncements(data);
  };

  if (announcements.length === 0) {
    return null;
  }

  return (
    <Card className="mx-4 mt-4">
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-800 mb-4">运营公告</h3>
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id}
              className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100"
            >
              {announcement.is_important && (
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 animate-pulse" />
              )}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-gray-800 text-sm">{announcement.title}</h4>
                  {announcement.is_important && (
                    <Badge variant="destructive" className="text-xs">重要</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{announcement.content}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Announcements;