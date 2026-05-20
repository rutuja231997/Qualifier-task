const Button = ({
  onClick,
  text,
  textColor = "text-white",
  bgColor = "bg-blue-500",
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${bgColor} ${textColor} w-full text-base font-semibold px-4 py-3 rounded-lg text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
