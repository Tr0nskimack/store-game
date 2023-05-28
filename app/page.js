import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'


const page = () => {
  return (
    <div className='bg-[#181a20] min-h-screen'>
      <Header/>
      <main className='h-[90vh] flex gap-8 p-8 pt-0'>
        <Sidebar/>
        <Content/>
        
        


      </main>
    </div>
  )
}

export default page
