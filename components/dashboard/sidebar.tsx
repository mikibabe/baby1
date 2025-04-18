"use client";

import { useState } from "react";
import { CreditCard, ChevronDown, ChevronRight, Home, Receipt, Users, FileText, Settings, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  children?: { label: string; href: string }[];
  href?: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-4 w-4" />,
    label: "Account Overview",
    href: "/account",
  },
  {
    icon: <CreditCard className="h-4 w-4" />,
    label: "Manage Card",
    children: [
      { label: "View Cards", href: "/account/cards" },
      { label: "Card Limits", href: "/account/card-limits" },
      { label: "Card Settings", href: "/account/card-settings" },
    ],
  },
  {
    icon: <Receipt className="h-4 w-4" />,
    label: "Payments",
    children: [
      { label: "View Invoices", href: "/account/invoices" },
      { label: "Transaction Report", href: "/account/transactions" },
      { label: "Payment History", href: "/account/payment-history" },
    ],
  },
  {
    icon: <Users className="h-4 w-4" />,
    label: "Manage Users",
    children: [
      { label: "User List", href: "/account/users" },
      { label: "Add User", href: "/account/add-user" },
      { label: "User Roles", href: "/account/user-roles" },
    ],
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Documents",
    href: "/account/documents",
  },
  {
    icon: <Settings className="h-4 w-4" />,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: <Phone className="h-4 w-4" />,
    label: "Contact Support",
    href: "/account/support",
  },
];

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className="flex flex-col h-screen border-r">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Hi Lisa</h2>
        <Card>
          <CardHeader className="pb-4">
            <h3 className="font-medium">Account Overview</h3>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold text-primary">$1,845.29</div>
            <div className="text-xl">$1,325.29</div>
            <div className="text-xl">$1,500.00</div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Pay</Button>
          </CardFooter>
        </Card>
      </div>
      <nav className="flex-1 p-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.label} className="space-y-1">
            {item.children ? (
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between",
                  expandedItems[item.label] && "bg-accent"
                )}
                onClick={() => toggleItem(item.label)}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                {expandedItems[item.label] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="w-full justify-between"
                asChild
              >
                <Link href={item.href || "#"}>
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                </Link>
              </Button>
            )}
            {item.children && expandedItems[item.label] && (
              <div className="ml-6 space-y-1">
                {item.children.map((child) => (
                  <Button
                    key={child.label}
                    variant="ghost"
                    className="w-full justify-start text-sm font-normal"
                    asChild
                  >
                    <Link href={child.href}>{child.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}