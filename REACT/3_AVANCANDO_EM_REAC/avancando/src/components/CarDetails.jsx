
function CarDetails({brand, km, color}) {
  return (
    <div>
         <h2>Detalhe do carro</h2>
         <ul>
            <li>Marca: {brand}</li>
            <li>Kilometragem : {km}</li>
            <li>Cor : {color}</li>
         </ul>
    </div>
  )
}

export default CarDetails