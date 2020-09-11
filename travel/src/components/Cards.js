import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
                <h1>Check out these EPIC Destinations!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem src="img/pic-7.jpg" text="Explore the hedden waterfall deep inside the Amazon Jungle" label='Hunt' path='/services' />
                            <CardItem src="img/pic-3.jpg" text="Travel through the Islands of Bali in a Private Cruise" label='Luxury' path='/services' />
                        </ul>
                        <ul className="cards__items">
                            <CardItem src="img/pic-10.jpg" text="Walk throung the City of live and water the Italy" label='Explore' path='/services' />
                            <CardItem src="img/pic-9.jpg" text="Greenland snow is Sparking like a million little suns" label='Adventure' path='/services' />
                            <CardItem src="img/pic-8.jpg" text="And to the desert Till go to lose your mind and find your soul in Sagara" label='Search' path='/services' />
                        </ul>
                        <ul className="cards__items">
                            <CardItem src="img/pic-11.jpg" text="Sail and lost in the Unknow with a style in Dubai" label='Astray' path='/services' />
                            <CardItem src="img/pic-12.jpg" text="Come to the World of football and history Spain" label='flourish' path='/services' />
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Cards
