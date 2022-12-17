import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Mercedes () {
    const mercedesdata={
        productData:[
            {
                id: 13,
                name:'Mercedes-Benz classe C',
                img:"https://catalogue.automobile.tn/max/2021/11/46672.webp?t=1667816244",
                price:215000
            },
            {
                id: 14,
                name:'Mercedes-Benz GLE',
                img:"https://catalogue.automobile.tn/max/2021/02/46535.webp?t=1613212040",
                price:480000
            },
            {
                id: 15,
                name:'Mercedes-Benz classe S',
                img:"https://catalogue.automobile.tn/max/2021/02/46524.webp?t=1613207671",
                price:699900
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 200px 100px 200px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Mercedes-Benz*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {mercedesdata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}