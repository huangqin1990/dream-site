"use client"
import './styles/index.scss';
import lottie from "lottie-web";
// import Image from "next/image";
import { useLayoutEffect } from "react";
import intelligent from './lottie/intelligent.json';
import Divider from "@/app/components/Divider";
import Banner from "@/app/components/Banner";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

export default function Index() {
    // 政府企业数字化转型
    const introduce: string = '政府企业数字化转型'
    const splitIntroduce : string[] = introduce.split('')
    // gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        const t = gsap.timeline({});
        t.to(".dream-chain__char", {
            opacity: 1,
            delay: .1,
            duration: .5,
            y: 0,
            ease: "Power4.inOut",
            stagger: 0.1,
        })
        t.from(".dr-introduce__char", { x: 200, opacity: 0,stagger: .1 }).to(".dr-introduce__char", { stagger: .1 });

    })
    useLayoutEffect(() => {
       const animate = setTimeout(() => {
            lottie.loadAnimation({
                container: document.getElementById('dream-chain__intelligent') as HTMLDivElement,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: intelligent
            })
        }, 17)
        return () => {
            clearTimeout(animate)
        }
    }, [])
    return (
      <>
          {/*banner*/}
          <div className="w-full">
              <div className="banner relative -z-10 h-[500px]">
                  {/*<Image src={require('../../public/image/banner.png')} alt="梦链科技" className="w-full"></Image>*/}
                  <Banner></Banner>
                  <div className="absolute top-0 left-0 right-0 bottom-0">
                  <div className="dream-chain page-container flex flex-col justify-between items-center md:flex-row md:mt-[50px]">
                      <div className="w-[300px] h-[300px]" id="dream-chain__intelligent"></div>
                      <div className="flex flex-col text-center">
                      <div className="relative text-gray-800 md:text-[60px] text-[40px]">
                          <div className="dream-chain__char">梦</div>
                          <div className="dream-chain__char">链</div>
                          <div className="dream-chain__char">科</div>
                          <div className="dream-chain__char">技</div>
                      </div>
                      <div className="dr-introduce flex justify-between">
                          {
                              splitIntroduce.map(char =>
                                      <span key={char} className="dr-introduce__char block text-[20px]">{char}</span>
                              )
                          }
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="page-container mt-6">
              <div className="flex md:flex-row flex-col w-full">
                  {/*<div id="manager-data" className="*/}
                  {/*w-full h-[400px] aspect-auto*/}
                  {/*md:w-[600px] md:h-[400px]*/}
                  {/*slideInFromLeft*/}
                  {/*-z-10*/}
                  {/*">*/}
                  {/*</div>*/}
                  <div className="slideForIntroduce flex-1 text-center flex flex-col justify-center overflow-hidden flex-wrap mt-6 md:mt-0">
                      <h1 className="text-center mb-8 md:text-[40px] text-[30px]">数字化信息服务提供</h1>
                      <p className="text-lg text-gray-600">政府，企业一站式数字化解决方案提供</p>
                  </div>
              </div>
              <Divider></Divider>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                  <div className="dr-business flex items-center">
                      <div className="text-center p-6 text-sky-700">
                          <h1 className="text-[30px]">政企服务</h1>
                          <p>致力于为政府政务工作，企业管理提供标准化+定制化的企业管理系统,通过丰富的行业经验及一流的技术服务帮助政府及企业实现数字化战略</p>
                      </div>
                  </div>
                  <div className="dr-business flex items-center">
                      <div className="text-center p-6 text-sky-700">
                          <h1 className="text-[30px]">数字孪生</h1>
                          <p className="leading-6">通过数据采集, 仿真模拟, 机器视觉, web 3D, GIS等技术手段, 解决实时监控,预测维护,优化效率,提升决策质量等场景，为客户提供高度准确和动态的解决方案, 可以应用于各种行业，如制造业、能源、医疗保健、交通运输等</p>
                      </div>
                  </div>
                  <div className="dr-business flex items-center">
                      <div className="text-center p-6 text-sky-700">
                          <h1 className="text-[30px]">智慧方案</h1>
                          <p className="">通过云计算，AloT, 大数据，边缘计算等技术手段, 面向智慧教育,智慧工业, 智慧城市等场景,提供资产管理,数据监控,数据整合,报告产出等的软硬件一体化产品技术解决方案</p>
                      </div>
                  </div>
                  <div className="dr-business flex items-center">
                      <div className="text-center p-6 text-sky-700">
                          <h1 className="text-[30px]">互联网+</h1>
                          <p>通过</p>
                      </div>
                  </div>
              </div>
                  {/*<div className="flex gap-4 flex-col sm:flex-row sm:flex-wrap mt-4">*/}
                  {/*  */}
                  {/*</div>*/}

              {/*业务范围示例*/}
              {/*<div className="flex md:flex-row flex-col-reverse">*/}
              {/*    <div className="flex-1 ml-8 slideInFromLeft">*/}
              {/*        <p>智慧方案</p>*/}
              {/*    </div>*/}
              {/*    <div className="relative slideInFromRight">*/}
              {/*        <Image src={require('../../public/image/digital-1.png')} alt="信息化" width="600" className="rounded-2xl" priority></Image>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*解决方案示例*/}
              <div></div>
              </div>
          </div>

      </>

    )
  }