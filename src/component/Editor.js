import { useState } from "react"
import "./Editor.css"
import { getFormattedDate } from "../util"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: ""
  })
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value
    })
  }
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value
    })
  }
  const handleSubmit = () => {
    onSubmit(state)
  }

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date}
            onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text={"취소하기"} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  )
}
export default Editor