"use client";

import { useState } from "react";
import { QuestionItem } from "./QuestionItem";
import { ChevronDown, ChevronUp } from "./Icons";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface QuestionSectionProps {
  title: string;
  questions: Question[];
}

export function QuestionSection({ title, questions }: QuestionSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-6 px-4 hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-left pr-4">
          {title}
        </h2>
        <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-purple-500 flex items-center justify-center">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-purple-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-500" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="pb-4">
          {questions.map((q, index) => (
            <QuestionItem
              key={q.id}
              number={index + 1}
              question={q.question}
              answer={q.answer}
            />
          ))}
        </div>
      )}
    </div>
  );
}
