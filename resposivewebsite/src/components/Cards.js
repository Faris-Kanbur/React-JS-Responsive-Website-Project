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
                            src="images/eng.gif"
                            text="English will open up different opportunities for you."
                            label="English"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/german.gif"
                            text="When analyzed numerically, it ranks second in the world after English in terms of the number of scientific articles prepared in German."
                            label="Deutsch"
                            path="/sevices"
                        />
                    </ul> 
                    <ul className="cards__item">
                        <CardItem 
                            src="images/arap.gif"
                            text="It is indisputable that the old Arabic script is impressive with its lines and structure."
                            label="Arabic"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/russ.gif"
                            text="Russian is a language spoken in a wide geography. Russian, in terms of number of speakers worldwide Chinese, English"
                            label="Russian"
                            path="/sevices"
                        />
                        <CardItem 
                            src="images/tr.gif"
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
