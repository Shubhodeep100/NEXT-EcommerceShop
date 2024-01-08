"use client";
import { Button } from "@/components/ui/button";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/Men' },
    { name: 'Women', href: '/Women' },
    { name: 'Teens', href: '/Teens' },
]

export default function Navbar() {

    const pathName = usePathname()

    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-4xl font-bold">
                        Funky <span className="text-primary">Fashionair</span>
                    </h1>
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathName === link.href ? (
                                <Link className="text-lg font-semibold text-primary" href={link.href}>{link.name}</Link>
                            ) : (
                                <Link href={link.href} className="text-lg font font-semibold text-gray-600 transition duration-100 hover:text-primary">{link.name}</Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="flex divide-x border-r sm:border">
                 <Button>Click it</Button>
                </div>
            </div>

        </header>
    )
}