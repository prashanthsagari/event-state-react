import React from "react";
import LogoComponent from "./LogoComponent";
import ViewTitleComponent from "./ViewTitleComponent";
import './Component.css';

class HeaderComponent extends React.Component {
    // Define Constructor
    constructor(){}

    //Define handleChange method
    handleChange() { }

    render() {
        return (
            <div className="HeaderComponent">
                <h2> I am Header Component with title from child: {this.state.value}</h2>
                <LogoComponent input={this.state.value}></LogoComponent>
                {/* Define event to handle changes in ViewTitleComponent */}
                <ViewTitleComponent input={this.state.value}></ViewTitleComponent>
            </div>
        );
    }
}
export default HeaderComponent;