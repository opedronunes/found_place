'use client'

import { AppleLogo } from "@phosphor-icons/react"
export default function Logo(){
    
    return(
        <div className="flex flex-col">
            <h3 className="text-left font-bold text-3xl flex items-center">F<AppleLogo size={32} color='#fff' />und</h3>
            <h6 className="text-right">Place</h6>
        </div>
    )
}