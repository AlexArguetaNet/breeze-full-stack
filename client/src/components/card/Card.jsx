import "./Card.css"

function Card({ icon, data }) {
    return (
        <div className="card">
            <h3>{icon}</h3>
            <h3>{data}</h3>
        </div>
    )
}

export default Card

