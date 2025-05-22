'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuilding, faShieldAlt, faBroom, faConciergeBell, faEllipsisH,
  faSubway, faStairs, faElevator, faTicketAlt, faSign, faLightbulb,
  faTint, faToilet, faChair, faTrashAlt, faSnowflake, faInfoCircle,
  faBan, faExclamationTriangle, faTachometerAlt, faQuestionCircle,
  faCheck, faArrowLeft, faArrowRight, faChevronDown, faSpinner
} from '@fortawesome/free-solid-svg-icons'
import Chatbot from "@/components/Chatbot";
import React, { useState, useEffect } from 'react';
import { fetchLinhas, createReporte } from '@/services/api';
import { Linha, Estacao } from '@/services/api';

type Categoria = 'INFRAESTRUTURA' | 'SEGURANÇA' | 'CONFORTO_E_LIMPEZA' | 'SERVICOS' | 'OUTRO';
type Impacto = 'BAIXO' | 'MEDIO' | 'ALTO' | 'CRITICO';

// Áreas afetadas por categoria
const AREAS_AFETADAS = {
  'INFRAESTRUTURA': ['ESCADA ROLANTE', 'ELEVADOR', 'CATRACAS', 'SINALIZAÇÃO', 'ILUMINAÇÃO', 'PISOS', 'TELHADO', 'VENTILAÇÃO', 'ACESSIBILIDADE', 'OUTRO'],
  'SEGURANÇA': ['CÂMERAS', 'GUICHÊS', 'EQUIPE', 'CORREDORES', 'PLATAFORMA', 'TRENS', 'ÁREA EXTERNA', 'OUTRO'],
  'CONFORTO_E_LIMPEZA': ['BANHEIRO', 'BEBEDOURO', 'BANCOS', 'LIXEIRAS', 'AR-CONDICIONADO', 'INFORMAÇÕES', 'ALIMENTAÇÃO', 'OUTRO'],
  'SERVICOS': ['ATENDIMENTO', 'WI-FI', 'RECARGA', 'PONTUALIDADE', 'FREQUÊNCIA', 'TEMPO REAL', 'OUTRO'],
  'OUTRO': ['OUTRO']
};

export default function Reportar() {
  // Estados
  const [step, setStep] = useState(1);
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar linhas ao carregar o componente
  useEffect(() => {
    const loadLinhas = async () => {
      try {
        setLoading(true);
        const data = await fetchLinhas();
        setLinhas(data);
      } catch (err) {
        console.error('Erro detalhado:', err);
        setError('Erro ao carregar linhas. Verifique se o servidor está rodando em http://localhost:8080');
      } finally {
        setLoading(false);
      }
    };

    loadLinhas();
  }, []);
  
  // Estados do formulário
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria | null>(null);
  const [linhaSelecionada, setLinhaSelecionada] = useState<Linha | null>(null);
  const [estacaoSelecionada, setEstacaoSelecionada] = useState<Estacao | null>(null);
  const [areaAfetadaSelecionada, setAreaAfetadaSelecionada] = useState<string | null>(null);
  const [impactoSelecionado, setImpactoSelecionado] = useState<Impacto | null>(null);
  const [descricao, setDescricao] = useState('');
  const [finalizado, setFinalizado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Buscar linhas ao carregar o componente
  useEffect(() => {
    const loadLinhas = async () => {
      try {
        const data = await fetchLinhas();
        setLinhas(data);
      } catch (err) {
        setError('Erro ao carregar linhas. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadLinhas();
  }, []);

  // Mapeamento de ícones
  const iconesCategorias = {
    'INFRAESTRUTURA': faBuilding,
    'SEGURANÇA': faShieldAlt,
    'CONFORTO_E_LIMPEZA': faBroom,
    'SERVICOS': faConciergeBell,
    'OUTRO': faEllipsisH
  };

  const iconesImpacto = {
    'BAIXO': faTachometerAlt,
    'MEDIO': faExclamationTriangle,
    'ALTO': faBan,
    'CRITICO': faBan
  };

  // Funções

  const avancar = () => setStep(step + 1);
  const voltar = () => step > 1 && setStep(step - 1);
  
  const finalizar = async () => {
    if (!categoriaSelecionada || !linhaSelecionada || !estacaoSelecionada || 
        !areaAfetadaSelecionada || !impactoSelecionado) {
      setError('Preencha todos os campos obrigatórios');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const reporteData = {
        linha: { id: linhaSelecionada.id },
        estacao: { id: estacaoSelecionada.id },
        categoria: categoriaSelecionada,
        areaAfetada: areaAfetadaSelecionada,
        impacto: impactoSelecionado,
        descricao: descricao
      };

      await createReporte(reporteData);
      setFinalizado(true);
    } catch (err) {
      setError('Erro ao enviar reporte. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const novoReporte = () => {
    // Resetar todos os estados para os valores iniciais
    setCategoriaSelecionada(null);
    setLinhaSelecionada(null);
    setEstacaoSelecionada(null);
    setAreaAfetadaSelecionada(null);
    setImpactoSelecionado(null);
    setDescricao('');
    setFinalizado(false);
    setStep(1);
    setError(null);
  };

  // Renderização condicional para evitar erros
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[image:var(--grad-vinho)] text-white px-4 py-2 rounded"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <>
      {!finalizado ? (
        <>
          <section id="titulo-report" className="bg-[image:var(--grad-vinho)] text-white py-16 rounded-[50px]">
            {/* ... mantido igual ... */}
          </section>

          <section id="secao-report" className="container mx-auto px-4 pt-16">
            <div className="max-w-7xl mx-auto text-center">
              {/* Stepper Moderno */}
              <div className="mb-12">
                <div className="flex justify-between items-center w-full max-w-3xl mx-auto relative">
                  <div className="absolute top-4 left-16 right-16 h-1 bg-gray-200 z-0"></div>
                  
                  {[1, 2, 3, 4, 5, 6].map((passo) => (
                    <div key={passo} className="flex flex-col items-center z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                        ${step >= passo ? 'bg-[#8b2119] text-white' : 'bg-gray-200 text-gray-600'}`}>
                        {step > passo ? <FontAwesomeIcon icon={faCheck} className="text-xs" /> : passo}
                      </div>
                      <div className="mt-2 text-xs font-medium text-gray-600">
                        {['Categoria', 'Linha', 'Estação', 'Área', 'Impacto', 'Detalhes'][passo-1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                {/* Etapa 1 - Categoria */}
                {step === 1 && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Qual o tipo de problema que você encontrou?</h2>
                    <p className="text-gray-600 mb-8">Selecione a categoria que melhor descreve o problema.</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                      {Object.keys(AREAS_AFETADAS).map((cat) => (
                        <div
                          key={cat}
                          onClick={() => setCategoriaSelecionada(cat as Categoria)}
                          className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                            categoriaSelecionada === cat ? 'bg-[#8b2119] text-white' : ''
                          }`}
                        >
                          <FontAwesomeIcon 
                            icon={iconesCategorias[cat as Categoria]} 
                            className="w-10 h-10 mb-3" 
                          />
                          <span className="font-medium text-sm">
                            {cat.split('_').join(' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Etapa 2 - Linha */}
                {step === 2 && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Em qual linha ocorreu o problema?</h2>
                    <p className="text-gray-600 mb-8">Selecione a linha onde você identificou o problema.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                      {linhas.map((linha) => (
                        <div
                          key={linha.id}
                          onClick={() => {
                            setLinhaSelecionada(linha);
                            setEstacaoSelecionada(null); // Resetar estação ao mudar linha
                          }}
                          className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                            linhaSelecionada?.id === linha.id ? 'bg-[#8b2119] text-white' : ''
                          }`}
                        >
                          <FontAwesomeIcon 
                            icon={faSubway} 
                            className={`w-10 h-10 mb-3 ${
                              linha.cor === 'CINZA' ? 'text-gray-400' : 
                              linha.cor === 'VERDE' ? 'text-emerald-400' : 
                              'text-blue-400'
                            }`} 
                          />
                          <span className="font-medium text-sm">{linha.nome.toLowerCase()}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Etapa 3 - Estação */}
                {step === 3 && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Em qual estação ocorreu o problema?</h2>
                    {linhaSelecionada ? (
                      <>
                        <p className="text-gray-600 mb-8">Selecione a estação específica onde você identificou o problema.</p>
                        <div className="max-w-md mx-auto mb-8">
                          <div className="relative">
                            <select
                              value={estacaoSelecionada?.id || ''}
                              onChange={(e) => {
                                const selected = linhaSelecionada.estacoes.find(est => est.id === Number(e.target.value));
                                setEstacaoSelecionada(selected || null);
                              }}
                              className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-[#8b2119] focus:border-transparent"
                            >
                              <option value="">Selecione uma estação</option>
                              {linhaSelecionada.estacoes.map((estacao) => (
                                <option key={estacao.id} value={estacao.id}>
                                  {estacao.nome.toLowerCase()}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="text-red-500">Por favor, selecione uma linha primeiro</p>
                    )}
                  </>
                )}

                {/* Etapa 4 - Área Afetada */}
                {step === 4 && categoriaSelecionada && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Qual área foi afetada?</h2>
                    <p className="text-gray-600 mb-8">Selecione a área específica onde você identificou o problema.</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                      {AREAS_AFETADAS[categoriaSelecionada].map((area) => (
                        <div
                          key={area}
                          onClick={() => setAreaAfetadaSelecionada(area)}
                          className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                            areaAfetadaSelecionada === area ? 'bg-[#8b2119] text-white' : ''
                          }`}
                        >
                          <FontAwesomeIcon 
                            icon={
                              area.includes('ESCADA') ? faStairs :
                              area.includes('ELEVADOR') ? faElevator :
                              area.includes('CATRAC') ? faTicketAlt :
                              area.includes('ILUMINA') ? faLightbulb :
                              area.includes('BANHEIRO') ? faToilet :
                              area.includes('BANCO') ? faChair :
                              faQuestionCircle
                            } 
                            className="w-10 h-10 mb-3" 
                          />
                          <span className="font-medium text-sm text-center">
                            {area.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Etapa 5 - Impacto */}
                {step === 5 && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Qual o grau do problema?</h2>
                    <p className="text-gray-600 mb-8">Selecione o nível de impacto que este problema está causando.</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {(['BAIXO', 'MEDIO', 'ALTO', 'CRITICO'] as Impacto[]).map((impacto) => (
                        <div
                          key={impacto}
                          onClick={() => setImpactoSelecionado(impacto)}
                          className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                            impactoSelecionado === impacto ? 'bg-[#8b2119] text-white' : ''
                          }`}
                        >
                          <FontAwesomeIcon 
                            icon={iconesImpacto[impacto]} 
                            className="w-10 h-10 mb-3" 
                          />
                          <span className="font-medium text-sm text-center">
                            {impacto === 'MEDIO' ? 'MÉDIO' : impacto.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Etapa 6 - Detalhes */}
                {step === 6 && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Deseja adicionar mais detalhes?</h2>
                    <p className="text-gray-600 mb-8">Forneça informações adicionais que possam nos ajudar a entender melhor o problema (opcional).</p>

                    <div className="max-w-2xl mx-auto mb-8">
                      <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
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
                      className={`bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300 ${
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
                      disabled={isSubmitting}
                      className={`bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar Reporte'
                      )}
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
                <p><span className="text-gray-600">Categoria:</span> <span className="font-medium">
                  {categoriaSelecionada?.split('_').join(' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                </span></p>
                <p><span className="text-gray-600">Linha:</span> <span className="font-medium">
                  {linhaSelecionada?.nome.toLowerCase()}
                </span></p>
                <p><span className="text-gray-600">Estação:</span> <span className="font-medium">
                  {estacaoSelecionada?.nome.toLowerCase()}
                </span></p>
                <p><span className="text-gray-600">Área afetada:</span> <span className="font-medium">
                  {areaAfetadaSelecionada?.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                </span></p>
                <p><span className="text-gray-600">Grau do problema:</span> <span className="font-medium">
                  {impactoSelecionado === 'MEDIO' ? 'MÉDIO' : impactoSelecionado?.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                </span></p>
                {descricao && <p><span className="text-gray-600">Detalhes:</span> <span className="font-medium">{descricao}</span></p>}
              </div>
            </div>
            
            <button
              onClick={novoReporte}
              className="bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300"
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