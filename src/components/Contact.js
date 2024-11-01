const Contact = () => {
    return (
        <div className='pt-[80px] sm:mx-72 sm:h-screen'>
            <div className='contact mx-10 sm:mx-14 my-4 sm:my-9'>
                <h1 className="font-palanquin text-4xl text-center font-bold"> Contact Us</h1>
                
                <div className="border border-black mt-5 p-5 ">
                    <p className="text-center font-semibold text-lg sm:text-xl">Your Feedback is our fuel!</p>
                    <form className="flex flex-col sm:mx-24">
                        <input className="border border-solid border-black sm:m-2 my-1 p-2" type="text" placeholder="Name"/>
                        <input className="border border-solid border-black sm:m-2 my-1 p-2" type="text" placeholder="Email" />
                        <input className="border border-solid border-black sm:m-2 my-1 p-2 h-16 text-wrap" type="text" placeholder="Your Feedback Here..." />
                        <button className="border border-solid border-black hover:bg-black hover:text-white rounded-md sm:m-2 my-1 p-2"  type="submit">Submit</button>
                    </form>
                </div>

                <div className="mt-5 gap-3 flex flex-col">
                    <p className="text-center font-semibold text-lg sm:text-xl">Feel free to contact us anytime!</p>
                    <div className="text-md sm:text-xl flex flex-col gap-2">
                        <p className="font-poppins "><span className="font-bold">Phone: </span> +91 0987654321</p>
                        <p className="font-poppins "><span className="font-bold">Email: </span> thescapadecafe@outlook.com</p>
                        <p className="font-poppins "><span className="font-bold">Address: </span> 97/2, Subramanyapuram Road, Palani</p>
                    </div>
                </div>
            
             </div>  
        </div>
        
    );     
}

export default Contact;