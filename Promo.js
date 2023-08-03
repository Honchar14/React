import React from "react";

class Promo extends React.Component {
    render() {
        return (
            <section className="promo">
                <div className="container">
                    <h1 className="promo_title">do it <span className="red">right</span></h1>
                    <div className="slider_container">
                        <Slider />
                    </div>
                </div>
            </section>
        );
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div className="slider_content">
                <h2 className="slider_title">nike <span className="red">air</span> max</h2>
                <p className="slider_subtitle">Nike introducing the new air max for everyone's comfort</p>
                <button className="slider_btn">Shop now</button>
            </div>
        );
    }
}

export default Promo