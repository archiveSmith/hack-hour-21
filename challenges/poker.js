/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */

function maxScore(hand) {
  let score = 0;
  let count = {};
  hand.forEach((element) => {
    if (!count[element]) count[element] = 1;
    else count[element] += 1;
  });
  let pairs = 0;
  Object.keys(count).forEach((element) => {
    if (count[element] === 4) score = 6;
    else if (count[element] === 3 && pairs === 1 && score < 5) score = 5;
    else if (count[element] === 3 && pairs === 0 && score < 3) score = 3;
    else if (count[element] === 2 && score === 3 && score < 5) score = 5;
    else if (count[element] === 2 && pairs === 1 && score < 2) score = 2;
    else if (count[element] === 2 && pairs === 0 && score === 0) score = 1;
  });
  for (let i = 0; i < hand.length - 1; i += 1) {
    hand[i] = hand[i + 1] - hand[i];
  }
  hand.pop();
  if (hand.every(a => a === 1)) return 4;
  return score;
}

function poker(hand1, hand2) {
  hand1 = hand1.sort();
  hand2 = hand2.sort();
  const score1 = maxScore(hand1);
  const score2 = maxScore(hand2);
  if (score1 === 0 && score2 === 0) {
    if (hand1[4] === hand2[4]) return 'Draw';
    else if (hand1[4] > hand2[4]) return 'Player 1 wins';
    return 'Player 2 wins';
  } else if (score1 === score2) return 'Draw';
  else if (score1 > score2) return 'Player 1 wins';
  return 'Player 2 wins';
}

// console.log(poker([3,5,5,5,2],[4,6,7,8,8]));

module.exports = poker;
