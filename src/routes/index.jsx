import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutPage from '../Layouts/LayoutPage'
import HomePage from '../views/Web/Home/Index'
import Artikel from '../views/Web/Home/Artikel'
import FormPendaftaran from '../views/Web/Home/FormPendaftaran'

export default function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/artikel' element={<Artikel />} />
          <Route path='/form-pendaftaran' element={<FormPendaftaran />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
