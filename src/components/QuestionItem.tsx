"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "./Icons";

interface QuestionItemProps {
  number: number;
  question: string;
  answer: string;
}

export function QuestionItem({ number, question, answer }: QuestionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mx-4 mb-3">
      <div
        className={`bg-gray-100 rounded-lg overflow-hidden ${
          isExpanded ? "bg-gray-50" : ""
        }`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-200 transition-colors text-left"
        >
          <div className="flex items-start gap-3 pr-4">
            <span className="text-gray-600 font-medium">{number}.</span>
            <span className="text-gray-800 font-medium">{question}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 text-purple-600 font-medium">
            <span>{isExpanded ? "Hide" : "Answer"}</span>
            {isExpanded ? (
              <ArrowUp className="w-4 h-4" />
            ) : (
              <ArrowDown className="w-4 h-4" />
            )}
          </div>
        </button>

        {isExpanded && (
          <div className="px-4 pb-4 pt-2 border-t border-gray-200">
            <MarkdownContent content={answer} />
          </div>
        )}
      </div>
    </div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  const parseContent = (text: string) => {
    const elements: React.ReactElement[] = [];
    const lines = text.split("\n");
    let inCodeBlock = false;
    let codeContent: string[] = [];
    let codeLanguage = "";
    let key = 0;

    const parseInlineFormatting = (line: string): React.ReactElement[] => {
      const parts: React.ReactElement[] = [];
      let remaining = line;
      let partKey = 0;

      while (remaining.length > 0) {
        // Check for inline code
        const inlineCodeMatch = remaining.match(/^`([^`]+)`/);
        if (inlineCodeMatch) {
          parts.push(
            <code
              key={partKey++}
              className="bg-gray-200 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono"
            >
              {inlineCodeMatch[1]}
            </code>
          );
          remaining = remaining.slice(inlineCodeMatch[0].length);
          continue;
        }

        // Check for bold text
        const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
        if (boldMatch) {
          parts.push(
            <strong key={partKey++} className="font-bold">
              {boldMatch[1]}
            </strong>
          );
          remaining = remaining.slice(boldMatch[0].length);
          continue;
        }

        // Find next special character
        const nextSpecial = remaining.search(/[`*]/);
        if (nextSpecial === -1) {
          parts.push(<span key={partKey++}>{remaining}</span>);
          break;
        } else if (nextSpecial === 0) {
          parts.push(<span key={partKey++}>{remaining[0]}</span>);
          remaining = remaining.slice(1);
        } else {
          parts.push(<span key={partKey++}>{remaining.slice(0, nextSpecial)}</span>);
          remaining = remaining.slice(nextSpecial);
        }
      }

      return parts;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check for code block start/end
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
          codeContent = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={key++} className="my-3">
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{codeContent.join("\n")}</code>
              </pre>
            </div>
          );
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        elements.push(<div key={key++} className="h-3" />);
        continue;
      }

      // Headers
      if (line.startsWith("**") && line.endsWith("**") && !line.includes("**", 2)) {
        elements.push(
          <h4 key={key++} className="font-bold text-gray-900 mt-4 mb-2">
            {line.slice(2, -2)}
          </h4>
        );
        continue;
      }

      // Numbered headers like "**1. Something**"
      const numberedHeaderMatch = line.match(/^\*\*(\d+\.\s+[^*]+)\*\*$/);
      if (numberedHeaderMatch) {
        elements.push(
          <h4 key={key++} className="font-bold text-gray-900 mt-4 mb-2">
            {numberedHeaderMatch[1]}
          </h4>
        );
        continue;
      }

      // Bullet points
      if (line.startsWith("- ")) {
        elements.push(
          <li key={key++} className="ml-4 text-gray-700 mb-1 list-disc list-inside">
            {parseInlineFormatting(line.slice(2))}
          </li>
        );
        continue;
      }

      // Table detection
      if (line.includes("|") && line.trim().startsWith("|")) {
        const tableLines: string[] = [line];
        while (i + 1 < lines.length && lines[i + 1].includes("|")) {
          i++;
          tableLines.push(lines[i]);
        }

        // Parse table
        const rows = tableLines.filter(l => !l.match(/^\|[\s-:|]+\|$/));
        if (rows.length > 0) {
          elements.push(
            <div key={key++} className="my-3 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr>
                    {rows[0].split("|").filter(c => c.trim()).map((cell, idx) => (
                      <th key={idx} className="border border-gray-300 px-3 py-2 bg-gray-100 font-semibold text-left">
                        {cell.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.slice(1).map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.split("|").filter(c => c.trim()).map((cell, cellIdx) => (
                        <td key={cellIdx} className="border border-gray-300 px-3 py-2">
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      // Regular paragraph
      elements.push(
        <p key={key++} className="text-gray-700 mb-2">
          {parseInlineFormatting(line)}
        </p>
      );
    }

    return elements;
  };

  return <div className="prose max-w-none">{parseContent(content)}</div>;
}
