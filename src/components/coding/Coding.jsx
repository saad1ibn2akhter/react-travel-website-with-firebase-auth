// import React from 'react';

// const Coding = () => {
//     const handleCode = e => {
//         e.preventDefault();
//         const code = e.target.code.value;

//     }
//     return (
//         <div>
//             <div>
//                 <form onSubmit={handleCode} action="">
//                     <textarea name="code" id="area" cols="30" rows="10"></textarea>
//                 </form>
//             </div>

//             <div>
//                 <script>
//                     document.getElementById('area')
//                 </script>
//             </div>
//         </div>
//     );
// };

// export default Coding;

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Coding = () => {
    const [code, setCode] = useState('');
    const [program ,setProgram] = useState('');

    const handleCode = e => {
        e.preventDefault();
        const codeValue = e.target.code.value;
        setCode(codeValue);
    };

    const handleProgram = e =>{
        e.preventDefault();
        const programVal = e.target.program.value;
        setProgram(programVal);
    }

 
    return (
        <>
            <div className='text-green-600 max-w-6xl mx-auto flex justify-between '>
                <div className='w-[47.5%]  '>
                    <h1>HTML an CSS Editor</h1>
                    <form onSubmit={handleCode} className='bg-black' action="">
                        <textarea name="code" id="area" cols="100" rows="20" placeholder='//write your code here' className=' shadow-orange-300 bg-black'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className='w-[47.5%] bg-blue-100' dangerouslySetInnerHTML={{ __html: code }}></div>
            </div>

            {/* <div className='text-gray-800 max-w-6xl mx-auto'>
                <div>
                    <form onSubmit={handleProgram} action="">
                        <textarea name="program" id="" cols="30" rows="10">
                            <Editor value='' className='max-w-6xl mx-auto' theme='vs-dark' height="90vh" defaultLanguage="javascript" defaultValue={`${code}`} />
                        </textarea>
                        <button type='submit'>Submit code</button>
                    </form>
                </div>

                <div>
                <div className='bg-blue-400 border' dangerouslySetInnerHTML={{ __html: program }}></div>
                </div>
            </div> */}

        </>
    );
};

export default Coding;
