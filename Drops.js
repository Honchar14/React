import React from "react";

class Drops extends React.Component {
    render() {
        return (
            <section className="drops">
                <div className="container">
                    <h1 className="drops_title">don't miss out new <span className="red_drop">drops.</span></h1>
                    <div className="drops_btn">
                        <button className="main_btn">Shop now</button>
                    </div>
                    <div className="drops__cards">
                        <Card imageUrl="/img/card1.png" title="adidas 4dfwd x parley running shoes" price="$125" />
                        <Card imageUrl="/img/card1.png" title="adidas 4dfwd x parley running shoes" price="$125" />
                        <Card imageUrl="/img/card1.png" title="adidas 4dfwd x parley running shoes" price="$125" />
                        <Card imageUrl="/img/card1.png" title="adidas 4dfwd x parley running shoes" price="$125" />
                    </div>
                </div>
            </section>
        );
    }
}

class Card extends React.Component {
    render() {
        const { imageUrl, title, price } = this.props;
        return (
            <div className="card">
                <img src={imageUrl} alt="" className="card_img" />
                <h3 className="card_title">{title}</h3>
                <button className="card_btn">View product - ${price}</button>
            </div>
        );
    }
}

export default Drops