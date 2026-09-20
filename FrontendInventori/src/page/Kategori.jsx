import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import API from "../api/axios";

function Kategori() {
    const [kategori, setKategori] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        API.get("/kategori")
            //jika berhasil mendapatkan respon
            .then((response) => {
                console.log(response.data)
                setKategori(response.data);
            })
            //jika gagal mendapatkan respon
            .catch((error) => {
                setError(error.message);
            })
            //jika selesai(berhasil atau gagal)
            .finally(() => {
                setLoading(false);
            })
    })

    const handleDelete =async (id)=>{
        await 
         API
            .delete(`/kategori/${id}`)
            .then((response)=> {
                console.log(response)
                alert("Data berhasil diihapus")
                //setelah menghapus data kemudian mengembalikan / merefresh data
                API.get("/kategori")
                .then((response)=>{
                    setKategori(response.data)
                })
            })
            .catch((error)=>{
                console.error(error)
                alert("Data gagal dihapus")
            })
            .finally(()=>{
                
            })

    }
    return (
        <>

            <div className="container mt-5">
                <div>
                    <h1>Kategori</h1>
                </div>
                {loading && (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}
                <div className="cols-12 py-2">
                    <Link to="/tambah-kategori" className="btn btn-primary">Tambah</Link>
                </div>
                {!loading && !error && (
                    <div className="row g-4">
                        {kategori.map((post) => (
                            <div className="card" key={post.id}>
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <h5 className="card-title">{post.nama}</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <Link to={`/edit-kategori/${post.id_kategori}`} className="btn btn-warning me-1">Edit</Link>
                                            <Link onClick={() => handleDelete(post.id_kategori)} className="btn btn-danger me-1">Hapus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}



            </div>
        </>
    )
}

export default Kategori