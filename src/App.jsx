import {Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from './sections'
import { Nav } from './components';
import { useState } from 'react'

const App = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
   }
  return <main className="relative">
     <Nav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
     <section className="xl:padding-l wide:padding-r padding-b">
        <Hero toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
     </section>
     <section className="padding">
        <PopularProducts />
     </section>
     <section className="padding">
        <SuperQuality />
     </section>
     <section className="padding-x py-10">
        <Services />
     </section>
     <section className="padding">
        <SpecialOffer />
     </section>
     <section className="bg-pale-blue padding">
        <CustomerReviews />
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
     </section>
     <section className="bg-black padding-x padding-t pb-8">
        <Footer />
     </section>
  </main>
}

export default App;