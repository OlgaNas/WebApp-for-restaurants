import React from 'react';
import styles from './Business.module.css';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};


function Business() {
    return (
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={business.imageSrc} alt="" />
            </div>
            <h2>{business.name}</h2>
            <div className={styles.BusinessInformation}>
                <ul>
                    <li>{business.address}</li>
                    <li>{business.city}</li>
                    <li>{business.state}</li>
                    <li>{business.zipCode}</li>
                    <li>{business.category.toUpperCase()}</li>
                    <li className={styles.rating}>{`${business.rating} ⭐`}</li>
                    <li>{`${business.reviewCount} reviews`}</li>
                </ul>
            </div>
        </div>
    );
};


export default Business;