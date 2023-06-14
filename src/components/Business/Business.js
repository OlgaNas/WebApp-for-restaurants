import React from 'react';
import styles from './Business.module.css';

const businessObject = {
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
        <div className='business'>
            <img />
            <h3 id='name'>{ }</h3>
            <ul>
                <li id='address'></li>
                <li id='city'></li>
                <li id='state'></li>
                <li id='zipcode'></li>
                <li id='category'></li>
                <li id='rating'></li>
                <li id='reviewCount'></li>
            </ul>
        </div>
    )
};


const companies = [];
const company = companies.map(Business());

const searchBar = {
    bestMatch: "curl --request GET \
    --url 'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20' \
    --header 'accept: application/json'",
    highestRated: "curl --request GET \
    --url 'https://api.yelp.com/v3/businesses/search?sort_by=rating&limit=20' \
    --header 'accept: application/json'",
    mostReviewed: "curl --request GET \
    --url 'https://api.yelp.com/v3/businesses/search?sort_by=review_count&limit=20' \
    --header 'accept: application/json'"
};