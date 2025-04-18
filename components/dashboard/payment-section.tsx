export function PaymentSection() {
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
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-semibold">Payments</h2>
      </div>
      <div className="mt-4 space-y-3">
        <div>
          <div className="text-sm text-muted-foreground">Next Payment Due</div>
          <div className="text-lg font-semibold">30/10/2025</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Payment Amount Due</div>
          <div className="text-lg font-semibold">$1,325.29</div>
        </div>
      </div>
      <button className="mt-4 w-full rounded-md bg-blue-50 px-4 py-2 text-sm text-blue-600 hover:bg-blue-100">
        Make Payment
      </button>
    </div>
  );
}