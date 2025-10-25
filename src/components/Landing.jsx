import imglanding from '../assets/images/landing-img.png'
import img from '../assets/images/bg-curvy-desktop.svg'
function Landing() {
  return (
    <section className={`landing  flex justify-center items-center flex-col bg-[#1c2230] `} >
      <div className="container pt-[200px]">
        <div div className="img-landing w-[750px] mx-auto max-w-full" >
          <img className='w-full h-fit' src={imglanding} alt="img_landing" />
        </div >
        <div className="text text-white text-center ">
          <h1 className=' mb-[15px] text-[30px] md:text-[40px] font-semibold md-[15px]'>All your files in one secure location, <br />
            accessible anywhere.</h1>
          <p className='mb-[15px] font-normal text-lg px-[15px] md:w-[600px] mx-auto maxw-full  '>Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with
            friends family, and co-workers.</p>
          <button className='bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 w-[200px] h-[60px] rounded-[30px]'>Get Started</button>
        </div>
      </div >
      <div className='w-full h-[200px]'>
        <img src={img} className='w-full h-full' alt="img" />
      </div>
    </section >
  )
}

export default Landing
