import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full Stack Review
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Master your technical interviews with curated questions and detailed answers
            for full-stack development topics.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              subtitle={category.subtitle}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
