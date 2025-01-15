import React from "react";
import { Button } from "@mui/material";
import { FaEye, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

//img
import img1 from "../assets/image/skirtim1.webp";
import img2 from "../assets/image/shirtmg2.webp";
import img3 from "../assets/image/shoes.webp";
import img4 from "../assets/image/jacketwomen.webp";
import img5 from "../assets/image/menspent2.webp";
import img6 from "../assets/image/menssweater1.jpg";
import img7 from "../assets/image/pentsmens1.webp";
import img8 from "../assets/image/womenpent.webp";
import img9 from "../assets/image/womenpent2.webp";
import img10 from "../assets/image/watche1.jpg";
import img11 from "../assets/image/swearterwomen.webp";

const generateStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} color="#ffc107" />
      ))}
      {halfStar && <FaStarHalfAlt color="#ffc107" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} color="#ffc107" />
      ))}
    </>
  );
};

const TableComponent = () => {
  const products = [
    {
      id: 1,
      img: img1,
      name: "Tops and skirt set for Female",
      category: "womans",
      brand: "richman",
      price: "$19.00",
      oldPrice: "$21.00",
      stock: 30,
      rating: 4.9,
      reviews: 16,
      orders: 380,
      sales: "$38k",
      description: "Women's exclusive summer tops and skirt set.",
    },
    {
      id: 2,
      img: img2,
      name: "Men's Casual Shirt",
      category: "Men's",
      brand: "FashionHub",
      price: "$25.00",
      oldPrice: "$30.00",
      stock: 50,
      rating: 4.8,
      reviews: 20,
      orders: 420,
      sales: "$42k",
      description: "Men's exclusive casual shirt for summer.",
    },
    {
      id: 3,
      img: img3,
      name: "Running Shoes",
      category: "Footwear",
      brand: "ShoeMart",
      price: "$45.00",
      oldPrice: "$50.00",
      stock: 100,
      rating: 4.7,
      reviews: 30,
      orders: 500,
      sales: "$50k",
      description: "Comfortable running shoes for all seasons.",
    },
    {
      id: 4,
      img: img4,
      name: "Women's Jacket",
      category: "Clothing",
      brand: "richman",
      price: "$90.00",
      oldPrice: "$100.00",
      stock: 20,
      rating: 4.6,
      reviews: 25,
      orders: 300,
      sales: "$27k",
      description: "Stylish and warm jacket for women.",
    },
    {
      id: 5,
      img: img5,
      name: "Men's Pants",
      category: "Clothing",
      brand: "richman",
      price: "$60.00",
      oldPrice: "$70.00",
      stock: 40,
      rating: 4.5,
      reviews: 18,
      orders: 350,
      sales: "$21k",
      description: "Comfortable and stylish men's pants.",
    },
    {
      id: 6,
      img: img6,
      name: "Men's Sweater",
      category: "Clothing",
      brand: "richman",
      price: "$80.00",
      oldPrice: "$90.00",
      stock: 25,
      rating: 4.4,
      reviews: 22,
      orders: 280,
      sales: "$22k",
      description: "Warm and cozy sweater for men.",
    },
    {
      id: 7,
      img: img7,
      name: "Men's Formal Pants",
      category: "Clothing",
      brand: "richman",
      price: "$70.00",
      oldPrice: "$80.00",
      stock: 35,
      rating: 4.3,
      reviews: 15,
      orders: 320,
      sales: "$24k",
      description: "Elegant and comfortable formal pants for men.",
    },
    {
      id: 8,
      img: img8,
      name: "Women's Pants",
      category: "Clothing",
      brand: "richman",
      price: "$55.00",
      oldPrice: "$65.00",
      stock: 45,
      rating: 4.2,
      reviews: 20,
      orders: 400,
      sales: "$28k",
      description: "Stylish and comfortable pants for women.",
    },
    {
      id: 9,
      img: img9,
      name: "Women's Formal Pants",
      category: "Clothing",
      brand: "richman",
      price: "$65.00",
      oldPrice: "$75.00",
      stock: 30,
      rating: 4.1,
      reviews: 18,
      orders: 360,
      sales: "$26k",
      description: "Elegant and stylish formal pants for women.",
    },
    {
      id: 10,
      img: img10,
      name: "Men's Watch",
      category: "Accessories",
      brand: "richman",
      price: "$150.00",
      oldPrice: "$200.00",
      stock: 15,
      rating: 4.9,
      reviews: 25,
      orders: 200,
      sales: "$30k",
      description: "Luxury watch for men with elegant design.",
    },
    {
      id: 11,
      img: img11,
      name: "Women's Sweater",
      category: "Clothing",
      brand: "richman",
      price: "$85.00",
      oldPrice: "$95.00",
      stock: 20,
      rating: 4.8,
      reviews: 22,
      orders: 250,
      sales: "$23k",
      description: "Warm and stylish sweater for women.",
    },
  ];

  return (
    <div className="table-responsive mt-3">
      <table className="table table-bordered v-align">
        <thead className="thead-dark ">
          <tr>
            <th>UID</th>
            <th style={{ width: "300px" }}>Product</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>RATING</th>
            <th>ORDER</th>
            <th>SALES</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>#{product.id}</td>
              <td>
                <div className="d-flex align-item-center productBox">
                  <div className="imgWrapper">
                    <div className="img">
                      <img src={product.img} alt="" className="w-100" />
                    </div>
                  </div>
                  <div className="info pl-2">
                    <h6>{product.name}</h6>
                    <p>{product.description}</p>
                  </div>
                </div>
              </td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>
                <div style={{ width: "70px" }}>
                  <span className="new">{product.price}</span>
                  <del className="old text-danger">{product.oldPrice}</del>
                </div>
              </td>
              <td>{product.stock}</td>
              <td>
                <div className="d-flex align-items-center">
                  {generateStars(product.rating)}
                  <span className="ml-2">({product.reviews})</span>
                </div>
              </td>
              <td>{product.orders}</td>
              <td>{product.sales}</td>
              <td>
                <div className="actions d-flex align-items-center">
                 
                    <Link to="/product/details"><Button className="secondary" color="secondary"><FaEye />   </Button></Link>
                 
                  <Button className="success" color="success">
                    <HiPencilAlt />
                  </Button>
                  <Button className="error" color="error">
                    <MdDelete />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex tableFooter">
        <p>
          showing <b>12</b> of <b>60</b> results
        </p>
        <Pagination
          count={10}
          color="primary"
          className="pagination"
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
};

export default TableComponent;
