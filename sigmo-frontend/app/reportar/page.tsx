'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBuilding, faShieldAlt, faBroom, faConciergeBell, faEllipsisH,
  faSubway, faStairs, faElevator, faTicketAlt, faSign, faLightbulb,
  faTint, faToilet, faChair, faTrashAlt, faSnowflake, faInfoCircle,
  faBan, faExclamationTriangle, faTachometerAlt, faQuestionCircle,
  faCheck, faArrowLeft, faArrowRight, faChevronDown, faSpinner,
  faPencilAlt, faSave, faTimes
} from '@fortawesome/free-solid-svg-icons'
import Chatbot from "@/components/Chatbot";
import React, { useState, useEffect } from 'react';
import { fetchLinhas, createReporte, updateReporte, deleteReporte, type Linha, type Estacao } from '@/services/api';

// Tipos das seleções
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

// Função para formatar texto (primeira letra maiúscula)
const formatarTexto = (texto: string) => {
  if (!texto) return '';
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
};

export default function Reportar() {
  // Estados
  const [step, setStep] = useState(1);
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Estados do formulário
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria | null>(null);
  const [linhaSelecionada, setLinhaSelecionada] = useState<Linha | null>(null);
  const [estacaoSelecionada, setEstacaoSelecionada] = useState<Estacao | null>(null);
  const [areaAfetadaSelecionada, setAreaAfetadaSelecionada] = useState<string | null>(null);
  const [impactoSelecionado, setImpactoSelecionado] = useState<Impacto | null>(null);
  const [descricao, setDescricao] = useState('');
  const [finalizado, setFinalizado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reporteId, setReporteId] = useState<number | null>(null);

  // Estados para edição
  const [editandoLinha, setEditandoLinha] = useState(false);
  const [editandoEstacao, setEditandoEstacao] = useState(false);
  const [linhaEditada, setLinhaEditada] = useState<Linha | null>(null);
  const [estacaoEditada, setEstacaoEditada] = useState<Estacao | null>(null);

  // Buscar linhas ao carregar o componente
  useEffect(() => {
    const loadLinhas = async () => {
      try {
        setLoading(true);
        const data = await fetchLinhas();
        setLinhas(data);
      } catch (err) {
        console.error('Erro ao carregar linhas:', err);
        setError('Erro ao carregar linhas. Verifique se o servidor está rodando.');
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
    setError(null);
    
    try {
      const reporteData = {
        linha: { id: linhaSelecionada.id },
        estacao: { id: estacaoSelecionada.id },
        categoria: categoriaSelecionada,
        areaAfetada: areaAfetadaSelecionada,
        impacto: impactoSelecionado,
        descricao: descricao
      };

      const response = await createReporte(reporteData);
      setReporteId(response.id);
      setFinalizado(true);
    } catch (err) {
      console.error('Erro ao enviar reporte:', err);
      setError('Erro ao enviar reporte. Verifique os dados e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAtualizarReporte = async () => {
    if (!reporteId || !linhaSelecionada || !estacaoSelecionada) {
      setError('Linha e estação são obrigatórias');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const reporteData = {
        id: reporteId,
        linha: { id: linhaSelecionada.id },
        estacao: { id: estacaoSelecionada.id },
        categoria: categoriaSelecionada!,
        areaAfetada: areaAfetadaSelecionada!,
        impacto: impactoSelecionado!,
        descricao: descricao
      };

      await updateReporte(reporteData);
      
      setError(null);
      setEditandoLinha(false);
      setEditandoEstacao(false);
      setLinhaEditada(null);
      setEstacaoEditada(null);
      alert('Alterações salvas com sucesso!');
    } catch (err: any) {
      console.error('Erro ao atualizar reporte:', err);
      setError(err.response?.data?.message || 'Erro ao atualizar reporte. Tente novamente.');
      
      // Reverte as alterações em caso de erro
      if (linhaEditada) setLinhaSelecionada(linhaEditada);
      if (estacaoEditada) setEstacaoSelecionada(estacaoEditada);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletarReporte = async () => {
    if (!reporteId) return;

    if (window.confirm('Tem certeza que deseja deletar este reporte?')) {
      setIsSubmitting(true);
      
      try {
        await deleteReporte(reporteId);
        alert('Reporte deletado com sucesso!');
        novoReporte();
      } catch (err: any) {
        console.error('Erro ao deletar reporte:', err);
        setError(err.response?.data?.message || 'Erro ao deletar reporte. Tente novamente.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const novoReporte = () => {
    setCategoriaSelecionada(null);
    setLinhaSelecionada(null);
    setEstacaoSelecionada(null);
    setAreaAfetadaSelecionada(null);
    setImpactoSelecionado(null);
    setDescricao('');
    setFinalizado(false);
    setReporteId(null);
    setStep(1);
    setError(null);
    setEditandoLinha(false);
    setEditandoEstacao(false);
    setLinhaEditada(null);
    setEstacaoEditada(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }

  if (error && !finalizado) {
    return (
      <div className="text-center p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="!bg-[image:var(--grad-vinho)] text-white px-4 py-2 rounded-full"
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

          <section id="secao-report" className="container mx-auto px-4 pt-16">
            <div className="max-w-7xl mx-auto text-center">
              <div className="mb-12">
                <div className="flex justify-between items-center w-full max-w-3xl mx-auto relative">
                  <div className="absolute top-4 left-16 right-16 h-1 bg-gray-200 z-0"></div>
                  
                  {[1, 2, 3, 4, 5, 6].map((passo) => (
                    <div key={passo} className="flex flex-col items-center z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                        ${step >= passo ? '!bg-[image:var(--grad-vinho)] text-white' : 'bg-gray-200 text-gray-600'}`}>
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
                            categoriaSelecionada === cat ? '!bg-[image:var(--grad-vinho)] text-white' : ''
                          }`}
                        >
                          <FontAwesomeIcon 
                            icon={iconesCategorias[cat as Categoria]} 
                            className="w-10 h-10 mb-3" 
                          />
                          <span className="font-medium text-sm">
                            {formatarTexto(cat.split('_').join(' '))}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

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
                            setEstacaoSelecionada(null);
                          }}
                          className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                            linhaSelecionada?.id === linha.id ? '!bg-[image:var(--grad-vinho)] text-white' : ''
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
                          <span className="font-medium text-sm">
                            {formatarTexto(linha.nome)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {step === 3 && linhaSelecionada && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Em qual estação ocorreu o problema?</h2>
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
                              {formatarTexto(estacao.nome)}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {step === 4 && categoriaSelecionada && (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Qual área foi afetada?</h2>
                    <p className="text-gray-600 mb-8">Selecione a área específica onde você identificou o problema.</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                      {AREAS_AFETADAS[categoriaSelecionada].map((area) => (
                        <div
                          key={area}
                          onClick={() => setAreaAfetadaSelecionada(area)}
                          className={`min-h-44 p-6 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer ${
                            areaAfetadaSelecionada === area ? '!bg-[image:var(--grad-vinho)] text-white' : ''
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
                            {formatarTexto(area)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

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
                            impactoSelecionado === impacto ? '!bg-[image:var(--grad-vinho)] text-white' : ''
                          }`}
                        >
                          <FontAwesomeIcon 
                            icon={iconesImpacto[impacto]} 
                            className="w-10 h-10 mb-3" 
                          />
                          <span className="font-medium text-sm text-center">
                            {impacto === 'MEDIO' ? 'Médio' : formatarTexto(impacto)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

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

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}

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
                      disabled={isSubmitting}
                      className={`!bg-[image:var(--grad-vinho)] text-white px-9 py-3.5 rounded-full hover:opacity-90 transition duration-300 ${
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
                  {formatarTexto(categoriaSelecionada?.split('_').join(' ') || '')}
                </span></p>
                
                {/* Linha - Editável */}
                <div className="flex items-center">
                  <span className="text-gray-600">Linha:</span>
                  {editandoLinha ? (
                    <div className="ml-2 flex items-center">
                      <select
                        value={linhaSelecionada?.id || ''}
                        onChange={(e) => {
                          const selected = linhas.find(linha => linha.id === Number(e.target.value));
                          if (selected) setLinhaSelecionada(selected);
                        }}
                        className="p-2 border border-gray-300 rounded-lg"
                      >
                        {linhas.map((linha) => (
                          <option key={linha.id} value={linha.id}>
                            {formatarTexto(linha.nome)}
                          </option>
                        ))}
                      </select>
                      <div className="ml-2 flex gap-1">
                        <button onClick={handleAtualizarReporte} className="text-green-600">
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button 
                          onClick={() => {
                            setEditandoLinha(false);
                            if (linhaEditada) setLinhaSelecionada(linhaEditada);
                          }} 
                          className="text-red-600"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="font-medium ml-2">
                        {formatarTexto(linhaSelecionada?.nome || '')}
                      </span>
                      <button 
                        onClick={() => {
                          setLinhaEditada(linhaSelecionada);
                          setEditandoLinha(true);
                        }}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Estação - Editável */}
                <div className="flex items-center">
                  <span className="text-gray-600">Estação:</span>
                  {editandoEstacao ? (
                    <div className="ml-2 flex items-center">
                      <select
                        value={estacaoSelecionada?.id || ''}
                        onChange={(e) => {
                          const selected = linhaSelecionada?.estacoes.find(est => est.id === Number(e.target.value));
                          if (selected) setEstacaoSelecionada(selected);
                        }}
                        className="p-2 border border-gray-300 rounded-lg"
                        disabled={!linhaSelecionada}
                      >
                        {linhaSelecionada?.estacoes.map((estacao) => (
                          <option key={estacao.id} value={estacao.id}>
                            {formatarTexto(estacao.nome)}
                          </option>
                        ))}
                      </select>
                      <div className="ml-2 flex gap-1">
                        <button onClick={handleAtualizarReporte} className="text-green-600">
                          <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button 
                          onClick={() => {
                            setEditandoEstacao(false);
                            if (estacaoEditada) setEstacaoSelecionada(estacaoEditada);
                          }} 
                          className="text-red-600"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="font-medium ml-2">
                        {formatarTexto(estacaoSelecionada?.nome || '')}
                      </span>
                      <button 
                        onClick={() => {
                          setEstacaoEditada(estacaoSelecionada);
                          setEditandoEstacao(true);
                        }}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                        disabled={!linhaSelecionada}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                    </>
                  )}
                </div>

                {/* Demais campos */}
                <p><span className="text-gray-600">Área afetada:</span> <span className="font-medium">
                  {formatarTexto(areaAfetadaSelecionada || '')}
                </span></p>
                <p><span className="text-gray-600">Grau do problema:</span> <span className="font-medium">
                  {impactoSelecionado === 'MEDIO' ? 'Médio' : formatarTexto(impactoSelecionado || '')}
                </span></p>
                {descricao && <p><span className="text-gray-600">Detalhes:</span> <span className="font-medium">{descricao}</span></p>}
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={novoReporte}
                className="!bg-[image:var(--grad-vinho)] text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300"
              >
                Fazer novo reporte
              </button>
              
              <button
                onClick={handleDeletarReporte}
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                    Excluindo...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                    Excluir Reporte
                  </>
                )}
              </button>
              
              {(editandoLinha || editandoEstacao) && (
                <button
                  onClick={handleAtualizarReporte}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                      Salvando...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSave} className="mr-2" />
                      Salvar Alterações
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {!finalizado && <Chatbot />}
    </>
  );
}