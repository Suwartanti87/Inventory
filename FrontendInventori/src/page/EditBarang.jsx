import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";

function EditBarang() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nama: "",
        stok: "",
        harga: "",
        id_kategori: ""
    })

    useEffect(() => {
        API
            .get(`/barang/${id}`)
            .then((response) => {
                console.log("RESPONSE:", response);
                console.log("DATA:", response.data);
                console.log(response)
                setForm({
                    nama: response.data.nama,
                    stok: response.data.stok,
                    harga: response.data.harga,
                    id_kategori: response.data.id_kategori
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
            stok: form.stok,
            harga: form.harga,
            id_kategori: form.id_kategori

        }
        await
            API
                .put(`/barang/${id}`, data)
                .then((response) => {
                    console.log(response)
                    alert("berhasil diubah")
                    navigate("/barang")
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
                <h3>Edit Barang</h3>
                <hr />
                <div className="row g-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="nama" value={form.nama} name="nama" onChange={handleChange} placeholder="Nama" required />
                            <label htmlFor="nama"> Nama barang </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="stok" value={form.stok} name="stok" onChange={handleChange} placeholder="Nama" required />
                            <label htmlFor="stok">Stok </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="harga" value={form.harga} name="harga" onChange={handleChange} placeholder="Nama" required />
                            <label htmlFor="harga">Harga</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="id_kategori" value={form.id_kategori} name="id_kategori" onChange={handleChange} required />
                            <label htmlFor="id_kategori">Kategori</label>
                        </div>

                        <input type="submit" value="Submit" className="btn btn-success col-12 mt-2" />
                    </form>
                </div>
            </div>
        </>

    )

}
export default EditBarang