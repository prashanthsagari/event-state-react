import React from 'react';

class ViewTitleComponent extends React.Component {
    // Define Constructor
    constructor(props) {
        super(props);
        this.handleValChange = this.handleValChange.bind(this);
    }

    // Define handleValChange method
    handleValChange(event) {
        this.props.changeInParent(event.target.value);
    }

    render() {
        return (
            <div className="ViewTitleComponent">
                <form>
                    <div>
                        <label>View Title:</label>
                        {/* Define input foeld to handle changes */}
                        <input type="text" className="form-control"
                            onChange={this.handleValChange.bind(this)} placeholder="Value" />
                    </div>
                </form>
                <p>Title value: {this.props.input}</p>
            </div>
        );
    }
}
export default ViewTitleComponent;