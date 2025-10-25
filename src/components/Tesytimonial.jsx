import imgTesytimonial from '../assets/images/bg-quotes.png'
import { useState } from 'react'
import TesytimonialBox from './TesytimonialBox'
function Tesytimonial() {
    const [testData, setTestData] = useState([
        { id: 1, desc: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. Bruce McKenzie Founder & CEO, Huddle Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ', image: 'profile-1.jpg', position: "Founder & CEO, Huddle", name: 'Satish Patel' },
        { id: 2, desc: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. Bruce McKenzie Founder & CEO, Huddle Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ', image: 'profile-2.jpg', position: "Founder & CEO, Huddle", name: 'Bruce McKenzie' },
        { id: 3, desc: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. Bruce McKenzie Founder & CEO, Huddle Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ', image: 'profile-3.jpg', position: "Founder & CEO, Huddle", name: 'Iva Boyd' },])
    return (
        <section style={{ paddingTop: '150px' }} className="pb-[350px] flex  justify-center">
            <div className="container relative">
                <div className='absolute left-[20px ] top-[- 15px] z-0 '>
                    <img src={imgTesytimonial} alt="" />
                </div>
                <div className='z-10 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {testData.map((items) => {
                        const imgeurl = new URL(`../assets/images/${items.image}`, import.meta.url).href;
                        return <TesytimonialBox id={items.id} desc={items.desc} name={items.name} position={items.position} image={imgeurl} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Tesytimonial
