'use client';

import throttle from 'lodash/throttle';
import { useEffect, useState } from 'react';

type ProjectName = 'Epiday' | 'GlobalNomad' | 'Hyundai ISC';

function Button({
  name,
  isActive,
  onClick,
}: {
  name: ProjectName;
  isActive: boolean;
  onClick: () => void;
}) {
  const color = {
    Epiday: { text: 'text-[#373737]', bg: 'bg-[#373737]' },
    GlobalNomad: { text: 'text-[#004b36]', bg: 'bg-[#004b36]' },
    'Hyundai ISC': { text: 'text-[#002D72]', bg: 'bg-[#002D72]' },
  };
  return (
    <button
      onClick={onClick}
      className={`flex h-6 w-fit items-center gap-2 duration-300 ${isActive ? color[name].text : 'text-sm opacity-30'}`}
    >
      {name}
      <div className={`size-2 rounded-full ${isActive ? color[name].bg : 'bg-black'}`} />
    </button>
  );
}

export default function ProgressButtons() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const projectNames: ProjectName[] = ['Epiday', 'GlobalNomad', 'Hyundai ISC'];

  const handleScrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -50;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });

      setActiveButton(sectionId);

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const updateActiveSectionOnScroll = throttle(() => {
    if (isScrolling) return;

    if (window.scrollY === 0) {
      setActiveButton('Epiday');
      return;
    }

    projectNames.forEach((name) => {
      const section = document.getElementById(name);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= window.innerHeight * 0.2 && rect.top < window.innerHeight * 0.6) {
          setActiveButton(name);
        }
      }
    });
  }, 100);

  useEffect(() => {
    updateActiveSectionOnScroll();
    window.addEventListener('scroll', updateActiveSectionOnScroll);
    return () => {
      window.removeEventListener('scroll', updateActiveSectionOnScroll);
    };
  }, [updateActiveSectionOnScroll]);

  return (
    <div className="fixed right-4 top-1/2 flex -translate-y-1/2 flex-col items-end gap-2">
      {projectNames.map((name) => (
        <Button
          key={name}
          name={name}
          isActive={activeButton === name}
          onClick={() => handleScrollToSection(name)}
        />
      ))}
    </div>
  );
}
