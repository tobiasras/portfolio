import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from '@/pages/Home'
import { TemplateSciPoster} from '@/pages/TemplateSciPoster.tsx'

import Navbar from "@/components/composites/navbar.tsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/template" element={<TemplateSciPoster/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
