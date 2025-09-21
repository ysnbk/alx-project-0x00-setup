import { PillProps } from "@/interfaces";
const Button: React.FC<PillProps> = ({ title,styles }) => {
  return (
    <button className={styles}>
        {title}
    </button>
  )
}

export default Button;