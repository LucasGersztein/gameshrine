import { Link } from "react-router-dom"
import Button from '../Button/Button';
import Card from 'react-bootstrap/Card';
import './ItemList.css'

const ItemList = ({ products }) => {
    return (        
        <div className="CardGroup">
        { products.map(products => <Link to={`/detail/${products.id}`} key={products.id}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.img} alt={products.name}/>
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>
                ${products.price}
                </Card.Text>
                <Button label='Comprar'></Button>
            </Card.Body>
            </Card> 
            </Link>)}
        </div>          
    )
}

export default ItemList