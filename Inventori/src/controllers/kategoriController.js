const prisma = require('../config/utils');

const getAllKategori = async (req, res) =>{
    try{
        const kategori = await prisma.kategori.findMany({
            include : {barang : true }
        });
        return res.json(kategori);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Server Error'})
    }
}

const getKategoriById = async (req, res)=>{
    try{
        const id_kategori =parseInt(req.params.id);
        const kategori = await prisma.kategori.findUnique({
            where:{id_kategori},
            include:{ barang: true}
        });

        if(!kategori) return res.status(404).json({message: 'Kategori tidak diketahui'});
        return res.json(kategori);
    } catch (error){
        console.error(error);
        return res.status(500).json({message:' server Eror'})
    }
}


//Create
const createKategori = async (req, res)=>{
    try{
        const {nama} = req.body;
        const kategori = await prisma.kategori.create({
            data : {nama}
        });
        return res.status(201).json(kategori);

    } catch(error){
        console.error(error);
        return res.status(400).json({message:'Tidak dapat menambahkan!'})
    }
}

//update

const updateKategori = async (req, res)=>{
    try{
        const id_kategori = parseInt(req.params.id);
        const {nama} = req.body;
        const kategori = await prisma.kategori.update({
            where:{id_kategori},
            data:{nama}
        });
        return res.json(kategori);

    } catch(error){
        console.error(error);
        if(error.code === 'P2025'){
            return res.status(404).json({message: 'Server error tidak diketahui'})
        }
        return res.status(400).json({message: error})
    }
}

const deleteKategori = async (req, res) =>{
    try{
        const id_kategori = parseInt(req.params.id);
        await prisma.kategori.delete({
            where:{id_kategori}
        });
        return res.json({message:'Berhasil dihapus'})

    } catch(error){
        console.error(error);
        if (error.code === 'P2025'){
            return res.status(404).json({message:'Gagal dihapus'});
        }
        return res.status(500).json({message: 'server error'})
    }
}

module.exports ={
    getAllKategori,
    getKategoriById,
    createKategori,
    updateKategori,
    deleteKategori

};