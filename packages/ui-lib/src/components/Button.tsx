

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
