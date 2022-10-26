import services from '../../data/servicios.json'
import { ServiceItem } from './ServiceItem'

export const ServicesList = () => {
      return (
            <ul className="servicies__grid">
                  {
                        services.map( service => (
                              <ServiceItem 
                                    key={ service.id }
                                    { ...service }
                              />
                        ))
                  }
            </ul>
      )
}
