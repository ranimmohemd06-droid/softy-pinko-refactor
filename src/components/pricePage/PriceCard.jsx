import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const PriceCard = ({ name, price, featured, features }) => {
    return (
        <Col xs={12} md={6} lg={4} className="mb-4">
            <div className={featured ? 'list featured' : 'list'}>
                {featured && <span className="popular">Most Popular</span>}

                <p className="name">{name}</p>

                <div className="num">
                    <p><span>$</span> {price}</p>
                    <p><small>monthly</small></p>
                </div>

                <div className="details">
                    {features.map((feature) => (
                        <p key={feature.text} className={feature.included ? 'yes' : 'no'}>
                            <span>{feature.included ? '✓' : '✗'}</span> {feature.text}
                        </p>
                    ))}
                </div>

                <Button>PURCHASE NOW</Button>
            </div>
        </Col>
    )
}

export default PriceCard