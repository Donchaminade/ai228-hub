import aiData from './ai.json';

export interface AI {
  id: number;
  name: string;
  description: string;
  link: string;
  category: string;
  author: string;
  date_added: string;
  utilisation: string;
}

// Lire les données depuis le fichier JSON et les trier par ID décroissant (dernier ajouté en premier)
export const AIsData: AI[] = (aiData as AI[]).sort((a, b) => b.id - a.id);
