export const HistorySkeleton = () => (
  <div className="mt-8 space-y-6">
    <div className="h-8 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex animate-pulse items-center justify-between">
        <div className="h-5 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-5 w-1/4 rounded-md bg-gray-200 dark:bg-gray-700"></div>
      </div>
    ))}
  </div>
);

export const DoctorCardSkeleton = () => (
  <div className="mt-8 space-y-4">
    <div className="h-8 w-1/2 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex animate-pulse items-center gap-4 rounded-lg border p-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded-md bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-3 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    ))}
  </div>
);