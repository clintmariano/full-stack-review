import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { QuestionSection } from "@/components/QuestionSection";
import { ArrowLeft } from "@/components/Icons";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return { title: "Not Found" };
  }

  return {
    title: `${category.name} Interview Questions | Full Stack Review`,
    description: `${category.name} interview questions and answers for freshers, intermediate, and experienced developers.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Categories
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {category.name}
          </h1>
          <p className="text-gray-600">
            {category.subtitle} - Comprehensive questions and answers for all experience levels.
          </p>
        </header>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {category.sections.map((section, index) => (
            <QuestionSection
              key={index}
              title={section.title}
              questions={section.questions}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
