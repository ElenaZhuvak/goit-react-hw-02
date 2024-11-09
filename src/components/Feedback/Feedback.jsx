
const Feedback = ({feedback, total, positiveFeedback}) => {
  return (
    <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positiveFeedback}%</li>

    </ul>
  )
}

export default Feedback