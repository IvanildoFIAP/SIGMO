'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuilding, 
  faShieldAlt, 
  faBroom, 
  faConciergeBell, 
  faEllipsisH,
  faSubway,
  faStairs,
  faElevator,
  faTicketAlt,
  faSign,
  faLightbulb,
  faTint,
  faToilet,
  faChair,
  faTrashAlt,
  faSnowflake,
  faInfoCircle,
  faBan,
  faExclamationTriangle,
  faTachometerAlt,
  faQuestionCircle,
  faCheck,
  faArrowLeft,
  faArrowRight,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import Chatbot from "@/components/Chatbot";
import React, { useState } from 'react';

// Tipos para as seleções
type Categoria = 'Infraestrutura' | 'Segurança' | 'Conforto e limpeza' | 'Serviços' | 'Outro';
type Linha = 'Linha 8 - Diamante' | 'Linha 9 - Esmeralda';
type Estacao = string;
type AreaAfetada = string;
type Impacto = 'Inutilizável' | 'Mal funcionamento' | 'Funcionamento parcial' | 'Outro problema';
type Detalhes = string;

// Dados das estações por linha
const ESTACOES_POR_LINHA: Record<Linha, string[]> = {
    'Linha 8 - Diamante': [
        'Júlio Prestes',
        'Palmeiras-Barra Funda',
        'Lapa',
        'Domingos de Moraes',
        'Presidente Altino',
        'Osasco',
        'Comandante Sampaio',
        'Quitaúna',
        'General Miguel Costa',
        'Carapicuíba',
        'Santa Terezinha',
        'Antônio João',
        'Barueri',
        'Jardim Belval',
        'Jardim Silveira',
        'Jandira',
        'Sagrado Coração',
        'Engenheiro Cardoso',
        'Itapevi',
        'Santa Rita',
        'Amador Bueno'
    ],
    'Linha 9 - Esmeralda': [
        'Osasco',
        'Presidente Altino',
        'Ceasa',
        'Vila Lobos-Jaguaré',
        'Cidade Universitária',
        'Hebraica-Rebouças',
        'Pinheiros',
        'Cidade Jardim',
        'Vila Olímpia',
        'Berrini',
        'Morumbi',
        'Granja Julieta',
        'Santo Amaro',
        'Socorro',
        'Jurubatuba',
        'Autódromo',
        'Primavera-Interlagos',
        'Grajaú'
    ]
};

// Áreas afetadas por categoria
const AREAS_AFETADAS: Record<Categoria, string[]> = {
    'Infraestrutura': [
        'Escada rolante',
        'Elevador',
        'Catracas',
        'Sinalização',
        'Iluminação',
        'Pisos',
        'Telhado',
        'Ventilação',
        'Acessibilidade',
        'Outro'
    ],
    'Segurança': [
        'Câmeras de vigilância',
        'Guichês de atendimento',
        'Equipe de segurança',
        'Corredores',
        'Plataforma',
        'Trens',
        'Área externa',
        'Outro'
    ],
    'Conforto e limpeza': [
        'Banheiro',
        'Bebedouro',
        'Bancos',
        'Lixeiras',
        'Ar-condicionado',
        'Informações ao público',
        'Área de alimentação',
        'Outro'
    ],
    'Serviços': [
        'Atendimento ao cliente',
        'Wi-Fi',
        'Recarga de bilhetes',
        'Pontualidade dos trens',
        'Frequência dos trens',
        'Informações em tempo real',
        'Outro'
    ],
    'Outro': [
        'Outro problema não listado'
    ]
};

export default function Reportar() {
    // Estados
    const [step, setStep] = useState(1);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria | ''>('');
    const [linhaSelecionada, setLinhaSelecionada] = useState<Linha | ''>('');
    const [estacaoSelecionada, setEstacaoSelecionada] = useState<Estacao>('');
    const [areaAfetadaSelecionada, setAreaAfetadaSelecionada] = useState<AreaAfetada>('');
    const [impactoSelecionado, setImpactoSelecionado] = useState<Impacto | ''>('');
    const [detalhes, setDetalhes] = useState<Detalhes>('');
    const [finalizado, setFinalizado] = useState(false);

    // Mapeamento de ícones
    const iconesCategorias = {
        'Infraestrutura': faBuilding,
        'Segurança': faShieldAlt,
        'Conforto e limpeza': faBroom,
        'Serviços': faConciergeBell,
        'Outro': faEllipsisH
    };

    const iconesAreas: Record<string, any> = {
        'Escada rolante': faStairs,
        'Elevador': faElevator,
        'Catracas': faTicketAlt,
        'Sinalização': faSign,
        'Iluminação': faLightbulb,
        'Bebedouro': faTint,
        'Banheiro': faToilet,
        'Bancos': faChair,
        'Lixeiras': faTrashAlt,
        'Ar-condicionado': faSnowflake,
        'Informações ao público': faInfoCircle,
        'Outro': faQuestionCircle
    };

    // Funções
    const avancar = () => setStep(step + 1);
    const voltar = () => step > 1 && setStep(step - 1);
    const finalizar = () => setFinalizado(true);
    const novoReporte = () => {
        setCategoriaSelecionada('');
        setLinhaSelecionada('');
        setEstacaoSelecionada('');
        setAreaAfetadaSelecionada('');
        setImpactoSelecionado('');
        setDetalhes('');
        setFinalizado(false);
        setStep(1);
    };

    return (
        <>
            {!finalizado ? (
                <>
                    {/* Seção do Título com Gradiente Vinho */}
                    <section id="titulo-report" className="!bg-[image:var(--grad-vinho)] text-white py-16 rounded-[50px]">
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

                    {/* Seção Principal */}
                    <section id="secao-report" className="container mx-auto px-4 pt-16">
                        <div className="max-w-7xl mx-auto text-center">
                            {/* Stepper Moderno */}
                            <div className="mb-12">
                                <div className="flex justify-between items-center w-full max-w-3xl mx-auto relative">
                                    {/* Linha de conexão */}
                                    <div className="absolute top-4 left-16 right-16 h-0.5 bg-gray-200 z-0"></div>
                                    
                                    {[1, 2, 3, 4, 5, 6].map((passo) => (
                                        <div key={passo} className="flex flex-col items-center z-10">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                                                ${step >= passo ? 'bg-[#8b2119] text-white' : 'bg-gray-200 text-gray-600'}`}>
                                                {step > passo ? (
                                                    <FontAwesomeIcon icon={faCheck} className="text-xs" />
                                                ) : (
                                                    passo
                                                )}
                                            </div>
                                            <div className="mt-2 text-xs font-medium text-gray-600">
                                                {['Categoria', 'Linha', 'Estação', 'Área', 'Impacto', 'Detalhes'][passo-1]}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Conteúdo */}
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                {/* Etapa 1 - Categoria */}
                                {step === 1 && (
                                    <>
                                        <h2 className="text-3xl font-bold mb-6">Qual o tipo de problema que você encontrou?</h2>
                                        <p className="text-gray-600 mb-8">
                                            Selecione a categoria que melhor descreve o problema.
                                        </p>

                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                                            {(Object.keys(AREAS_AFETADAS) as Categoria[]).map((categoria) => (
                                                <div
                                                    key={categoria}
                                                    onClick={() => setCategoriaSelecionada(categoria)}
                                                    className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${categoriaSelecionada === categoria ? 'bg-[#8b2119] text-white' : ''}`}
                                                >
                                                    <FontAwesomeIcon 
                                                        icon={iconesCategorias[categoria]} 
                                                        className="w-10 h-10 mb-3" 
                                                    />
                                                    <span className="font-medium text-sm">{categoria}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Etapa 2 - Linha */}
                                {step === 2 && (
                                    <>
                                        <h2 className="text-3xl font-bold mb-6">Em qual linha ocorreu o problema?</h2>
                                        <p className="text-gray-600 mb-8">
                                            Selecione a linha onde você identificou o problema.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                                            {(Object.keys(ESTACOES_POR_LINHA) as Linha[]).map((linha) => (
                                                <div
                                                    key={linha}
                                                    onClick={() => setLinhaSelecionada(linha)}
                                                    className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${linhaSelecionada === linha ? 'bg-[#8b2119] text-white' : ''}`}
                                                >
                                                    <FontAwesomeIcon 
                                                        icon={faSubway} 
                                                        className={`w-10 h-10 mb-3 ${linha.includes('Diamante') ? 'text-blue-400' : 'text-emerald-400'}`} 
                                                    />
                                                    <span className="font-medium text-sm">{linha}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Etapa 3 - Estação */}
                                {step === 3 && (
                                    <>
                                        <h2 className="text-3xl font-bold mb-6">Em qual estação ocorreu o problema?</h2>
                                        <p className="text-gray-600 mb-8">
                                            Selecione a estação específica onde você identificou o problema.
                                        </p>

                                        <div className="max-w-md mx-auto mb-8">
                                            <div className="relative">
                                                <select
                                                    value={estacaoSelecionada}
                                                    onChange={(e) => setEstacaoSelecionada(e.target.value)}
                                                    className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[#8b2119] focus:border-transparent"
                                                >
                                                    <option value="">Selecione uma estação</option>
                                                    {linhaSelecionada && ESTACOES_POR_LINHA[linhaSelecionada].map((estacao) => (
                                                        <option key={estacao} value={estacao}>{estacao}</option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <FontAwesomeIcon icon={faChevronDown} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Etapa 4 - Área Afetada */}
                                {step === 4 && categoriaSelecionada && (
                                    <>
                                        <h2 className="text-3xl font-bold mb-6">Qual área foi afetada?</h2>
                                        <p className="text-gray-600 mb-8">
                                            Selecione a área específica onde você identificou o problema.
                                        </p>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                            {AREAS_AFETADAS[categoriaSelecionada].map((area) => (
                                                <div
                                                    key={area}
                                                    onClick={() => setAreaAfetadaSelecionada(area)}
                                                    className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${areaAfetadaSelecionada === area ? 'bg-[#8b2119] text-white' : ''}`}
                                                >
                                                    <FontAwesomeIcon 
                                                        icon={iconesAreas[area] || faQuestionCircle} 
                                                        className="w-10 h-10 mb-3" 
                                                    />
                                                    <span className="font-medium text-sm">{area}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Etapa 5 - Impacto */}
                                {step === 5 && (
                                    <>
                                        <h2 className="text-3xl font-bold mb-6">Qual o grau do problema?</h2>
                                        <p className="text-gray-600 mb-8">
                                            Selecione o nível de impacto que este problema está causando.
                                        </p>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                            {['Inutilizável', 'Mal funcionamento', 'Funcionamento parcial', 'Outro problema'].map((impacto) => (
                                                <div
                                                    key={impacto}
                                                    onClick={() => setImpactoSelecionado(impacto as Impacto)}
                                                    className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${impactoSelecionado === impacto ? 'bg-[#8b2119] text-white' : ''}`}
                                                >
                                                    <FontAwesomeIcon 
                                                        icon={
                                                            impacto === 'Inutilizável' ? faBan :
                                                            impacto === 'Mal funcionamento' ? faExclamationTriangle :
                                                            impacto === 'Funcionamento parcial' ? faTachometerAlt :
                                                            faQuestionCircle
                                                        } 
                                                        className="w-10 h-10 mb-3" 
                                                    />
                                                    <span className="font-medium text-sm">{impacto}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Etapa 6 - Detalhes */}
                                {step === 6 && (
                                    <>
                                        <h2 className="text-3xl font-bold mb-6">Deseja adicionar mais detalhes?</h2>
                                        <p className="text-gray-600 mb-8">
                                            Forneça informações adicionais que possam nos ajudar a entender melhor o problema (opcional).
                                        </p>

                                        <div className="max-w-2xl mx-auto mb-8">
                                            <textarea
                                                value={detalhes}
                                                onChange={(e) => setDetalhes(e.target.value)}
                                                rows={4}
                                                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b2119] focus:border-transparent"
                                                placeholder="Descreva com mais detalhes o problema encontrado..."
                                            />
                                        </div>
                                    </>
                                )}

                                {/* Botões de Navegação */}
                                <div className="flex justify-center gap-4">
                                    {step > 1 && (
                                        <button 
                                            onClick={voltar}
                                            className="bg-gray-300 text-gray-700 px-9 py-3.5 rounded-full hover:bg-gray-400 transition duration-300"
                                        >
                                            Voltar
                                        </button>
                                    )}
                                    
                                    {step < 6 ? (
                                        <button 
                                            onClick={avancar}
                                            disabled={
                                                (step === 1 && !categoriaSelecionada) ||
                                                (step === 2 && !linhaSelecionada) ||
                                                (step === 3 && !estacaoSelecionada) ||
                                                (step === 4 && !areaAfetadaSelecionada) ||
                                                (step === 5 && !impactoSelecionado)
                                            }
                                            className={`!bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300 ${
                                                (step === 1 && !categoriaSelecionada) ||
                                                (step === 2 && !linhaSelecionada) ||
                                                (step === 3 && !estacaoSelecionada) ||
                                                (step === 4 && !areaAfetadaSelecionada) ||
                                                (step === 5 && !impactoSelecionado) ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                        >
                                            Prosseguir
                                        </button>
                                    ) : (
                                        <button 
                                            onClick={finalizar}
                                            className="!bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300"
                                        >
                                            Enviar Reporte
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faCheck} className="h-10 w-10 text-green-600" />
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-4">Reporte enviado com sucesso!</h2>
                        <p className="text-gray-600 mb-6">
                            Obrigado por contribuir para a melhoria do nosso serviço. Seu reporte foi registrado e será analisado pela nossa equipe.
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg text-left mb-6">
                            <h3 className="text-xl font-semibold mb-4">Resumo do Reporte</h3>
                            <div className="space-y-3">
                                <p><span className="text-gray-600">Categoria:</span> <span className="font-medium">{categoriaSelecionada}</span></p>
                                <p><span className="text-gray-600">Linha:</span> <span className="font-medium">{linhaSelecionada}</span></p>
                                <p><span className="text-gray-600">Estação:</span> <span className="font-medium">{estacaoSelecionada}</span></p>
                                <p><span className="text-gray-600">Área afetada:</span> <span className="font-medium">{areaAfetadaSelecionada}</span></p>
                                <p><span className="text-gray-600">Grau do problema:</span> <span className="font-medium">{impactoSelecionado}</span></p>
                                {detalhes && <p><span className="text-gray-600">Detalhes:</span> <span className="font-medium">{detalhes}</span></p>}
                            </div>
                        </div>
                        
                        <button
                            onClick={novoReporte}
                            className="!bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300"
                        >
                            Fazer novo reporte
                        </button>
                    </div>
                </section>
            )}

            {!finalizado && <Chatbot />}
        </>
    );
}