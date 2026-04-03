"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { SIDEBAR_LINKS } from "@/lib/constants";

// lucide 아이콘 이름 → 컴포넌트 매핑 (any 타입 금지, as const 사용)
const iconMap = {
  LayoutDashboard,
  Settings,
} as const;

// 매핑된 아이콘 이름 타입
type IconName = keyof typeof iconMap;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-muted/30">
      <ScrollArea className="h-screen">
        <div className="p-4">
          <nav className="space-y-2">
            {SIDEBAR_LINKS.map((link) => {
              // 아이콘 이름 매핑 (타입 안전)
              const Icon = iconMap[link.icon as IconName];
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="size-4 flex-shrink-0" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  );
}
