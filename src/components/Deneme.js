import React, { useEffect, useState } from 'react';

import axios from 'axios';

const API_BASE = "http://localhost:3004/product"

function submitForm(contentType, data, setResponse) {
    axios({
        url: `${API_BASE}`,
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': contentType
        }
    }).then((response) => {
        setResponse(response.data);
    }).catch((error) => {
        setResponse("error");
    })
}

function Deneme() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");
    const [selectedImage, setselectedImage] = useState(null);

    function uploadWithFormData() {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        formData.append("desc", desc);

        submitForm("multipart/form-data", formData, (msg) => console.log(msg));
    }

    async function uploadWithJSON() {
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

        const data = {
            title: title,
            file: await toBase64(file),
            desc: desc
        }
        console.log(data)
        submitForm("application/json", data, (msg) => console.log(msg));
    }
    useEffect(() => {
        axios.get("http://localhost:3004/product/8")
            .then((res) => setselectedImage(res.data.file)
            )
        // fetch('http://localhost:3004/product/8')
        //   .then((response) => response.json())
        //   .then((data) => setselectedImage(data))
        //   .catch((error) => console.log(error.message));
    }, []);
    return (
        <div className="App">
            <h2>Upload Form</h2>
            <form>
                <label>
                    File Title
 <input type="text" vaue={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        placeholder="Give a title to your upload" />
                </label>

                <label>
                    File
 <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
                </label>

                <label>
                    Description
 <textarea value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </label>

                <input type="button" value="Upload as Form" onClick={uploadWithFormData} />
                <input type="button" value="Upload as JSON" onClick={uploadWithJSON} />
            </form>
            <br />
            <div className="container">
                <img height="128" className="img-responsive text-center mb-3"
                    src={selectedImage == null ? require('../assets/default.png') : selectedImage} />

            </div>
        </div>
    );
}
export default Deneme;