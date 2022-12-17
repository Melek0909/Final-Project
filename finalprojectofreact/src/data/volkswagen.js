import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Volkswagen () {
    const volkswagendata={
        productData:[
            {
                id: 23,
                name:'Volkswagen Polo Sedan',
                img:"https://catalogue.automobile.tn/max/2013/08/6215.webp?t=1659084032",
                price:64980
            },
            {
                id: 24,
                name:'Volkswagen Passat',
                img:"https://catalogue.automobile.tn/max/2020/06/46380.webp?t=1659083970",
                price:124980
            },
            {
                id: 25,
                name:'Volksagen Tiguan',
                img:"https://catalogue.automobile.tn/max/2021/04/46587.webp?t=1641714156",
                price:132980
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 200px 100px 200px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Volkswagen*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {volkswagendata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}