import React, { useState } from "react";
import "./ProductUpload.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import Button from "@mui/material/Button";

const ProductUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");
  const [tags, setTags] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      description,
      category,
      brand,
      regularPrice,
      discountPrice,
      stock,
      tags,
      color,
      size,
      weight,
      images,
    };
    console.log("Form submitted:", formData);
  };

  return (
    <div className="productdashboardBoxWrapper product-right-content mx-auto">
      <PageHeader pageName="Product Upload" />
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          {/* Basic Information Section */}
          <div className="col-md-7">
            <div className="card p-4">
              <h5 className="mb-4">Basic Information</h5>
              <div className="form-group">
                <h6>TITLE</h6>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type here..."
                  required
                />
              </div>
              <div className="form-group">
                <h6>DESCRIPTION</h6>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Type here..."
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <h6>CATEGORY</h6>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category..."
                  required
                />
              </div>
              <div className="form-group">
                <h6>BRAND</h6>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Brand..."
                  required
                />
              </div>
              <div className="form-group">
                <h6>REGULAR PRICE</h6>
                <input
                  type="number"
                  value={regularPrice}
                  onChange={(e) => setRegularPrice(e.target.value)}
                  placeholder="Regular Price..."
                  required
                />
              </div>
              <div className="form-group">
                <h6>DISCOUNT PRICE</h6>
                <input
                  type="number"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  placeholder="Discount Price..."
                  required
                />
              </div>
              <div className="form-group">
                <h6>STOCK</h6>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Stock..."
                  required
                />
              </div>
              <div className="form-group">
                <h6>TAGS</h6>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Add Tags..."
                />
              </div>
            </div>
          </div>

          {/* Specification Section */}
          <div className="col-md-5 mt-3">
            <div className="card p-4">
              <h5>Specification</h5>
              <div className="form-group">
                <h6>SIZE</h6>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="Size..."
                />
              </div>
              <div className="form-group">
                <h6>COLOR</h6>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Color..."
                />
              </div>
              <div className="form-group">
                <h6>STOCK</h6>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Stock..."
                />
              </div>
              <div className="form-group">
                <h6>WEIGHT</h6>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Weight..."
                />
              </div>
            </div>
          </div>

          {/* Organization Section */}
          <div className="col-md-5 mt-3">
            <div className="card p-4">
              <h5>Organization</h5>
              <div className="form-group">
                <h6>ADD CATEGORY</h6>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Add Category..."
                />
              </div>
              <div className="form-group">
                <h6>ADD BRAND</h6>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Add Brand..."
                />
              </div>
              <div className="form-group">
                <h6>ADD COLOR</h6>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Add Color..."
                />
              </div>
              <div className="form-group">
                <h6>ADD SIZE</h6>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder="Add Size..."
                />
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="col-md-5 mt-3">
            <div className="card p-4">
              <h5>Image Upload</h5>
              <div className="form-group">
                <h6>UPLOAD IMAGES</h6>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="image-preview">
                {images.map((image, index) => (
                  <div key={index} className="preview-item">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index}`}
                      className="img-thumbnail"
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeImage(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          className="btn-bule btn-lg btn-big mt-3 w-100"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProductUpload;
