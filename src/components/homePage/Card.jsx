import Col from 'react-bootstrap/Col'

const Card = ({ image, title, text }) => {
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="feature-card">
                <div className="img">
                    <img src={image} alt={title} />
                </div>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </Col>
    )
}

export default Card