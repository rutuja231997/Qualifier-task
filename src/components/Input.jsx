const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="relative w-full">
      {/* Label */}
      <label
        className="
          absolute
          -top-3
          left-3
          bg-white
          px-1
          text-sm
          text-primary
          font-medium
        "
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          outline-none
          focus:border-primary
        "
      />
    </div>
  );
};

export default Input;
