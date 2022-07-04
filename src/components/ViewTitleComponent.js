import React from 'react';

class ViewTitleComponent extends React.Component {
    // Define Constructor
    constructor(){}

    // Define handleValChange method
    handleValChange() { }

    render() {
        return (
            <div className="ViewTitleComponent">
                <form>
                    <div>
                        <label>View Title:</label>
                        {/* Define input foeld to handle changes */}
                        <input  />
                    </div>
                </form>
                <p>Title value: {this.props.input}</p>
            </div>
        );
    }
}
export default ViewTitleComponent;