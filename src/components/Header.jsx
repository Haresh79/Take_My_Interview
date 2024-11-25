import { Link } from 'react-router-dom'
import '../App.css'
import '../index.css'

export default function Header(){
    return(
    <section className='w-full z-50 sticky top-0 bg-[#0d111e] border-b border-[#ffffff10]'>
       <div id="navBar" className="w-full flex items-center
        justify-between text-white px-20 py-3">
        <h1 className='text-3xl'>JobQuest</h1>
        <Link to='/tutorial' target='_blank' className='decoration-none font-semibold hover:text-[#0a6ccc]'>How it works</Link>
       </div>
    </section>
    )
}