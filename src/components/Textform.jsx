import PropTypes, { element } from 'prop-types'
import { useState } from 'react';
export default function Textform(props){
    const[text,updateText]= useState("");
    const updatet=()=>{
        let upt = text.toUpperCase();
        updateText(upt);
    }
    const spHandler= ()=>{
        let rem="";
        for(let i =0;i<text.length;i++){
            if(text[i]!=" "){
                rem+=text[i]
            }
        }
        updateText(rem);
    }
    const updatet2=()=>{
        let upt = text.toLowerCase();
        updateText(upt);
    }
    const changed =(e)=>{
        updateText(e.target.value);
        
    };
    const clrfunc=()=>{
        updateText("")
    }
    function capfunc(props){
        let len = text.length;
        let str =text[0].toUpperCase()+text.slice(1,len)
        updateText(str)
    }
    return (
        <>
        <div style={props.mode} className='min-h-screen py-20'>
        <div className="p-4 w-[94vw] mx-auto flex items-start flex-col gap-5">
            <div className='flex items-start flex-col gap-2.5'>
                <label className='md:text-3xl text-2xl font-bold pr-3' htmlFor="in">{props.title}</label>
                <textarea type="text" name="in"value={text} id="in"onChange={changed}
                 className='overflow-hidden resize-none h-40 w-[80vw] rounded-md border-2 border-indigo-500 outline-0 p-2 '/>
            </div>
            <div className="buttons flex flex-wrap w-[80vw] gap-[1em]">
                <button onClick={clrfunc} className='bg-blue-400 text-amber-50 font-bold  md:px-7 px-4  py-1.5 rounded-2xl hover:cursor-pointer hover:bg-blue-300'>Clear text</button>
                <button onClick={updatet}  className='bg-blue-400 text-amber-50 font-bold  md:px-7 px-4 py-1.5 rounded-2xl hover:cursor-pointer hover:bg-blue-300'>Convert to uppercase</button>
                <button onClick={updatet2} className='bg-blue-400 text-amber-50 font-bold  md:px-7 px-4  py-1.5 rounded-2xl hover:cursor-pointer hover:bg-blue-300'>Convert to lowercase</button>
                <button onClick={capfunc} className='bg-blue-400 text-amber-50 font-bold  md:px-7 px-4  py-1.5 rounded-2xl hover:cursor-pointer hover:bg-blue-300'>Convert to title case</button>
                <button onClick={spHandler} className='bg-blue-400 text-amber-50 font-bold md:px-7 px-4  py-1.5 rounded-2xl hover:cursor-pointer hover:bg-blue-300'>Remove extra spaces</button>
            </div>
            <div>
                <div className='md:text-3xl text-2xl font-bold mb-2'>Your text summary : </div>
                <div>{text.trim().split(" ").join("").length} characters and {text.trim().split(" ").filter(ele=>ele!=="").length} words.</div>
                <div>{0.004*(text.trim().split(" ").filter(ele=>ele!=="").length)} minutes read.</div>
            </div>
                <div className='md:text-3xl text-2xl font-bold'>Preview :</div>
                <div className='flex h-40'>{text.length>0?text:"Enter the text above to preview it."}</div>
        </div>
    </div>
        </>
    )
}
Textform.propType={
    title: PropTypes.string
}
Textform.defaultProps={
    title:"Enter the text to analyze : "
}