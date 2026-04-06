import { Track } from "./types";
import { javaCategory } from "./java";
import { reactCategory } from "./react";
import { springCategory } from "./spring";
import { sqlCategory } from "./sql";
import { nosqlCategory } from "./nosql";
import { designPatternsCategory } from "./design-patterns";
import { architectureFundamentalsCategory } from "./architecture-fundamentals";
import { systemDesignCategory } from "./system-design";
import { microservicesCategory } from "./microservices";
import { eventDrivenCategory } from "./event-driven";
import { scalabilityPerformanceCategory } from "./scalability-performance";
import { securityFundamentalsCategory } from "./security-fundamentals";
import { cloudArchitectureCategory } from "./cloud-architecture";
import { observabilityReliabilityCategory } from "./observability-reliability";
import { devopsDeliveryCategory } from "./devops-delivery";
import { architectureCaseStudiesCategory } from "./architecture-case-studies";

export const developerTrack: Track = {
  id: "developer",
  name: "Developer Track",
  description:
    "Core development skills covering languages, frameworks, databases, and design principles.",
  categories: [
    javaCategory,
    reactCategory,
    springCategory,
    sqlCategory,
    nosqlCategory,
    designPatternsCategory,
  ],
};

export const architectTrack: Track = {
  id: "architect",
  name: "Architect Track",
  description:
    "System-level thinking covering architecture patterns, scalability, security, and operational excellence.",
  categories: [
    architectureFundamentalsCategory,
    systemDesignCategory,
    microservicesCategory,
    eventDrivenCategory,
    scalabilityPerformanceCategory,
    securityFundamentalsCategory,
    cloudArchitectureCategory,
    observabilityReliabilityCategory,
    devopsDeliveryCategory,
    architectureCaseStudiesCategory,
  ],
};

export const tracks: Track[] = [developerTrack, architectTrack];

export const categories = tracks.flatMap((track) => track.categories);
