import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      url: 'https://images.unsplash.com/photo-010-xxxxxxxx04-8957b019727f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: '晨光瑜伽',
      subtitle: '迎接新的一天，唤醒身心能量'
    },
    {
      url: 'https://images.unsplash.com/photo-010-xxxxxxxx07-5d5c2c7d6d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: '静心冥想',
      subtitle: '在宁静中找到内心的平衡'
    },
    {
      url: 'https://images.unsplash.com/photo-010-xxxxxxxx54-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: '力量体式',
      subtitle: '挑战自我，突破身体极限'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="relative h-64 overflow-hidden">
      {/* 轮播图片 */}
      <div className="relative w-full h-full">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Failed to load image: ${image.url}`);
                // 如果图片加载失败，使用备用图片
                e.currentTarget.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
          </div>
        ))}
      </div>
      
      {/* 内容覆盖层 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">瑜悦瑜伽</h1>
        <div className="transition-all duration-500 ease-in-out">
          <h2 className="text-lg font-medium text-white/90 mb-1">
            {bannerImages[currentSlide].title}
          </h2>
          <p className="text-sm text-white/80">
            {bannerImages[currentSlide].subtitle}
          </p>
        </div>
      </div>
      
      {/* 导航按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300 z-20"
        aria-label="上一张图片"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300 z-20"
        aria-label="下一张图片"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`切换到第${index + 1}张图片`}
          />
        ))}
      </div>
      
      {/* 装饰性元素 */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000 pointer-events-none" />
    </div>
  );
};

export default HeroBanner;