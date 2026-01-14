import React from 'react'
import style from './bgLineal.module.css'
export default function BgLineal() {
  return (
    <div className={style.bg}>
        <div className={style.bgRows}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={style.bgCols}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}
