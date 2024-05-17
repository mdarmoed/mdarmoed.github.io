
import React, { useState } from 'react';

const CatCard = ({ name, age, description, image }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="kitten-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Возраст: {age}</p>
            {showMore && <p>{description}</p>}
            <button onClick={toggleShowMore}>
                {showMore ? 'Скрыть' : 'Показать больше'}
            </button>
        </div>
    );
};

export default CatCard;
