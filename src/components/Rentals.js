import React from 'react'
import house1 from "../assets/house1.jpeg"
import Brazil from "../assets/Brazil.png"
import Canada from "../assets/Canada.png"
import Chile from "../assets/Chile.jpeg"
import Pacifico from "../assets/Pacifico.jpeg"
import Malibu from "../assets/Malibu.jpeg"
import Netherlands from "../assets/Netherlands.jpeg"
import Faroe from "../assets/Faroe.jpeg"
import Carolina from "../assets/Carolina.jpeg"


import Rental from './Rental';

function Rentals() {

    const rentals =[
        {tittle: "London, UK",name:"Micro Studio at Buckle Street Studios",img: house1, price: "239,00 £",rating:"5.0" },
        {tittle: "Brazil",name:"Wooden Triangle", img: Brazil, price: "129,00 £",rating:"4.3" },
        {tittle: "Canada",name:"New Moon Cottage",img: Canada, price: "133,00 £",rating:"4.9" },
        {tittle: "Chile",name:"Chile, Cottage",img: Chile, price: "359,00 £",rating:"4.3" },
        {tittle: "Costa Rica",name:"Casa Sea la Vie - Pacifico 103",img: Pacifico, price: "239,00 £",rating:"4.5" },
        {tittle: "Malibu, USA",name:"2022 Iconic Airstream",img: Malibu, price: "449,00 £",rating:"4.5" },
        {tittle: "Netherlands, EU",name:"Tiny wrap house 'Woodpecker' ",img: Netherlands, price: "139,00 £",rating:"3.9" },
        {tittle: "North Carolina, Usa,",name:"Perma Grin- Oceanfront 8 Bedroom Home",img: Carolina, price: "539,00 £",rating:"4.9" },
        {tittle: "Faroe Islands",name:"The Hidden People's Cottage by Vatnses Lake",img: Faroe, price: "739,00 £",rating:"4.1" },
        {tittle: "London, UK",name:"Micro Studio at Buckle Street Studios",img: house1, price: "239,00 £",rating:"5.0" },
        {tittle: "Brazil",name:"Wooden Triangle", img: Brazil, price: "129,00 £",rating:"4.3" },
        {tittle: "Canada",name:"New Moon Cottage",img: Canada, price: "133,00 £",rating:"4.9" },
    ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-3 px-5 '>
        {rentals.map((property) => <Rental title={property.tittle} image={property.img} price={property.price} rating={property.rating} name={property.name} />)}
    </div>
  )
}

export default Rentals