import ArrowUpIcon from '@heroicons/react/outline/ArrowUpIcon';
import React, { useCallback } from 'react';

/**
 * 최상단 이동 네비게이션 버튼
 * @returns
 */
function FloatingNavButton() {
  //* 스크롤 최상단 이동 핸들러
  const goToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      onClick={goToTop}
      className="fixed px-3 py-3 transition duration-200 ease-out bg-indigo-600 rounded-full opacity-50 cursor-pointer bottom-10 right-8 hover:opacity-100"
    >
      <ArrowUpIcon className="h-6 font-bold text-gray-200" />
    </div>
  );
}

export default FloatingNavButton;
