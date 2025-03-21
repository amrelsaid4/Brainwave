import Brackets from "../assets/svg/Backets";
import "../index.css"

interface TagLineProps {
  className?: string;
  children: React.ReactNode;
}

const TagLine: React.FC<TagLineProps> = ({ className = "", children }) => {
  return (
    <div className={`tagline flex items-center ${className}`}>
      <Brackets position="left" />
      <div className="mx-3 text-n-3">{children}</div>
      <Brackets position="right" />
    </div>
  );
};

export default TagLine;