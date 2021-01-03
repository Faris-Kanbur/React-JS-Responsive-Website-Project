import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/sevices"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                            src="images/img-3.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Mystery"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/img-4.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Adcenture"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/img-8.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Adrenaline"
                            path="/sing-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
