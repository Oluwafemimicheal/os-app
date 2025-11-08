import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import router from "../routes/router";



const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const currentRoute = router.find(route => route.path === location.pathname)
    document.title = currentRoute ? `${currentRoute.title} | Instructor Hub` : "New Instructor"
  }, [location])
}

export default DynamicTitle
