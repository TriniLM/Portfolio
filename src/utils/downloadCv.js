export default function downloadCv (){
    let a =  document.createElement("a");
    a.href = 'documents/curriculum.pdf';
    a.download = "Mi curriculum";
    setTimeout(()=>{
        a.click(); 
    }, 8000);
}