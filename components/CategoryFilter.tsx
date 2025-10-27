import React, { useMemo } from 'react';
import { AI } from '../data/ai';

interface CategoryFilterProps {
  AIs: AI[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

export default function CategoryFilter({ AIs, searchQuery, setSearchQuery, selectedCategories, setSelectedCategories }: CategoryFilterProps) {
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    AIs.forEach((p) => categories.add(p.category));
    return ['Toutes', ...Array.from(categories).sort()];
  }, [AIs]);

  const handleCategoryClick = (category: string) => {
    if (category === 'Toutes') {
      setSelectedCategories([]);
    } else if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="relative flex-1 lg:max-w-md">
          <input
            type="text"
            placeholder="Rechercher une IA..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-4 py-3 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-foreground mr-2">
            Explorer par catégorie :
          </span>
          {allCategories.map((category) => {
            const isSelected = selectedCategories.includes(category) || (category === 'Toutes' && selectedCategories.length === 0);
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-200 border ${isSelected
                    ? "bg-yellow-500 border-yellow-500 text-black"
                    : "bg-card hover:bg-primary/20 hover:text-primary-foreground border-border text-foreground"
                  }`}>
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
