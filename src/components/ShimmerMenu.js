const ShimmerMenu = () => {
    return (
        <div className="pt-[80px] mx-4 my-6 sm:mx-56 sm:my-9 animate-pulse">

            {/* Shimmer Cards for Categories */}
            <div className="bg-transparent shadow-lg sm:my-3 sm:p-5 rounded-md">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex flex-col mb-4">
                        {/* Category Header Shimmer */}
                        <div className="flex justify-between items-center w-full h-9 sm:h-16 bg-gray-300 my-1 px-4 sm:my-3 sm:px-8 rounded-md">
                            <div className="h-4 sm:h-6 w-1/2 bg-gray-300 rounded-md"></div>
                            <div className="h-4 w-6 bg-gray-300 rounded-full"></div>
                        </div>
                        {/* Items Shimmer */}
                        <div className="ml-5">
                            {[...Array(3)].map((_, itemIndex) => (
                                <div
                                    key={itemIndex}
                                    className="bg-gray-200 h-6 sm:h-8 w-5/6 rounded-md my-2"
                                ></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShimmerMenu;