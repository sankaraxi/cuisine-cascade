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
    return (
        <div className="user-card flex w-[500px] p-3 m-3 border border-slate-100 rounded-md shadow-xl"> 
            <img src={avatar_url} className='avatar w-[250px] object-cover object-center' alt="avatar" />
            <div className='user-info flex flex-col justify-center font-poppins'>
                <h3 className='py-2'><span className='font-bold'>Name:</span> {name}</h3>
                <h4 className='py-2'><span className='font-bold'>Location:</span> {location}</h4>
                <h4 className='py-2'><span className='font-bold'>Contact:</span> @sankaraxi</h4>
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