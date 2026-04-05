/**
 * Data fetching and types re-exported for backwards compatibility.
 * 
 * For new code, prefer importing from:
 * - ./types for type definitions
 * - ./api for data fetching functions
 */

// Re-export types
export type { 
  ApiProject, 
  ApiProjectLink, 
  Education, 
  Experience, 
  Profile, 
  Project 
} from "./types";

// Re-export API functions
export { 
  getEducation, 
  getExperiences, 
  getProfile, 
  getProject, 
  getProjects 
} from "./api";
