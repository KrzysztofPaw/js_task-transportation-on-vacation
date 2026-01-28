/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let rentalcost = days * 40;

  if (days >= 3 && days < 7) {
    rentalcost = rentalcost - 20;
  }

  if (days >= 7) {
    rentalcost = rentalcost - 50;
  }

  return rentalcost;
}

module.exports = calculateRentalCost;
