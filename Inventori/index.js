const express = require('express');
const cors = require('cors');

const app =express();

const KategoriRoutes = require('./src/routes/kategoriRoute');
const BarangRoutes = require('./src/routes/barangRoute');

app.use(cors());

app.use(express.json());

app.use('/api/kategori', KategoriRoutes);
app.use('/api/barang', BarangRoutes);

app.get('/', (req, res)=>{
    res.send('Server Jalan gunakan /api/kategori');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server berjalan di port local ${PORT}`);
});