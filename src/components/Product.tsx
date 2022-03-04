import ProductList from "../products.json";
import "./style.css";

const Product = (props: any) => {
    return (
        <div>
            <img src={props.img} className="img" alt="" />
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <button onClick={props.action}>Add to Card</button>
        </div>
    );
}

export default Product;