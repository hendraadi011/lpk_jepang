import BlogSection from './BlogSection'
import Keunggulan from './Keunggulan'
import MainPage from './MainPage'
import Product from './Product'
import TopSelling from './TopSelling'

const Index = () => {
  return (
    <div className='overflow-hidden bg-white'>
      <MainPage />
      <Keunggulan />
      <Product />
      <BlogSection />
    </div>
  )
}

export default Index
