import AboutUs from '../components/home/AboutUs'
import Header from '../components/home/Header'
import OurFaq from '../components/home/OurFaq'
import OurProgress from '../components/home/OurProgress'
import OurServices from '../components/home/OurServices'
import WhyChooseUs from '../components/home/WhyChooseUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
         <WhyChooseUs/> 
      <OurServices/>
      <OurProgress/>
      <AboutUs/>
      <OurFaq/>
   
    </div>
  )
}

export default Home
