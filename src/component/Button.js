import "./Button.css"

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default"
  console.log(type)
  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
Button.dedaultProps = {
  type: "default"
}
export default Button