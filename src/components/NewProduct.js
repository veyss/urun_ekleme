import React, { Component } from 'react'

export default class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.fileRef1 = React.createRef();
    }
    state = {
        productName: "",
        productCount: "",
        productPrice: "",
        producImg: "",
        totalPrice: "",
        selectedImage: null
    }
 

    onFileChange = async (event) => {    
        let filedata=event.target.files[0]   
        let file = await this.toBase64(filedata)
        this.setState({ selectedImage: file })
        this.setState({ producImg: file })           
    }

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
     
    });
    onChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        this.setState({
            [name]: value
        });
       

    }
    addProduct = (event) => {
        const { producImg, productName, productCount, productPrice, totalPrice } = this.state
        let sumPrice =productCount*productPrice          

        let data = {
            productName,
            productCount,
            productPrice,
            totalPrice:sumPrice,
            producImg
        }
        this.props.addProduct(data)
    this.setState({
        productName: "",
        productCount: "",
        productPrice: "",
        producImg: "",
        totalPrice: "",
      
    })
 
    }

    render() {
        const { selectedImage, productName, productCount, productPrice, totalPrice } = this.state
        return (
            <div className="row">
                <div className="card offset-2 col-md-3">
                    <div className="card-body tex-center d-flex align-items-center flex-column">
                        <img height="128" className="img-responsive text-center mb-3"
                            src={selectedImage == null ? require('../assets/default.png') : selectedImage} />

                        <input className="form-control" ref={this.fileRef1} type="file" onChange={this.onFileChange} style={{display:"none"}} />
                        <button className="btn btn-outline-secondary" onClick={() => { this.fileRef1.current.click() }} type="button">Resim Seç</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="col-md-11 card">
                        <div className="card-body">
                            <div className="form-group">
                                <label>Ürün Adı</label>
                                <input name="productName" value={productName} onChange={this.onChange}
                                    type="text" className="form-control" placeholder="adını giriniz" />
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Ürün Adeti</label>
                                    <input name="productCount" value={productCount} onChange={this.onChange}
                                        type="number" className="form-control"
                                        placeholder="adetini giriniz" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Ürün Fiyatı</label>
                                    <input name="productPrice" value={productPrice} onChange={this.onChange}
                                        type="number" className="form-control" laceholder="fiyatını giriniz" />
                                </div>
                            </div>
                            <button onClick={this.addProduct} className="btn btn-outline-info btn-block">Ekle!</button>


                        </div>
                    </div>
                </div>


            </div >
        )
    }
}




























//     render() {
//         const {selectedImage}=this.state
//         return (
//             <div className="container">
//                 <input className="form-control" ref={this.fileRef1} type="file" onChange={this.onFileChange} style={{ display: "none" }} />
//                 <button className="btn btn-outline-secondary" onClick={() => { this.fileRef1.current.click() }} type="button">Resim Seç</button>
//                 <button className="btn btn-outline-secondary ml-4" onClick={this.onSubmit} type="button">Gönder</button>
//                 <img height="128" className="img-responsive text-center mb-3"
//                     src={selectedImage == null ? require('../assets/default.png') : selectedImage} />
//             </div>
//         )
//     }
// }










// import React, { Component } from 'react'

// export default class NewPruduct extends Component {
//     constructor(props) {
//         super(props);
//         this.fileRef1 = React.createRef();
//       }
//     state = {
//         product: {
//             title: null,
//             count: null,
//             price: null,
//             totalPrice: null,
//             selectedImage: null
//         }
//     }

//     onFileChange = (e) => {
//         const imgPath = URL.createObjectURL(e.target.files[0])       
//         console.log()

//         this.setState({
//             product: {
//                 ...this.state.product, selectedImage: imgPath
//             }
//         },()=>{
//             console.log("llf",this.state)
//         })       
//     }
//     onClickFile=()=>{
//         this.fileRef1.current.click()
//     }


//     render() {
//         const { selectedImage, title, count, price, totalPrice } = this.state.product
//         return (
//             <div className="row">
//                 <div className="card offset-2 col-md-3">
//                     <div className="card-body tex-center d-flex align-items-center flex-column">
//                         <img height="128" className="img-responsive text-center mb-3"
//                             src={selectedImage == null ? require('../assets/default.png') : selectedImage } />

//                         <input ref={this.fileRef1} type="file" onChange={this.onFileChange} className="form-control" style={{display:"none"}} />
//                         <button className="btn btn-outline-secondary" onClick={this.onClickFile} type="button">Resim Seç</button>


//                     </div>

//                 </div>
//             </div >
//         )
//     }
// }
