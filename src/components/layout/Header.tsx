'use client'
import { usePathname } from "next/navigation";

export default function Header(){
    const pathName = usePathname();

    return(
        <header className={'w-full bg-white h-12'}>
            <h1>dd</h1>
        </header>
    )
}
