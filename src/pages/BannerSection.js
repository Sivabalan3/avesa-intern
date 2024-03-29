import React from 'react'

function BannerSection() {
  return (
    <>
    <article data-aos="fade-up" className="box rounded-lg bg-white mx-2 my-10 max-w-screen-xl  border border-gray-100 text-gray-700 shadow-md md:mx-auto">
      
  <div className="flex flex-col md:flex-row ">
    <div className="p-5 md:w-4/6 md:p-8 order-2 xl:order-1">
      <span className="rounded-md bg-blue-400 px-2 py-1 text-xs uppercase text-white">Mr. Arun’s Journalism Course</span>
      <p className="mt-2 text-xl font-black md:mt-6 md:text-4xl text-gray-500">Dive into the World of Journalism with - <span className='text-cyan-600'> Mr. </span><span className='text-amber-500'>A</span><span className='text-red-500'>r</span><span className=' text-blue-600 '>u</span><span className='text-green-500'>n</span></p>
      <p className="mt-4 text-lg text-gray-400"> Learn from the best! Join Mr. Arun, a seasoned journalist, as he shares his wealth of experience and practical insights about the field of journalism.</p>

      <button className="mt-6 text-md mr-2 flex items-center justify-center rounded-md border-blue-700 border bg-blue-700 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-blue-500">Read More</button>
    </div>
    <div className="mx-auto sm:order-1 items-center px-5 md:flex md:p-8">
      <img className="rounded-md shadow-lg" src="https://img.freepik.com/premium-photo/journalist-man-news-conference-with-sheet-paper_935589-11804.jpg?size=626&ext=jpg&ga=GA1.1.2003554305.1704724748&semt=sph" alt="Shop image" />
    </div>
  </div>
</article>
    </>
  )
}

export default BannerSection