import 'modern-normalize';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification'
import { useState } from 'react';

const App = () => {
  const [typeData, setTypeData] = useState({
    good: 0,
    neutral: 0,
    bad: 0
})
  const updateFeedback = (feedbackType) => {
    setTypeData(prev => ({
        ...prev,
        [feedbackType]: prev[feedbackType] + 1
    }))
  }

  const totalFeedback = typeData.good + typeData.neutral + typeData.bad;

  const handleReset = () => {
    setTypeData({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  return (
    <div>
      <Description />
      <Options 
        onFeedback={updateFeedback} 
        onReset={handleReset}
        total={totalFeedback}/>
        
      {totalFeedback > 0 ? <Feedback feedback={typeData} total={totalFeedback}/> : <Notification />}
    </div>
  )
}

export default App