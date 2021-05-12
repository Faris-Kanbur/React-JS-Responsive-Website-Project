import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Was möchten Sie lesen ?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item"> 
                        <CardItem 
                            src="images/eng.gif"
                            text="Deutsch lernen indem Sie Geschichten lesen"
                            label="Geschichten"
                            path="/story"
                        />
                        <CardItem 
                            src="images/german.gif"
                            text="Deutsch lernen indem Sie Bible lesen"
                            label="Bible"
                            path="/bible"
                        />
                    </ul> 
                    <ul className="cards__item">
                        <CardItem 
                            src="images/arap.gif"
                            text="Deutsch lernen indem Sie Nacrichten lesen"
                            label="Nachrichten"
                            path="/news"
                        />
                        <CardItem 
                            src="images/russ.gif"
                            text="Deutsch lernen indem Sie Märchen lesen "
                            label="Märchen"
                            path="/tale"
                        />
                        <CardItem 
                            src="images/tr.gif"
                            text="Deutsch lernen indem Sie Diologe lesen "
                            label="Diologe"
                            path="/dialog"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
