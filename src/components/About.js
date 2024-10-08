import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        console.log("About constructor called");
    }

    componentDidMount(){
        console.log("About componentDidMount called");
    }

    render() {
        console.log("About render called");
        return (
            <div className='about mx-14 my-7'>
                <h1 className='font-palanquin text-4xl text-center font-bold'>About Us</h1>
                <h4 className='font-poppins text-lg'>Welcome to Cuisine Cascade, your go-to online food delivery app. We are dedicated to bringing you a diverse range of culinary delights from the finest kitchens to your doorstep. Our commitment to quality and exceptional service ensures a seamless and satisfying experience, every time you order. Discover the taste of convenience with Cuisine Cascade.</h4>
                <div className='card-container flex'>
                    {/* <User name="Sankar (function)"/> */}
                    <UserClass name="Sankar (class)" location="Palani (class)"/>
                </div>
            </div>
        );

    }
   
}

export default About;
    