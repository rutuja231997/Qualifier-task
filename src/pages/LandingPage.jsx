import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="
        p-6
        border
        border-gray-300
        flex
        flex-col
        justify-end
        items-start
        min-h-203
        w-full
        mb-16
        max-w-93.75
        bg-[#F7F8F9]
      "
    >
      <h1 className="text-3xl font-medium">Welcome to PopX</h1>

      <p className="text-base text-black/60 mt-2 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="w-full space-y-3">
        <Button
          type="button"
          text="Create Account"
          bgColor="bg-primary"
          className="w-full py-3"
          onClick={() => navigate("/sign-up")}
        />

        <Button
          type="button"
          text="Already Registered? Login"
          bgColor="bg-secondary"
          className="w-full py-3"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default LandingPage;
