import 'modern-normalize';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification'
import { useEffect, useState } from 'react';

const App = () => {
  const [typeData, setTypeData] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  })

  useEffect(()=> {
    localStorage.setItem('feedback', JSON.stringify(typeData))
   },[typeData])

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

  const positiveFeedback = Math.round((typeData.good / (totalFeedback - typeData.neutral) * 100));

  return (
    <div>
      <Description />
      <Options 
        onFeedback={updateFeedback} 
        onReset={handleReset}
        total={totalFeedback}/>
        
      {totalFeedback > 0 ? 
        <Feedback 
          feedback={typeData}
          total={totalFeedback} 
          positiveFeedback={positiveFeedback}/> : 
      <Notification />}
    </div>
  )
}

export default App