import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button
        type="default"
        text={"기본 버튼튼"}
        onClick={() => {
          alert("default button")
        }}
      />

      <Button
        type="positive"
        text={"긍정 버튼튼"}
        onClick={() => {
          alert("positive button")
        }}
      />

      <Button
        type="negative"
        text={"부정 버튼"}
        onClick={() => {
          alert("negative button")
        }}
      />
    </div>
  )
}
export default Home