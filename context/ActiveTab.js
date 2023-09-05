"use client"

import React, { createContext, useState } from 'react'

// context
export const ActiveTabContext = createContext({
    activeTab: "home",
    setActiveTab: () => {}
});

// context provider
export function ActiveTabProvider({children}) {
    const [activeTab, setActiveTab] = useState("home");

    function handleChangeTab(tab) {
        setActiveTab(tab)
    }

    return(
        <ActiveTabContext.Provider value={{activeTab, handleChangeTab}}>
            {children}
        </ActiveTabContext.Provider>
    )
}