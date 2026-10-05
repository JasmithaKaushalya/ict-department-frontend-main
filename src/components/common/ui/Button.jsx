import { Link } from "react-router-dom";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  to,
  className = "",
  disabled = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",

    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",

    outline:
      "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",

    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

export default Button;
