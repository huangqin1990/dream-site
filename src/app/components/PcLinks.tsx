"use client"
import Link from "next/link";
import { LINKS } from "@/app/const";
import { usePathname } from 'next/navigation';

export default function PcLinks() {
    const pathname = usePathname()
      return (
          <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">

                  {/*<a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">首页</a>*/}
                  {/*<a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a>*/}
                  {/*<a href="#" className="nav-route">Projects</a>*/}
                  {/*<a href="#" className="nav-route">Calendar</a>*/}
                  {/*<a href="#" className="nav-route">Reports</a>*/}
                  {
                      LINKS.map(item => {
                            const isActive = pathname === item.href
                              return (
                                  <Link href={item.href} key={item.href} className={isActive ? 'nav-route-active': 'nav-route'}>
                                      {item.label}
                                  </Link>
                                )
                          }
                      )
                  }
              </div>
          </div>
  )
}