
const Feedback = ({feedback, total}) => {
  return (
    <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
    </ul>
  )
}

export default Feedback