/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const forfifty = 7;
  const fortwenty = 3;
  const discounttwenty = 20;
  const discountfifty = 50;
  const carcost = 40;
  const rentalcost = days * carcost;

  if (days >= fortwenty && days < forfifty) {
    return rentalcost - discounttwenty;
  }

  if (days >= forfifty) {
    return rentalcost - discountfifty;
  }

  return rentalcost;
}

module.exports = calculateRentalCost;
