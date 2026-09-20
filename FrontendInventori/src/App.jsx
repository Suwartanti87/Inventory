import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Beranda from './page/Beranda'
import Kategori from './page/Kategori'
import TambahKategori from './page/TambahKategori'
import EditKategori from './page/EditKategori'

import Barang from './page/Barang'
import TambahBarang from './page/TambahBarang'
import EditBarang from './page/EditBarang'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>

              <Route path='/' element={<Beranda />} />

              <Route path='/kategori' element={<Kategori />} />
              <Route path='/tambah-kategori' element={<TambahKategori />} />
              <Route path='/edit-kategori/:id' element={<EditKategori />}/>
              <Route path='/barang' element={<Barang />} />
              <Route path='/tambah-barang' element={<TambahBarang />} />
              <Route path='/edit-barang/:id' element={<EditBarang />} />

            </Routes>
          </main>
        </div>
      </BrowserRouter>



    </>
  )
}

export default App
