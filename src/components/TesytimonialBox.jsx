
function TesytimonialBox({ id, desc, name, position, image }) {
    return (
        <div key={id} className="text-white bg-[#21293c] rounded-[5px] p-[30px] m-[30px_0] shadow-[8px_8px_1px_8px_#1c202c] ">
            <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">{desc}</p>
            <div className="flex items-center gap-[15px]">
                <img src={image} alt="" className="w-[50px] h-[50px] rounded-[50%] object-contain" />
                <div>
                    <strong className="block mb-[5px]">{name}</strong>
                    <p className="font-normal text-sm ">{position}</p>
                </div>

            </div>
        </div>
    )
}

export default TesytimonialBox
