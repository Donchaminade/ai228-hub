import AICard from '@/components/AICard';
import Navbar from '@/components/Navbar';
import { AIsData } from '@/data/ai';

// Génère les pages statiques pour chaque catégorie au moment du build
export async function generateStaticParams() {
  const categories = new Set(AIsData.map(ai => ai.category));
  return Array.from(categories).map(category => ({ 
    // Encoder le nom de la catégorie pour qu'il soit valide dans une URL
    category: encodeURIComponent(category) 
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Décoder le nom de la catégorie depuis l'URL
  const category = decodeURIComponent(params.category);
  const filteredAIs = AIsData.filter(ai => ai.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Catégorie : <span className="text-primary">{category}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {filteredAIs.length} outil{filteredAIs.length > 1 ? 's' : ''} trouvé{filteredAIs.length > 1 ? 's' : ''} dans cette catégorie.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAIs.map(ai => (
            <AICard key={ai.id} ai={ai} />
          ))}
        </div>
      </main>
    </div>
  );
}
