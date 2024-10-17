import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import CodeSpace from "./CodeSpace";

function CodeEditor() {

     const [darkMode, setDarkMode] = useState(false);
     useEffect(() => {
     if (darkMode) {
          document.documentElement.classList.add("dark");
     } else {
          document.documentElement.classList.remove("dark");
     }
     }, [darkMode]);

  
     return (
     <>
          <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
          <CodeSpace />
     </>
     )
}

export default CodeEditor
