import '../app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Esse componente define o layout raiz de todas as páginas 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Importa o Tailwind via CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>SIGMO</title>
      </head>
      <body className="bg-gray-100">
        {/* Cabeçalho da página */}
        <Header />
        {/* Área principal onde as páginas serão renderizadas */}
        <main className="container mx-auto my-8">
          {children}
        </main>
        {/* Rodapé da página */}
        <Footer />
      </body>
    </html>
  );
}