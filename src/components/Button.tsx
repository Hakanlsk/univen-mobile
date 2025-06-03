import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 transition-colors";
  const variantStyles = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary: "border border-gray-200 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
