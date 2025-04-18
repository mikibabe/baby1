"use client";

import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";
import { useTheme } from "@/lib/theme-provider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const themes = [
  { name: "Orange", value: "orange" },
  { name: "Red", value: "red" },
  { name: "Purple", value: "purple" },
  { name: "Blue", value: "blue" },
  { name: "Yellow", value: "yellow" },
  { name: "Green", value: "green" },
] as const;

export default function Settings() {
  const { theme, setTheme } = useTheme();

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
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">
                Customize your dashboard appearance
              </p>
            </div>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Theme Settings</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {themes.map((t) => (
                    <Button
                      key={t.value}
                      onClick={() => setTheme(t.value)}
                      variant={theme === t.value ? "default" : "outline"}
                      className="h-20"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full theme-${t.value}`}
                          style={{
                            backgroundColor: `hsl(var(--theme-primary))`,
                          }}
                        />
                        <span>{t.name}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}