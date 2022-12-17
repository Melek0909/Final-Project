import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Renault () {
    const renaultdata={
        productData:[
            {
                id: 21,
                name:'Renault Kwid Populaire',
                img:"https://catalogue.automobile.tn/max/2022/11/46708.webp?t=1667818243",
                price:25955
            },
            {
                id: 22,
                name:'Renault Clio',
                img:"https://catalogue.automobile.tn/max/2022/04/46752.webp?t=1667922782",
                price:55450
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 300px 100px 300px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Renault*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {renaultdata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}