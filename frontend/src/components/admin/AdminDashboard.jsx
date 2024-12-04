import React, { useRef, useEffect } from 'react';
import ManageFeatures from '../manage/ManageFeatures';
import ManageServices from '../manage/ManageServices';

const AdminDashboard = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`AdminDashboard renderizado ${renderCount.current} veces`);
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Panel de Administración</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ManageFeatures />
        <ManageServices />
      </div>
    </div>
  );
};

export default AdminDashboard;
