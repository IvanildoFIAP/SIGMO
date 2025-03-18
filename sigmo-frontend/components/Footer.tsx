import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='w-full text-white px-[60px] py-0'>
            <div className="bg-amber-800 mb-[30px] px-[70px] py-[50px] rounded-[50px]">
                <div className="cols">
                    <div className="large-50">
                        <h2><span>Acompanhe melhorias e</span>
                            <br />
                            novas funcionalidades
                        </h2>
                        <p>Receba atualizações exclusivas sobre as inovações e melhorias do sistema ViaMobilidade
                            diretamente no
                            seu e-mail.</p>
                    </div>
                    <div className="large-50">
                        <form>
                            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required /><br />
                            <button type="submit">Inscrever-se</button><br />
                            <input type="checkbox" id="aceite" name="aceite" required />
                            <label htmlFor="aceite">Eu aceito os termos e condições</label><br />
                        </form>
                    </div>
                </div>
                <hr />
                <div className="cols">
                    <div className="large-35">
                        <a href="/index.html">
                            <img src="../img" width={260} height={35} alt="logo ViaMobilidade" />
                        </a>
                        <div className="redes-sociais">
                            <p>
                                <a href="https://www.linkedin.com/company/viamobilidade-sp/">
                                    <span><i className="fab fa-linkedin-in" /></span>
                                </a>
                            </p>
                            <p>
                                <a href="https://www.facebook.com/ViaMobilidadeLinhas8e9/">
                                    <span><i className="fab fa-facebook" /></span>
                                </a>
                            </p>
                            <p>
                                <a href="https://www.instagram.com/viamobilidadelinhas8e9/">
                                    <span><i className="fab fa-instagram" /></span>
                                </a>
                            </p><p>
                                <a href="https://twitter.com/_Linhas8e9">
                                    <span><i className="fab fa-twitter" /></span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="large-20">
                        <h4>Links Úteis</h4>
                        <ul>
                            <li><a href="/sobre.html">Sobre Nós</a></li>
                            <li><a href="/report.html">Relatar Problema</a></li>
                            <li><a href="/status.html">Status</a></li>
                        </ul>
                    </div>
                    <div className="large-50">
                        <h4>Telefone</h4>
                        <p><strong>0800.770.7106</strong></p>
                        <p>Segunda a Sexta, das 6h30 às 22h00<br />
                            Sábado e Domingo, das 8h00 às 18h00</p>
                    </div>
                    <div className="large-20">
                        <h4>Políticas</h4>
                        <ul>
                            <li><a href="https://www.viamobilidade.com.br/politica-de-privacidade/">Privacidade</a></li>
                            <li><a href="https://www.viamobilidade.com.br/politica-de-cookies">Cookies</a></li>
                            <li><a href="https://www.viamobilidade.com.br/termos-de-uso">Termos e condições</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom cols">
                <div>
                    <p>© Copyright 2024 - ViaMobilidade. Todos os direitos reservados.</p>
                </div>
                <div>
                    <img src="img/sigmo-logo.png" alt="logo Sistema Inteligente de Gestão e Monitoramento Operacional" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
