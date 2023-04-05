
import React, { useState, useEffect } from 'react';

const Banner = () => {
    const toRotate =["Web Devloper ", "FullStack Devloper " ,"Student"];
   const [LoopNum, setLoopNum] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() *100);


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
            
        }, delta);
        return () => {
            clearInterval(ticker)
        };
    }, [text]);

    const tick = ()=>{
        let i = LoopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updateText);
        if(isDeleting)
        {
            setDelta(prevdelta => prevdelta/2);
        }
        if(!isDeleting && updateText === fullText)
        {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updateText === "")
        {
            setIsDeleting(false);
            setLoopNum(LoopNum+1);
            setDelta(500);
        }
    }

    return (
 
            <section  id = "home" className='banner pt-28 pb-28 bg-banner-bg bg-top bg-cover bg-no-repeat inline-block border-1 border-solid border-white border-opacity-50 text-xl mb-4 md:px-6 px-2'>
                <div className="w-full">
                    <div className="row items-center ">
                        <div className="col-md-6 col-sm-12 col-xl-7">
                            <div className="tagline font-bold tracking-tight px-2 py-2 bg-tagline-bg inline-block border-pink-50-100 border-[1px]">
                                Welcome to My Portfolio 
                            </div>
                            <h1 className='text-6xl md:text-5xl sm:xl font-bold tracking-tight  mb-5 block'>
                                Hello I Am Geetanjali <span className='wrap border-r-4 border-cursor pr-1 text-yellow-400'>
                                    {text}
                                </span>
                            </h1>
                            <p className='text-para '>hello my name is geetanjali chawla i am a student of BCA form indra gandhi national open university .I love to code specailly i love to do dsa i also teach dsa in part time and learning MERN start please check the project seaction for my desgin i did an internship of 3 months in react.js also but willing to learn fullstack  </p>
                            <button className='border-2 border-white  text-white px-3 py-2 button' onClick={()=>console.log("connect")}>Let's connect</button>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xl-5 mb-auto">
                        <img  className="animate-move w-11/12 " src="https://ik.imagekit.io/b80sh2n2k/header-img.svg?updatedAt=1679470984140" alt="headerImg" />
                        </div>
                    </div>
                </div>
            </section>
       
    );
}

export default Banner;

