import React from "react";


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h1 className="text-2xl purple_gradient font-bold">Synoptic.AI</h1>
        <button type="button" className="black_btn" onClick={()=>window.open("https://github.com/i-nithin/SynopticAI.git")}>Github</button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='purple_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
        
      </h2>
    </header>
  );
};

export default Hero;
