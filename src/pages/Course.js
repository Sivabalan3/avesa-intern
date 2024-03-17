import React from 'react'
import { FaPlus } from "react-icons/fa";

function Course() {
    const coursesDetails=[
        {
            id:1,
        title:"Course Highlights",
        subtitle:"Highlights of the Course",
        content:"In addition to the core topics, the course also delves into the nuances of journalism. You’ll explore different styles of reporting, learn how to conduct effective interviews, and understand the importance of fact-checking. The course also covers digital journalism, teaching you how to leverage social media and other digital platforms for news dissemination.",
        dataaos:"fade-right",
        dataaostime:"1000",
        color:"text-fuchsia-500"
},
        {
            id:2,
            title:"Practical Assignments",
        subtitle:"Learn by Doing",
        content:"The course emphasizes practical learning. You’ll work on assignments that mimic real-world scenarios, such as writing news articles, creating news broadcasts, and conducting mock interviews. These assignments will not only help you apply what you’ve learned but also give you a taste of what it’s like to work in the field of journalism.",
        dataaos:"fade-left",
        dataaostime:"1000",
        color:"text-rose-500"
},
        {
            id:3,
            title:"Interactive Sessions",
        subtitle:"Engage with Your Peers",
        content:"The course includes interactive sessions where you can discuss course content, share ideas, and learn from your peers. These sessions foster a collaborative learning environment and provide an opportunity to network with like-minded individuals.",
        dataaos:"fade-right",
        dataaostime:"1000",
        color:"text-teal-500"
},
{
    id:4,
    title:"Course Outcome",
    subtitle:"What to Expect After the Course",
    content:"By the end of the course, you’ll have a solid foundation in journalism, a portfolio of work to showcase your skills, and the confidence to pursue a career in journalism. Whether you aspire to be a reporter, news editor, or a freelance journalist, this course will equip you with the knowledge and skills to achieve your goals.Remember, with Mr. Arun’s course, you’re not just learning about journalism, you’re experiencing it. Sign up today and start your journey in the exciting world of journalism! 😊",
    dataaos:"fade-left",
    dataaostime:"1000",
    color:"text-lime-500"
}
]
const whyChooseCourse=[
    { id:1,
    Title:"Experiential Learning: ",
contents:"his course is not just about learning, it’s about experiencing the world of journalism firsthand.",
bgColor:"bg-violet-500",
dataaos:"fade-right",
dataaostime:"1000",
},

    {
        id:2,
        Title:"Interactive Sessions with Mr. Arun:",
contents:"You’ll get a chance to interact with Mr. Arun, ask questions, and even get feedback on your work. ",
bgColor:"bg-green-500",
dataaos:"fade-left",
 dataaostime:"1000",
},
    {
        id:3,
        Title:"Community Building: ",
contents:"Plus, you’ll be joining a community of like-minded individuals who share your passion for journalism.",
bgColor:"bg-yellow-500",
dataaos:"fade-right",
dataaostime:"1000",},
{
    id:4,
    Title:"Testimonials Section",
    contents:"Our alumni have gone on to do amazing things in the world of journalism. Hear from them about how Mr. Arun’s course has helped shape their careers.",
    bgColor:"bg-pink-500",
    dataaos:"fade-left",
    dataaostime:"1000",
},
]
  return (
   <>
   <section id='course' className="mx-auto px-6 text-gray-800 md:max-w-screen-xl overflow-hidden">
  <div className="mx- mt-20 mb-16 block px-6 text-center" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="2000">
    <h2 className=" underline underline-offset-8 text-blue-500 decoration-slate-300  text-dark mb-2 text-[25px] md:text-4xl font-semibold dark:text-white text-center">Course Overview</h2>
    <div className="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-gray-700 md:w-3/4 xl:w-3/4">
      <p className="text-lg text-gray-500">His two-week online course is designed to provide aspiring journalists with practical insights into the field of journalism. You’ll learn about the fundamentals of news writing, investigative reporting, ethical journalism, and much more. The course combines theoretical knowledge with practical assignments to ensure a comprehensive understanding of the subject. its write extra content</p>
    </div>
    <div className="mt-8 text-center">
      <a className="mx-2 mb-2 inline-block rounded bg-blue-500 px-6 py-2 text-xl font-medium text-white shadow md:mx-4 md:mt-2 md:text-lg hover:scale-105 hover:shadow-md" href="#" target="_blank">Get Started</a>
      <a className="mx-2 mb-2 inline-block rounded bg-gray-900 px-6 py-2 text-xl font-medium text-white shadow md:mx-4 md:mt-2 md:text-lg hover:scale-105 hover:shadow-md" href="#">Book a Demo</a>
    </div>
  </div>

  <div className="grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-2">
    {coursesDetails.map((items)=>(

        <div key={items.id} className="rounded-md border border-gray-200  p-8   bg-white shadow-md" data-aos={items.dataaos} data-aos-time={items.dataaostime}>
      <div className="my-4 flex items-center ">
        <div className=" mr-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
        
        <FaPlus className={items.color}/>
        </div>
        <h3 className={`text-xl font-light leading-10 ${items.color} md:text-2xl `}>{items.title}</h3>
      </div>
    <h6 className='text-xl font-light leading-10 text-slate-600 my-4 mr-[20px]'>{items.subtitle}</h6>
      <p className="text-gray-500  text-[16px] ">{items.content}</p>
    </div>
        ))}
  </div>
  <div className="max-w-4xl mx-auto px-5 mt-16" >

    <div className="text-center" data-aos="fade-down"> 
        <h2 className="text-[26px] md:text-4xl underline underline-offset-8 text-blue-500 decoration-slate-300  text-dark mb-2 text-4xl font-semibold dark:text-white text-center ">Why Choose to Us Course</h2>
        <p className=" mx-auto mt-2 text-gray-500 text-lg font-normal leading-9">This course is not just about learning, it’s about experiencing the world of journalism firsthand. You’ll get a chance to interact with Mr. Arun, ask questions, and even get feedback on your work. Plus, you’ll be joining a community of like-minded individuals who share your passion for journalism. its serated this paragrap in points</p>
    </div>


    <div className="grid md:grid-cols-2 gap-10 mt-10">
        {whyChooseCourse.map((course)=>(

            <div key={course.id} className="flex gap-4 items-start" data-aos={course.dataaos} data-aos-time={course.dataaostime}>
            <span className={`text-violet-600 p-3 w-[60px] h-[60px] rounded-full ${course.bgColor}`}>
            <div class="text-4xl font-bold text-white mb-4">0{course.id}</div></span>
            <div>
                <h3 className="text-xl font-light md:text-2xl text-blue-500">{course.Title}</h3>
                <p className="mt-1 text-gray-500  text-[16px]">{course.contents}</p>
            </div>
        </div>
            ))}

    </div>
</div>
</section>

   </>
  )
}

export default Course