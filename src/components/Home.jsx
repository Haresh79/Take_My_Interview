import '../index.css'
import pic from '../assets/Designer.jpeg'
import Header from './Header'
import Footer from './Footer'
import Section2 from './Section2'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <Header />
            <section id="Home" className="w-full bg-[#0d111e] flex items-center flex-col p-10 gap-5 h-screen">
                <img src={pic} className="w-96 rounded-md" />
                <div className="flex gap-5 mt-10 items-center justify-center flex-col w-2/3">
                    <h1 className="text-5xl text-[#0a6ccc] font-bold text-center ">Take A Demo Of AI-Interview Using Gemini-AI</h1>
                    <p className="text-base text-white text-center">Streamline your interview process with InterviewAI. Our AI-powered platform generates tailored interview questions in real-time, making it easy to conduct efficient and effective interviews whether you're a company seeking the best candidate,
                        a job seeker preparing to ace your next job interview, </p>
                    <button className="bg-[#0a6ccc] mb-10 border-[#0a6ccc] border-2 px-6 mt-5 py-2 text-xl text-white rounded-full hover:bg-transparent hover:text-[#0a6ccc]"><Link to='/input'>Try Now &#x2197;</Link></button>
                </div>
                <div id="circle"></div>
            </section>
            <Section2 />
            <Footer />
        </>
    )
}