import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import VenueInfo from '../components/home/VenueInfo';
import FacilitiesGrid from '../components/home/FacilitiesGrid';
import Announcements from '../components/home/Announcements';
import QuickActions from '../components/home/QuickActions';
import Leaderboard from '../components/home/Leaderboard';
import FeaturedInstructors from '../components/home/FeaturedInstructors';
import FeatureGrid from '../components/home/FeatureGrid';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      <VenueInfo />
      <FacilitiesGrid />
      <Announcements />
      <Leaderboard />
      <FeaturedInstructors />
      <FeatureGrid />
      <QuickActions />
    </div>
  );
};

export default Home;