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
    const introduce: string = '专注政企数智化服务'
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
                      <div className="relative text-white md:text-[60px] text-[40px]">
                          <div className="dream-chain__char">梦</div>
                          <div className="dream-chain__char">链</div>
                          <div className="dream-chain__char">科</div>
                          <div className="dream-chain__char">技</div>
                      </div>
                      <div className="dr-introduce flex justify-between">
                          {
                              splitIntroduce.map(char =>
                                      <span key={char} className="dr-introduce__char block text-[24px] text-gray-800">{char}</span>
                              )
                          }
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="page-container mt-6">
              <div className="flex md:flex-row flex-col w-full">
                  <div className="slideForIntroduce flex-1 text-center flex flex-col justify-center overflow-hidden flex-wrap mt-6 md:mt-0">
                      <h1 className="text-center mb-8 md:text-[40px] text-[30px]">数智化信息服务</h1>
                      <p className="text-lg text-gray-600">政府，企业一站式数字化解决方案提供</p>
                  </div>
              </div>
              <Divider></Divider>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                  <div className="dr-business">
                          <div className="service-one flex-1 w-full shadow-md rounded-t-xl"></div>
                          <div className="dr-service">
                              <h1 className="text-[30px] dr-service--title">政企服务</h1>
                              <p className="dr-service--intro">为政府，企业管理提供标准化+定制化的信息化管理系统,通过一流的技术服务帮助政府及企业实现数字化战略</p>
                          </div>
                  </div>
                  <div className="dr-business">
                      {/*<div className="text-center p-6 text-sky-700">*/}
                      {/*    <h1 className="text-[30px]">数字孪生</h1>*/}
                      {/*    <p className="leading-6">解决实时监控,预测维护,优化效率,提升决策质量等场景，为客户提供高度准确和动态的解决方案, 可以应用于各种行业，如制造业、能源、医疗保健、交通运输等</p>*/}
                      {/*</div>*/}
                      <div className="service-twin flex-1 w-full shadow-md rounded-t-xl"></div>

                      <div className="dr-service">
                          <h1 className="text-[30px] dr-service--title">数字孪生</h1>
                          <p className="dr-service--intro">通过3D,大数据,AloT,Ai等技术相结合。在预测维护,优化效率,提升决策质量等场景,为客户提供高度准确和动态的解决方案。</p>
                      </div>

                  </div>
                  <div className="dr-business">
                      <div className="service-smart flex-1 w-full shadow-md rounded-t-xl"></div>
                      <div className="dr-service">
                          <h1 className="text-[30px] dr-service--title">智慧方案</h1>
                          <p className="dr-service--intro">面向智慧教育,智慧工业, 智慧城市等场景,提供资产管理,数据监控,数据整合,报告产出等的软硬件一体化产品技术解决方案</p>
                      </div>
                  </div>
                  <div className="dr-business">
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