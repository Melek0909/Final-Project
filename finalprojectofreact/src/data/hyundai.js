import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Hyundai () {
    const hyundaidata={
        productData:[
            {
                id: 10,
                name:'Hyundai Kona',
                img:"https://catalogue.automobile.tn/max/2022/02/46721.webp?t=1669274948",
                price:104950
            },
            {
                id: 11,
                name:'Hyundai Tucson',
                img:"https://catalogue.automobile.tn/max/2021/08/46621.webp?t=1660683185",
                price:157950
            },
            {
                id: 12,
                name:'Hyundai Palisade',
                img:"https://catalogue.automobile.tn/max/2021/08/46624.webp?t=1650953032",
                price:309950
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 200px 100px 200px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Hyundai*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {hyundaidata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}