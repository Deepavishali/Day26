import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import { Badge } from '@chakra-ui/react'
import { CardInfo } from './CardInfo.js';


function Rating() {
  return (
    <div style={{ textAlign: "center" }}>
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
      <StarIcon style={{ color: "orange" }} />
    </div>
  )
}

function Sale() {
  return (

    <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem", fontWeight: "bolder", fontSize: "20px" }}>Sale</div>

  )
}

function Info(props) {

  const handleClick = event => {
    console.log(event)
    console.log("clicked add to cart")
    event.target.disabled = true;
  };
  return (
    <div>
      {CardInfo.map((object) => (
        <div style={{ display: 'inline-flex' }} >
          <Card style={{ width: '18rem', height: '30rem', marginLeft: '150px', marginTop: '100px' }}>
            {/* badge */}
            {object.badge === true ? <Sale /> : false}
            <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>{object.product}</Card.Title>
              {/* Rating */}
              {object.rating === true ? <Rating /> : false}
              <br />
              <Card.Text>
                {/* price */}
                <div style={{ paddingLeft: '60px', fontWeight: 'bolder' }}>Price Range : {object.price}</div>
                <br />
                <div>
                  <Button variant="outline-dark" style={{ height: '40px', width: '180px', marginLeft: '25px' }} onClick={(event) => { props.increment(); handleClick(event) }}>Add to Cart</Button>
                  <br />
                  <br />
                  <Button variant="outline-dark" style={{ height: '40px', width: '180px', marginLeft: '25px' }} onClick={(event) => { props.decrement() ; handleClick(event)}} >Remove from Cart</Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}

    </div>
  );
}
export default Info;
