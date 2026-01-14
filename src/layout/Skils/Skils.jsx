import { useState,useEffect } from 'react'
import style from "./skils.module.css";
import SkilsSvgMovile from "../../svg/svgMovile";
import SkilsSvgDesktop from "../../svg/svgDesktop";

export default function Skils() {
  const [isMovile, setIsMovile] = useState(false);
  useEffect(()=>{
    const checkScreenSize = ()=>{
      setIsMovile(window.innerWidth < 800);
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return ()=> window.removeEventListener("resize", checkScreenSize);
  },[])
  return (
    <section className={style.skils}>
      {isMovile? (<SkilsSvgMovile/>) :  (<SkilsSvgDesktop/>)}
    </section>
  )
}
