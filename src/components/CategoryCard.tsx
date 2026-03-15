"use client";

import Link from "next/link";
import { CategoryIcon } from "./CategoryIcon";

interface CategoryCardProps {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  color: string;
}

export function CategoryCard({ id, name, subtitle, icon, color }: CategoryCardProps) {
  return (
    <Link href={`/category/${id}`}>
      <div className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-xl p-5 cursor-pointer border border-[#2a2a2a]">
        <div className="flex-shrink-0">
          <CategoryIcon icon={icon} color={color} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
