"use client"
import './styles/index.scss';
import lottie from "lottie-web";
import { useLayoutEffect } from "react";
import dataLottie from './lottie/data-check.json';
import inLottie from './lottie/ani1.json';
import Divider from "@/app/components/Divider";

export default function Index() {
    useLayoutEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById('manager-data') as HTMLDivElement,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            animationData: dataLottie
        })
        lottie.loadAnimation({
            container: document.getElementById('manager-deal') as HTMLDivElement,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            animationData: inLottie
        })
        return () => {}
    }, [])
    return (
      <>
          {/*banner*/}
          <div className="w-full">
              <div className="flex md:flex-row flex-col w-full">
                  <div id="manager-data" className="
                  w-full h-[400px] aspect-auto
                  md:w-[600px] md:h-[400px]
                  slideInFromLeft
                  bg-amber-400 shadow-md hover:shadow-lg bg-gradient-to-r from-indigo-500 rounded-2xl
                  ">
                      {/*<div id="manager-data" className=" w-full"></div>*/}
                      {/*<div id="manager-deal" className="transform right-0 bottom-0 w-[400px] h-[300px] z-2 bg-gradient-to-r from-pink-500 absolute z-3"></div>*/}
                  </div>
                  <div className="slideForIntroduce flex-1 text-center flex flex-col justify-center overflow-hidden flex-wrap mt-6 md:mt-0">
                      <h1 className="text-4xl text-center mb-8">数字化信息服务提供</h1>
                      <p className="text-lg text-gray-600">政府，企业一站式数字化解决方案提供</p>
                  </div>
              </div>
              <Divider></Divider>
              <div></div>
          </div>
           {/*业务范围示例*/}
          <div></div>
           {/*解决方案示例*/}
          <div></div>
      </>

    )
  }