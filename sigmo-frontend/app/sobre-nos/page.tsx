import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <>
            <div id="titulo" className="w-full text-center py-8 bg-gray-100">
                <h1 className="text-4xl font-bold text-[#8b2119] mb-4">Sobre Nós</h1>
                <ul className="flex justify-center items-center space-x-4 text-gray-700">
                    <li>
                        <a href="/" className="hover:text-[#8b2119] transition duration-300">Home</a>
                    </li>
                    <li>
                        <span className="text-gray-400">•</span>
                    </li>
                    <li>
                        <a href="#" className="hover:text-[#8b2119] transition duration-300">Sobre Nós</a>
                    </li>
                </ul>
            </div>
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
                            eficiente, segura e acessível para todos os usuários.
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
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Seção Destaque */}
            <section id="conteudo-destaque" className="bg-[image:var(--grad-vinho)] from-[#8b2119] to-[#b84c44] mt-20 p-12 rounded-[50px]">
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
            <section id="conteudo-equipe" className="max-w-[1200px] mx-auto mt-20 mb-16">
                <div className="text-center">
                    <p className="text-[#8b2119] text-sm uppercase tracking-[4px]">Quem está por trás</p>
                    <h2 className="text-5xl font-bold text-[#333] mt-2">Conheça a equipe</h2>
                    <p className="text-[#8c8c8c] mt-5 max-w-[1000px] mx-auto">
                        Nossa equipe é formada por estudantes de Análise e Desenvolvimento de Sistemas, cada um trazendo uma
                        combinação de habilidades únicas e especializações que tornaram o desenvolvimento do SIGMO possível.
                    </p>
                </div>
                <div className="flex gap-8 mt-12">
                    <div className="w-1/3 text-center">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQFizMJ_48e9Kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725214725818?e=1747872000&v=beta&t=WiC2DEt7mwGJzUB6tStmIi7Q7hnlQ_H1Jf_-X6ap5pU"
                            alt="Homem de pele branca e cabelo escuro"
                            className="w-full rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-[#444] mt-4">Ivanildo Alfredo da Silva Filho</h3>
                        <p className="text-[#8c8c8c] mt-2">RM - 560049 | 1TDSZ</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <a
                                href="https://www.linkedin.com/in/ivanildo-silva-589167324/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 !text-[#8b2119] w-14 h-14 flex items-center justify-center rounded-full"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ width: '1.2rem', height: '1.2rem' }} />
                            </a>
                            <a
                                href="https://github.com/IvanildoFIAP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 !text-[#8b2119] w-14 h-14 flex items-center justify-center rounded-full"
                            >
                                <FontAwesomeIcon icon={faGithub} style={{ width: '1.2rem', height: '1.2rem' }} />
                            </a>
                        </div>
                    </div>

                    <div className="w-1/3 text-center">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQEJwbfMZyw_gw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727742985998?e=1747872000&v=beta&t=N1xLk3ixfVPsS14nPnYguy5y7kI_0ubS_keUOkmViFU"
                            alt="Mulher amarela, asiática de cabelo preto no comprimento do ombro e 1,60m de altura"
                            className="w-full rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-[#444] mt-4">Jennyfer Lee</h3>
                        <p className="text-[#8c8c8c] mt-2">RM - 561020 | 1TDSZ</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <a
                                href="https://www.linkedin.com/in/jennyfer-lee-a5a292282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 !text-[#8b2119] w-14 h-14 flex items-center justify-center rounded-full"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ width: '1.2rem', height: '1.2rem' }} />
                            </a>
                            <a
                                href="https://github.com/Jennyfer56"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 !text-[#8b2119] w-14 h-14 flex items-center justify-center rounded-full"
                            >
                                <FontAwesomeIcon icon={faGithub} style={{ width: '1.2rem', height: '1.2rem' }} />
                            </a>
                        </div>
                    </div>

                    <div className="w-1/3 text-center">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQHmcp5mEfIueA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706548148403?e=1747872000&v=beta&t=GyBJGEK2SXfxEaoE46kBS6yA3tBmU6x47idIudEIc1E"
                            alt="Mulher negra, com cabelos de cor preta e expressamente alegre"
                            className="w-full rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-[#444] mt-4">Leticia Sousa Prado Silva</h3>
                        <p className="text-[#8c8c8c] mt-2">RM - 559258 | 1TDSZ</p>
                        <div className="flex gap-4 justify-center mt-4">
                            <a
                                href="https://www.linkedin.com/in/leticia-sousa-9ab643222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 !text-[#8b2119] w-14 h-14 flex items-center justify-center rounded-full"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ width: '1.2rem', height: '1.2rem' }} /> {/* Tamanho ajustado */}
                            </a>
                            <a
                                href="https://github.com/letprado"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-200 !text-[#8b2119] w-14 h-14 flex items-center justify-center rounded-full"
                            >
                                <FontAwesomeIcon icon={faGithub} style={{ width: '1.2rem', height: '1.2rem' }} /> {/* Tamanho ajustado */}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
