"use client";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  outline?: boolean;
  fullWidth?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  fullWidth,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      disabled={pending}
      onClick={onClick}
      className={clsx(
        `bg-purple-600 rounded-md text-white h-full px-4 py-2 transition duration-300 hover:bg-purple-600/70 font-semibold`,
        fullWidth && "w-full"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
