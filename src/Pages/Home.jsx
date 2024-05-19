import React, { useContext } from 'react'
import { checkUp } from '../assets/images/images'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { DiseaseContext } from '../context/DiseaseContext';

const Home = () => {
    const {isDark} = useContext(ThemeContext)
    
    // console.log(result)
    return (
        <>
            <div className='px-12 font-poppins'>
                <div className='h-[600px] flex items-center justify-center flex-wrap-reverse'>
                    <section className='w-full lg:w-1/2'>
                        <div className='w-[80%] flex flex-col items-start gap-5 '>
                            <h1 className='text-6xl font-semibold'>
                                Hello!! <br /> Welcome to Health Predictor
                            </h1>
                            <p className='text-xl'>Get a smart and quick response from our AI about the disease you are currently suffering from by giving the symptoms</p>
                            <button className='px-5 py-4 bg-black text-[#FFD23F] text-md font-bold rounded-full group transition-all duration-300 ease-in-out'><Link to={'/checkUp'} className='flex items-center'>Get Started<KeyboardDoubleArrowRightIcon className='animate-fwd'/></Link></button>
                            {/* group-hover:translate-x-1 */}
                        </div>
                    </section>
                    <section className='lg:block hidden'>
                        <div>
                            <img src={checkUp} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home