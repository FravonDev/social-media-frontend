import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <section className="flex-1 h-full w-full flex items-center justify-center">{children}</section>
        </div>
    )
}

