import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Default',
            },
        };
    }

    async componentDidMount(){  
        const data = await fetch('https://api.github.com/users/sankaraxi');
        const jsonData = await data.json();

        console.log(jsonData);
        
        this.setState(
            {
                userInfo: jsonData,
            }
        );
    }  

  render() {
    const { name, location,avatar_url } = this.state.userInfo  ;
    debugger; 
    return (
        <div className="user-card"> 
            <img src={avatar_url} className='avatar' alt="avatar" />
            <div className='user-info'>
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h4>Contact: @sankaraxi</h4>
            </div>



            {/* <h4>Count : {count} (class)</h4>
            <h4>count2 : {count2} (class)</h4>
            <button onClick={() => {
                // Never update the state directly using this.state.count = this.state.count + 1;
                // Always use setState method to update the state
                this.setState({ 
                    count: count + 1,
                    count2: count2 + 2 
                 });
            }}>Increment</button> */}

        </div>
    );
  }
}

export default UserClass;