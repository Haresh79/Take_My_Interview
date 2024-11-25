import "../App.css"

export default function(){
    return(
        <section id="section2">
        <h1 className="text-black text-5xl text-center p-10 font-semibold">AI Interview Prep</h1>
        <p className="text-slate-800 text-center px-20 text-xl">Never be surprised by an interview question again. Simply paste your resume and the job description. Our interview AI tool analyzes both to generate a list of potential interview questions that are most relevant to your job application.</p>
        <div className="flex flex-wrap justify-center gap-5 mt-20 mb-20">
          <div className="w-1/4 p-10 bg-[#d2d2d252] rounded-md transition hover:scale-105 hover:shadow-md ">
            <h1 className="text-2xl font-semibold"><span className="text-3xl text-[#0a6ccc] mr-2">&#9733;</span>Practice Makes Perfect.</h1>
            <p className="text-slate-600 mt-5">Answer questions via our interface. Feel the real interview pressure but in a safe, practice environment.</p>
          </div>
          <div className="w-1/4 p-10 bg-[#d2d2d252] rounded-md transition hover:scale-105 hover:shadow-md ">
            <h1 className="text-2xl font-semibold"><span className=" mr-2">&#9745;</span>Stand Out from the Crowd.</h1>
            <p className="text-slate-600 mt-5">Our AI analyzes your resume and the job description to generate a tailored resume that highlights your most relevant skills and experiences.</p>
          </div>
          <div className="w-1/4 p-10 bg-[#d2d2d252] rounded-md transition hover:scale-105 hover:shadow-md ">
            <h1 className="text-2xl font-semibold"><span className="text-3xl mr-2">&#9889;</span>Ready for a Change?</h1>
            <p className="text-slate-600 mt-5">Identify your transferable skills and receive a list of potential career paths that align with your career goals.</p>
          </div>
        </div>
      </section>
    )
}