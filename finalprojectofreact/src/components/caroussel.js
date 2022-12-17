import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Caroussel() {
return (
    <div style={{ marginTop:"50px" }}>
    <div style={{ textAlign:"center", marginBottom:"50px" }}>
        <h1 style={{ fontSize:"40px"}}>*Novelties*</h1>
    </div>
    <Carousel>
        <Carousel.Item style={{justifyContent:"center"}}>
        <img style={{ justifyContent:"cover" }}
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod/images/2021-audi-q5-45-premium-plus-321-edit-1616620325.jpg?crop=0.652xw:0.487xh;0.258xw,0.434xh&resize=1200:*"
            alt="First slide"/>
        <Carousel.Caption>
            <h3>Audi Q5</h3>
            <p>Découvrez le SUV iconique Audi Q5 et configurez-le, 
                réservez un essai ou découvrez le stock de véhicules disponibles immédiatement.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://www.forbes.com/wheels/wp-content/uploads/2021/06/2022_Mercedes-Benz_S-Class_SEO.jpg"
            alt="Second slide"/>

        <Carousel.Caption>
            <h3>Mercedes-Benz Classe S </h3>
            <p>La Mercedes-Benz Classe S est une gamme d'automobile luxueuse 
                du constructeur allemand Mercedes-Benz existant en berline, limousine, coupé et cabriolet.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hyundai_Tucson_%28NX4%29_IMG_3673.jpg/1200px-Hyundai_Tucson_%28NX4%29_IMG_3673.jpg"
            alt="Third slide"/>

        <Carousel.Caption>
            <h3>Hyundai Tucson</h3>
            <p>
            Découvrez le SUV Hyundai, le SUV Crossover compact TUCSON Hybrid. 
            Dynamique, élégant, confortable et sécurisé, il aura tout pour vous plaire.
            </p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous"/>
    </div>
);
}

export default Caroussel;
