import LandingPage from "../pages/LandingPage"
import { PAGE } from "../utils/constants"

const routes = [
    {
        path: PAGE.ROOT.PATH,
        element: <LandingPage />
    }
]

export default routes;