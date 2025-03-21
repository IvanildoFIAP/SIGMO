"use client"; // Adicione esta linha no topo do arquivo

import React, { useState } from 'react';

// Definindo os tipos para o estado do formulário
interface FormData {
    name: string;
    email: string;
    password: string;
    privacyPolicy: boolean;
}

// Definindo os tipos para os erros
interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    privacyPolicy?: string;
}

const LoginPage: React.FC = () => {
    // Estado do formulário
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        privacyPolicy: false,
    });

    // Estado dos erros
    const [errors, setErrors] = useState<FormErrors>({});

    // Função para atualizar o estado do formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Função para validar o formulário
    const validateForm = () => {
        const newErrors: FormErrors = {};

        if (!formData.name) newErrors.name = 'Nome é obrigatório.';
        if (!formData.email) {
            newErrors.email = 'E-mail é obrigatório.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'E-mail inválido.';
        }
        if (!formData.password) newErrors.password = 'Senha é obrigatória.';
        if (!formData.privacyPolicy) newErrors.privacyPolicy = 'Você deve aceitar as políticas de privacidade.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulário enviado:', formData);
            alert('Cadastro realizado com sucesso!');
        } else {
            console.log('Formulário inválido');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-opacity-10 rounded-lg shadow-lg p-8 bg-[#881f1f]">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Coluna Esquerda */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-white">
                        <h2 className="text-5xl font-light leading-tight mb-6">
                            Contribua para um{' '}
                            <span className="font-bold">transporte mais eficiente</span>
                        </h2>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1b88271c6e342f548783242d04c7b78c96d3d6bbe0ba72c53fdb73775068ad2?placeholderIfAbsent=true&apiKey=c73bc0ffa08f40b6baf0dc5957a984fb"
                            alt="Efficient transport illustration"
                            className="w-64 mt-6"
                        />
                    </div>

                    {/* Coluna Direita - Formulário */}
                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-opacity-15 rounded-lg p-6">
                            <div className="mb-6">
                                <h3 className="text-3xl font-medium text-white mb-2">Crie sua conta</h3>
                                <p className="text-white opacity-80">
                                    Preencha os campos abaixo e crie sua conta
                                </p>
                            </div>

                            {/* Campo Nome */}
                            <div className="mb-4">
                                <div className="flex items-center bg-[rgba(255,255,255,0.15)] rounded-lg p-3 gap-4">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe3442a8bcaca8f97f61206b1261346743775b5d189bc71effc7ff62141f68a1?placeholderIfAbsent=true&apiKey=c73bc0ffa08f40b6baf0dc5957a984fb"
                                        alt="Ícone de nome"
                                        className="w-6 h-6"
                                    />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Digite seu nome"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="flex-grow bg-transparent text-gray-400 placeholder-white placeholder-opacity-80 focus:outline-none"
                                        required
                                    />
                                </div>
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Campo E-mail */}
                            <div className="mb-4">
                                <div className="flex items-center bg-[rgba(255,255,255,0.15)] rounded-lg p-3 gap-4">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fd34032fdf509b9fea1e7c7029f36a7870fbddc06b403e37aa84b2067cc9459?placeholderIfAbsent=true&apiKey=c73bc0ffa08f40b6baf0dc5957a984fb"
                                        alt="Ícone de e-mail"
                                        className="w-6 h-6"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Digite seu e-mail"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="flex-grow bg-transparent text-white placeholder-white placeholder-opacity-80 focus:outline-none"
                                        required
                                    />
                                </div>
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Campo Senha */}
                            <div className="mb-4">
                                <div className="flex items-center bg-[rgba(255,255,255,0.15)] rounded-lg p-3 gap-4">
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cd182a18bee41507c1b79342222bd37c9045f33f0e4122dec8de61389b01ee9?placeholderIfAbsent=true&apiKey=c73bc0ffa08f40b6baf0dc5957a984fb"
                                        alt="Ícone de senha"
                                        className="w-6 h-6"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Crie sua senha"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="flex-grow bg-transparent text-white placeholder-white placeholder-opacity-80 focus:outline-none"
                                        required
                                    />
                                </div>
                                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                            </div>

                            {/* Política de Privacidade */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        name="privacyPolicy"
                                        checked={formData.privacyPolicy}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border border-white border-opacity-60 bg-transparent checked:bg-white"
                                        required
                                    />
                                    <label htmlFor="privacyPolicy" className="text-white opacity-80">
                                        Estou ciente das políticas de privacidade.
                                    </label>
                                </div>
                                {errors.privacyPolicy && (
                                    <p className="text-red-400 text-sm mt-1">{errors.privacyPolicy}</p>
                                )}
                            </div>

                            {/* Botão de Cadastro */}
                            <button
                                type="submit"
                                className="w-full bg-white text-[#8b2119] font-bold py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                            >
                                Cadastrar-se
                            </button>

                            {/* Divisor */}
                            <div className="my-6 text-center text-white opacity-80">OU</div>

                            {/* Botão de Login */}
                            <button
                                type="button"
                                className="w-full bg-white text-[#8b2119] font-bold py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
                            >
                                Fazer login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;