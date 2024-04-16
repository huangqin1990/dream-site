"use client"
import lottie from 'lottie-web';
import { useLayoutEffect } from 'react';
import notFind from './404.json';
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()
    useLayoutEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById('lottie') as HTMLDivElement,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            animationData: notFind
        })
        return () => {}
    }, [])
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full">
             <div id="lottie" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:h-[500px] lg:w-[500px]"></div>
             <div className="flex justify-center items-center">
                <p className="text-center mr-4">页面不存在噢</p>
                 <button type="button" onClick={() => router.push('/')} className="text-center text-gray-100  rounded-[4px] outline-none border-none bg-sky-500  px-4 py-2 hover:bg-sky-400 hover:text-white">回到首页</button>
             </div>
          </div>
        </>

    )
}