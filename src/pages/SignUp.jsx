import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <div className="mt-28 mb-10 p-6 border border-gray-300 flex flex-col justify-between min-h-203  min-w-93.75 mx-auto">
      {/* Top Content */}
      <div className="space-y-6">
        {/* Heading */}
        <div className="w-full">
          <h1 className="text-3xl font-medium text-left max-w-60 leading-tight">
            Create your PopX account
          </h1>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-6 w-full">
          <Input label="Full Name" placeholder="Enter name" required />

          <Input
            label="Phone number"
            placeholder="Enter phone number"
            required
          />

          <Input
            label="Email address"
            type="email"
            placeholder="Enter email address"
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            required
          />

          <Input label="Company name" placeholder="Enter company name" />

          {/* Radio Buttons */}
          <div className="space-y-3">
            <p className="text-base font-medium">
              Are you an Agency?
              <span className="text-red-500">*</span>
            </p>

            <div className="flex items-center gap-6">
              {/* Yes */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  defaultChecked
                  className="
                    w-5
                    h-5
                    accent-primary
                    cursor-pointer
                  "
                />

                <span className="text-base">Yes</span>
              </label>

              {/* No */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="
                    w-5
                    h-5
                    accent-primary
                    cursor-pointer
                  "
                />

                <span className="text-base">No</span>
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Bottom Button */}
      <div className="mt-0">
        <Button
          text="Create Account"
          bgColor="bg-primary"
          className="w-full py-3 font-medium"
        />
      </div>
    </div>
  );
};

export default SignUp;
