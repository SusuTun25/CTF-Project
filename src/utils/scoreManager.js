export const updateTotalScore = (challengeId, points) => {
    const totalScore = JSON.parse(localStorage.getItem('totalScore')) || {};
    totalScore[challengeId] = points;
    localStorage.setItem('totalScore', JSON.stringify(totalScore));
    
    // Dispatch a storage event to update the score across all components
    window.dispatchEvent(new Event('storage'));
  };
  
  export const calculateTotalScore = () => {
    const totalScore = JSON.parse(localStorage.getItem('totalScore')) || {};
    return Object.values(totalScore).reduce((sum, points) => sum + points, 0);
  };