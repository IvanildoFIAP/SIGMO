import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='w-full text-white px-[60px] py-0'>
            <div className="bg-[image:var(--grad-vinho)] mb-[30px] px-[70px] py-[50px] rounded-[50px]">
                <div className="flex justify-center">
                    <div className="w-6/12 pr-[30px]">
                        <h2 className='text-white text-left text-5xl leading-[50px] tracking-[-2px] mb-[35px] font-bold'><span className='font-light'>Acompanhe melhorias e</span><br /> novas funcionalidades</h2>
                        <p>Receba atualizações exclusivas sobre as inovações e melhorias do sistema ViaMobilidade diretamente no seu e-mail.</p>
                    </div>
                    <div className="w-6/12 content-center pl-[50px]">
                        <form className='w-full h-[60px] text-white px-[25px] py-0 rounded-[40px] border-0 bg-white/10'>
                            <input className='placeholder-[#c6aaaa] placeholder:text-[16px] placeholder:font-[Poppins] w-full h-[60px] text-white px-[25px] py-0 rounded-[40px] border-0' type="email" id="email" name="email" placeholder="Digite seu e-mail" required /><br />
                            <button className='font-bold h-[60px] w-[170px] relative float-right top-[-60px] text-lg text-[color:var(--vinho)] rounded-[40px] border-0' type="submit">Inscrever-se</button><br />
                            <input className='placeholder-[#c6aaaa] placeholder:text-[16px] placeholder:font-[Poppins] ml-[15px] mr-2.5 my-0' type="checkbox" id="aceite" name="aceite" required />
                            <label className='text-[#c6aaaa]' htmlFor="aceite">Eu aceito os termos e condições</label><br />
                        </form>
                    </div>
                </div>
                <hr className='mt-[30px] mb-10 mx-0 border-[rgba(255,255,255,0.1)]' />
                <div className="flex justify-center">
                    <div className="w-[35%]">
                        <Link href="/" passHref>
                            <Image src="/img/logo-via-mobilidade-branco.png" width={260} height={35} alt="logo ViaMobilidade" />
                        </Link>
                        <div className="flex text-center mt-[15px]">
                            <p className='mb-0 px-[5px] py-0'>
                                <a className='text-white' href="https://www.linkedin.com/company/viamobilidade-sp/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='text-xl pt-[5px]' icon={faLinkedinIn} />
                                </a>
                            </p>
                            <p className='mb-0'>
                                <a href="https://www.facebook.com/ViaMobilidadeLinhas8e9/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </p>
                            <p className='mb-0'>
                                <a href="https://www.instagram.com/viamobilidadelinhas8e9/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </p>
                            <p className='mb-0'>
                                <a href="https://twitter.com/_Linhas8e9" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="large-20">
                        <h4 className='mb-[15px]'>Links Úteis</h4>
                        <ul>
                            <li><Link href="/sobre" passHref>Sobre Nós</Link></li>
                            <li><Link href="/report" passHref>Relatar Problema</Link></li>
                            <li><Link href="/status" passHref>Status</Link></li>
                        </ul>
                    </div>
                    <div className="large-50">
                        <h4 className='mb-[15px]'>Telefone</h4>
                        <p><strong>0800.770.7106</strong></p>
                        <p>Segunda a Sexta, das 6h30 às 22h00<br />
                            Sábado e Domingo, das 8h00 às 18h00</p>
                    </div>
                    <div className="large-20">
                        <h4 className='mb-[15px]'>Políticas</h4>
                        <ul>
                            <li><a href="https://www.viamobilidade.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">Privacidade</a></li>
                            <li><a href="https://www.viamobilidade.com.br/politica-de-cookies" target="_blank" rel="noopener noreferrer">Cookies</a></li>
                            <li><a href="https://www.viamobilidade.com.br/termos-de-uso" target="_blank" rel="noopener noreferrer">Termos e condições</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom cols">
                <div>
                    <p>© Copyright 2024 - ViaMobilidade. Todos os direitos reservados.</p>
                </div>
                <div>
                    <Image className='w-[90px]' src="/img/sigmo-logo.png" width={200} height={50} alt="logo Sistema Inteligente de Gestão e Monitoramento Operacional" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;