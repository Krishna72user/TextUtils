import PropTypes from 'prop-types'
import Dark from '../assets/dark.svg'
import Light from '../assets/light.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// const lightMode = {
//     color:"black",
//     backgroundColor:"rgba(128, 128, 128, 0.3)"
// }
// const darkMode = {
//     color:"white",
//     backgroundColor:"black"
// }
export default function Navbar(props){
    const[svg,setSvg]=useState(Dark)
    // const[mode,cngMode]=useState(lightMode)
    
    const handleSvg=()=>{
        if(svg===Dark){
            setSvg(Light);
            // cngMode(darkMode)
        }
        else{
            // cngMode(lightMode)
            setSvg(Dark);
        }
    }
    return(
        <>
        <nav style={props.mode} className='w-[100vw] fixed top-0 h-[3.5em] bg-gray-500/30 backdrop-blur-lg flex justify-between items-center'>
            <div className='text-2xl font-bold p-2.5'onClick={()=>window.location.reload()} >{props.title}</div>
            <div className='flex font-bold pr-10'>
                <NavLink to='/' className={({ isActive }) =>
                props.mode.color=='black'?(isActive ? "text-black" : "text-gray-500"):(isActive ? "text-white" : "text-gray-500")                } end>
                <div>Home</div>
                </NavLink>
                <NavLink to='/about'className={({ isActive }) =>
                 props.mode.color=='black'?(isActive ? "text-black" : "text-gray-500"):(isActive ? "text-white" : "text-gray-500")
                } end>
                <div className='pl-9'>About</div>
                </NavLink>
                
                <div onClick={props.bhandler} className='h-6 w-6 ml-7 hover:cursor-pointer rounded-full bg-blue-600'></div>
                <div onClick={props.rhandler} className='h-6 w-6 ml-7 hover:cursor-pointer rounded-full bg-red-600'></div>

                <img src={svg} onClick={()=>{
                    props.mhandler();
                    handleSvg();
                }}  alt="" className='ml-7 hover:cursor-pointer'/>
            </div>
        </nav>
        </>
    )
}

// Defining prop types

Navbar.propTypes={title:PropTypes.string.isRequired};
// Navbar.defaultProps={
//     title:"Set title here"
// };
