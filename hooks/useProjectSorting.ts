'use client';

import { useMemo } from 'react';
import { Project } from '../data/projects';

export function useProjectSorting(projects: Project[], sortBy: 'name' | 'stars' | 'id') {
    return useMemo(() => {
        return projects.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name, 'fr');
                case 'stars':
                    // Pour le tri par stars, on utilise l'ID comme fallback
                    // Le tri par stars sera géré côté client avec les stats GitHub
                    return b.id - a.id;
                case 'id':
                default:
                    return b.id - a.id;
            }
        });
    }, [projects, sortBy]);
}
