import ProductList from "../products.json";
import "./style.css";

const Cart = (props: any) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <div>
                <button>-</button>
                <span>{props.amount}</span>
                <button>+</button>
            </div>
        </div>
    );
}

export default Cart;