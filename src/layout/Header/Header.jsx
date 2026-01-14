import gsap, { Bounce } from "gsap";
import styles from "./header.module.css";
import {useRef } from "react";
import {useGSAP} from '@gsap/react'

export default function Header() {
const elementRef = useRef()
useGSAP(()=>{
  gsap.from(".logo",{y:-80,rotate:-40,opacity:0, delay:0.9,duration:0.6,ease:Bounce.easeOut})
},{scope:elementRef})
  return (
    <header className={styles.header}>
      <div ref={elementRef}>
        <img src='/Logo.png' width={50} height={50} alt='logo' className="logo"/>
      </div>
    </header>
  )
}
