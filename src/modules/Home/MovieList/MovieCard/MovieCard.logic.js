import { useNavigate } from "react-router-dom"
import routes from "lib/config/routes"

const useLogic = () => {
    const navigate = useNavigate()
    
    const onCardClick = (imdbID) => {
        navigate(routes.MOVIE_DETAILS.replace(':id', imdbID))
    }
    return {
        onCardClick
    }
}
export default useLogic