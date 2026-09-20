const prisma = require('../config/utils');
const { param } = require('../routes/kategoriRoute');

const getAllBarang = async (req, res)=>{
    try{
        const barang = await prisma.barang.findMany({
            include:{kategori: true}
        });
        return res.json(barang);

    } catch(error){
        console.error(error);

    }
}

const getBarangById = async (req, res)=>{
    try{
        const id_barang = parseInt(req.params.id);
        const barang = await prisma.barang.findUnique({
            where:{id_barang},
            include:{ kategori: true}
        });
        return res.json(barang);

    } catch(error){
        console.error(error);
    }
}

//create
const createBarang = async (req, res)=>{
    try{
        const {nama, stok, harga, id_kategori}= req.body;
        const barang = await prisma.barang.create({
            data: {nama, 
                stok: parseInt(stok),
                harga: parseFloat(harga),
                id_kategori:id_kategori? parseInt(id_kategori):null
        }
    });
    return res.json(barang);

    } catch(error){
        console.error(error);
    }
}

//update
const updateBarang = async (req, res)=>{
    try{
        const id_barang = parseInt(req.params.id);
        const {nama, stok, harga, id_kategori}= req.body;

        const barang = await prisma.barang.update({
            where:{id_barang},
            data:{nama,
                stok: parseInt(stok),
                harga: parseFloat(harga),
                id_kategori:id_kategori? parseInt(id_kategori):null
            }
        });
        return res.json(barang);
    } catch(error){
        console.error(error);
    }
}

//delete
const deleteBarang = async (req,res)=>{
    try{
        const id_barang = parseInt(req.params.id);
        await prisma.barang.delete({
            where: {id_barang}
        });
        return res.json({message:'Berhasil dihapus'});

    }catch(error){
        console.error(error);
    }
}

module.exports = {
    getAllBarang,
    getBarangById,
    createBarang,
    updateBarang,
    deleteBarang
}