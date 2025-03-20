import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero/Banner */}
      <section className="min-h-[600px] w-full p-0">
        <div
          className="bg-cover bg-center bg-no-repeat p-[175px] rounded-[60px]"
          style={{ backgroundImage: "url('/img/banner-home.png')" }}
        >
          <h1 className="text-left text-6xl font-bold leading-[70px] tracking-[-2px]">
            Sua participação para <br />um <span className="text-[#8b2119]">transporte melhor</span>
          </h1>
          <p className="mt-5 text-2xl font-normal w-[558px]">
            A mudança começa com você! Relate problemas e tire suas dúvidas em tempo real!
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              href="/report"
              className="bg-[#8b2119] text-white py-3 px-10 rounded-full font-bold"
            >
              Relatar agora
            </Link>
            <Link
              href="#"
              className="border border-[#8b2119] text-[#8b2119] py-3 px-10 rounded-full font-bold"
            >
              Tirar dúvidas
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Funcionamento */}
      <section className="max-w-[1200px] mx-auto mt-20">
        <div className="text-center">
          <p className="text-[#8b2119] text-sm uppercase tracking-[4px]">como funciona</p>
          <h2 className="text-5xl font-bold text-[#333] mt-2">Relato de problemas</h2>
          <p className="text-[#8c8c8c] mt-5 max-w-[1000px] mx-auto">
            Identificar e relatar problemas nunca foi tão fácil! Com apenas alguns cliques, você pode nos ajudar a melhorar a infraestrutura das estações e dos trens. Se você notar uma falha, um vazamento ou qualquer outra questão, acesse a nossa página de reporte e siga o passo a passo. Lembre-se, sua observação pode fazer a diferença!
          </p>
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
            {/* Coluna 1 */}
            <div className="w-1/2">
              {/* Passo 1 */}
              <div>
                <div className="flex gap-4 items-center">
                  <span className="border border-[#8b2119] text-[#8b2119] rounded-full w-10 h-10 flex items-center justify-center">
                    1
                  </span>
                  <h4 className="text-2xl font-medium text-[#444]">Acesse a página de reporte</h4>
                </div>
                <p className="text-[#8c8c8c] mt-4">
                  Inicie sua jornada de contribuição visitando a página dedicada a reportes. Aqui, você encontrará um ambiente amigável e intuitivo, projetado para facilitar seu relato.
                </p>
              </div>
              {/* Passo 2 */}
              <div className="mt-12">
                <div className="flex gap-4 items-center">
                  <span className="border border-[#8b2119] text-[#8b2119] rounded-full w-10 h-10 flex items-center justify-center">
                    2
                  </span>
                  <h4 className="text-2xl font-medium text-[#444]">Selecione o tipo de problema</h4>
                </div>
                <p className="text-[#8c8c8c] mt-4">
                  Escolha entre diferentes categorias, como infraestrutura, equipamentos, ou segurança. Isso nos ajudará a entender seu relato e a direcioná-lo para a equipe correta.
                </p>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="w-1/2">
              {/* Passo 3 */}
              <div>
                <div className="flex gap-4 items-center">
                  <span className="border border-[#8b2119] text-[#8b2119] rounded-full w-10 h-10 flex items-center justify-center">
                    3
                  </span>
                  <h4 className="text-2xl font-medium text-[#444]">Descreva o problema</h4>
                </div>
                <p className="text-[#8c8c8c] mt-4">
                  Forneça uma descrição do problema que observou. Se puder, anexe uma foto para ilustrar a situação. Isso torna seu reporte mais confiável e ajuda nossa equipe a agir rapidamente.
                </p>
              </div>
              {/* Passo 4 */}
              <div className="mt-12">
                <div className="flex gap-4 items-center">
                  <span className="border border-[#8b2119] text-[#8b2119] rounded-full w-10 h-10 flex items-center justify-center">
                    4
                  </span>
                  <h4 className="text-2xl font-medium text-[#444]">Análise e ações</h4>
                </div>
                <p className="text-[#8c8c8c] mt-4">
                  Após enviar seu relato, você receberá uma confirmação de que seu reporte foi registrado e nossa equipe analisará seu feedback para tomar as providências necessárias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Status */}
      <div className="max-w-[1292px] mx-auto mt-20">
        <div className="flex gap-8">
          {/* Card Linha 8 */}
          <div
            className="bg-no-repeat p-12 rounded-[35px] flex-1 bg-[-15px] bg-[auto_120%] drop-shadow-xl border !border-opacity-50 bg-white"
            style={{ backgroundImage: "url('/img/8.png')" }}
          >
            <div className="pl-[120px]">
              <h3 className="text-2xl font-light text-left">Acompanhe o status da Linha 8</h3>
              <p className="text-[#8c8c8c] mt-4">
                Confira o status operacional ou faça um reporte relacionado à Linha 8 Diamante.
              </p>
              <Link
                href="/status#linha-8"
                className="text-[#8b2119] font-medium mt-4 inline-block"
              >
                Saiba Mais &gt;
              </Link>
            </div>
          </div>
          {/* Card Linha 9 */}
          <div
            className="bg-no-repeat p-12 rounded-[35px] flex-1 bg-[-15px] bg-[auto_120%] drop-shadow-xl border !border-opacity-50 bg-white"
            style={{ backgroundImage: "url('/img/9.png')" }}
          >
            <div className="pl-[120px]">
              <h3 className="text-2xl font-light text-left">Acompanhe o status da Linha 9</h3>
              <p className="text-[#8c8c8c] mt-4">
                Confira o status operacional ou faça um reporte relacionado à Linha 9 Esmeralda.
              </p>
              <Link
                href="/status#linha-9"
                className="text-[#8b2119] font-medium mt-4 inline-block"
              >
                Saiba Mais &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Chatbot */}
      <section className="mt-40">
        <div className="bg-[image:var(--grad-verde)] from-[#67e7d7] to-[#01aa95] rounded-[50px] shadow-lg flex">
          <div className="w-1/2 flex items-end">
            <img src="/img/vimo-2.png" alt="Chatbot" className="w-full -mt-5" />
          </div>
          <div className="w-1/2 p-12 self-center">
            <h2 className="text-5xl font-bold text-white">
              <span className="font-light">Converse com o Vimo</span>
              <br />
              Seu assistente virtual
            </h2>
            <p className="text-white mt-6">
              Vimo é seu assistente virtual disponível 24 horas para responder suas dúvidas e ajudar
              em tudo que precisar.
            </p>
            <Link
              href="#"
              className="bg-white text-[#01aa95] py-3 px-8 rounded-full font-bold mt-8 inline-block"
            >
              Conhecer o Vimo
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Benefícios */}
      <section className="max-w-[1200px] mx-auto mt-20">
        <div className="text-center">
          <p className="text-[#8b2119] text-sm uppercase tracking-[4px]">
            Cuidado com sua jornada
          </p>
          <h2 className="text-5xl font-bold text-[#333] mt-2">Benefícios exclusivos para você</h2>
          <p className="text-[#8c8c8c] mt-5 max-w-[854px] mx-auto">
            O novo sistema da ViaMobilidade foi desenvolvido para facilitar sua experiência.
          </p>
        </div>
        <div className="mt-12 mb-16">
          <div className="flex gap-8">
            {/* Benefício 1 */}
            <div className="flex-1 p-8 border border-[#e2e4ef] rounded-[40px]">
              <div className="flex gap-4 items-center">
                <img src="/img/icon-relogio.svg" alt="Relatar problemas" className="w-10" />
                <h4 className="text-2xl font-medium text-[#444]">
                  Relatar problemas
                  <br />
                  em instantes
                </h4>
              </div>
              <p className="text-[#8c8c8c] mt-4">
                Com Vimo, o chatbot interativo, você pode reportar problemas de forma rápida.
              </p>
            </div>
            {/* Benefício 2 */}
            <div className="flex-1 p-8 border border-[#e2e4ef] rounded-[40px]">
              <div className="flex gap-4 items-center">
                <img src="/img/icon-telefone.svg" alt="Informações" className="w-10" />
                <h4 className="text-2xl font-medium text-[#444]">Informações sempre à mão</h4>
              </div>
              <p className="text-[#8c8c8c] mt-4">
                Tenha respostas para suas dúvidas sobre rotas, horários e estações.
              </p>
            </div>
            {/* Benefício 3 */}
            <div className="flex-1 p-8 border border-[#e2e4ef] rounded-[40px]">
              <div className="flex gap-4 items-center">
                <img src="/img/icon-diamante.svg" alt="Melhorias" className="w-10" />
                <h4 className="text-2xl font-medium text-[#444]">Melhorias constantes</h4>
              </div>
              <p className="text-[#8c8c8c] mt-4">
                Ao relatar problemas, você contribui para a melhoria contínua do sistema.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
