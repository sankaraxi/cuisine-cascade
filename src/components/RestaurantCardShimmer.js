const RestaurantCardShimmer = () => {
    return (
        <div className="animate-pulse m-2 p-4 w-[300px] h-[400px] rounded-lg bg-gray-100">
            {/* Shimmer for Image */}
            <div className="bg-gray-300 w-full h-[150px] rounded-lg"></div>

            {/* Shimmer for Restaurant Name */}
            <div className="mt-4 space-y-2">
                <div className="bg-gray-300 h-6 w-3/4 rounded-md"></div> {/* Name Shimmer */}
                
                {/* Shimmer for Cuisines */}
                <div className="bg-gray-300 h-4 w-5/6 rounded-md"></div> {/* Cuisines Shimmer */}
                
                {/* Shimmer for Cost for Two */}
                <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div> {/* Cost Shimmer */}
                
                {/* Shimmer for Rating */}
                <div className="bg-gray-300 h-4 w-1/4 rounded-md"></div> {/* Rating Shimmer */}
            </div>
        </div>
    );
};

export default RestaurantCardShimmer;