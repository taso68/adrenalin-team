"use client"

import React, {createContext, useContext, useState} from 'react';

interface ContextType {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export const SidebarContext = createContext<ContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({children}): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = (): void => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div>
            <SidebarContext.Provider value={{isOpen, toggleSidebar}}>
                {children}
            </SidebarContext.Provider>
        </div>
    );
};

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebarContext must be used within a MyProvider');
    }
    return context;
}


