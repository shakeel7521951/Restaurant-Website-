import CoffeeSection from '../components/home/CoffeeSection'
import Header from '../components/home/Header'
import OurMenu from '../components/home/OurMenu'
import WhyChooseUs from '../components/home/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Header />
      <OurMenu/>
      <CoffeeSection/>
      <WhyChooseUs/>
    </div>
  )
}

export default Home
