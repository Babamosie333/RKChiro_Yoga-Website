import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Edit, Phone } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const ProfileHeader: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Card className="mx-4 mt-4">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.user_metadata?.avatar_url} />
            <AvatarFallback className="bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 text-xl">
              {user.phone?.[0] || 'U'}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                瑜伽爱好者
              </h2>
              <button className="p-1 text-gray-400 hover:text-pink-500 transition-colors">
                <Edit size={16} />
              </button>
            </div>
            
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={14} className="text-gray-400" />
              <span className="text-sm text-gray-600">{user.phone}</span>
            </div>
            
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
              ✨ 钻石会员
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;