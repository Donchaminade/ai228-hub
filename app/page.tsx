'use client';

import { useState, useMemo } from 'react';
import AICard from '../components/AICard';
import CategoryFilter from '../components/CategoryFilter';
import { AIsData, AI } from '../data/ai';
import Navbar from '../components/Navbar';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredAIs = useMemo(() => {
    let filtered = AIsData;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(ai =>
        ai.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ai.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ai.utilisation.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(ai => selectedCategories.includes(ai.category));
    }

    return filtered;
  }, [AIsData, searchQuery, selectedCategories]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI<span className="text-primary">228</span> Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La plateforme communautaire qui recense les meilleures intelligences artificielles (IA) utilisées par les Togolais.
          </p>
        </div>

        <section className="mb-16">
          <CategoryFilter 
            AIs={AIsData} 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAIs.map(ai => (
              <AICard key={ai.id} ai={ai} />
            ))}
          </div>

          {filteredAIs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucune IA ne correspond à votre recherche.</p>
            </div>
          )}
        </section>

        <section className="text-center bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Partagez un outil IA !
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vous utilisez une IA qui n'est pas dans la liste ? Contribuez à la plateforme en l'ajoutant.
          </p>
          <a
            href="https://github.com/Donchaminade/ai228-hub/blob/master/data/ai.json"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Ajouter une IA sur GitHub
          </a>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Fait avec ❤️ par @Donchaminade — AI228 Hub 🇹🇬
          </p>
        </div>
      </footer>
    </div>
  );
}