"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, CreditCard, DollarSign, User, Settings, Shield, FileText, Users, Receipt, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cardMenuItems = [
  {
    title: "Add/Edit Cards",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto",
    icon: CreditCard,
    href: "/cards/add-edit"
  },
  {
    title: "Cost Centres",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto",
    icon: Receipt,
    href: "/cards/cost-centres"
  },
  {
    title: "Assigned Drivers",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    icon: Users,
    href: "/cards/drivers"
  },
  {
    title: "Card Statements/Reports",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    icon: FileText,
    href: "/cards/statements"
  }
];

const billingMenuItems = [
  {
    title: "View Transactions",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    icon: DollarSign,
    href: "/billing/transactions"
  },
  {
    title: "View Invoices",
    description: "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo",
    icon: Receipt,
    href: "/billing/invoices"
  },
  {
    title: "Manage Payment Methods",
    description: "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo",
    icon: DollarSign,
    href: "/billing/payment-methods",
    subItems: [
      { label: "Make Payment", href: "/billing/make-payment" },
      { label: "Doloremque laudantiu Rem", href: "/billing/payment-details" }
    ]
  },
  {
    title: "Update Billing Address",
    description: "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo",
    icon: FileText,
    href: "/billing/address"
  }
];

const accountMenuItems = [
  {
    title: "Address/Contact Details",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    icon: User,
    href: "/account/contact"
  },
  {
    title: "Personal Information",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    icon: User,
    href: "/account/personal"
  },
  {
    title: "Change Password",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    icon: Shield,
    href: "/account/password"
  },
  {
    title: "Notification Settings",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    icon: Bell,
    href: "/account/notifications"
  },
  {
    title: "View Login History",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    icon: FileText,
    href: "/account/login-history"
  }
];

export function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { brand, setBrand } = useTheme();

  return (
    <>
      <header className="border-b bg-white">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Frieda&apos;s Flowers</span>
            </Link>
            <span className="text-sm text-muted-foreground">Lisa Rose</span>
          </div>
          <div className="mx-auto hidden md:flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative flex items-center gap-1 px-6 py-2 rounded-t-lg transition-colors ${
                isMenuOpen ? "bg-[hsl(var(--menu-bg))] text-[hsl(var(--menu-text))]" : "bg-white text-[hsl(var(--menu-bg))]"
              }`}
            >
              <span className={isMenuOpen || isHovered ? "text-[hsl(var(--menu-text))]" : ""}>Click here</span> to Manage your{" "}
              <span className={isMenuOpen || isHovered ? "text-[hsl(var(--menu-text))]" : ""}>People, Cards & Transactions</span>
              {(isHovered || isMenuOpen) && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[calc(100%+2px)]"
                >
                  <div className="text-[hsl(var(--menu-text))]">▼</div>
                </motion.div>
              )}
            </button>
          </div>
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <ChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Select value={brand} onValueChange={(value: "fleetcard" | "cardlink") => setBrand(value)}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fleetcard">FleetCard</SelectItem>
                <SelectItem value="cardlink">Cardlink</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="search"
                className="w-full rounded-md border border-input bg-white pl-8 pr-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute w-full z-50 bg-white shadow-lg border-x border-b"
          >
            <div className="md:container mx-auto">
              <div className="md:grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 md:divide-dashed">
                {/* Cards Section */}
                <div className="p-4 md:p-8 space-y-6">
                  <h2 className="text-2xl font-bold mb-6 bg-[hsl(var(--menu-bg))] text-white p-4">Cards</h2>
                  <div className="space-y-2">
                    <Accordion type="single" collapsible className="md:hidden">
                      <AccordionItem value="cards">
                        <AccordionTrigger className="text-lg font-semibold">Cards Menu</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            {cardMenuItems.map((item) => (
                              <Link key={item.href} href={item.href} className="block hover:bg-[hsl(var(--menu-hover))] p-4 rounded-lg transition-colors">
                                <div className="flex items-start gap-4">
                                  <div className="rounded-full bg-primary/10 p-2">
                                    <item.icon className="h-6 w-6 text-primary" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="hidden md:block space-y-6">
                      {cardMenuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="block hover:bg-[hsl(var(--menu-hover))] p-4 rounded-lg transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Billing Section */}
                <div className="p-4 md:p-8 space-y-6">
                  <h2 className="text-2xl font-bold mb-6 bg-[hsl(var(--menu-bg))] text-white p-4">Billing</h2>
                  <div className="space-y-2">
                    <Accordion type="single" collapsible className="md:hidden">
                      <AccordionItem value="billing">
                        <AccordionTrigger className="text-lg font-semibold">Billing Menu</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            {billingMenuItems.map((item) => (
                              <div key={item.href}>
                                <Link href={item.href} className="block hover:bg-[hsl(var(--menu-hover))] p-4 rounded-lg transition-colors">
                                  <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-primary/10 p-2">
                                      <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                      <p className="text-gray-600">{item.description}</p>
                                      {item.subItems && (
                                        <div className="mt-4 space-y-2 pl-4 border-l-2 border-primary/20">
                                          {item.subItems.map((subItem) => (
                                            <Link
                                              key={subItem.href}
                                              href={subItem.href}
                                              className="block text-primary hover:text-primary/80"
                                            >
                                              • {subItem.label}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="hidden md:block space-y-6">
                      {billingMenuItems.map((item) => (
                        <div key={item.href}>
                          <Link href={item.href} className="block hover:bg-[hsl(var(--menu-hover))] p-4 rounded-lg transition-colors">
                            <div className="flex items-start gap-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <item.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                {item.subItems && (
                                  <div className="mt-4 space-y-2 pl-4 border-l-2 border-primary/20">
                                    {item.subItems.map((subItem) => (
                                      <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className="block text-primary hover:text-primary/80"
                                      >
                                        • {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Account Section */}
                <div className="p-4 md:p-8 space-y-6">
                  <h2 className="text-2xl font-bold mb-6 bg-[hsl(var(--menu-bg))] text-white p-4">Account</h2>
                  <div className="space-y-2">
                    <Accordion type="single" collapsible className="md:hidden">
                      <AccordionItem value="account">
                        <AccordionTrigger className="text-lg font-semibold">Account Menu</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            {accountMenuItems.map((item) => (
                              <Link key={item.href} href={item.href} className="block hover:bg-[hsl(var(--menu-hover))] p-4 rounded-lg transition-colors">
                                <div className="flex items-start gap-4">
                                  <div className="rounded-full bg-primary/10 p-2">
                                    <item.icon className="h-6 w-6 text-primary" />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="hidden md:block space-y-6">
                      {accountMenuItems.map((item) => (
                        <Link key={item.href} href={item.href} className="block hover:bg-[hsl(var(--menu-hover))] p-4 rounded-lg transition-colors">
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}