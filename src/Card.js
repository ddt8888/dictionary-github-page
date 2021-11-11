function Card({ word_picked }) {
    const cardStyle = {
        background: 'tan',
        margin: '250px auto',
        width: '30%',
        textAlign: 'center',
        padding: '20px'
    }
    return (

        <div style={cardStyle}>
            <h2>{word_picked.word}</h2>
            <h2>{word_picked.meaning}</h2>
        </div>
    )
}
export default Card;