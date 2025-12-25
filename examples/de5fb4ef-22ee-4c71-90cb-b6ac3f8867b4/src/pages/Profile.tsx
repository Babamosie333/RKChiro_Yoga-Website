import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import StatsPanel from '../components/profile/StatsPanel';
import AchievementSection from '../components/profile/AchievementSection';
import FeatureMatrix from '../components/profile/FeatureMatrix';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-gray-800 text-center">我的</h1>
      </div>

      <ProfileHeader />
      <StatsPanel />
      <AchievementSection />
      <FeatureMatrix />
    </div>
  );
};

export default Profile;