import '../Card/CardData-style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import config from '../../config.json'

const CardData = () => {
  
  let CardArr = config;

  return (
    <>
      <div className="container">
        <div className='row' style={{marginTop:'2%', marginLeft:'2%'}}>
          {CardArr.map((eachCard, index) => (
            <div key={index} className="col-md-3" style={{marginBottom:'4%'}}>
              <Card key={index}style={{ width: '18rem', height:'63vh' }}>
              <Card.Img variant="top" src={eachCard.img} />
              <Card.Body>
                <Card.Title>{eachCard.title}</Card.Title>
                <Card.Text style={{height:'25vh'}}>{eachCard.text}</Card.Text>
                <Button variant="primary" href={`${eachCard.link}`}> See more Info</Button>
              </Card.Body>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardData