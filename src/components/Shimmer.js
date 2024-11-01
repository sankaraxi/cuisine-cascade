// Desc: Shimmer effect for loading
// Shimmer ui

const Shimmer = () => {
    return (
        <div className="mt-[100px] sm:mx-20">

        <div className="animate-pulse mx-5 py-5">
            {/* Shimmer for Filter/Search Section */}
            <div className="filter flex flex-col items-center justify-center m-2 p-2">
                <div className="flex items-center justify-center mt-2 pt-2 w-full">
                    <div className="bg-gray-300 rounded-md w-5/6 sm:w-1/3 h-10 sm:h-12"></div>
                    <div className="bg-orange-200 rounded-md w-1/4 sm:w-20 h-10 sm:h-12 ml-2"></div>
                </div>
            </div>


        </div>
            <div className="shimmer-wrapper flex justify-between flex-wrap mx-10 sm:mx-7 my-1 p-4">
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                <div className="shimmer-card shimmer-effect bg-gray-100 m-1 p-2 w-[300px] h-[400px] rounded-md"></div>
                
            </div>
        </div>
        
    );
};

export default Shimmer;