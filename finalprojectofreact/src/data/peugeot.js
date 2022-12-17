import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Peugeot () {
    const peugeotdata={
        productData:[
            {
                id: 18,
                name:'Peugeot 301',
                img:"https://catalogue.automobile.tn/max/2013/03/30709.webp?t=1646901291",
                price:52990
            },
            {
                id: 19,
                name:'Peugeot 5008',
                img:"https://catalogue.automobile.tn/max/2021/07/46613.webp?t=1646901348",
                price:160900
            },
            {
                id: 20,
                name:'Peugeot Expert',
                img:"https://catalogue.automobile.tn/max/2020/01/46321.webp?t=1667215030",
                price:80900
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 200px 100px 200px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Peugeot*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {peugeotdata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}