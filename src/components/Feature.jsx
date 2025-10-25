import { useState } from 'react'
import FeatureBox from './FeatureBox'
function Feature() {
    const [items, setItems] = useState([
        { id: 1, icon: 'icon-access-anywhere.svg', title: 'Access your files, anywhere', desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere' },
        { id: 2, icon: "icon-security.svg", title: 'Security you can trust', desc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.' },
        { id: 3, icon: 'icon-collaboration.svg', title: 'Real-time collaboration', desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.' },
        { id: 4, icon: 'icon-any-file.svg', title: 'Store any type of file', desc: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.' }
    ])
    const col = items.map((item) => {
        const imgeurl = new URL(`../assets/images/${item.icon}`, import.meta.url).href;
        return (
            <FeatureBox key={item.id} title={item.title} desc={item.desc} iconImg={imgeurl} />
        )
    })
    return (
        <section>
            <div className="containe">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
                    {col}
                </div>
            </div>
        </section>
    )
}

export default Feature
