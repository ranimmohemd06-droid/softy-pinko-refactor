import Col from 'react-bootstrap/Col'

const WorkStep = ({ image, title, text }) => {
    return (
        <Col xs={12} md={4} lg={2} className="rocket">
            <img src={image} alt={title} />
            <h5>{title}</h5>
            <p>{text}</p>
        </Col>
    )
}

export default WorkStep