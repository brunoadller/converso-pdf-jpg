'use client'
import Header from "@/components/Header"
import Images from "@/components/Images"
import Main  from "@/components/Main"

const Home = () => {
  return(
    <div className="w-full h-screen flex pt-24  justify-center bg-gradient-to-r from-gray-900 to-gray-800">
     <div className="w-full flex flex-col gap-5 px-10">
       <Header />
       <Main />
     </div>
    </div>
  )
}

export default Home