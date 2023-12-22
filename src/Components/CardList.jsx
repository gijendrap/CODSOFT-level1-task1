import React from 'react';
import '../Css/Cardlist.css';
import '../Css/Card.css';

const YourCombinedComponent = () => {
  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description for Card 1',
      image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description for Card 2',
      image: 'url_to_image_2',
    },
    {
      id: 15,
      title: 'Card 15',
      description: 'This is the description for Card 15',
      image: 'url_to_image_15',
    },
    {
      id: 16,
      title: 'Card 16',
      description: 'This is the description for Card 16',
      image: 'url_to_image_16',
    },
    {
      id: 17,
      title: 'Card 17',
      description: 'This is the description for Card 17',
      image: 'url_to_image_17',
    },
  ];

  const leftSideCards = cardData.slice(0, Math.ceil(cardData.length / 2));
  const rightSideCards = cardData.slice(Math.ceil(cardData.length / 2));

  return (
    <div className="card-container">
      <div className="card-side">
        <div className="card-list">
          {leftSideCards.map((card) => (
            <div id={`card${card.id}`} className="dodi" key={card.id}>
              <img src={card.image} alt={`Card ${card.id}`} />
              <div className="card__content">
                <p className="card__title">{card.title}</p>
                <p className="card__description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-side">
        <div className="card-list">
          {rightSideCards.map((card) => (
            <div id={`card${card.id}`} className="dodi" key={card.id}>
              <img src={card.image} alt={`Card ${card.id}`} />
              <div className="card__content">
                <p className="card__title">{card.title}</p>
                <p className="card__description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourCombinedComponent;
