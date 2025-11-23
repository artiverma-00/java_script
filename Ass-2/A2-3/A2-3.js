function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1; // count occurrences
    return acc;
  }, {});
}
const arr = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];

console.log(countCategories(arr));


function getSortedCategories(categories) {
  const counts = countCategories(categories);

  return Object.entries(counts)        // Convert {key:value} → [["electronics", 2], ...]
    .sort((a, b) => b[1] - a[1])       // Sort by count (descending)
    .map(entry => entry[0]);           // Extract only category names
}
console.log(getSortedCategories(arr));

