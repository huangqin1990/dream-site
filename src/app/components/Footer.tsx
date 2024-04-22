import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-800 pt-6 pb-16 px-4">
            <div className="flex max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="text-white text-[14px] mr-12">联系电话: 13020008802</div>
                <div className="text-white text-[14px] flex">
                    公司地址: 杭州市上城区中山南路1号
                </div>
            </div>
        </footer>
    )
}