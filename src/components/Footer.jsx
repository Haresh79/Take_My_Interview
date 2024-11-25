import { Link } from "react-router-dom"
import "../App.css"

export default function Footer(){
    return(
        <footer className="w-full px-10 py-3 gap-5 flex flex-col justify-center items-center">
            <div className="w-full flex justify-center gap-5 flex-wrap text-slate-700">
                <li className="list-none"><Link target="_blank" to='/tutorial'>Tutorial</Link></li>
                <li><Link to='/'>About Us</Link></li>
                <li><a href="gemini.google.com">Gemini Ai</a></li>
                <li><a href="google.com">Google</a></li>
                <li><a href="#">Instagram</a></li>
            </div>
            <span className="text-slate-500">Copyright © 2024-25 TakeMyInterview | All rights reserved.</span>
        </footer>
    )
}