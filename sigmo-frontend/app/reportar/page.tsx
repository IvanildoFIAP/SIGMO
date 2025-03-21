import Image from "next/image";
import Link from 'next/link';

export default function Reportar() {
    return (
        <>
            <section id="titulo-report" className="bg-[image:var(--grad-vinho)] text-white py-16 rounded-[50px]">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-lg font-semibold mb-4">Facilite a Melhoria do serviço</p>
                        <h1 className="text-6xl font-bold mb-6 tracking-tight">Relate Problemas Rapidamente</h1>
                        <p className="text-gray-200">
                            Ajude a manter o transporte funcionando sem falhas. Informe qualquer
                            problema que você encontrar de forma simples e direta. Sua participação é
                            essencial para melhorar a qualidade do serviço.
                        </p>
                    </div>
                </div>
            </section>

            {/* Seção Report */}
            <section id="secao-report" className="container mx-auto px-4 py-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Qual o tipo de problema que você encontrou?</h2>
                    <p className="text-gray-600 mb-8">
                        Selecione a categoria que melhor descreve o problema. Quanto mais preciso for
                        o relato, mais rápido podemos resolver!
                    </p>

                    {/* Grid de Categorias */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                        {/* Categoria Infraestrutura */}
                        <div className="min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <img src="img/icon-infra.png" alt="Infraestrutura" className="w-12 h-12 mb-4" />
                            <span className="text-gray-700 font-medium">Infraestrutura</span>
                        </div>

                        {/* Categoria Segurança */}
                        <div className="min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center bg-[#8b2119] text-white cursor-pointer">
                            <img src="img/icon-seguranca.png" alt="Segurança" className="w-12 h-12 mb-4" />
                            <span className="font-medium">Segurança</span>
                        </div>

                        {/* Categoria Conforto e limpeza */}
                        <div className="min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <img src="img/icon-limpeza.png" alt="Conforto e limpeza" className="w-12 h-12 mb-4" />
                            <span className="text-gray-700 font-medium">Conforto e limpeza</span>
                        </div>

                        {/* Categoria Serviços */}
                        <div className="min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <img src="img/icon-servicos.png" alt="Serviços" className="w-12 h-12 mb-4" />
                            <span className="text-gray-700 font-medium">Serviços</span>
                        </div>

                        {/* Categoria Outro */}
                        <div className="min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer">
                            <img src="img/icon-outro.png" alt="Outro" className="w-12 h-12 mb-4" />
                            <span className="text-gray-700 font-medium">Outro</span>
                        </div>
                    </div>

                    {/* Botões de Navegação */}
                    <div className="flex justify-center gap-4">
                        <button className="bg-gray-300 text-gray-700 px-9 py-3.5 rounded-full hover:bg-gray-400 transition duration-300">
                            Voltar
                        </button>
                        <button className="!bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300">
                            Prosseguir
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-8"></div>
                </div>
            </section>

            {/* Cards Status */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card Linha 8 */}
                    <div className="status-card bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Acompanhe o status da Linha 8</h3>
                        <p className="text-gray-600 mb-4">
                            Confira o status operacional ou faça um reporte relacionado à
                            Linha 8 Diamante.
                        </p>
                        <a href="/status.html#linha-8" className="text-[#8b2119] font-semibold hover:underline">
                            Saiba Mais &gt;
                        </a>
                    </div>

                    {/* Card Linha 9 */}
                    <div className="status-card bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Acompanhe o status da Linha 9</h3>
                        <p className="text-gray-600 mb-4">
                            Confira o status operacional ou faça um reporte relacionado à
                            Linha 9 Esmeralda.
                        </p>
                        <a href="/status.html#linha-9" className="text-[#8b2119] font-semibold hover:underline">
                            Saiba Mais &gt;
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
