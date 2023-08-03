import React from "react";
import Header from "./Header";
import Drops from "./Drops";
import Promo from "./Promo";
import Categories from "./Categories";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Promo />
                <Drops />
                <Categories />
            </div>
        );
    }
}

export default App