export default function BlogLoading() {
  return (
    <div className="space-y-8">
      {/* Header skeleton */}
      <div className="text-center py-12 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl border border-pink-200/50">
        <div className="w-16 h-16 bg-pink-200 rounded-full mx-auto mb-4 animate-pulse" />
        <div className="h-8 bg-pink-200 rounded-lg w-48 mx-auto mb-2 animate-pulse" />
        <div className="h-4 bg-pink-100 rounded-lg w-96 mx-auto animate-pulse" />
      </div>

      {/* Search and tags skeleton */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="h-10 bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
      </div>

      {/* Blog cards skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-6">
            <div className="h-48 bg-gray-200 rounded-lg mb-4 animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
              <div className="flex gap-2">
                <div className="h-6 bg-pink-100 rounded-full w-16 animate-pulse" />
                <div className="h-6 bg-pink-100 rounded-full w-20 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 