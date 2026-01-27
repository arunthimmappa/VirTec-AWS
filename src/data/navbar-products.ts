export type ProductCategory = "flow" | "heat" | "vsd" | "iaq";

export interface NavbarProduct {
  label: string;
  slug: string;
  description: string;
  category: ProductCategory;
}

export interface NavbarCategory {
  id: ProductCategory;
  label: string;
  description: string;
  products: NavbarProduct[];
}

// This is the source of truth - matches Navbar exactly
export const navbarCategories: NavbarCategory[] = [
  {
    id: "flow",
    label: "Flow Meters",
    description: "High-precision ultrasonic and electromagnetic flow measurement",
    products: [
      {
        label: "VIR-800 Series",
        slug: "vir-800",
        description: "Electromagnetic Flow Meter and Heat Meter - Inline Flanged",
        category: "flow",
      },
      {
        label: "VIR-INSRT-800 Series",
        slug: "vir-insrt-800",
        description: "Electromagnetic Flow Meter - Insertion Type",
        category: "flow",
      },
      {
        label: "VIR-850 Series",
        slug: "vir-850",
        description: "Ultrasonic Flow Meter -In Line Type",
        category: "flow",
      },
      {
        label: "VIR-832 M Insertion",
        slug: "vir-832-insertion",
        description: "Ultrasonic Flow Meter - Insertion Type",
        category: "flow",
      },
      {
        label: "VIR-832 M Clamp On",
        slug: "vir-832-clamp",
        description: "Non-Invasive Clamp On Flow  Meter",
        category: "flow",
      },
      {
        label: "LXC Water Meter",
        slug: "lxc-water",
        description: "Electronic Flow Meter for Water",
        category: "flow",
      },
    ],
  },
  {
    id: "heat",
    label: "Heat Meters",
    description: "Thermal energy measurement",
    products: [
      {
        label: "LXC Series",
        slug: "lxc-series",
        description: "Ultrasonic Heat Meter - Range 15mm to 300mm",
        category: "heat",
      },
      {
        label: "VIR UF VIR-850 upto 800mm",
        slug: "vir-uf",
        description: "Ultrasonic Heat Meter -In Line Type +Pt100/PT500 Temp Sensor",
        category: "heat",
      },
      {
        label: "VIR-832 M Insertion",
        slug: "vir-832-insertion-heat",
        description: "Ultrasonic Heat Meter - Insertion Type+ Pt100/PT500 Temp Sensor",
        category: "heat",
      },
      {
        label: "VIR-832 M/VIR DX-900 Clamp On- upto 1200mm",
        slug: "vir-832-clamp-heat",
        description: "Non-Invasive Clamp On Heat  Meter +Pt100/PT500/PT-1000 Temp Sensor",
        category: "heat",
      },
      {
        label: "VIR-800 Series",
        slug: "vir-800-heat",
        description: "Electromagnetic Heat Meter - Inline Flanged",
        category: "heat",
      },
      {
        label: "VIR-INSRT-800 Series",
        slug: "vir-insrt-800-heat",
        description: "Electromagnetic Heat Meter - Insertion Type",
        category: "heat",
      },
    ],
  },
  {
    id: "vsd",
    label: "Variable Speed Drives",
    description: "Intelligent motor control for energy efficiency",
    products: [
      {
        label: "Eco EM-700",
        slug: "em-700",
        description: "VSD for Ventilation",
        category: "vsd",
      },
      {
        label: "Basic EM-750 Series",
        slug: "em-750",
        description: "VSD for AHU",
        category: "vsd",
      },
      {
        label: "Advanced EM-760",
        slug: "em-760",
        description: "Advanced control logic for AHU and Pumps",
        category: "vsd",
      },
    ],
  },
  {
    id: "iaq",
    label: "IAQ Sensors",
    description: "Advanced monitoring for temperature, humidity, CO₂, PM",
    products: [
      {
        label: "VIR-IAQ-6-Series",
        slug: "vir-iaq-6",
        description: "Multi Sensor Option",
        category: "iaq",
      },
    ],
  },
];

// Helper function to get all products
export function getAllNavbarProducts(): NavbarProduct[] {
  return navbarCategories.flatMap((category) => category.products);
}

// Helper function to get products by category
export function getNavbarProductsByCategory(category: ProductCategory): NavbarProduct[] {
  const foundCategory = navbarCategories.find((cat) => cat.id === category);
  return foundCategory ? foundCategory.products : [];
}

// Helper function to get category by id
export function getNavbarCategory(category: ProductCategory): NavbarCategory | undefined {
  return navbarCategories.find((cat) => cat.id === category);
}
