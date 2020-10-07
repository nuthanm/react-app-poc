import React from 'react'
import ReactDOM from 'react-dom'

class Footer extends React.Component{
    render() {
        return (
            <div>
                &copy; Every One
            </div>
        );
    }
        
}
ReactDOM.render(<Footer />, document.getElementById('footer'));
