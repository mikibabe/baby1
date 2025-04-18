import { DashboardHeader } from "@/components/dashboard/header";
import { AccountOverview } from "@/components/dashboard/account-overview";
import { CardSection } from "@/components/dashboard/card-section";
import { PaymentSection } from "@/components/dashboard/payment-section";
import { Charts } from "@/components/dashboard/charts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <AccountOverview />
            <CardSection />
            <PaymentSection />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold">Hi Lisa</h1>
                <p className="text-muted-foreground mt-2">
                  Some informative text about Where stuff is on the site now, petrol prices,
                  industry developments, relevant shizzle
                </p>
                <p className="text-muted-foreground mt-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni
                </p>
              </div>
              <Charts />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}