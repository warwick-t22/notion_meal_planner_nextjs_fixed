'use client';

import React from 'react';
import LayoutWrapper from './components/LayoutWrapper';
import CalendarView from './components/CalendarView';

export default function Home() {
  return (
    <LayoutWrapper>
      <CalendarView />
    </LayoutWrapper>
  );
}
