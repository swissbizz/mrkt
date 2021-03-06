import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { create } from "./apiPost";
import { Redirect } from "react-router-dom";
import LoadingImg from '../images/cart.svg';
import './postForm.css';

class NewPost extends Component {
    state = {
            title: "",
            body: "",
            price: "",
            category: "",
            quantity: "",
            photo: "",
            error: "",
            user: {},
            fileSize: 0,
            loading: false,
            redirectToProfile: false
        };

    componentDidMount() {
        this.postData = new FormData();
        this.setState({ user: isAuthenticated().user });
    }

    isValid = () => {
        const { title, body, fileSize, price } = this.state;
        if (fileSize > 100000) {
            this.setState({
                error: "File size should be less than 100kb",
                loading: false
            });
            return false;
        }
        if (title.length === 0 || body.length === 0 || price.length === 0) {
            this.setState({ error: "All fields are required", loading: false });
            return false;
        }
        return true;
    };

    handleChange = name => event => {
        this.setState({ error: "" });
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;

        const fileSize = name === "photo" ? event.target.files[0].size : 0;
        this.postData.set(name, value);
        this.setState({ [name]: value, fileSize });
    };

    clickSubmit = event => {
        event.preventDefault();
        this.setState({ loading: true });

        if (this.isValid()) {
            const userId = isAuthenticated().user._id;
            const token = isAuthenticated().token;

            create(userId, token, this.postData).then(data => {
                if (data.error) this.setState({ error: data.error });
                else {
                    this.setState({
                        loading: false,
                        title: "",
                        body: "",
                        price: "",
                        category: "",
                        quantity: "",
                        redirectToProfile: true
                    });
                }
            });
        }
    };

    newPostForm = (title, body, price, category, quantity) => (
        <form>
            <div className = "row">
                <div className = "col-lg-5 d-flex justify-content-center">
                <div className="form-group">
                <label className="text-muted">Product Photo</label>
                <input
                    onChange={this.handleChange("photo")}
                    type="file"
                    accept="image/*"
                    className="form-control pb-5"
                    id = "fileInput"
                />
            </div>
             </div>
             <div className = "col-lg-7">
             <div className="form-group">
                <label className="text-muted">Product Name</label>
                <input
                    onChange={this.handleChange("title")}
                    type="text"
                    className="form-control"
                    value={title}
                    id = "postForm"
                />
            </div>
             </div>
            </div>
            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea
                    onChange={this.handleChange("body")}
                    type="text"
                    className="form-control"
                    value={body}
                    id = "postForm"
                />
            </div>
            <div className = "row">
                <div className = "col-lg-3">
                <div className="form-group">
                <label className="text-muted">Price</label>
                <input
                    onChange={this.handleChange("price")}
                    type="number"
                    className="form-control"
                    value={price}
                    id = "postForm"
                />
            </div> </div>
            <div className = "col-lg-6">
            <div className = "form-group">
                <label className = "text-muted">Category</label>
                <select onChange = {this.handleChange("category")}
                        className = "form-control" value = {category}>
                <option>Please Select a Category</option> 
                 <option>Clothing,Shoes,&amp;Jewelry</option> 
                 <option>Food&amp;Grocery</option>
                 <option>Books</option>
                 <option>Movies,Music&amp;Games</option>
                 <option>Electronics&amp;Computers</option>
                 <option>Home,Garden &amp;Tools</option>
                 <option>Pet</option> 
                 <option>Beauty&amp;Health</option> 
                 <option>Sports&amp;Outdoors</option>
                 <option>Handmade</option> 
                 <option>Toys,Kids,&amp;Baby Items</option>
                 <option>Automotive&amp;Industrial</option>       
                </select>
            </div>
            </div>
            <div className = "col-lg-3">
            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input
                    onChange={this.handleChange("quantity")}
                    type="number"
                    min = "1"
                    step = "1"
                    className="form-control"
                    value={Math.round(quantity)}
                    id = "postForm"
                />
            </div>
            </div>
            </div>
            <div className = "row d-flex align-items-right" style = {{float: "right"}}>
            <button
                onClick={this.clickSubmit}
                className="btn btn-raised blue-gradient text-white btn-sm"
                style = {{borderRadius: "25px"}}
            >
                Create Listing
            </button>
            </div>
        </form>
    );

    render() {
        const {
            title,
            body,
            price,
            category,
            quantity,
            error,
            loading,
            redirectToProfile
        } = this.state;

        if (redirectToProfile) {
            return <Redirect to="/" />;
        }

        return (
            <div className="container">
                <h2 className="mt-5 mb-2">Create a New Listing</h2>
                <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                >
                    {error}
                </div>

                {loading ? (
                    <>
                    <div className = "justify-content-center">
                    <img src = {LoadingImg} alt = "loading" />
                    </div>
                    </>
                ) : (
                    <>
                    {this.newPostForm(title, body, price, category, quantity)}
                    </>
                )}

            </div>
        );
    }
}

export default NewPost;


