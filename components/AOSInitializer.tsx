// /components/AOSInitializer.tsx
'use client'; // นี่คือการระบุว่าเป็น Client Component

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // นำเข้าไฟล์ CSS ของ AOS

const AOSInitializer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลาในการเคลื่อนไหว (มิลลิวินาที)
    });
  }, []);

  return null;
};

export default AOSInitializer;
