import Banner from "../components/banner"
import { useNavigate } from "react-router-dom"

export default function Index(){
    const navigationTo = useNavigate();

    return (
        <Banner
            welcomeCn="欢迎"
            welcomeEn="welcome"
            stateContent="华南师范大学图书馆"
            onClick={()=>navigationTo("/activities")}
        ></Banner>
    )
}