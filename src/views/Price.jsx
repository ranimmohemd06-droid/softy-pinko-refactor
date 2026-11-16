import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SectionTitle from '../components/SectionTitle'
import PriceCard from '../components/pricePage/PriceCard'

const plans = [
    {
        id: 1,
        name: 'Starter',
        price: '14.50',
        featured: false,
        features: [
            { text: '60 GB space', included: true },
            { text: '600 GB transfer', included: true },
            { text: 'Pro Design Panel', included: true },
            { text: '15-minute support', included: false },
            { text: 'Unlimited Emails', included: false },
            { text: '24/7 Security', included: false },
        ],
    },
    {
        id: 2,
        name: 'Premium',
        price: '21.50',
        featured: true,
        features: [
            { text: '120 GB space', included: true },
            { text: '1200 GB transfer', included: true },
            { text: 'Pro Design Panel', included: true },
            { text: '15-minute support', included: true },
            { text: 'Unlimited Emails', included: false },
            { text: '24/7 Security', included: false },
        ],
    },
    {
        id: 3,
        name: 'Advanced',
        price: '42.00',
        featured: false,
        features: [
            { text: '250 GB space', included: true },
            { text: '5000 GB transfer', included: true },
            { text: 'Pro Design Panel', included: true },
            { text: '15-minute support', included: true },
            { text: 'Unlimited Emails', included: true },
            { text: '24/7 Security', included: true },
        ],
    },
]

const Price = () => {
    return (
        <section className="price mt-5" id="price">
            <Container>
                <SectionTitle
                    title="Pricing Plans"
                    text="Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat."
                />
                <Row className="mt-5">
                    {plans.map((plan) => (
                        <PriceCard
                            key={plan.id}
                            name={plan.name}
                            price={plan.price}
                            featured={plan.featured}
                            features={plan.features}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Price