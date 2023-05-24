import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#181a20] min-h-screen'>
      <Header/>
      <main className='h-[90vh] flex p-8 gap-6'>
        <Sidebar/>
        <Content/>
        


      </main>
    </div>
  )
}

export default page
