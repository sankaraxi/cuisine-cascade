import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {

    

    constructor(props) {
        super(props);
        // console.log("About constructor called");
    }

    componentDidMount(){
        // console.log("About componentDidMount called");
    }

    render() {
        return (
            <div className='pt-[80px] sm:mx-72 sm:h-screen'>
                <div className='about mx-14 my-4 sm:my-9'>
                    <h1 className='font-palanquin text-4xl text-center font-bold'>About Us</h1>
                    <h4 className='font-poppins text-md sm:text-lg my-3'>Welcome to Cuisine Cascade, your go-to online food delivery app. We are dedicated to bringing you a diverse range of culinary delights from the finest kitchens to your doorstep. Our commitment to quality and exceptional service ensures a seamless and satisfying experience, every time you order. Discover the taste of convenience with Cuisine Cascade.</h4>
                    <div className='card-container flex flex-col  items-center justify-center'>
                        {/* <User name="Sankar (function)"/> */}
                        <h4 className='font-semibold text-xl sm:text-2xl font-palanquin'>Creators</h4>
                        <UserClass name="Sankar (class)" location="Palani (class)"/>
                    </div>
                </div>
            </div>
            
        );

    }
   
}

export default About;
    