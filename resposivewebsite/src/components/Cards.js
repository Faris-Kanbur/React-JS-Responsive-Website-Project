import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Which language do you want to learn ?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                            src="images/img-9.png"
                            text="English will open up different opportunities for you."
                            label="English"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text="When analyzed numerically, it ranks second in the world after English in terms of the number of scientific articles prepared in German."
                            label="Deutsch"
                            path="/sevices"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                            src="images/img-3.jpg"
                            text="It is indisputable that the old Arabic script is impressive with its lines and structure."
                            label="Arabic"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/img-4.png"
                            text="Russian is a language spoken in a wide geography. Russian, in terms of number of speakers worldwide Chinese, English"
                            label="Russian"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/img-18.jpg"
                            text="It is estimated that more than 20 thousand words are used and transferred from Turkish to other world languages."
                            label="Türkish"
                            path="/register"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
