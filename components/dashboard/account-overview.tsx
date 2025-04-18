export function AccountOverview() {
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-semibold">Account Overview</h2>
      </div>
      <div className="mt-4 space-y-3">
        <div>
          <div className="text-sm text-muted-foreground">Available balance</div>
          <div className="text-2xl font-bold">$1,845.29</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Current balance</div>
          <div className="text-2xl font-bold">$1,325.29</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Credit limit</div>
          <div className="text-2xl font-bold">$1,500.00</div>
        </div>
      </div>
      <button className="mt-4 w-full rounded-md bg-blue-50 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100">
        View Transactions
      </button>
    </div>
  );
}