import type { Metadata } from "next"; // Importing the Metadata type from Next.js
import { Inter, IBM_Plex_Serif } from "next/font/google"; // Importing font styles from Google Fonts via Next.js
import "./globals.css"; // Importing global CSS styles

// Initializing the Inter font with specific subsets and a CSS variable
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
// Initializing the IBM Plex Serif font with specific subsets, weights, and a CSS variable
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

// Defining the metadata for the application
export const metadata: Metadata = {
  title: "Horizon", // Title of the application
  description: "Horizon is a New Trendy Platform for everyone", // Description of the application
  icons: {
    icon: '/icons/logo.svg' // Path to the icon for the application
  }
};

// Defining the root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Type definition for children prop
}>) {
  return (
    <html lang="en"> {/* Setting the language of the document to English */}
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body> {/* Applying the font styles to the body element */}
    </html>
  );
}
