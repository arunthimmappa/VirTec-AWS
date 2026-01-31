export type ResourceCategory = "catalog" | "product-manual" | "technical-drawing" | "reference" | "certificate";

export type ProductSeries = "VIR-800" | "VIR-832" | "VIR-850" | "LXC" | "VIR-DX-900" | "VSD" | "VIR-IAQ" | "Other";

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
    path: "/catalogs/VIR-800 ELECTRO MAGNETIC 26128 .pdf",
    category: "catalog",
    productSeries: "VIR-800",
    description: "Electromagnetic Flow Meter Catalog",
  },
  {
    id: "catalog-vir-850",
    name: "VIR-850 Ultrasonic Flow and Heat Meter",
    path: "/catalogs/VIR-850-ULTRASONIC-FLOW &HEAT 26127.pdf",
    category: "catalog",
    productSeries: "VIR-850",
    description: "Ultrasonic Flow Meter and Heat Meter",
  },
  {
    id: "catalog-vir-832-insertion",
    name: "VIR-832M Insertion Type",
    path: "/catalogs/VIR-832M-UF-INSRT-26128.pdf",
    category: "catalog",
    productSeries: "VIR-832",
    description: "Ultrasonic Flow Meter - Insertion Type",
  },
  {
    id: "catalog-vir-832-clamp",
    name: "VIR-832M Clamp On Meter",
    path: "/catalogs/VIR-832M-CLAMP ON-6128.pdf",
    category: "catalog",
    productSeries: "VIR-832",
    description: "Non-Invasive Clamp On Meter",
  },
  {
    id: "catalog-vir-830",
    name: "VIR-830 Portable Clamp On",
    path: "/catalogs/VIR-830-PORTABLE CLAMP ON26128 -.pdf",
    category: "catalog",
    productSeries: "VIR-832",
    description: "Portable Clamp On Meter",
  },
  {
    id: "catalog-lxc-series",
    name: "LXC Series Heat Meter",
    path: "/catalogs/LXC SERIES-HEAT METER-26128.pdf",
    category: "catalog",
    productSeries: "LXC",
    description: "Ultrasonic Heat Meter - Battery Operated",
  },
  {
    id: "catalog-em-700",
    name: "EM700 Ventilation Inverter",
    path: "/catalogs/EM700 Ventilation Inverter.pdf",
    category: "catalog",
    productSeries: "VSD",
    description: "VSD for Ventilation",
  },
  {
    id: "catalog-em-750",
    name: "EM750 HVAC Basic Inverter",
    path: "/catalogs/EM750  HVAC Basic Inverter.pdf",
    category: "catalog",
    productSeries: "VSD",
    description: "VSD for AHU",
  },
  {
    id: "catalog-em-760",
    name: "EM760 HVAC Advanced Inverter",
    path: "/catalogs/EM760 HVAC Advanced Inverter.pdf",
    category: "catalog",
    productSeries: "VSD",
    description: "Advanced control logic for AHU and Pumps",
  },
  {
    id: "catalog-vir-iaq",
    name: "VIR-IAQ IAQ Sensors",
    path: "/catalogs/VIR-IAQ- IAQ SENSORS.pdf",
    category: "catalog",
    productSeries: "VIR-IAQ",
    description: "Indoor Air Quality Sensors",
  },
];

export const manuals: Resource[] = [
  {
    id: "manual-vir-800-user",
    name: "VIR-800 User Manual",
    path: "/manuals/VIR-800 USER MANUAL-26128.pdf",
    category: "product-manual",
    productSeries: "VIR-800",
    description: "VIR-800 User Manual",
  },
  {
    id: "manual-vir-800-insrt",
    name: "VIR-800 Insertion Manual",
    path: "/manuals/VIR-800-INSRT 26128.pdf",
    category: "product-manual",
    productSeries: "VIR-800",
    description: "VIR-800 Insertion Installation Manual",
  },
  {
    id: "manual-vir-832-vir-850",
    name: "VIR-832M + VIR-850 User Manual",
    path: "/manuals/VIR-832M +VIR 850-USER MANUAL - 26128.pdf",
    category: "product-manual",
    productSeries: "VIR-832",
    description: "VIR-832M and VIR-850 User Manual",
  },
  {
    id: "manual-vir-850",
    name: "VIR-850 Series User Manual",
    path: "/manuals/VIR-832M +VIR 850-USER MANUAL - 26128.pdf",
    category: "product-manual",
    productSeries: "VIR-850",
    description: "VIR-850 Series User Manual",
  },
  {
    id: "manual-vir-dx-900",
    name: "VIR-DX-900 Clamp On Manual",
    path: "/manuals/VIR-DX-900 CLAMP ON MANUAL 26128.pdf",
    category: "product-manual",
    productSeries: "VIR-DX-900",
    description: "VIR-DX-900 Clamp On Manual",
  },
  {
    id: "manual-lxc-series",
    name: "LXC Series Manual",
    path: "/manuals/LXC -SERIES MANUAL 26128.pdf",
    category: "product-manual",
    productSeries: "LXC",
    description: "LXC Series User Manual",
  },
  {
    id: "manual-vfd-em-750",
    name: "VFD EM-750 Manual",
    path: "/manuals/VFD-EM750 26128.pdf",
    category: "product-manual",
    productSeries: "VSD",
    description: "EM-750 Variable Speed Drive Manual",
  },
  {
    id: "manual-vfd-em-760",
    name: "VFD EM-760 Manual",
    path: "/manuals/VFD EM760 26128.pdf",
    category: "product-manual",
    productSeries: "VSD",
    description: "EM-760 Variable Speed Drive Manual",
  },
  {
    id: "drawing-ga-electro-magnetic",
    name: "Electro Magnetic Flow Meter GA Drawing",
    path: "/manuals/Virtec Electro Magentic Flow Meter GA Drawing-24.pdf",
    category: "technical-drawing",
    productSeries: "VIR-800",
    description: "General Arrangement Drawing for Electro Magnetic Flow Meter",
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
