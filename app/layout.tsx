import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/lib/theme-provider';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A beautiful responsive dashboard with orange theme',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mock authentication check
  const isLoggedIn = true;
  
  if (!isLoggedIn && !(children.type?.name === "LoginPage")) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}