import { HashRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { Footer, NavBar } from "./ui/components"
import 'bootstrap/dist/css/bootstrap.min.css';

export const VozTotalApp = () => {

      return (
            <HashRouter>
                  <NavBar />
                  <AppRouter />
                  <Footer />
            </HashRouter>
      )
}
 