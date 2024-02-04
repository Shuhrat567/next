import Navbar from '@/components/Navbar'
import Banner from "@/components/Banner"
import Brands from "@/components/Brands"
import OurProjects from "@/components/OurProjects"
import Provide from "@/components/Provide"
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
          <Navbar />
          <Banner />
          <Brands />
          <OurProjects/>
          <Provide/>
          <Footer />
    </div>
  )
}

export default Home