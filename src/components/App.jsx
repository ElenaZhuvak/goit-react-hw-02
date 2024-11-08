import 'modern-normalize';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
})
  const handleFeedback = type => {
    setFeedback(prev => ({
        ...prev,
        [type]: prev[type] + 1
    }))
  }
  return (
    <div>
      <Description />
      <Options onFeedback={handleFeedback}/>
      <Feedback feedback={feedback}/>
    </div>
  )
}

export default App