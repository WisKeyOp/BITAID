import React from 'react'
import Navbar from "../../_components/Navbar"
import Footer from "../../_components/Footer"

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <div className='px-10 md:px-20 lg:px-40 py-10'>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default DashboardLayout
