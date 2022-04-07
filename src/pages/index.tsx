import Banner from "../components/banner";
import Statezone from "../components/state-zone";
import { useNavigate } from "react-router-dom";
import Study from "../source/undraw_bibliophile_re_xarc.svg";

export default function Index(){
    const navigationTo = useNavigate();

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <Banner
                welcomeCn="欢迎"
                welcomeEn="welcome"
                stateContent="华南师范大学图书馆"
                onClick={()=>navigationTo("/activities")}
            ></Banner>
            <Statezone
                reverse={false}
                titleCn={"关于我们"}
                titleEn={"About us"}
                content={"我们是华南师范大学图书馆管理平台，在这里可以获取到关于图书馆的活动信息"}
                svgSrc={Study}
            ></Statezone>
        </div>
    )
}