export function Ribbon() {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 z-10 flex rotate-3 flex-nowrap gap-4 overflow-hidden bg-blue-500 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <div key={item} className="flex gap-4">
            <span className="whitespace-nowrap font-medium text-white">
              HMIF UNDIP
            </span>
            <span className="text-white">•</span>
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 z-10 flex -rotate-3 flex-nowrap gap-4 overflow-hidden bg-blue-400 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <div key={item} className="flex gap-4">
            <span className="whitespace-nowrap font-medium text-white">
              HMIF UNDIP
            </span>
            <span className="text-white">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
