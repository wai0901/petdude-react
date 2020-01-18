import React, { Component } from 'react';
import uuid from 'uuid';
import '../innerComponents/ContentsSession.css'

class ContentsSession extends Component {

    render() { 
        const homeState = this.props.getStatus[0].home;
        const productState = this.props.getStatus[0].brands;
        const servicesState = this.props.getStatus[0].services;
        const helpState = this.props.getStatus[0].help;
        return ( 
            <div className="contentsSession">
                <div style={title} className={`${homeState? "cardShow": "cardHide"}`}>
                    <h1 style={petDude}><span className="p">P</span><span className="et">et</span><span className="d">D</span>ude</h1>
                    <p style={petDudeText}>The perfect place to find everything you need for your little family member</p>
                </div>
                <div style={products} className={`${productState? "productsBackShow": "productsBackHide"}`}>
                    <div>
                        <div className={`${productState? "cardShow": "cardHide"}`}>
                           {
                            this.props.getBrandList.map((item) => 
                                <div key={item.id} className="itemsContainer">
                                    <div className="items">
                                        <p style={itemName} className="item">{item.name}</p>
                                    </div>
                                   <div className="items">
                                        <p style={itemImage} className="item"><img src={item.imgUrl} /></p>
                                   </div>
                                   <div className="items">
                                        <p style={itemPrice} className="item">${item.price}</p>
                                   </div>
                                   {/* <div className="items">
                                        <p style={itemDes} className="item">{item.description}</p>
                                   </div> */}
                                    <div style={starContainer}>
                                        <div style={starIcons}>
                                            {this.props.getStars.map(numStar => 
                                                <svg style={starIcon} key={uuid.v4()} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 starShade" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                )}
                                        </div>
                                        <div style={starIcons}>
                                            {[...Array(item.rating)].map(numShadeStar => 
                                                <svg style={starIconColor} key={uuid.v4()} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 starShade" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            )}
                                        </div>
                                    </div>
                                    <button className="itemButton" onClick={this.props.addEvent.bind(this, item.id)}>add to cart</button>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={`${servicesState? "cardShow": "cardHide"}`}>
                        <h1>This is ServiceSession</h1>
                    </div>
                    <div className={`${helpState? "cardShow": "cardHide"}`}>
                        <h1>This is HelpSession</h1>
                    </div>
                </div>
            </div>
         );
    }
}

const title = {
    height: "100%",
    display: "block"
    // backgroundColor: "#E4EBEC"
}

const products = {
    height: "80vh",
}

// const productsBackContainer = {
//     width: "40vw",
//     overflow: "hidden",
// }

const petDude = {
    fontSize: "10.5vw",
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: "-0.3rem",
    color: "#537E98"
}

const petDudeText = {
    fontSize: "1.2vw",
    textTransform: "uppercase",
    color: "#537E98",
    marginLeft: "10px",
    marginTop: "-20px"
}

const itemName = {
    fontSize: ".9rem",
    fontWeight: "bold"
}

const itemImage = {
    width: "50px",
    top: "50px"
}

const itemPrice = {
    fontWeight: "bold",
    top: "250px"
}

// const itemDes = {
//     fontSize: "0.8rem",
//     top: "280px"
// }

const starContainer = {
    position: "relative",
    top: "300px",
    margin: "5vh 0 0 3vw"
}

const starIcons = {
    position: "absolute",
    bottom: "5px"
}

const starIcon = {
    width: "13px"
}

const starIconColor = {
    width: "13px",
    color: "blue"
}

 
export default ContentsSession;


