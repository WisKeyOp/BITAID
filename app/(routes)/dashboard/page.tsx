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
          <h1 className="text-3xl font-bold tracking-tight text-white">My Dashboard</h1>
          <p className="mt-1 text-gray-300">
            Manage your medical consultations and view your history.
          </p>
        </div>
        <AddNewSession />
      </header>

      {/* Main Content - History First */}
      <div className="mb-12">
        <Suspense fallback={<HistorySkeleton />}>
          <HistoryList />
        </Suspense>
      </div>

      {/* Doctor Cards Below History */}
      <div className="mt-16">
        <Suspense fallback={<DoctorCardSkeleton />}>
          <DoctorsAgentList />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;