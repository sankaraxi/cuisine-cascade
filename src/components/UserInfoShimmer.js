const UserInfoShimmer = () => {
    return (
        <div className="animate-pulse flex flex-col sm:flex-row items-center w-auto p-4 my-3">
        {/* Avatar Shimmer */}
        <div className="bg-gray-300 w-[250px] h-[250px] rounded-md object-cover object-center"></div>

        {/* User Info Shimmer */}
        <div className="user-info flex flex-col justify-center font-poppins p-4 w-full sm:w-auto">
            {/* Shimmers for Name, Location, Role, and Mail */}
            <div className="py-2 space-y-2">
                <div className="bg-gray-300 h-4 w-1/2 rounded-md"></div> {/* Name Shimmer */}
                <div className="bg-gray-300 h-4 w-1/3 rounded-md"></div> {/* Location Shimmer */}
                <div className="bg-gray-300 h-4 w-1/4 rounded-md"></div> {/* Role Shimmer */}
                <div className="bg-gray-300 h-4 w-2/3 rounded-md"></div> {/* Mail Shimmer */}
            </div>

            {/* Shimmer for Social Media Icons */}
            <div className="flex gap-4 justify-center mt-5">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="bg-gray-300 h-6 w-6 rounded-full"></div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default UserInfoShimmer;