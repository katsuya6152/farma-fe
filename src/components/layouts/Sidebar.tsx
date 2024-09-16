"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ClipboardList,
  Folder,
  Truck,
  Calculator,
  LucideIcon,
  Settings,
  User,
  CircleHelp,
  AlarmClockPlus,
  Bell,
  CircleGauge,
} from "lucide-react";

interface SidebarLinkItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

const mainSidebarLinks: SidebarLinkItem[] = [
  { href: "/dashboard", icon: CircleGauge, label: "ダッシュボード" },
  { href: "/cattle", icon: ClipboardList, label: "個体一覧" },
  { href: "/shipments", icon: Truck, label: "出荷一覧" },
  { href: "/auction-results", icon: Calculator, label: "せり結果" },
  { href: "/reminders", icon: AlarmClockPlus, label: "リマインダー設定" },
  { href: "/notifications", icon: Bell, label: "通知一覧" },
];

const bottomSidebarLinks: SidebarLinkItem[] = [
  { href: "/profile", icon: User, label: "ユーザー" },
  { href: "/settings", icon: Settings, label: "設定" },
  { href: "/help", icon: CircleHelp, label: "ヘルプ" },
];

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  icon: Icon,
  label,
  isActive,
}) => (
  <Link
    href={href}
    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
      isActive ? "bg-muted text-primary font-bold" : ""
    }`}
  >
    <Icon className="h-6 w-6" />
    {label}
  </Link>
);

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Folder className="h-6 w-6" />
            <span>FarMa(β)</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {mainSidebarLinks.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                isActive={pathname.includes(link.href)}
              />
            ))}
          </nav>
        </div>
        <div className="mt-auto pb-4">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {bottomSidebarLinks.map((link) => (
              <SidebarLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                isActive={pathname.includes(link.href)}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
