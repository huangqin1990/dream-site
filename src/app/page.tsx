"use client"
import './styles/index.scss';
import lottie from "lottie-web";
import Image from "next/image";
import { useLayoutEffect } from "react";
import dataLottie from './lottie/data-check.json';
import intelligent from './lottie/intelligent.json';
import Divider from "@/app/components/Divider";
import Banner from "@/app/components/Banner";
import gsap from 'gsap';

export default function Index() {
    useLayoutEffect(() => {
        const t = gsap.timeline({});
        t.to(".dream-chain__char", {
            opacity: 1,
            delay: .1,
            duration: .5,
            y: 0,
            ease: "Power4.inOut",
            stagger: 0.1,
        })
        lottie.loadAnimation({
            container: document.getElementById('manager-data') as HTMLDivElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: dataLottie
        })
        lottie.loadAnimation({
            container: document.getElementById('dream-chain__intelligent') as HTMLDivElement,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            animationData: intelligent
        })
        return () => {}
    }, [])
    return (
      <>
          {/*banner*/}
          <div className="w-full">
              <div className="banner relative overflow-hidden">
                  {/*<Image src={require('../../public/image/banner.png')} alt="梦链科技" className="w-full"></Image>*/}
                  <Banner></Banner>
                  <div className="absolute top-0 left-0 right-0 bottom-0">
                  <div className="dream-chain page-container flex flex-col justify-between items-center md:flex-row">
                      <div className="w-[300px] h-[300px]" id="dream-chain__intelligent"></div>
                      <div className="relative text-gray-800 text-[60px]">
                          <div className="dream-chain__char">梦</div>
                          <div className="dream-chain__char">链</div>
                          <div className="dream-chain__char">科</div>
                          <div className="dream-chain__char">技</div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="page-container">
              <div className="flex md:flex-row flex-col w-full">
                  <div id="manager-data" className="
                  w-full h-[400px] aspect-auto
                  md:w-[600px] md:h-[400px]
                  slideInFromLeft
                  ">
                  </div>
                  <div className="slideForIntroduce flex-1 text-center flex flex-col justify-center overflow-hidden flex-wrap mt-6 md:mt-0">
                      <h1 className="text-4xl text-center mb-8">数字化信息服务提供</h1>
                      <p className="text-lg text-gray-600">政府，企业一站式数字化解决方案提供</p>
                  </div>
              </div>
              <Divider></Divider>
              <div></div>
              {/*业务范围示例*/}
              <div className="flex md:flex-row flex-col-reverse">
                  <div className="flex-1 ml-8 slideInFromLeft">
                      <p>智慧方案</p>
                  </div>
                  <div className="relative slideInFromRight">
                      <Image src={require('../../public/image/digital-1.png')} alt="信息化" width="600" className="rounded-2xl"></Image>
                  </div>
              </div>
              {/*解决方案示例*/}
              <div></div>
              </div>
          </div>

      </>

    )
  }