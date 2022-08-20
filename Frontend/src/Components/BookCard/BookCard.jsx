import { Link } from "react-router-dom";
import styled from "styled-components";
import "./BookCard.css"

export const BookCard = ( {id, imageUrl, title, price, section} ) => {

  return <>
  <div className="bookCard">
    <img src={imageUrl} alt="Kuch nahi" className="image" />
    <h2 className="title"><strong>Title: </strong>{title}</h2>
    <p className="price"><strong>Price: </strong> ₹{price}</p>
    <p><strong>Section: </strong>{section}</p>
  </div>
  </>
  
};
