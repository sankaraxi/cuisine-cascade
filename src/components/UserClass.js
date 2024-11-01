import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faMedium, faInstagram, faReddit } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

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
        <div className="user-card flex flex-col sm:flex-row items-center w-auto p-1 my-3 border border-slate-100 rounded-md shadow-xl"> 
            <img src={avatar_url} className='avatar w-[250px] object-cover object-center' alt="avatar" />
            <div className='user-info flex flex-col justify-center font-poppins p-1'>
                <h3 className='py-2 text-sm sm:text-md'><span className='font-bold'>Name:</span> {name}</h3>
                <h4 className='py-2 text-sm sm:text-md'><span className='font-bold'>Location:</span> {location}</h4>
                <h4 className='py-2 text-sm sm:text-md'><span className='font-bold'>Role:</span> Frontend Developer</h4>
                <h4 className='py-2 text-sm sm:text-md'><span className='font-bold'>Mail:</span> sankarfrompalani@gmail.com</h4>
                <div className='flex gap-3 justify-center sm:mt-5'>
                    <Link to='https://x.com/sankar_axi' target="_blank">
                        <span><FontAwesomeIcon icon={faXTwitter} /></span>
                    </Link>
                    <Link to='https://www.linkedin.com/in/sankargnanasekar/' target="_blank" >
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    </Link>
                    <Link to='' target="_blank" >
                        <span><FontAwesomeIcon icon={faMedium} /></span>
                    </Link>
                    <Link to='https://instagram.com/sankar_axi' target="_blank" >
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                    </Link>
                    <Link to='' target="_blank" >
                        <span><FontAwesomeIcon icon={faReddit} /></span>
                    </Link>
                </div>
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