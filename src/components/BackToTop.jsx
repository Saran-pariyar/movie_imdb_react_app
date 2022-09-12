import { useEffect,useState } from "react"

const BackToTop = () => {
    const [backToTop,setBackToTop] = useState(false);
    const w = window

    useEffect(()=>{
        w.addEventListener("scroll",()=>{
            if(w.scrollY > 100){
                setBackToTop(true)
            }
            else{
                setBackToTop(false)
            }
        })
    })
    const scrollUp = ()=>{
w.scrollTo({
    top:35,
    behavior:"smooth"
})
    }
  return (
    <span>
        {
            backToTop && (
                <button onClick={scrollUp} className="fixed bottom-4 right-4 text-3xl bg-slate-500 text-white p-2" >^</button>
            )
        }
    </span>
  )
}

export default BackToTop