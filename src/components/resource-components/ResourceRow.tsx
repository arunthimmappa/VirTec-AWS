"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Resource } from "@/data/resources";

interface ResourceRowProps {
  resource: Resource;
}

export default function ResourceRow({ resource }: ResourceRowProps) {
  const getFileExtension = (path: string) => {
    const ext = path.split(".").pop()?.toUpperCase();
    return ext || "PDF";
  };

  return (
    <div className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 py-3 px-3 sm:px-4 hover:bg-slate-50/50 transition-colors duration-200 min-h-[44px]">
      {/* Left side: Filename */}
      <div className="flex-1 min-w-0">
        <span className="text-xs sm:text-sm md:text-sm lg:text-base text-slate-900 font-medium group-hover:text-primary-yellow transition-colors duration-200 break-words">
          {resource.name}
        </span>
      </div>

      {/* Middle: Product Series Tag and File Type */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {resource.productSeries && (
          <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-primary-yellow/20 text-slate-900 whitespace-nowrap">
            {resource.productSeries}
          </span>
        )}
        <span className="text-xs sm:text-sm text-slate-500 font-medium whitespace-nowrap">
          {getFileExtension(resource.path)}
        </span>
      </div>

      {/* Right side: Download Button */}
      <div className="flex-shrink-0">
        <Link
          href={resource.path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-primary-yellow text-slate-900 font-medium text-xs sm:text-sm hover:bg-primary-yellow/90 transition-colors shadow-sm hover:shadow min-h-[44px] min-w-[44px]"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download</span>
          <span className="sm:hidden">↓</span>
        </Link>
      </div>
    </div>
  );
}
