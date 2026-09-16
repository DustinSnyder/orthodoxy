import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Today } from './pages/Today'
import { Catechesis } from './pages/Catechesis'
import { LessonDetail } from './pages/LessonDetail'
import { Prayer } from './pages/Prayer'
import { Fasting } from './pages/Fasting'
import { Scripture } from './pages/Scripture'
import { Saints } from './pages/Saints'
import { IconsGallery } from './pages/IconsGallery'
import { Library } from './pages/Library'
import { Parish } from './pages/Parish'
import { More } from './pages/More'
import { Questions } from './pages/Questions'
import { Family } from './pages/Family'
import { Priest } from './pages/Priest'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Today />} />
          <Route path="catechesis" element={<Catechesis />} />
          <Route path="catechesis/:lessonId" element={<LessonDetail />} />
          <Route path="prayer" element={<Prayer />} />
          <Route path="fasting" element={<Fasting />} />
          <Route path="scripture" element={<Scripture />} />
          <Route path="saints" element={<Saints />} />
          <Route path="icons" element={<IconsGallery />} />
          <Route path="library" element={<Library />} />
          <Route path="parish" element={<Parish />} />
          <Route path="questions" element={<Questions />} />
          <Route path="family" element={<Family />} />
          <Route path="priest" element={<Priest />} />
          <Route path="more" element={<More />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
