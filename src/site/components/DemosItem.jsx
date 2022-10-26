import { Link } from "react-router-dom"

export const DemosItem = ({image, title}) => {
      return (
            <li 
                  className='demo'
                  key={title}>
                                    
                  <Link to="/contacto">
                        <div className='demo__imageBox'>
                              <img className='demo__image' src={ image } alt="Demo image" />
                        </div>

                        <h3 className='demo__heading'>{ title }</h3>
                  </Link>
            </li>
      )
}
