import styles from "./banner.module.css"
import ParallaxBanner from "../../component/parallaxBanner/ParallaxBanner";
import { FaLinkedinIn , FaGithub  } from "react-icons/fa";
import TextTechnologies from "../../component/TextTechnologies/TextTechnologies";
import LoadingCv from "../../component/LoadingCv/LoadingCv";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap, { Power4 } from "gsap";
export default function Banner (){
    const elementRef = useRef()
    useGSAP(()=>{
        gsap.from(".bannerHand",{x:0,y:30,opacity:0,duration:1,ease:Power4.easeIn,delay:0,stagger:1})
    },{scope:elementRef})
    return(
        <section className={styles.banner}>
            <section  className={styles.bannerText} ref={elementRef}>
                <div className={styles.textConteiner}>
                    <p className="textOne"> 
                    <span >
                    <b className={styles.bannerHand}>👋</b>Hi, <br/>
                    I'am Gregori <br />
                    </span> <br />
                    <span className={styles.fullStack}>FullStack</span> Developer
                    </p>
                </div>
                <div className={styles.textNetworks}>
                    <a href="#" className={styles.Linkedin}>
                        <FaLinkedinIn  /> 
                        <span>Linkedin</span>
                    </a>
                    <a href="#" className={styles.github}>
                        <FaGithub />
                        <span>Github</span>
                    </a>
                </div>
                <LoadingCv/>
            </section>      
            <div className={styles.bannerParallax}>
               <ParallaxBanner/>
            <div className={styles.parallaxTechnologies}>
                <span>Technologies I Use <code>() =&gt; &#123;<TextTechnologies/>&#125;</code></span>
            </div>
            </div>      
        </section>
    )
}