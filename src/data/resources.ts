export type ResourceCategory = "catalog" | "product-manual" | "technical-drawing" | "reference" | "certificate";

export type ProductSeries = "VIR-800" | "VIR-832" | "VIR-850" | "LXC" | "VIR-DX-900" | "Other";

export interface Resource {
  id: string;
  name: string;
  path: string;
  category: ResourceCategory;
  productSeries?: ProductSeries;
  description?: string;
}

export const catalogs: Resource[] = [
  {
    id: "catalog-vir-800-em",
    name: "VIR-800 Electro Magnetic Flow Meter",
    path: "/catalogs/VIR-800 ELECTRO MAGNETIC FLOW METER ONLY-24sept.pdf",
    category: "catalog",
    productSeries: "VIR-800",
    description: "Electromagnetic Flow Meter Catalog",
  },
  {
    id: "catalog-vir-800-india",
    name: "VIR-800 India",
    path: "/catalogs/VIR-800 india.pdf",
    category: "catalog",
    productSeries: "VIR-800",
    description: "VIR-800 India Catalog",
  },
  {
    id: "catalog-vir-850",
    name: "VIR-850 Ultrasonic Flow Meter",
    path: "/catalogs/VIR-850-ULTRASONIC-Remote version-25603.pdf",
    category: "catalog",
    productSeries: "VIR-850",
    description: "Ultrasonic Flow Meter and Heat Meter - 24V",
  },
  {
    id: "catalog-vir-832-insertion",
    name: "VIR-832 Insertion Type",
    path: "/catalogs/VIR-832-insertion25103.pdf",
    category: "catalog",
    productSeries: "VIR-832",
    description: "Ultrasonic Flow Meter - Insertion Type",
  },
  {
    id: "catalog-vir-832-clamp",
    name: "VIR-832 Clamp On Meter",
    path: "/catalogs/VIR-832-VIR-832M-CLAMP ON-25818.PDF",
    category: "catalog",
    productSeries: "VIR-832",
    description: "Non-Invasive Clamp On Meter",
  },
  {
    id: "catalog-vir-830",
    name: "VIR-830 Portable Clamp On",
    path: "/catalogs/VIR-830-PORTABLE CLAMP ON -.pdf",
    category: "catalog",
    productSeries: "VIR-832",
    description: "Portable Clamp On Meter",
  },
  {
    id: "catalog-vir-dx-900",
    name: "VIR-DX-900",
    path: "/catalogs/VIR-DX-900.pdf",
    category: "catalog",
    productSeries: "VIR-DX-900",
    description: "VIR-DX-900 Catalog",
  },
  {
    id: "catalog-lxc-series",
    name: "LXC Series Ultrasonic",
    path: "/catalogs/LXC SERIES ULTRASONIC-24B19.pdf",
    category: "catalog",
    productSeries: "LXC",
    description: "Ultrasonic Flow Meter - Battery Operated",
  },
  {
    id: "catalog-magnetic-heat",
    name: "Magnetic Heat Flowmeter Catalog",
    path: "/catalogs/Magnetic-Heat-Flowmeter-LDG-B,Y-Catalog-25a07.pdf",
    category: "catalog",
    description: "Magnetic Heat Flowmeter LDG-B,Y Catalog",
  },
  {
    id: "catalog-ut-formation",
    name: "UT Formation Evidence",
    path: "/catalogs/VIRTEC INSTRUMENTS INC - UT Formation Evidence_210324_011502.pdf",
    category: "catalog",
    description: "VIRTEC INSTRUMENTS INC - UT Formation Evidence",
  },
];

export const manuals: Resource[] = [
  // VIR-800 Series Manuals
  {
    id: "manual-vir-800-user",
    name: "VIR-800 User Manual",
    path: "/manuals/VIR-800 USER MANUAL-25509-new.pdf",
    category: "product-manual",
    productSeries: "VIR-800",
    description: "VIR-800 User Manual",
  },
  {
    id: "manual-vir-800-install",
    name: "VIR-800 Installation Manual",
    path: "/manuals/VIR-800 INSRT-MANUAL-25509-new.pdf",
    category: "product-manual",
    productSeries: "VIR-800",
    description: "VIR-800 Installation Manual",
  },
  
  // VIR-832 Series Manuals
  {
    id: "manual-vir-832-user",
    name: "VIR-832 User Manual",
    path: "/manuals/VIR-832-USER MANUAL - 25709.pdf",
    category: "product-manual",
    productSeries: "VIR-832",
    description: "VIR-832 User Manual",
  },
  {
    id: "manual-vir-832-master-25805",
    name: "VIR-832 User Manual (25805)",
    path: "/manuals/MASTER FILES/VIR-832-USER MANUAL - 25805[1].pdf",
    category: "product-manual",
    productSeries: "VIR-832",
    description: "VIR-832 User Manual - Master File",
  },
  {
    id: "manual-vir-832-master-25808",
    name: "VIR-832 User Manual (25808)",
    path: "/manuals/MASTER FILES/VIR-832-USER MANUAL - 25808Copy.pdf",
    category: "product-manual",
    productSeries: "VIR-832",
    description: "VIR-832 User Manual - Master File Copy",
  },
  {
    id: "manual-vir-832-excel",
    name: "VIR-832 User Manual (Excel)",
    path: "/manuals/VIR-832-USER MANUAL - 25709.xlsx",
    category: "product-manual",
    productSeries: "VIR-832",
    description: "VIR-832 User Manual - Excel Format",
  },
  
  // VIR-850 Series Manuals
  {
    id: "manual-vir-850-user-25509",
    name: "VIR-850 User Manual (25509)",
    path: "/manuals/VIR 850 USER MANUAL-25509-new.pdf",
    category: "product-manual",
    productSeries: "VIR-850",
    description: "VIR-850 User Manual",
  },
  {
    id: "manual-vir-850-user-25710",
    name: "VIR-850 User Manual (25710)",
    path: "/manuals/VIR 850 USER MANUAL-25710.pdf",
    category: "product-manual",
    productSeries: "VIR-850",
    description: "VIR-850 User Manual",
  },
  
  // LXC Series Manuals
  {
    id: "manual-lxc-user",
    name: "LXC User Manual",
    path: "/manuals/LXC -USER MANUAL 24B19.pdf",
    category: "product-manual",
    productSeries: "LXC",
    description: "LXC Series User Manual",
  },
  
  // VIR-DX-900 Manuals
  {
    id: "manual-vir-dx-900",
    name: "VIR-DX-900 Clamp On Manual",
    path: "/manuals/VIR-DX-900 CLAMP ON MANUAL.pdf",
    category: "product-manual",
    productSeries: "VIR-DX-900",
    description: "VIR-DX-900 Clamp On Manual",
  },
  
  // Technical Drawings
  {
    id: "drawing-ga-electro-magnetic",
    name: "Electro Magnetic Flow Meter GA Drawing",
    path: "/manuals/Virtec Electro Magentic Flow Meter GA Drawing-24.pdf",
    category: "technical-drawing",
    productSeries: "VIR-800",
    description: "General Arrangement Drawing for Electro Magnetic Flow Meter",
  },
  
  // Reference Documents - BTU Manuals
  {
    id: "ref-vir-all-models",
    name: "USER MANUAL - VIR ALL MODELS",
    path: "/manuals/MANUAL-BTU/USER MANUAL -VIR ALL MODELS-25915.pdf",
    category: "reference",
    description: "User Manual for VIR All Models",
  },
  
  // Reference Documents - Master Files
  {
    id: "ref-menu-table",
    name: "VIR SERIES MENU TABLE",
    path: "/manuals/MASTER FILES/VIR SERIES MENU  TABLE.xlsx",
    category: "reference",
    description: "VIR Series Menu Table",
  },
  {
    id: "ref-menu-table-restructured",
    name: "Restructured VIR SERIES MENU TABLE",
    path: "/manuals/MASTER FILES/Restructured_VIR_SERIES_MENU_TABLE.xlsx",
    category: "reference",
    description: "Restructured VIR Series Menu Table",
  },
  {
    id: "ref-vir-850-dimension",
    name: "VIR-850 Dimension",
    path: "/manuals/MASTER FILES/VIR-850-DIMENSION.xlsx",
    category: "reference",
    productSeries: "VIR-850",
    description: "VIR-850 Dimension Specifications",
  },
  {
    id: "ref-vir-832-docx",
    name: "VIR-832 Documentation",
    path: "/manuals/MASTER FILES/VIR-832.docx",
    category: "reference",
    productSeries: "VIR-832",
    description: "VIR-832 Documentation",
  },
  {
    id: "ref-vir-850-docx",
    name: "VIR-850 Documentation",
    path: "/manuals/MASTER FILES/VIR-850.docx",
    category: "reference",
    productSeries: "VIR-850",
    description: "VIR-850 Documentation",
  },
  
  // Reference Documents - SRAWING (Drawings)
  {
    id: "ref-drawing-page-10",
    name: "SRAWING Page 10",
    path: "/manuals/MASTER FILES/SRAWING/Page no 10.pdf",
    category: "reference",
    description: "Technical Drawing Page 10",
  },
  {
    id: "ref-drawing-page-11",
    name: "SRAWING Page 11",
    path: "/manuals/MASTER FILES/SRAWING/Page no 11.pdf",
    category: "reference",
    description: "Technical Drawing Page 11",
  },
  {
    id: "ref-drawing-page-12",
    name: "SRAWING Page 12",
    path: "/manuals/MASTER FILES/SRAWING/Page no 12.pdf",
    category: "reference",
    description: "Technical Drawing Page 12",
  },
  {
    id: "ref-drawing-page-13",
    name: "SRAWING Page 13",
    path: "/manuals/MASTER FILES/SRAWING/Page no 13.pdf",
    category: "reference",
    description: "Technical Drawing Page 13",
  },
  {
    id: "ref-drawing-page-16",
    name: "SRAWING Page 16",
    path: "/manuals/MASTER FILES/SRAWING/Page no 16.pdf",
    category: "reference",
    description: "Technical Drawing Page 16",
  },
  {
    id: "ref-drawing-page-17",
    name: "SRAWING Page 17",
    path: "/manuals/MASTER FILES/SRAWING/Page no 17.pdf",
    category: "reference",
    description: "Technical Drawing Page 17",
  },
];

export const allResources = [...catalogs, ...manuals];

// Helper functions
export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return allResources.filter((resource) => resource.category === category);
}

export function getResourcesByProductSeries(productSeries: ProductSeries): Resource[] {
  return allResources.filter((resource) => resource.productSeries === productSeries);
}

export function getCatalogs(): Resource[] {
  return catalogs;
}

export function getManuals(): Resource[] {
  return manuals;
}

export function searchResources(query: string): Resource[] {
  const lowerQuery = query.toLowerCase();
  return allResources.filter(
    (resource) =>
      resource.name.toLowerCase().includes(lowerQuery) ||
      resource.description?.toLowerCase().includes(lowerQuery) ||
      resource.productSeries?.toLowerCase().includes(lowerQuery)
  );
}
