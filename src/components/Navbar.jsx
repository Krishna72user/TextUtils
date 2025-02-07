import PropTypes from 'prop-types'
import Dark from '../assets/dark.svg'
import Light from '../assets/light.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props){
    const[svg,setSvg]=useState(Dark)
    
    const handleSvg=()=>{
        if(svg===Dark){
            setSvg(Light);
        }
        else{
            setSvg(Dark);
        }
    }
    return(
        <>
        <nav style={props.mode} className='w-[100vw] fixed top-0 h-[3.5em] bg-gray-500/20 backdrop-blur-lg flex justify-between items-center'>
            <div className='md:text-2xl text-xl font-bold p-2.5'onClick={()=>window.location.reload()} >{props.title}</div>
            <div className='flex font-bold md:gap-5 gap-2 pr-3'>

                    <NavLink to='/' className={({ isActive }) =>
                    props.mode.color=='black'?(isActive ? "text-black" : "text-gray-500"):(isActive ? "text-white" : "text-gray-500")} end>
                    <div>Home</div>
                    </NavLink>
                    <NavLink to='/about'className={({ isActive }) =>
                        props.mode.color=='black'?(isActive ? "text-black" : "text-gray-500"):(isActive ? "text-white" : "text-gray-500")
                    } end>
                    <div className=''>About</div>
                    </NavLink>
                    <div onClick={props.bhandler} className='h-6 w-6  hover:cursor-pointer rounded-full bg-blue-600'></div>
                    <div onClick={props.rhandler} className='h-6 w-6  hover:cursor-pointer rounded-full bg-red-600'></div>
                    <img src={svg} onClick={()=>{
                        props.mhandler();
                        handleSvg();
                    }}  alt="" className=' hover:cursor-pointer'/>

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
