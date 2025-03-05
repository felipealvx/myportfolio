import { ReactNode } from "react";
import "../styles/app.css"

type appProps = {
  children: ReactNode
  className?: string
}

function App({children, className}: appProps) {

  return (
    <main className={`
      __appMain
      w-full
      text-light-50
      ${className || ""}
      `}>

      <div className="
      max-w-screen-xl
      mx-auto h-screen  
      p-4 
      rounded-md
      relative
      ">
        {children}
      </div>
    </main>
  )
}

export default App;