import { NavLink } from 'react-router-dom'

import logo from '../../../assets/img/logo.png'
import '../../css/navbar.css';

export const NavBar = () => {
      return (
            <header className="header">

                  <div className="header__logo">
                        <img src={logo} alt="Voz Total Logo" />
                  </div>

                  <nav className='navigation'>
                        <ul className='navigation__list'>
                              <li>
                                    <NavLink 
                                    to="/home"
                                    className={ 
                                          ({isActive}) => `${isActive ? 'navigation__link--active' : null } navigation__link`
                                    }>Inicio
                                    </NavLink>
                              </li>
                              
                              <li>
                                    <NavLink 
                                    to="/nosotros"
                                    className={ 
                                          ({isActive}) => `${isActive ? 'navigation__link--active' : null } navigation__link`
                                    }>Acerca de Nosotros
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink 
                                    to="/clientes"
                                    className={ 
                                          ({isActive}) => `${isActive ? 'navigation__link--active' : null } navigation__link`
                                    }>Clientes
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink 
                                    to="/testimonios"
                                    className={ 
                                          ({isActive}) => `${isActive ? 'navigation__link--active' : null } navigation__link`
                                    }>Testimonios
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink 
                                    to="/politica"
                                    className={ 
                                          ({isActive}) => `${isActive ? 'navigation__link--active' : null } navigation__link`
                                    }>Política de Privacidad
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink 
                                    to="/contacto"
                                    className={ 
                                          ({isActive}) => `${isActive ? 'navigation__link--active' : null } navigation__link`
                                    }>Contacto
                                    </NavLink>
                              </li>
                        </ul> 
                  </nav>

            </header>
      )
}
