import Card from '../components/card/card';
import cardImage1 from '../assets/images/img1.jpg';
import cardImage2 from '../assets/images/img12.jpg';

function home() {
    return (
        <>
        <Card imgSrc={cardImage1} className="card" imgAlt="Test Card" imgHeight="20" width="200" cardTitle="Welcome" cardText="Absolute Precision Detailing are Car Detailing and Car Valeting Specialists based in Conwy, North wales. With over 15 years of professional experience in Car Detailing and Car Valeting using the best products and carefully honed skills to produce the supreme standards that the owners of cars, motorbikes and luxury yachts have come to expect. We go the extra mile to provide services exceeding the quality of a showroom finish, with our passion for detailing and meticulous nature allowing us to deliver on our 100% satisfaction guarantee" />
        <Card imgSrc={cardImage2} className="card" imgAlt="Test Card" imgAlign="right" width="200" cardTitle="Welcome" cardText="Absolute Precision Detailing are Car Detailing and Car Valeting Specialists based in Conwy, North wales. With over 15 years of professional experience in Car Detailing and Car Valeting using the best products and carefully honed skills to produce the supreme standards that the owners of cars, motorbikes and luxury yachts have come to expect. We go the extra mile to provide services exceeding the quality of a showroom finish, with our passion for detailing and meticulous nature allowing us to deliver on our 100% satisfaction guarantee" />
        </>
    );
}
    
export default home;