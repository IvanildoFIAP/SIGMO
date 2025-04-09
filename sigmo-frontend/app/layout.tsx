import '../app/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from "next/script";

export const metadata = {
  title: "SIGMO",
  description: "Sistema Integrado de Gestão e Monitoramento Operacional",
  icons: {
    icon: "/sigmo-favicon.ico",
  },
};

// Esse componente define o layout raiz de todas as páginas 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-br">
      <head>
      <Script
          id="watson-chatbot-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.watsonAssistantChatOptions = {
                integrationID: "8d3d8656-02ee-4909-bab1-14a82c0a7ad8",
                region: "au-syd",
                serviceInstanceID: "74519874-8553-448e-8dbd-db13458cf415",
                onLoad: async (instance) => { await instance.render(); }
              };
            `,
          }}
        />
        <Script
          id="watson-chatbot-loader"
          strategy="afterInteractive"
          src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>SIGMO</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}