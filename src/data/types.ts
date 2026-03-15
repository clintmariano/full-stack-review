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
