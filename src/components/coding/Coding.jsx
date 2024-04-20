
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Coding = () => {
    const [code, setCode] = useState('');
    const [program, setProgram] = useState('');

    const handleCode = e => {
        e.preventDefault();
        const codeValue = e.target.code.value;
        setCode(codeValue);
    };

    const handleProgram = e => {
        e.preventDefault();
        const programVal = e.target.program.value;
        setProgram(programVal);
    }

    const handlehtml = id =>{
        console.log('from handlehtml : ',id);
        const html = document.getElementById(`${id}`);
        console.log('html :' ,html);
        const styles  = window.getComputedStyle(html);
        console.log(styles);

        console.log(styles.getPropertyValue("color"));
    
        if(styles.getPropertyValue("color") == 'rgb(255, 255, 255)'){
            alert('both matched perfectly 21');
        }
    }


    return (
        <>
            <div className='t max-w-6xl mx-auto h-[600px] flex justify-between items-start my-24'>
                <div className='w-1/2 '>
                    <h1 className="text-xl font-bold mb-4">HTML and CSS Editor</h1>
                    <form onSubmit={handleCode} className='bg-black p-4 h-[600px]'>
                        <textarea
                            name="code"
                            id="area"
                            cols="100"
                            rows="20"
                            placeholder='// Write your code here'
                            className='w-full h-full bg-black text-white placeholder-gray-400  focus:outline-none border-none resize-none'
                        ></textarea>
                        <button type="submit" className='btn mt-2 -translate-y-12' onClick={()=> handlehtml('result')}>Submit</button>
                        
                    </form>
                </div>

                <div className='w-1/2 p-4 rounded-lg -translate-y-4 '>
                    <h2 className="text-lg font-bold mb-4">Rendered HTML</h2>
                    <div className='bg-blue-400 h-[600px] text-white'  id='result' dangerouslySetInnerHTML={{ __html: code }}></div>
                </div>
               

            </div>


         
        </>
    );
};

export default Coding;
