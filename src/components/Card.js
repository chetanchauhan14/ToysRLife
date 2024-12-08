import styles from "styles/Card3.scss"
import AddToBasketBtn from "components/AddToBasketBtn";
import { Link } from "react-router-dom";
import slugify from "slugify";

const Card = ({ product }) => {
  return (
    <div className="productcard">
    <Link to={`/ToysRLife/product/${product.id}`} >
    <div className="cardfan">
      <img src={(product.img1==="")?("//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/florence.jpg"):(process.env.PUBLIC_URL+"/"+product.img1)} alt={product.title} id="roma" />
      <img src={(product.img2==="")?("//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/roma.jpg"):(process.env.PUBLIC_URL+"/"+product.img2)} alt={product.title} id="aqueduct" />
      <img src={(product.img3==="")?("//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/bike.jpg"):(process.env.PUBLIC_URL+"/"+product.img3)} alt={product.title} id="bike" />
    </div>
		<div className="productdetails">
      <div>
        <div/>
			<div className="productcatagory">{product.category}</div>
			<h4><a href={`product/${product.id}`}>{product.title}</a></h4>
			<p>{product.title}</p>
			<div>
				<div className="productprice"><small>INR {product.mrp.toFixed(2)}</small>INR {product.price.toFixed(2)}</div>
        <div className="badge">{product.badge}</div>
        </div>
      <div className="productbottomdetails">
              <AddToBasketBtn data={product} />
      </div> 
			</div>
		</div>
    </Link>
	</div>
  );
};

export default Card;
