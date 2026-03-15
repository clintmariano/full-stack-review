import { eventDrivenCategory } from "./event-driven";
import { systemDesignCategory } from "./system-design";
import { nosqlCategory } from "./nosql";
import { sqlCategory } from "./sql";
import { designPatternsCategory } from "./design-patterns";
import { javaCategory } from "./java";
import { microservicesCategory } from "./microservices";
import { reactCategory } from "./react";
import { springCategory } from "./spring";

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface QuestionSection {
  title: string;
  questions: Question[];
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  color: string;
  sections: QuestionSection[];
}

export const categories: Category[] = [
  javaCategory,
  designPatternsCategory,
  reactCategory,
  sqlCategory,
  nosqlCategory,
  springCategory,
  microservicesCategory,
  eventDrivenCategory,
  systemDesignCategory
];





