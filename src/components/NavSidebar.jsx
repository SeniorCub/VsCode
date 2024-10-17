import { useState } from 'react';

const NavSidebar = ({ isOpen }) => {
    const [files, setFiles] = useState(['index.js']);
    const [folders, setFolders] = useState([]);

    const addFile = () => {
        const newFile = prompt('Enter file name');
        if (newFile) setFiles([...files, newFile]);
    };

    const removeFile = (fileName) => {
        setFiles(files.filter((file) => file !== fileName));
    };

    return (
        <>
            <aside id="logo-sidebar" className={ isOpen ? `fixed top-0 right-0 z-40 w-64 h-screen pt-16 px-3 transition-transform -translate-x-full bg-gray-300 border-l border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700` : `hidden` } aria-label="Sidebar" >
                <div className="me-auto flex gap-3 text-xs py-3 items-center">
                    <a onClick={addFile} className="pointer hover:underline text-gray-900 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"  />
                        </svg>
                    </a>

                    <a className="hover:underline text-gray-900 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
                        </svg>
                    </a>
                </div>

                <div className="h-full pb-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
                    <ul className="space-y-1 font-medium">
                        {/* List Files */}
                        {files.map((file) => (
                            <li key={file}>
                                {file}{' '}
                                <button onClick={() => removeFile(file)} className="text-red-500 ml-2">
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default NavSidebar;
