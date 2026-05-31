const { WEIGHTS, MAX_MILEAGE_NORM, MAX_RATING_NORM, BUDGET_BUFFER } = require('./constants');

exports.calculateMatchScore = (car, budget, priority) => {
  let score = 0;

  // 1. Priority Weighting
  if (priority === 'efficiency') {
    // Normalize against a high mileage of 30
    score += (car.mileage / MAX_MILEAGE_NORM) * WEIGHTS.PRIORITY;
  } else if (priority === 'safety') {
    score += (car.safetyRating / MAX_RATING_NORM) * WEIGHTS.PRIORITY;
  } else if (priority === 'features') {
    score += (car.userRating / MAX_RATING_NORM) * WEIGHTS.PRIORITY;
  }

  // 2. Value for Money (VFM) Factor
  // Higher rating and lower price relative to budget = higher VFM
  const maxBudget = budget * BUDGET_BUFFER;
  
  // Calculate how much "savings" there are relative to the max allowed budget
  const priceScore = ((maxBudget - car.price) / maxBudget) * WEIGHTS.VFM_PRICE;
  const reviewScore = (car.userRating / MAX_RATING_NORM) * WEIGHTS.VFM_REVIEW;

  score += (priceScore + reviewScore);

  return Math.round(score);
};