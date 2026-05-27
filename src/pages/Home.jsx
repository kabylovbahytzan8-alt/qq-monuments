import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import PopularMonuments from '@/components/home/PopularMonuments';
import CategoriesSection from '@/components/home/CategoriesSection';
import WondersSection from '@/components/home/WondersSection';
import MapPreview from '@/components/home/MapPreview';
import HistoryTimeline from '@/components/home/HistoryTimeline';
import NewsPreview from '@/components/home/NewsPreview';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <PopularMonuments />
      <CategoriesSection />
      <WondersSection />
      <MapPreview />
      <HistoryTimeline />
      <NewsPreview />
    </div>
  );
}