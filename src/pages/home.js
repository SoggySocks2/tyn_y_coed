import Card from '../components/card/card';
import cardImage1 from '../assets/images/img1.jpg';
import cardImage12 from '../assets/images/img12.jpg';


function home() {

    const propertyInfo = 
        "1 Tyn Y Coed Cottages is a well-presented semi-detached property in the heart of the beautiful Welsh countryside, near Conwy in the village of Deganwy. It comprises three bedrooms; one double, one king-size double and a single, all on the first floor and accompanied by a family bathroom. There is also a kitchen with a dining area and a sitting room with an imitation electric woodburner. Outside is a west-facing rear garden and an east-facing front garden with patio furniture. There is off-road parking for one car. Enjoy this luxurious North Wales home in style. Property is not suitable for InfantsNote: There will be houses being built in the adjacent field in 2020.";
    
        const companyInfo =    
        "We have been letting holiday cottages for more than 25 years. Our business has moved from the kitchen table to become the UK’s leading independent agency with more than 17,000 properties available across the UK and Ireland and New Zealand. We have won the Best UK Cottage Holiday Company at the British Travel Awards for the last 7 years running, so you know you're in safe hands when you book with us. Whether you are looking to book a large family gathering, an intimate weekend break for two, want to take your dog, stay in a magnifiicent castle, a yurt or a farm or any of our stunning properties - This is your time, use it well!";
      

    return (
        <>
            <Card imgSrc={cardImage12} className="card" imgAlt="Property information" width="100" cardTitle="Property information" cardText={propertyInfo} />
            <Card imgSrc={cardImage1} className="card" imgAlt="Company information" imgAlign="right" width="100" cardTitle="Company information" cardText={companyInfo} />
        </>
    );
}
    
export default home;