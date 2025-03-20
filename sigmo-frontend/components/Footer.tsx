import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='w-full text-white px-15 py-0'> {/* px-[60px] -> px-15 */}
            <div className="bg-[image:var(--grad-vinho)] mb-8 px-18 py-12 rounded-[50px]"> {/* mb-[30px] -> mb-8, px-[70px] -> px-18, py-[50px] -> py-12 */}
                <div className="flex justify-center">
                    <div className="w-6/12 pr-8"> {/* pr-[30px] -> pr-8 */}
                        <h2 className='text-white text-left text-5xl leading-[50px] tracking-[-2px] mb-9 font-bold'><span className='font-light'>Acompanhe melhorias e</span><br /> novas funcionalidades</h2>
                        <p>Receba atualizações exclusivas sobre as inovações e melhorias do sistema ViaMobilidade diretamente no seu e-mail.</p>
                    </div>
                    <div className="w-6/12 content-center pl-12"> {/* pl-[50px] -> pl-12 */}
                        <form className='w-full h-15 text-white pl-6 py-0 rounded-[40px] border-0 bg-white/10'> {/* h-[60px] -> h-15, pl-[25px] -> pl-6 */}
                            <input className='placeholder-[#c6aaaa] placeholder:text-[16px] placeholder:font-[Poppins] w-full h-15 text-white px-6 py-0 rounded-[40px] border-0' type="email" id="email" name="email" placeholder="Digite seu e-mail" required /><br />
                            <button className='font-bold h-15 w-[170px] relative float-right top-[-60px] text-lg !text-[color:var(--vinho)] rounded-[40px] border-0 bg-white' type="submit">Inscrever-se</button><br />
                            <input className='placeholder-[#c6aaaa] placeholder:text-[16px] placeholder:font-[Poppins] ml-4 mr-2.5 my-0' type="checkbox" id="aceite" name="aceite" required /> {/* ml-[15px] -> ml-4 */}
                            <label className='text-[#c6aaaa]' htmlFor="aceite">Eu aceito os termos e condições</label><br />
                        </form>
                    </div>
                </div>
                <hr className='mt-7 mb-10 mx-0 border-[rgba(255,255,255,0.1)]' />
                <div className="flex justify-center">
                    <div className="w-[35%]">
                        <Link href="/" passHref>
                            <Image src="/img/logo-via-mobilidade-branco.png" width={260} height={35} alt="logo ViaMobilidade" />
                        </Link>
                        <div className="flex text-center mt-4"> {/* mt-[15px] -> mt-4 */}
                            <p className='mb-0'>
                                <a href="https://www.linkedin.com/company/viamobilidade-sp/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
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
                    <div className="w-1/5">
                        <h4 className='!mb-4 font-bold'>Links Úteis</h4> {/* !mb-[15px] -> !mb-4 */}
                        <ul>
                            <li className='px-0 py-[3px]'><Link href="/sobre" passHref>Sobre Nós</Link></li>
                            <li className='px-0 py-[3px]'><Link href="/report" passHref>Relatar Problema</Link></li>
                            <li className='px-0 py-[3px]'><Link href="/status" passHref>Status</Link></li>
                        </ul>
                    </div>
                    <div className="w-6/12 text-white content-normal text-left ">
                        <h4 className='!mb-4 font-bold'>Telefone</h4> {/* !mb-[15px] -> !mb-4 */}
                        <p className='mb-0'><strong>0800.770.7106</strong></p>
                        <p className='mb-0'>Segunda a Sexta, das 6h30 às 22h00<br />
                            Sábado e Domingo, das 8h00 às 18h00</p>
                    </div>
                    <div className="w-1/5">
                        <h4 className='!mb-4 font-bold'>Políticas</h4> {/* !mb-[15px] -> !mb-4 */}
                        <ul className='list-style: none'>
                            <li className='px-0 py-[3px]'><a className='no-underline text-white' href="https://www.viamobilidade.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">Privacidade</a></li>
                            <li className='px-0 py-[3px]'><a className='no-underline text-white' href="https://www.viamobilidade.com.br/politica-de-cookies" target="_blank" rel="noopener noreferrer">Cookies</a></li>
                            <li className='px-0 py-[3px]'><a className='no-underline text-white' href="https://www.viamobilidade.com.br/termos-de-uso" target="_blank" rel="noopener noreferrer">Termos e condições</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-[#8c8c8c] justify-between px-[60px] py-0 flex mb-8">
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