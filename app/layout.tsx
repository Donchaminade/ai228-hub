import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";
import LayoutClientWrapper from "../components/LayoutClientWrapper";
import BackToTopButton from "../components/BackToTopButton";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "AI228 Hub - Le catalogue de l'IA au Togo",
	description:
		"AI228 Hub est une plateforme open source qui recense les meilleures intelligences artificielles (IA) utilisées par les Togolais au quotidien.",
	keywords:
		"ia, intelligence artificielle, togo, open source, communauté, outils ia",
	authors: [{ name: "Chaminade Dondah Adjolou" }],
	openGraph: {
		title: "AI228 Hub - Le catalogue de l'IA au Togo",
		description:
			"Découvrez et partagez les outils d'intelligence artificielle les plus utilisés par la communauté tech togolaise.",
		type: "website",
		url: "https://github.com/Donchaminade/ai228-hub",
		images: [
			{
				url: "/seo.png",
				width: 1200,
				height: 630,
				alt: "AI228 Hub - Le catalogue de l'IA au Togo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "AI228 Hub - Le catalogue de l'IA au Togo",
		description: "Découvrez et partagez les outils d'intelligence artificielle les plus utilisés par la communauté tech togolaise.",
		images: ["/seo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider>
					<LayoutClientWrapper>{children}</LayoutClientWrapper>
					<BackToTopButton />
				</ThemeProvider>
			</body>
		</html>
	);
}