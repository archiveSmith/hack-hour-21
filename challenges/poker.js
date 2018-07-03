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
function poker(hand1, hand2) {
  if (hand1.length < 5 || hand2.length < 5) throw new Error('bad hand size!');
  hand1 = hand1.sort();
  hand2 = hand2.sort();
  let hand1Value, hand2Value;
  const fourOfAKind = hand => hand.reduce((acc, e) => {
    acc[e] = acc[e] ? acc[e] + 1 : 1;
    if (acc[e] === 4) acc.pass = true;
    return acc;
  }, { pass: false }).pass
  const fullHouse = hand => hand.reduce((acc, e, i) => {
    acc[e] = acc[e] ? acc[e] + 1 : 1;
    if (i === 4 && Object.values(acc).includes(2) && Object.values(acc).includes(3)) acc.pass = true;
    return acc;
  }, { pass: false }).pass;
  const straight = hand => hand.reduce((acc, e, i, arr) => {
    if (acc && i !== 0 && arr[i - 1] !== e - 1) return false;
    return acc;
  }, true)
  const threeOfAKind = hand => hand.reduce((acc, e) => {
    acc[e] = acc[e] ? acc[e] + 1 : 1;
    if (acc[e] === 3) acc.pass = true;
    return acc;
  }, { pass: false }).pass;
  const twoPair = hand => hand.reduce((acc, e, i) => {
    acc[e] = acc[e] ? acc[e] + 1 : 1;
    if (i > 2) {
      const check = Object.values(acc);
      if (check.includes(2)) check.splice(check.indexOf(2), 1);
      if (check.includes(2)) acc.pass = true;
    }
    return acc;
  }, { pass: false }).pass;
  const onePair = hand => hand.reduce((acc, e) => {
    acc[e] = acc[e] ? acc[e] + 1 : 1;
    if (acc[e] === 2) acc.pass = true;
    return acc;
  }, { pass: false }).pass;
  const callbacks = [fourOfAKind, fullHouse, straight, threeOfAKind, twoPair, onePair];
  for (let i = 0; i < callbacks.length; i++) {
    hand1Value = callbacks[i](hand1);
    hand2Value = callbacks[i](hand2);
    if (hand1Value > hand2Value) return "Player 1 Wins";
    if (hand2Value > hand1Value) return "Player 2 Wins";
    if (hand1Value && hand2Value) {
      hand1Value = Math.max(...hand1);
      hand2Value = Math.max(...hand2);
      if (hand1Value > hand2Value) return "Player 1 Wins";
      if (hand2Value > hand1Value) return "Player 2 Wins";
    }
  }
  hand1Value = Math.max(...hand1);
  hand2Value = Math.max(...hand2);
  if (hand1Value > hand2Value) return "Player 1 Wins";
  if (hand2Value > hand1Value) return "Player 2 Wins";
  return "Draw";
}

module.exports = poker;
