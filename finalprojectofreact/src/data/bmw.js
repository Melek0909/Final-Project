import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Bmw () {
    const bmwdata={
        productData:[
            {
                id: 4,
                name:'Bmw série 5',
                img:"https://catalogue.automobile.tn/big/2020/10/46434.webp?t=1",
                price:265700
            },
            {
                id: 5,
                name:'Bmw x3',
                img:"https://catalogue.automobile.tn/big/2021/09/46639.webp?t=1",
                price:324900
            },
            {
                id: 6,
                name:'Bmw x5',
                img:"https://catalogue.automobile.tn/big/2022/07/46785.webp?t=1",
                price:473600
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 200px 100px 200px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Bmw*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {bmwdata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}