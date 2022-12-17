import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Ford () {
    const forddata={
        productData:[
            {
                id: 7,
                name:'Ford Focus',
                img:"https://catalogue.automobile.tn/max/2022/03/46731.webp?t=1663067751",
                price:89990
            },
            {
                id: 8,
                name:'Ford Ranger',
                img:"https://catalogue.automobile.tn/max/2019/06/44933.webp?t=1668071224",
                price:179300
            },
            {
                id: 9,
                name:'Ford Ecosport',
                img:"https://catalogue.automobile.tn/max/2021/01/42248.webp?t=1663067011",
                price:74800
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 200px 100px 200px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Ford*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {forddata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}