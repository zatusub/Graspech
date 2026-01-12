"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const sidebarItems = [
  {
    title: "Ask AI",
    icon: "/askai.png",
    href: "/",
  },
  {
    title: "History",
    icon: "/history.png",
    href: "/history",
  },
  {
    title: "Community",
    icon: "/community.png",
    href: "/community",
  },
];

// Memoize the BrandLogo to prevent re-renders when the parent (LeftSidebar) 
// re-renders due to pathname changes.
const BrandLogo = memo(() => (
  <div className="pt-8 px-2 w-full">
    <div className="w-full flex justify-center">
      <Image
        src="/HighGraspech.svg"
        alt="Graspech Logo"
        width={80}
        height={40}
        priority // Ensure the logo is loaded and ready immediately
        className="w-20 h-auto object-contain brightness-95 hover:brightness-100 transition-all"
      />
    </div>
  </div>
));

// Add display name for React DevTools
BrandLogo.displayName = "BrandLogo";

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-24 h-screen bg-[#FDFDFD] border-r border-[#E5E5E5] flex flex-col sticky top-0 left-0 items-center py-8">
      {/* Navigation Section */}
      <nav className="flex-1 w-full flex flex-col items-center">
        {/* Navigation Items - These will re-render to update active state */}
        <div className="w-full flex flex-col items-center space-y-8">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="flex flex-col items-center group w-full px-2"
              >
                {/* Icon Container - Active background logic applied here */}
                <div className={`
                  w-16 h-16 rounded-[20px] 
                  flex items-center justify-center 
                  transition-all duration-300 ease-out
                  ${isActive 
                    ? "bg-[#F0F0F0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]" 
                    : "bg-transparent group-hover:bg-[#F5F5F5]"
                  }
                `}>
                  <div className={`transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                  }`}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Title - Always visible, subtle positioning */}
                <span className={`
                  mt-2 text-[11px] font-semibold tracking-wide
                  transition-colors duration-300
                  ${isActive ? "text-black" : "text-[#8E8E93] group-hover:text-black"}
                `}>
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Brand Icon - Static and memoized to prevent re-render flicker */}
        <BrandLogo />
      </nav>
    </aside>
  );
}
