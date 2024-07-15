'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'


const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[246px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={'/icons/hamburger.svg'}
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side={"left"}
                    className='border-none bg-white'
                >
                    <Link href={'/'} className='cursor-pointer items-center gap-1 px-4'>
                        <Image
                            src={'/icons/logo.svg'}
                            width={34}
                            height={34}
                            alt='horizon logo'
                            className='size-[24px] max-xl:size-14'
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>
                    <div className='mobilenav-sheet'>
                        {/* this sheet close ensure ki if sidebar open kra and uspr khi click kra toh voh close na ho */}
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>

                                {sidebarLinks.map((items) => {
                                    const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`);

                                    return (
                                        // yeh sheetclose ensure krega ki if koi bhi item select kra menu se toh, menu close automatically
                                        <SheetClose asChild>
                                            <Link href={items.route} key={items.label}
                                                className={cn('mobilenav-sheet_close w-full', {
                                                    'bg-bank-gradient': isActive
                                                })}
                                            >
                                                <Image
                                                    src={items.imgURL}
                                                    alt={items.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />
                                                <p className={cn(
                                                    'text-16 font-semibold text-black-2', {
                                                    'text-white': isActive
                                                })}>
                                                    {items.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </nav>

                        </SheetClose>

                        Footer
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav

