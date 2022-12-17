import React from 'react';

export default function Carmarks  () {
    return (
        <div>
            <div style={{ marginTop:"100px" }}>
                <h1 style={{ textAlign:"center" }}> *Our Marks* </h1>
            </div>
            <div style={{ textAlign:"center" }}>
                <div style={{ textAlign:"center", marginBottom:"80px", marginTop:"120px" }}>
                    <a href='/Bmw'><img src="https://cdn.pixabay.com/photo/2016/08/15/18/18/bmw-1596080_960_720.png" alt="bmw" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"250px", marginLeft:"100px"  }}/></a>
                    <a href='/Mercedes'><img src="https://i.pinimg.com/originals/3b/df/27/3bdf2786f9bba30a6ff1376c81b76c89.png" alt="mercedes-benz" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"250px",}}/></a>
                    <a href='/Audi'><img src="https://logos-marques.com/wp-content/uploads/2021/02/Audi-Logo.png" alt="audi" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"150px" }}/></a>
                </div>
                <div style={{ textAlign:"center", marginBottom:"80px", marginTop:"120px" }}>
                    <a href='/Ford'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/1024px-Ford_Motor_Company_Logo.svg.png" alt="ford" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"250px", marginLeft:"100px" }}/></a>
                    <a href='/Volkswagen'><img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" alt="volkswagen" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"250px" }}/></a>
                    <a href='/Peugeot'><img src="https://upload.wikimedia.org/wikipedia/fr/thumb/9/9d/Peugeot_2021_Logo.svg/1865px-Peugeot_2021_Logo.svg.png" alt="peugeot" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"150px" }}/></a>
                </div>
                <div style={{ textAlign:"center", marginBottom:"80px", marginTop:"120px" }}>
                    <a href='/Nissan'><img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png" alt="nissan" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"250px", marginLeft:"100px" }}/></a>
                    <a href='/Hyundai'><img src="https://logo-marque.com/wp-content/uploads/2021/03/Hyundai-Logo.png" alt="hyundai" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"250px" }}/></a>
                    <a href='/Renault'><img src="https://www.francecasse.fr/blog/wp-content/uploads/2014/01/2013.png" alt="renault" height={'190px'} width={'180px'} style={{ justifyContent:"space-around", marginRight:"150px" }}/></a>
                </div>
            </div>
        </div>
    );
}
