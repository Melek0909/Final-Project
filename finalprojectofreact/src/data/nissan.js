import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Nissan () {
    const nissandata={
        productData:[
            {
                id: 16,
                name:'Nissan Juke',
                img:"https://catalogue.automobile.tn/max/2021/06/46456.webp?t=1654602055",
                price:88700
            },
            {
                id: 17,
                name:'Nissan Qashqai',
                img:"https://catalogue.automobile.tn/max/2022/04/46746.webp?t=1665671971",
                price:124400
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 300px 100px 300px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Nissan*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {nissandata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}