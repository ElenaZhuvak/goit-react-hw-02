const Options = ({onFeedback}) => {
 
  return (
    <div>
        <button onClick={() => onFeedback('good')}>Good</button>
        <button onClick={() => onFeedback('neutral')}>Neutral</button>
        <button onClick={() => onFeedback('bad')}>Bad</button>
        <button>Reset</button>
    </div>
  )
}

export default Options