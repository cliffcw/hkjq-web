import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SiteBackground from './components/SiteBackground'
import TopNav from './components/TopNav'
import Brand from './pages/Brand'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Shop from './pages/Shop'
import Team from './pages/Team'

export default function App() {
  return (
    <div className="relative min-h-full bg-transparent text-stone-900">
      <SiteBackground />
      <div className="relative z-10">
        <TopNav />
        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/product" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}
