import CtaSection from "./CtaSection"
import HeroSection from "./HeroSection"
import KeySection from "./KeySection"
import '../Styles/HomeMain.css'


const HomeMainLanding = ( ) =>{

    return(
        <>
        <div className="wrapper">
            <HeroSection/>
            <KeySection/>
            <CtaSection/>
        </div>
        
        </>

    )

}
export default HomeMainLanding