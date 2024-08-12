'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import VideoBackground from '../../components/VideoBackround'
import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import Image from 'next/image'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })


  },[]);

  return (
    <>
{/* <VideoBackground /> */}


<div style={{ 
  background: 'white',
  backgroundImage: 'url(/images/aleunpocodemi.jpg)',
//  'url("../../videos/fondo.mp4")' , 
//  'url("https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
  // filter: 'brightness(90%) contrast(120%)', 
  // backgroundAttachment: 'fixed',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  filter: 'brightness(90%) contrast(110%)', 
  
  
}}>

     
   
      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      <Footer />
      </div>
    </>
  )
}
