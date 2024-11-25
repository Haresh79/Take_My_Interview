import '../App.css'
import vdo from '../assets/TutorialVideo.mp4'

export default function Tutorial(){
    return(
        <div className="flex bg-[#0d111e] flex-col w-full h-screen justify-center items-center">
            <video src={vdo} autoPlay muted playsInline className='w-[80vw] rounded-lg shadow-md border-4 border-[#0a6ccc]'/>
            <p className="text-xl mt-5 text-[#0a6ccc] font-semibold ">Follow This Video</p>
        </div>
    )
}