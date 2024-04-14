import Link from "next/link";
import { LINKS } from "@/app/const";

export default function pcLinks() {
  return (
      <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">

              {/*<a href="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">首页</a>*/}
              {/*<a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a>*/}
              {/*<a href="#" className="nav-route">Projects</a>*/}
              {/*<a href="#" className="nav-route">Calendar</a>*/}
              {/*<a href="#" className="nav-route">Reports</a>*/}
              {
                  LINKS.map(item =>
                   <Link href={item.href} key={item.href} className='nav-route'>{item.label}</Link>
                  )
              }
          </div>
      </div>
  )
}