'use client';

import { useLanguage } from '@/contexts/languagecontext';
import React from 'react';

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();

  return (
    <div lang={language} dir={language === 'fa' ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
}
