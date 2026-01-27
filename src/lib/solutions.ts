import { solutions, Solution } from "@/data/solutions";

/**
 * Get all solutions
 */
export function getAllSolutions(): Solution[] {
  return solutions;
}

/**
 * Get a solution by slug
 */
export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

/**
 * Get all solution slugs for static generation
 */
export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}

export type { Solution } from "@/data/solutions";
