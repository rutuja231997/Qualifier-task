import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  );

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="mt-28 min-h-203 max-w-93.75 mx-auto border border-gray-300 bg-light-grey">
      {/* Header */}
      <div className="bg-white px-4 py-5 shadow-sm">
        <h1 className="text-xl font-medium">Account Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-6 bg-[#f7f7f7]">
        {/* User Info */}
        <div className="flex items-start gap-4">
          {/* Profile Image */}
          <div className="relative">
            <img
              src={profileImage}
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />

            {/* Upload Button */}
            <label
              className="
                absolute
                bottom-0
                right-0
                bg-primary
                text-white
                p-2
                rounded-full
                shadow-md
                cursor-pointer
              "
            >
              <FaCamera size={12} />

              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Name & Email */}
          <div className="pt-2">
            <h2 className="text-lg font-bold">Marry Doe</h2>

            <p className="text-gray-700">Marry@gmail.com</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-[15px] leading-7 text-black">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        {/* Dashed Divider */}
        <div className="border-t-2 border-dashed border-gray-300 mt-6"></div>
      </div>
    </div>
  );
};

export default Profile;
