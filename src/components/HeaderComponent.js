import React from "react";
import LogoComponent from "./LogoComponent";
import ViewTitleComponent from "./ViewTitleComponent";
import './Component.css';

class HeaderComponent extends React.Component {
    // Define Constructor
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeInParent = this.changeInParent.bind(this);
    }

    //Define handleChange method
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    changeInParent(input) {
        this.setState({ value: input });
    }

    render() {
        return (
            <div className="HeaderComponent">
                <h2> I am Header Component with title from child: {this.state.value}</h2>
                <LogoComponent input={this.state.value}></LogoComponent>
                {/* Define event to handle changes in ViewTitleComponent */}
                <ViewTitleComponent handleChangeRef={this.changeInParent} input={this.state.value}></ViewTitleComponent>
            </div>
        );
    }
}
export default HeaderComponent;