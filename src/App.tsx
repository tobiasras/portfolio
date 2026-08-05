import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from '@/pages/Home'

import Header from "@/components/ui/header.tsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
