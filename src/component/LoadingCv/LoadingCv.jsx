import { useEffect, useState } from 'react';
import Swal from 'sweetalert2' ;
import downloadCv from '../../utils/downloadCv.js';
import './loadingCv.css';

export default function DownloadCv() {
    const [btnState, setBtnState]=useState("static")
    const [download, SetDownload] = useState(false)
    useEffect(()=>{
        if(download){
            setBtnState("loading");
            setTimeout(()=>{
                setBtnState("completed")
            },4500)
        }
    },[download])
  return (
    <div>
       <button className={`downloadCv ${btnState}`} onClick={()=>{
            SetDownload(true);
            downloadCv();
       }}>
        <p className='staticText'>Download Cv</p>
        <div className="completedConteiner">
            <div className='completeCheck'>
                {btnState != "completed"? "": Swal.fire({
                    icon: "success",
                    title:'<p class="textSweet">Done! My resume’s all yours. 😉</p?',
                    background:"var(--bg-one-variation)",
                    draggable: true,
                    timer: 4000,
                    showConfirmButton:false,
                    color:"red"
                }).then(result =>{
                    if(result.isDismissed){
                        setBtnState("static");
                        SetDownload(false);
                    }
                })}
            </div>
        </div>
       </button>
    </div>
  )
}
