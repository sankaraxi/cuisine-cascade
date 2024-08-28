import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("UserClass constructor called");

        this.state = {
            count: 0,
            count2: 0,
        };
    }

    componentDidMount(){  
        console.log("UserClass componentDidMount called");
    }  

  render() {
    console.log("UserClass render called");
    const { name, location } = this.props;
    const { count,count2 } = this.state;

    return (
        <div className="user-card"> 
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
            <h4>Contact: @sankaraxi</h4>
            <h4>Count : {count} (class)</h4>
            <h4>count2 : {count2} (class)</h4>
            <button onClick={() => {
                // Never update the state directly using this.state.count = this.state.count + 1;
                // Always use setState method to update the state
                this.setState({ 
                    count: count + 1,
                    count2: count2 + 2 
                 });
            }}>Increment</button>

        </div>
    );
  }
}

export default UserClass;