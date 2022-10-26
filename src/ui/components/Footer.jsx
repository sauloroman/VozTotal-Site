import { Link } from "react-router-dom"

import '../../css/footer.css';

export const Footer = () => {
      return (
            <div className="footer section-separation">
                  <div className="container">
                        <div className="footer__grid">

                              <div className="footer__information">
                                    <h3 className="footer__heading">Información</h3>

                                    <ul className="footer__list">
                                          <li className="footer__link">Anaxágoras 29, Piedad Narvarte, Benito Juárez, 03000 Ciudad de México, CDMX</li>
                                          <li className="footer__link">Avenida Armando Birlaín Shaffler 2001, Centro Sur, 76090 Querétaro, Qro.</li>
                                          <li className="footer__link">Torre Magnia Corporate Center Calle 15 No. 503, Piso 7, Col. Altabrisa, 97130 Mérida, Yuc.</li>
                                          <li className="footer__link"><a href="mailto: contacto@voztotal.mx">contacto@voztotal.mx</a></li>
                                          <li className="footer__link">
                                                Oficina: <a href="tel: 5588802100">(55) 888 02 100</a>
                                          </li>
                                          <li className="footer__link">
                                                Whatsapp: <a href="tel: 6969 0965">(55) 6969 0965</a>
                                          </li>
                                    </ul>

                              </div>

                              <div className="footer__menu">
                                    <h3 className="footer__heading">Menú</h3>

                                    <ul className="footer__list">
                                          <li className="footer__link"><Link to="/nosotros">Nosotros</Link></li>
                                          <li className="footer__link"><Link to="/contacto">Contacto</Link></li>
                                          <li className="footer__link"><Link to="/testimonios">Testimonios</Link></li>
                                          <li className="footer__link"><Link to="/politica">Politica</Link></li>
                                    </ul>
                              </div>

                              <div className="footer__contact">
                                    <h3 className="footer__heading">Déjanos tu correo para recibir información</h3>

                                    <form className="footer__form">
                                          <div className="footer__form-field">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" placeholder="tucorreo@correo.com" />
                                          </div>
                                          <button className="btn" type="submit">Enviar</button>
                                    </form>
                              </div>

                        </div>
                        
                        <p className="footer__copy">Derechos Reservados &copy; 2022</p>
                  </div>
            </div>
      )
}
