import { useState } from "react";
import NavSidebar from "./NavSidebar";

// eslint-disable-next-line react/prop-types
const Sidebar = ({setDarkMode, darkMode}) => {
     const toggleDarkMode = () => {
          setDarkMode(!darkMode);
     };
     const [open, setopen] = useState(true);

     const toogleMenu = () => {
          setopen(!open);
     }

     return (
     <>
          <nav className="fixed top-0 z-50 w-full bg-gray-300 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 mx-auto left-0 p-2 flex flex-col">
               <div className="flex justify-between items-center">
                    <div className="flex items-center justify-start rtl:justify-end">
                         <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"> <span className="sr-only">Open sidebar</span> <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" /> </svg>
                         </button>
                         <a href="https://flowbite.com" className="flex ms-2 md:me-24 items-center "> <img src="https://flowbite.com/docs/images/logo.svg" className="h-5 me-3" alt="FlowBite Logo" /></a>
                    </div>
                    <div className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"> Flowbite </div>
                    <div className="flex items-center justify-start gap-3">
                         {/* Toggle Dark Mode */}
                         <div className="">
                              <label className="inline-flex items-center cursor-pointer">
                                   <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
                                   <div className="relative w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                              </label>
                         </div>

                         {/* Close Button and co */}
                         <div>
                              <button>
                                   <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" fill="#00000000" viewBox="0 0 24 24" strokeWidth={2} stroke="currentcolor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                   </svg>
                              </button>
                              <button>
                                   <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" fill="#00000000" viewBox="0 0 24 24" strokeWidth={2} stroke="currentcolor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                                   </svg>
                              </button>
                              <button>
                                   <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" fill="#00000000" viewBox="0 0 24 24" strokeWidth={2} stroke="currentcolor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                   </svg>
                              </button>
                         </div>
                    </div>
               </div>
               <div className="me-auto flex gap-3 text-xs">
                    {/* Files and the likes inclusing save and so on */}
                    <a href="#" className="hover:underline text-gray-900 dark:text-white">Files</a>
                    <a href="#" className="hover:underline text-gray-900 dark:text-white">Edit</a>
                    <a href="#" className="hover:underline text-gray-900 dark:text-white">Section</a>
                    <a href="#" className="hover:underline text-gray-900 dark:text-white">Help</a>
               </div>
          </nav>

          <nav id="logo-sidebar" className="fixed top-0 left-0 z-40 w-16 h-screen pt-20 transition-transform -translate-x-full bg-gray-300 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="logo-sidebar" >
               <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                         <li>
                              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={toogleMenu}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                              </svg>
                              </a>
                         </li>
                         <li>
                              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                   <svg className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21" >
                                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                   </svg>
                              </a>
                         </li>
                         <li>
                              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"  >
                                   <svg className="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" > 
                                   <path d="M8.5 2A1.5 1.5 0 0 0 7 3.5V6h6V3.5A1.5 1.5 0 0 0 11.5 2h-3Z" /> 
                                   <path clipRule="evenodd" fillRule="evenodd" d="M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Zm5-3.5A1.5 1.5 0 0 1 8.5 3h3A1.5 1.5 0 0 1 13 4.5V6H7V4.5Z" /> 
                                   </svg>
                              </a>
                         </li>
                    </ul>
               </div>
          </nav>

          
          <NavSidebar isOpen={open} />
     </>
     );
};

export default Sidebar;