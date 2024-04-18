"use client"
import Link from "next/link";
import { LINKS } from "@/app/const";
import { useEffect, useRef, useState } from "react";
// export default function MobileLinks() {
//     // 为下面结构增加一个toggle函数，用于切换显示和隐藏
//     return (
//          <div className="hidden" id="mobile-menu">
//             <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//
//                 {/*<a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>*/}
//         {
//           LINKS.map(item =>
//               <Link href={item.href} key={item.href} className="nav-mobile-route">{item.label}</Link>
//           )
//         }
//       </div>
//     </div>
//     )
// }

export default function MobileLinks({ isVisible = false, onClose = () => {} }) {
    const [height, setHeight] = useState('0px');
    const contentSpaceRef = useRef(null as HTMLDivElement | null);
    const handleLinkClick = () => {
        // ... 这里是你的链接点击处理逻辑
        onClose();

    };

    useEffect(() => {
        if (!isVisible) {
            setHeight('0px');
        } else {
            setHeight(`${contentSpaceRef.current?.scrollHeight}px`);
        }
    }, [isVisible]);
    // transition: 'max-height 0.35s ease',
    return (
        <div className="md:hidden" id="mobile-menu" style={{ maxHeight: `${height}`,  overflow: 'hidden' }}>
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3" ref={contentSpaceRef}>
                {
                    LINKS.map(item =>
                        <Link href={item.href} key={item.href} className="nav-mobile-route" onClick={handleLinkClick}>{item.label}</Link>
                    )
                }
            </div>
        </div>
    )
}