const cars = require('../../data/cars.json');
const { BUDGET_BUFFER } = require('../utils/constants');
const { calculateMatchScore } = require('../utils/scoringHelper');

exports.getAllCars = (req, res) => {
  res.json(cars);
};

exports.getRecommendations = (req, res) => {
  const { budget, type, priority } = req.body;

  if (typeof budget !== 'number' || budget <= 0 || !type || !priority) {
    return res.status(400).json({ message: "Valid budget (positive number), type, and priority are required." });
    }

  // 1. Initial Filtering (Budget + 10% headroom, and Segment type)
  let filtered = cars.filter(car => car.price <= budget * BUDGET_BUFFER && car.type === type);

  // Fallback: if no matches in that specific segment, broaden to budget only
  if (filtered.length === 0) {
    filtered = cars.filter(car => car.price <= budget * BUDGET_BUFFER);
  }

  // 2. Scoring Logic
  const scoredCars = filtered.map(car => ({
    ...car,
    matchScore: calculateMatchScore(car, budget, priority)
  }));

  // 3. Sorting and finalizing Top 3
  const sorted = scoredCars.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);

  // Identify the "Value Leader" (Best review to price ratio)
  if (sorted.length > 0) {
    const winner = sorted[0];
    return res.json({
      topMatches: sorted,
      insight: {
        bestOption: winner.id,
        reason: `The ${winner.make} ${winner.model} offers the best balance of your priority and overall user satisfaction in this price bracket.`
      }
    });
  }

  res.json({ topMatches: [], insight: null });
};