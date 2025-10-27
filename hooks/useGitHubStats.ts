'use client';

import { useEffect, useState } from 'react';
import { cache } from '../lib/cache';
import { extractGitHubInfo, getGitHubStats, GitHubStats } from '../lib/github';

export function useGitHubStats(projectLink: string) {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            // Don't fetch on the server side
            setLoading(false);
            return;
        }

        const fetchStats = async () => {
            try {
                setLoading(true);
                setError(null);

                const githubInfo = extractGitHubInfo(projectLink);
                if (!githubInfo) {
                    setError('URL GitHub invalide');
                    setLoading(false);
                    return;
                }

                const cacheKey = `github-stats-${githubInfo.owner}-${githubInfo.repo}`;

                // Vérifier le cache d'abord
                const cachedStats = cache.get<GitHubStats>(cacheKey);
                if (cachedStats) {
                    setStats(cachedStats);
                    setLoading(false);
                    return;
                }

                const statsData = await getGitHubStats(githubInfo.owner, githubInfo.repo);

                if (statsData) {
                    // Mettre en cache pour 5 minutes
                    cache.set(cacheKey, statsData, 5 * 60 * 1000);
                    setStats(statsData);
                } else {
                    setError('Impossible de récupérer les statistiques');
                }
            } catch (err) {
                setError('Erreur lors de la récupération des statistiques');
                console.error(`Erreur useGitHubStats pour ${projectLink}:`, err);
            } finally {
                setLoading(false);
            }
        };

        if (projectLink) {
            fetchStats();
        }
    }, [projectLink]);

    return { stats, loading, error };
}
