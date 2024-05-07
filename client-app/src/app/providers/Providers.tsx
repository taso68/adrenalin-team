"use client"

import {ReactNode} from "react";
import {SidebarProvider} from "@/app/providers/SidebarProvider";

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({children}: ProvidersProps) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}