import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="mt-28 p-6 border border-gray-300 flex flex-col space-y-8 min-h-203  min-w-93.75 mx-auto">
      <div className="w-full">
        <h1 className="text-left text-2xl md:text-3xl font-medium  max-w-55 leading-tight">
          Signin to your PopX account
        </h1>
        <p className="max-w-65 opacity-[0.6ss] text-wrap text-base text-black font-normal text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <form className="flex flex-col space-y-6 w-full">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email Address"
        />
        <Input label="Password" placeholder="Enter password" />

        <Button type="submit" bgColor="bg-medium-grey" text="Login" />
      </form>
    </div>
  );
};

export default Login;
