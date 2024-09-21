const Contact = () => {
    return (
        <div className='contact mx-14 my-7'>
            <h1 className="font-palanquin text-4xl text-center font-bold"> Contact Us</h1>
            <div className="py-4">
                <p className="font-poppins text-lg"><span className="font-bold">Phone: </span> 1234567890</p>
                <p className="font-poppins text-lg"><span className="font-bold">Email: </span> cuisinecascade@escapade.in</p>
            </div>
            <div>
                <form>
                    <input className="border border-solid border-black m-2 p-2" type="text" placeholder="Name"/>
                    <input className="border border-solid border-black p-2 m-2" type="text" placeholder="Contact" />
                    <button className="border border-solid border-black hover:bg-black hover:text-white rounded-md p-2 m-2"  type="submit">Submit</button>
                </form>
            </div>
            
         </div>  
    );     
}

export default Contact;