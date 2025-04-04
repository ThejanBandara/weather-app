// components/CurrentDate.tsx
'use client';

import React from 'react';

const CurrentDate: React.FC = () => {
  const today = new Date();
  const shortDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return <span>{shortDate}</span>;
};

export default CurrentDate;
