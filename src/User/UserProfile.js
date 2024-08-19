import React from 'react';

const UserProfile = ({ userProfile }) => {
    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-lg mx-auto bg-gradient-to-br from-blue-200 to-blue-100 shadow-md rounded-md mt-16 overflow-hidden p-5">
            <div className="border-4 border-black py-14">
                <div className="flex">
                    {/* Adjusted size of image container */}
                    <div className='w-40 h-34 border-4 border-black ml-4 overflow-hidden'>
                        <img className="w-full h-full object-cover" src={userProfile.picture.large} alt="User" />
                    </div>
                    <div className="p-4 ml-10">
                        <div className='flex text-gray-600 font-semibold'>
                            <h1>{`${userProfile.name.title} ${userProfile.name.first}`}</h1>
                            <h1 className="ml-7">{`${userProfile.name.last}`}</h1>
                        </div>
                        <div className='font-semibold text-gray-600 font-semibold'>
                            <h1>{userProfile.gender}</h1>
                            <h1>{userProfile.phone}</h1>
                            <h1>{`${userProfile.location.city}, ${userProfile.location.state}, ${userProfile.location.country}`}</h1>
                            <p className="text-gray-600 whitespace-normal">{`${userProfile.location.street.number} ${userProfile.location.street.name}`}</p>
                            <p className="text-gray-600 whitespace-normal">Postcode: {userProfile.location.postcode}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
