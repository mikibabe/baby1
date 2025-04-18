"use client";

import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Charts } from "@/components/dashboard/charts";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <aside className="hidden md:block w-[300px]">
          <Sidebar />
        </aside>
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Account Overview</h1>
              <p className="text-muted-foreground">
                Manage your account settings and view your financial information
              </p>
            </div>
            <Charts />
          </div>
        </main>
      </div>
    </div>
  );
}