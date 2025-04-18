export function CardSection() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary/10 p-2">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-semibold">Cards</h2>
      </div>
      <div className="mt-4 relative">
        <div className="absolute -rotate-6 scale-95">
          <div className="h-36 w-56 rounded-xl bg-gradient-to-br from-red-400 to-red-600"></div>
        </div>
        <div className="absolute rotate-0 scale-100">
          <div className="h-36 w-56 rounded-xl bg-gradient-to-br from-red-500 to-red-700"></div>
        </div>
        <div className="absolute rotate-6 scale-95">
          <div className="h-36 w-56 rounded-xl bg-gradient-to-br from-red-600 to-red-800"></div>
        </div>
      </div>
      <button className="mt-44 w-full rounded-md bg-blue-50 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100">
        View Cards
      </button>
    </div>
  );
}