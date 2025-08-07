import { Suspense } from 'react';
import HistoryList from './_components/HistoryList';
import DoctorsAgentList from './_components/DoctorsAgentList';
import AddNewSession from './_components/AddNewSession';
import { HistorySkeleton, DoctorCardSkeleton } from '@/components/ui/skeletons';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <header className="flex items-center justify-between pb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your medical consultations and view your history.
          </p>
        </div>
        <AddNewSession />
      </header>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <Suspense fallback={<HistorySkeleton />}>
            <HistoryList />
          </Suspense>
        </div>

        {/* Sidebar Area */}
        <div className="lg:col-span-1">
          <Suspense fallback={<DoctorCardSkeleton />}>
            <DoctorsAgentList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;