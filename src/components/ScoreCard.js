import React, { useState, useEffect } from 'react';
import { calculateTotalScore } from '../utils/scoreManager';

const ScoreCard = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const updateScore = () => {
      const newScore = calculateTotalScore();
      setScore(newScore);
    };

    updateScore();
    window.addEventListener('storage', updateScore);

    return () => {
      window.removeEventListener('storage', updateScore);
    };
  }, []);

  return (
    <div className="position-fixed top-0 end-0 m-2 p-2 bg-light rounded-pill">
      <span className="fw-bold">{score}</span>
      <span className="ms-1 text-muted">pts</span>
    </div>
  );
};

export default ScoreCard;