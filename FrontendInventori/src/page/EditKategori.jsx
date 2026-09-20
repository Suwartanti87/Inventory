import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";

function EditKategori() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nama: "",
    })

    useEffect(() => {
        API
            .get(`/kategori/${id}`)
            .then((response) => {
                console.log("RESPONSE:", response);
                console.log("DATA:", response.data);
                console.log(response)
                setForm({
                    nama: response.data.nama
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            nama: form.nama,
        
        }
        await
            API
                .put(`/kategori/${id}`, data)
                .then((response) => {
                    console.log(response)
                    alert("berhasil diubah")
                    navigate("/kategori")
                })
                .catch((error) => {
                    console.error(error)
                    alert("gagal diubah")
                })
                .finally(() => {

                })

    }

    return (
        <>
            <div className="container mt-5">
                <h3>Edit Kategori</h3>
                <hr />
                <div className="row g-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="nama" value={form.nama} name="nama" onChange={handleChange} placeholder="Nama Kateori" required />
                            <label htmlFor="nama"> Nama Kategori </label>
                        </div>
                         
                        <input type="submit" value="Submit" className="btn btn-success col-12 mt-2" />
                    </form>
                </div>
            </div>
        </>

    )

}
export default EditKategori