import React from 'react'
import imgStay from '../assets/images/illustration-stay-productive.png'
import iconArrow from '../assets/images/icon-arrow.svg'
function StayProductive() {
    return (
        <section className='flex justify-center'>
            <div style={{ placeItems: 'center', }} className='container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center pt-[100px] '>
                <div className="imgStay">
                    <img src={imgStay} alt="" />
                </div>
                <div className="textStay text-white">
                    <h3 className='font-medium text-[35px] leading-[50px]'>Stay productive,<br /> wherever you are</h3>
                    <div className='my-[20px ] font-normal text-sm tracking-[0.8px]'>
                        <p className='mb-[15px]'>
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!
                        </p>
                    </div>
                    <a href='/' className='btnLearnMore text-[#67dbda] hover:text-[#42b0d1] border-b-2 border-[#67dbda] border-solid  transition-colors duration-200 pd-[5px] flex items-center gap-[15px] max-w-fit  '>
                        See how Fylo works
                        <img className='w-[20px ] h-[20px ] object-contain animate' src={iconArrow} alt="" /> </a>
                </div>
            </div>
        </section>
    )
}

export default StayProductive
