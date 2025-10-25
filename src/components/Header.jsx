import { useState, useEffect, useRef } from 'react'
import logo from '../assets/images/logo.svg'
function Header() {
    const headerRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(Math.floor(window.scrollY));
            if (window.scrollY > 100) {
                // console.log(headerRef.current); // هتطبع العنصر دلوقتي
                headerRef.current.style.background = 'rgba(0,0,0,0.7)';
                headerRef.current.style.padding = '20px 0';
            } else {
                headerRef.current.style.padding = '60px 0';
                headerRef.current.style.background = 'transparent';
            }

        })
    }, [])
    const [navList, SetnavList] = useState(['Feature', 'Team', 'Singin'])
    const filtersmap = navList.map((li) => {
        return <li key={li} className={li}>
            <a className=' bg-maincolor text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200' href={`/${li.toLowerCase()}`}>{li}</a>
        </li>
    })
    return (
        <header ref={headerRef} className=' transition-all duration-200 pt-[50px] fixed top-0 left-0 z-50  w-full flex justify-between items-center'>
            <div className=' container mx-auto   flex justify-between items-center gap-[30px] sm:gap-0 flex-col  md:flex-row'>
                <img src={logo} alt="logo" />
                <nav>
                    <ul className=' flex items-center gap-8 '>
                        {filtersmap}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
