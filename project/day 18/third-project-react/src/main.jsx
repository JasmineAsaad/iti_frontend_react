import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import GalleryOverview from './components/Gallery/GalleryOverview'
import Photos from './components/Gallery/Photos'
import Store from './components/Store/Store'
import NotFound from './components/NotFound/NotFound'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />}>
            <Route index element={<GalleryOverview />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          <Route path="store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)