import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

export default function Product() {
    // fetch product and send to single component

  return (
    <div>
        Product
        <Single data={singleProduct} />
    </div>
  )
}
