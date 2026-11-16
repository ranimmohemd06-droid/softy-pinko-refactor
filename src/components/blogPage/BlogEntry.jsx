import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const BlogEntry = ({ image, title, text }) => {
    return (
        <Col xs={12} md={6} lg={4} className="entry">
            <img src={image} alt={title} />

            <div className="txt">
                <h5><a href="#blog">{title}</a></h5>
                <p>{text}</p>
            </div>

            <Button>READ MORE</Button>
        </Col>
    )
}

export default BlogEntry