import API from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TambahKategori(){
    const [form, setForm] = useState({
        nama:"",
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
           .post('/kategori', form)
           .then((response)=>{
            console.log(response)
            alert("Berhasil ditambahkan")
            navigate("/kategori")
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
            <h3>Tambah Kategori</h3>
        
        <hr />
        <div className="row g-4">
            <form onSubmit={handleSubmit} >
                 <div className="form-floating mb-3"> 
                <input type="text" className="form-control" id="nama" value={form.nama} name="nama" onChange={handleChange} placeholder="Nama Kategori" required /> 
                <label htmlFor="nama">Nama Kategori </label> 
                </div>  
                
                
                <input type="submit" value="Submit" className="btn btn-success col-12 mt-2" />
            </form>
        </div>
        </div>
        </>
    )

}

export default TambahKategori