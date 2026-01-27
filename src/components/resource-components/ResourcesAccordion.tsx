"use client";

import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, Search, X, Package } from "lucide-react";
import ResourceRow from "./ResourceRow";
import { Resource, getCatalogs, getManuals } from "@/data/resources";

interface GroupedResources {
  [key: string]: Resource[];
}

export default function ResourcesAccordion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const catalogs = getCatalogs();
  const manuals = getManuals();
  const allResources = [...catalogs, ...manuals];

  // Group all resources (catalogs + manuals) by product series
  const groupedResources = useMemo(() => {
    const grouped: GroupedResources = {};
    allResources.forEach((resource) => {
      const key = resource.productSeries || "Other";
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(resource);
    });
    
    // Sort resources within each group: catalogs first, then manuals
    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) => {
        // Catalogs come before manuals
        if (a.category === "catalog" && b.category !== "catalog") return -1;
        if (a.category !== "catalog" && b.category === "catalog") return 1;
        // Otherwise sort alphabetically by name
        return a.name.localeCompare(b.name);
      });
    });
    
    return grouped;
  }, [allResources]);

  // Filter resources based on search query
  const filteredGroupedResources = useMemo(() => {
    if (!searchQuery.trim()) return groupedResources;
    const query = searchQuery.toLowerCase();
    const filtered: GroupedResources = {};
    
    Object.keys(groupedResources).forEach((key) => {
      const filteredResources = groupedResources[key].filter(
        (resource) =>
          resource.name.toLowerCase().includes(query) ||
          resource.description?.toLowerCase().includes(query) ||
          resource.productSeries?.toLowerCase().includes(query)
      );
      if (filteredResources.length > 0) {
        filtered[key] = filteredResources;
      }
    });
    
    return filtered;
  }, [groupedResources, searchQuery]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  // Expand sections that match search query
  useMemo(() => {
    if (searchQuery.trim()) {
      const newExpanded = new Set<string>();
      Object.keys(filteredGroupedResources).forEach((key) => {
        if (filteredGroupedResources[key].length > 0) {
          newExpanded.add(key);
        }
      });
      setExpandedSections(newExpanded);
    }
  }, [searchQuery, filteredGroupedResources]);

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalogs, manuals, and documentation..."
              className="w-full pl-10 pr-10 sm:pl-12 sm:pr-12 py-3 sm:py-4 rounded-full border border-slate-200 bg-white text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-yellow/50 focus:border-primary-yellow transition-all duration-200 shadow-sm hover:shadow-md min-h-[44px]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Series Sections - Grouped with Catalogs and Manuals Together */}
        {Object.keys(filteredGroupedResources)
          .sort((a, b) => {
            // Sort "Other" to the end
            if (a === "Other") return 1;
            if (b === "Other") return -1;
            return a.localeCompare(b);
          })
          .map((series) => {
            const sectionId = series;
            const resources = filteredGroupedResources[series];
            const isExpanded = expandedSections.has(sectionId);
            
            // Count catalogs and manuals
            const catalogCount = resources.filter(r => r.category === "catalog").length;
            const manualCount = resources.filter(r => r.category !== "catalog").length;

            return (
              <div key={series} className="mb-4 sm:mb-6">
                <button
                  onClick={() => toggleSection(sectionId)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200 group min-h-[44px]"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow flex-shrink-0" />
                    <h2 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-display text-slate-900 truncate">
                      {series === "Other" ? "Other Resources" : `${series} Series`}
                    </h2>
                    <span className="text-xs sm:text-xs md:text-sm text-slate-500 flex-shrink-0 hidden sm:inline">
                      ({resources.length})
                      {(catalogCount > 0 || manualCount > 0) && (
                        <span className="ml-1 text-xs">
                          • {catalogCount > 0 && `${catalogCount} catalog${catalogCount !== 1 ? 's' : ''}`}
                          {catalogCount > 0 && manualCount > 0 && ', '}
                          {manualCount > 0 && `${manualCount} manual${manualCount !== 1 ? 's' : ''}`}
                        </span>
                      )}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="mt-2 rounded-lg overflow-hidden bg-white border border-slate-100">
                    {/* Separate catalogs and manuals with small headings */}
                    {(() => {
                      const catalogsInSection = resources.filter(r => r.category === "catalog");
                      const manualsInSection = resources.filter(r => r.category !== "catalog");
                      
                      return (
                        <>
                          {catalogsInSection.length > 0 && (
                            <>
                              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50/50 border-b border-slate-100">
                                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Catalogs</h3>
                              </div>
                              {catalogsInSection.map((resource) => (
                                <ResourceRow key={resource.id} resource={resource} />
                              ))}
                            </>
                          )}
                          
                          {manualsInSection.length > 0 && (
                            <>
                              <div className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-50/50 border-slate-100 ${catalogsInSection.length > 0 ? 'border-t border-b' : 'border-b'}`}>
                                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Manuals</h3>
                              </div>
                              {manualsInSection.map((resource) => (
                                <ResourceRow key={resource.id} resource={resource} />
                              ))}
                            </>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            );
          })}

        {/* Empty State */}
        {Object.keys(filteredGroupedResources).length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display text-slate-900">No resources found</h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg text-slate-600">
                Try adjusting your search query to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
