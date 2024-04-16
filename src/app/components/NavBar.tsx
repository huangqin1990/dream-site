"use client"
import './css/NavBar.css'
import PcLinks from "@/app/components/PcLinks";
import MobileLinks from "@/app/components/MobileLinks";
import { useState } from 'react';
export default function NavBar() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const closeMobileLinks = () => {
        setIsVisible(false);
    };
    return (
        <nav className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="梦链科技" />
                            <div className="hidden md:block text-gray-900 font-medium ml-4 md:text-lg">DreamChain</div>
                        </div>
                        <PcLinks />
                    </div>
                    {/* 手机屏幕下展示公司名称 */}
                    <div className="md:hidden text-gary-600">梦链科技</div>

                    {/* 菜单搜索展开按钮 */}
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" onClick={toggleVisibility} className="relative inline-flex items-center justify-center rounded-md bg-sky-600 p-2 text-white hover:bg-sky-500 hover:text-white focus:outline-none active:bg-sky-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">打开主菜单</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <MobileLinks isVisible={isVisible} onClose={closeMobileLinks} />
        </nav>
    )
}