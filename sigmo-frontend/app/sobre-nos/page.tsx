import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* Seção Conteúdo Sobre */}
            <section id="conteudo-sobre" className="max-w-[1200px] mx-auto mt-20">
                <div className="text-center">
                    <p className="text-[#8b2119] text-sm uppercase tracking-[4px]">Inovação em movimento</p>
                    <h2 className="text-5xl font-bold text-[#333] mt-2">Tecnologia para um transporte melhor</h2>
                </div>
                <div className="flex gap-8 mt-12">
                    <div className="w-[70%]">
                        <p className="text-[#8c8c8c]">
                            A ViaMobilidade está sempre em busca de inovação e excelência para melhorar a experiência dos seus
                            passageiros. Como parte desse compromisso, nos unimos a talentos emergentes da área de tecnologia para
                            desenvolver soluções que aumentem a eficiência e a segurança nas operações de transporte.
                        </p>
                        <p className="text-[#8c8c8c] mt-4">
                            Nosso projeto, o Sistema Inteligente de Gestão e Monitoramento Integrado (SIGMO), foi criado com o objetivo
                            de transformar a maneira como monitoramos e gerenciamos o Centro de Controle de Operações (CCO) e a
                            infraestrutura das estações e trens. Centralizando a comunicação e o monitoramento, nosso sistema torna os
                            processos mais ágeis e permite uma interação direta e eficaz com os usuários, garantindo uma operação mais
                            eficiente, segura e acessível para todos.
                        </p>
                        <p className="text-[#8c8c8c] mt-4">
                            Acreditamos que a tecnologia tem o poder de simplificar operações complexas e melhorar o dia a dia de
                            milhares de pessoas que utilizam o transporte público. E é isso que buscamos entregar com o SIGMO: um
                            sistema que beneficia tanto os usuários quanto os operadores.
                        </p>
                    </div>
                    <div className="w-[30%]">
                        <img
                            src="/img/viamobilidade-linha9-esmeralda-serie8900-pinheiros.webp"
                            alt="Um trem da linha 9 esmeralda na plataforma de uma estação"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Seção Destaque */}
            <section id="conteudo-destaque" className="bg-gradient-to-r from-[#8b2119] to-[#b84c44] mt-20 p-12 rounded-[50px]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex gap-8">
                        <div className="w-1/2">
                            <p className="text-[#ffffff] text-sm uppercase tracking-[4px]">Compromisso com a eficiência</p>
                            <h2 className="text-5xl font-bold text-white mt-2">Nossa Missão</h2>
                        </div>
                        <div className="w-1/2">
                            <p className="text-[#ffffff]">
                                Nossa missão é desenvolver soluções tecnológicas que elevem a qualidade do transporte público,
                                proporcionando mais segurança, eficiência e facilidade para todos os envolvidos no processo. Com o SIGMO,
                                estamos integrando tecnologia de ponta para criar um futuro mais conectado e seguro.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Equipe */}
            <section id="conteudo-equipe" className="max-w-[1200px] mx-auto mt-20">
                <div className="text-center">
                    <p className="text-[#8b2119] text-sm uppercase tracking-[4px]">Quem está por trás</p>
                    <h2 className="text-5xl font-bold text-[#333] mt-2">Conheça a equipe</h2>
                    <p className="text-[#8c8c8c] mt-5 max-w-[1000px] mx-auto">
                        Nossa equipe é formada por estudantes de Análise e Desenvolvimento de Sistemas, cada um trazendo uma
                        combinação de habilidades únicas e especializações que tornaram o desenvolvimento do SIGMO possível.
                    </p>
                </div>
                <div className="flex gap-8 mt-12">
                    {/* Integrante 1 */}
                    <div className="w-1/3 text-center">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQFizMJ_48e9Kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725214725818?e=1733961600&v=beta&t=eQc0Um_M6SdKmOW02ppTwn5sHDlRPQbX7J_bszWUUMk"
                            alt="Homem de pele branca e cabelo escuro"
                            className="w-full rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-[#444] mt-4">Ivanildo Alfredo da Silva Filho</h3>
                        <p className="text-[#8c8c8c] mt-2">RM - 560049 | 1TDSZ</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <Link
                                href="https://www.linkedin.com/in/ivanildo-silva-589167324/"
                                target="_blank"
                                className="bg-[#8b2119] text-white w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link
                                href="https://github.com/IvanildoFIAP"
                                target="_blank"
                                className="bg-[#8b2119] text-white w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <i className="fab fa-github"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Integrante 2 */}
                    <div className="w-1/3 text-center">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQEJwbfMZyw_gw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727742985998?e=1733961600&v=beta&t=x9IojdWtKus2nOmkaGgUZp0rTEukGeYf7BQqOhML18s"
                            alt="Mulher amarela, asiática de cabelo preto no comprimento do ombro"
                            className="w-full rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-[#444] mt-4">Jennyfer Lee</h3>
                        <p className="text-[#8c8c8c] mt-2">RM - 561020 | 1TDSZ</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <Link
                                href="https://www.linkedin.com/in/jennyfer-lee-a5a292282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                className="bg-[#8b2119] text-white w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link
                                href="https://github.com/Jennyfer56"
                                target="_blank"
                                className="bg-[#8b2119] text-white w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <i className="fab fa-github"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Integrante 3 */}
                    <div className="w-1/3 text-center">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHmcp5mEfIueA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706548148403?e=1733961600&v=beta&t=hEGiywvS-w0wivCSgzTHbp7Yjpesnwh52oq99Nqgm7E"
                            alt="Mulher negra, com cabelos de cor preta e sorrindo"
                            className="w-full rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-[#444] mt-4">Leticia Sousa Prado Silva</h3>
                        <p className="text-[#8c8c8c] mt-2">RM - 559258 | 1TDSZ</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <Link
                                href="https://www.linkedin.com/in/leticia-sousa-9ab643222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                className="bg-[#8b2119] text-white w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link
                                href="https://github.com/letprado"
                                target="_blank"
                                className="bg-[#8b2119] text-white w-10 h-10 flex items-center justify-center rounded-full"
                            >
                                <i className="fab fa-github"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}