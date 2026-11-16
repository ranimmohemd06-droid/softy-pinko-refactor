import Col from 'react-bootstrap/Col'

const TestimonialCard = ({ image, text, name, job }) => {
    return (
        <Col xs={12} sm={6} md={4} className="testimonial">
            <img src={image} alt={name} />
            <p>{text}</p>
            <div className="desc">
                <h5>{name}</h5>
                <p>{job}</p>
            </div>
        </Col>
    )
}

export default TestimonialCard