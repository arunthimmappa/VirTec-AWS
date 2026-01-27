import { products, Product, ProductCategory } from "@/data/products";

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Get a product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category.includes(category));
}

/**
 * Get all unique categories from products
 */
export function getAllCategories(): ProductCategory[] {
  const categories = new Set<ProductCategory>();
  products.forEach((product) => {
    product.category.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories);
}

/**
 * Get all product slugs for static generation
 */
export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

export type { Product, ProductCategory } from "@/data/products";
