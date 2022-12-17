import React from 'react';
import ItemsCard from '../components/itemsCard';

export default function Audi () {
    const audidata={
        productData:[
            {
                id: 1,
                name:'Audi A6',
                img:"https://catalogue.automobile.tn/max/2022/10/46340.webp?t=1666961054",
                price:270990
            },
            {
                id: 2,
                name:'Audi Q5',
                img:"https://catalogue.automobile.tn/max/2022/06/46766.webp?t=1666781622",
                price:335990
            },
            {
                id: 1,
                name:'Audi Q8',
                img:"https://catalogue.automobile.tn/max/2022/10/45383.webp?t=1666970139",
                price:541990
            },
        ]
    }
    return (
        <div style={{  justifyContent:"space-between", textAlign:"center" ,margin:"50px 200px 100px 200px" }}>
            <div style={{ textAlign:"center", marginBottom:"50px" }}>
                <h1 style={{ fontSize:"40px"}}>*Audi*</h1>
            </div>
            <div style={{ display:"flex" , justifyContent:"space-between"}}>
            {audidata.productData.map((item,index)=>{
                return(
                    <ItemsCard img={item.img} name={item.name} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    );
}

