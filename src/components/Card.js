import styles from "styles/Card3.scss"
import AddToBasketBtn from "components/AddToBasketBtn";

const Card = ({ product }) => {
  return (
    <div className="productcard">
    <div className="cardfan">
      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/florence.jpg" alt="Photograph of Florence, Italy" id="roma" />
      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/roma.jpg" alt="Photograph of an ancient aqueduct, Italy" id="aqueduct" />
      <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/bike.jpg" alt="Photograph of a bike on a Roman Street" id="bike" />
    </div>
		<div className="productdetails">
      <div>
			<span className="productcatagory">{product.category}</span>
			<h4><a href="">{product.title}</a></h4>
			<p>{product.title}</p>
			<div>
				<div className="productprice"><small>INR {product.price.toFixed(2)*3}</small>INR {product.price.toFixed(2)}</div>
				<div className="productlinks">
					<a href=""><i className="fa faheart"></i></a>
					<a href=""><i className="fa fashoppingcart"></i></a>
				</div>
        <div className="badge">Hot</div>
        </div>
      <div className="productbottomdetails">
              <AddToBasketBtn data={product} />
      </div> 
			</div>
		</div>
	</div>
  );
};

export default Card;
