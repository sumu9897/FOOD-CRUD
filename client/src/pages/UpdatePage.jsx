import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";


const UpdatePage = () => {
    let navigate=useNavigate();
    let {id}= useParams();

    const [Existing,SetExisting]=useState(null)

    const ExistingInfo=async (id)=>{
        let res=await axios.get(`/api/ReadByID/${id}`)
        SetExisting(res.data['row'][0])
    }

    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);


    const UpdateData=async (event)=>{

        event.preventDefault();

        let formData=new FormData(event.target);
        let name=formData.get("name");
        let code=formData.get("code");
        let image=formData.get("image");
        let category=formData.get("category");
        let QTY=formData.get("QTY");
        let price=formData.get("price");


        await axios.post(`/api/Update/${id}`,{
            name:name,
            code:code,
            image:image,
            category:category,
            QTY:QTY,
            price:parseFloat(price),
        })

        navigate("/")


    }




    return (
        <div className="container mt-5">
            <form onSubmit={UpdateData}>
                <div className="row">
                    <h4>Update Food Item</h4>
                    <div className="col-md-4">
                        <label>Food Name</label>
                        <input className="form-control form-control-sm" name="name" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <label>Food Code</label>
                        <input className="form-control form-control-sm" name="name" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <label>Food Image</label>
                        <input className="form-control form-control-sm" name="name" type="text"/>
                    </div>

                </div>
                <br/>

                <div className="row">


                    <div className="col-md-4">
                        <label>Food Category</label>
                        <input className="form-control form-control-sm" name="category" type="text"/>
                    </div>
                    <div className="col-md-4">
                        <label>QTY</label>
                        <input className="form-control form-control-sm" name="QTY" type="number"/>
                    </div>
                    <div className="col-md-4">
                        <label>Price</label>
                        <input className="form-control form-control-sm" name="price" type="number"/>
                    </div>

                </div>
                <button type="submit" className="btn btn-sm mt-3 btn-success">Update</button>
            </form>
        </div>
    );
};

export default UpdatePage;