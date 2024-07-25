interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#1B3252] cursor-pointer text-[#FFFFFF] px-5 py-1 rounded-md ml-2"
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Button;
