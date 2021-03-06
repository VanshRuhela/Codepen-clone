import React,{useState,useEffect} from 'react'
import Editor from "./Editor"
import useLocalStorage from "./useLocalStorage"
function App() {
  const [html,sethtml]=useLocalStorage("html","")
  const [css,setcss]=useLocalStorage("css","")
  const [js,setjs]=useLocalStorage("js","")
  const [srcDoc,setsrcDoc]=useState("")
  useEffect(()=>{
    const timeout=()=>{
       setsrcDoc(`<html>
      <body>
      ${html}
      </body>
      <style>
      ${css}
      </style>
      <script>
      ${js}
     </script>
    </html>`)
    }  
    setTimeout(timeout,250)
    return ()=> clearTimeout(timeout)
  

  },[html,css,js])
 
  return (
   
    <>

    <div className="editors">
           <Editor
           language="xml"
           title="HTML"
           value={html}
           onChange={sethtml}
           />
           <Editor
           language="css"
           title="CSS"
           value={css}
           onChange={setcss}
           />
           <Editor
           language="javascript"
           title="JS"
           value={js}
           onChange={setjs}
           />
         
      </div>
      <div className="document">
        <iframe
        srcDoc={srcDoc}
        title="Output"
        height="100%"
        sandbox="allow-scripts"
        width="100%"
        frameBorder="0"
        />
      </div>
    </>
  )
}

export default App
