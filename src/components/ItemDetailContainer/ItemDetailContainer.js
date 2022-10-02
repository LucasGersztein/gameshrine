import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return (
                <h1>Cargando</h1>
        )
    }

    return (
        <div className='Detalle'>
            <h1 className='DetalleTitulo'>Detalle de {product.name}</h1>
            <p className='DetalleP'>{product.description}</p>
        </div>
    )

}

export default ItemDetailContainer