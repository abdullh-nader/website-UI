import React from 'react'

function FeatureBox({ title, desc, iconImg, key }) {
    return (
        <div key={key} className='text-white flex justify-center flex-col items-center  text-center element '>
            <img src={iconImg} alt="" className='w-20 h-20 object-contain ' />
            <h4 className='text-xl font-semibold my-[15px]'>{title}</h4>
            <p className='font-normal text-sm '>{desc}</p>
        </div>
    )
}

export default FeatureBox
