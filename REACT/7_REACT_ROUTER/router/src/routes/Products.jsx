
import { useFetch } from '../hooks/useFetch'

import { useParams } from 'react-router-dom'

//8 nested route
import { Link } from 'react-router-dom';


function Products() {
    const { id } = useParams();

    const url = "http://localhost:3000/products/"+id;

    const { data: product } = useFetch(url);
   
     console.log(product)

    if (!product) return <p>Carregando...</p>

    return (
        <div>
            <p>Id do produto: {product.id}</p>
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                {/*8- Nested rout */}
                <Link to={`/products/${product.id}/info`}>info produto</Link>
            </div>
        </div>
    )
}

export default Products