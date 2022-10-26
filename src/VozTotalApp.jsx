import { HashRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { Footer, NavBar } from "./ui/components"

export const VozTotalApp = () => {

      return (
            <HashRouter>
                  <NavBar />
                  <AppRouter />
                  <Footer />
            </HashRouter>
      )
}
 