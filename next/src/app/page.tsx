import Navbar from '@/components/Navbar'
import Banner from "@/components/Banner"
import Brands from "@/components/Brands"
import OurProjects from "@/components/OurProjects"
import Provide from "@/components/Provide"
import Footer from '@/components/Footer'
import UserExpirence from '@/components/UserExpirence'
import Ideas from '@/components/Ideas'
import Form from '@/components/Form'
// import Customers from '@/components/Customers'

const Home = () => {
  return (
    <div>
          <Navbar />
          <Banner />
          <Brands />
          <OurProjects/>
          <Provide/>
          
          <UserExpirence/>
          <Ideas/>
          <Form/>
          {/* <Customers/> */}
          <Footer />
    </div>
  )
}

export default Home