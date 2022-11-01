

function Card({ id, image, title, description, openTab }) {

    return (
        <div className='card' onClick={() => openTab(id)}>
            <div className='card-image' style={{ backgroundImage: `url(${image})` }} ></div>
            <div className='card-title'>{title}</div>
            <div className='card-text'>{description}</div>
            <div style={{ color: 'blueviolet' }}>Click card for more...</div>
        </div>
    )
}

export default Card;