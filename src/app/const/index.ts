
type NavLink = {
    href: string,
    name: string,
    label: string
}
export const LINKS: Array<NavLink> = [
    {
        href: '/',
        name: 'index',
        label: '首页'
    },
    {
        href: '/business',
        name: 'business',
        label: '业务范围'
    },
    {
        href: '/solution',
        name: 'solution',
        label: '解决方案'
    },
    {
        href: '/about',
        name: 'about',
        label: '关于我们'
    }
]