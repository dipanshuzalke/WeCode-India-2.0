// app/dsa/layout.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Code2, TrendingUp } from "lucide-react";
import DsaHeroSection from "@/components/dsa/DsaHeroSection";

export default function DsaLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  // Detect exactly /dsa/topics/[id]
  const isTopicDetailExact = /^\/dsa\/topics\/[^\/]+$/.test(path);
  // If you want to hide on any nested under topics, use:
  // const isTopicDetailAny = path.startsWith("/dsa/topics/");

  if (isTopicDetailExact) {
    // Skip rendering DSA header/tabs; just render children.
    return <>{children}</>;
  }

  // Otherwise render the usual DSA layout
  const tabs = [
    { href: "/dsa/topics", label: "Topics", icon: BookOpen },
    { href: "/dsa/problems", label: "Problems", icon: Code2 },
    { href: "/dsa/progress", label: "Progress", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black ">
      <DsaHeroSection />
      <div className="container mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-zinc-700 mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  path === tab.href
                    ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-zinc-600"
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
