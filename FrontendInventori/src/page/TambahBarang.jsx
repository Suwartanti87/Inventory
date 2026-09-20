import API from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TambahBarang(){
    const [form, setForm] = useState({
        nama:"",
        stok: "",
        harga: "",
        id_kategori: ""
        });

    const navigate = useNavigate();

    //menyimpan data inputan 
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // mengirim dataa inputan ke api
    const handleSubmit = async(e) =>{
        e.preventDefault();

        await
          API 
           .post('/barang', form)
           .then((response)=>{
            console.log(response)
            alert("Berhasil ditambahkan")
            navigate("/barang")
           })
           .catch((error)=>{
            console.error(error)
           })
           .finally(()=>{
            
           })
    }

    return (
        <>
        <div className="container mt-5">
            <h3>Tambah Barang</h3>
        
        <hr />
        <div className="row g-4">
            <form onSubmit={handleSubmit} >
                 <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="nama" value={form.nama} name="nama" onChange={handleChange}  required /> 
                <label htmlFor="nama">Nama Barang </label> 
                </div> 
                <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="stok" value={form.stok} name="stok" onChange={handleChange}  required /> 
                <label htmlFor="stok">Stok </label> 
                </div> 
                <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="harga" value={form.harga} name="harga" onChange={handleChange}  required /> 
                <label htmlFor="harga">Harga</label> 
                </div> 
                <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="id_kategori" value={form.id_kategori} name="id_kategori" onChange={handleChange}  required /> 
                <label htmlFor="id_kategori">Kategori</label> 
                </div>  
                
                
                <input type="submit" value="Submit" className="btn btn-success col-12 mt-2" />
            </form>
        </div>
        </div>
        </>
    )

}

export default TambahBarang