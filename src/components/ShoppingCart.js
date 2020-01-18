import React from 'react';

const ShoppingCart = (props) => {
    return ( 
        <div style={cartSession}>
            <div style={cart}>
                <div style={cartLogo}>
                    <p><i class="fas fa-shopping-cart"></i></p>
                </div>
                <div style={cartNumBack}>
                    <p style={cartNumDis}>{props.cartNum}</p> 
                </div>
            </div>
           <div style={cartCard}>
                {props.cartItems.map((item, index) =>
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.picture}</li>
                        <li>{item.price}</li>
                        <button onClick={props.delEvent.bind(this, item)}>Remove item</button>
                    </ul>
                )}
           </div>
           <div>
                <p>$ {props.totalCost}</p>
           </div>
        </div>
     );
}

const cartSession = {
    position: "relative",
}

const cart = {
    display: "flex",
}

const cartLogo = {
    color: "gray",
    margin: "0px 10px 0 0",
}

const cartNumDis = {
    fontWeight: "bold"
}

const cartNumBack = {
    height: "20px",
    width: "30px",
    borderRadius: "30px",
    backgroundColor: "gray",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const cartCard = {
    position: "absolute",
    height: "100px",
    width: "100px",
    top: "30px",
    right: "30px"
}
 
export default ShoppingCart;