import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import Child from './components/Child/Child'

function App() {

  const routes = createBrowserRouter([
    {path: '/', element: <Layout />, children: [
         {index: true, element: <Home />},
            { path: "about",element: <About />,children: [
             { path: "child", element: <Child /> } ]},
            {path: "gallery", element: <Gallery />},
            {path: '*', element: <NotFound />},
    ]},
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App