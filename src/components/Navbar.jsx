import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className='w-full h-[100px] font-poppins z-20'>
            <div className='container w-full h-full mx-auto px-16 flex items-center '>
                <div className='text-2xl font-semibold flex-1'>
                    <h1><Link to={'/'}>Health Predictor</Link></h1>
                </div>
                <div  className='flex items-center gap-5 -mr-6'>
                    <div className='font-semibold bg-black px-2 py-2 rounded-md text-[#FFD23F]'><Link to={'/'}>Home</Link></div>
                    <div className='font-semibold bg-black px-2 py-2 rounded-md text-[#FFD23F]'><Link to={'/checkUp'}>Checkup <span><LocalHospitalIcon /></span></Link></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar