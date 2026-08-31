document.getElementById("trackBtn").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const stats = {
    water: weight * 35,
    protein: weight * 0.8,
    calories: weight * 30
  };

  document.getElementById("results").innerHTML = `
    <p>Water: ${stats.water} ml</p>
    <p>Protein: ${stats.protein} g</p>
    <p>Calories: ${stats.calories} kcal</p>
  `;
});
let totalProtein = 0;
let totalCalories = 0;

document.getElementById("addFood").addEventListener("click", () => {
  const protein = parseFloat(document.getElementById("protein").value);
  const calories = parseFloat(document.getElementById("calories").value);

  totalProtein += protein;
  totalCalories += calories;

  document.getElementById("summary").innerHTML = `
    <p>Total Protein: ${totalProtein} g</p>
    <p>Total Calories: ${totalCalories} kcal</p>
  `;
});
const startBtn = document.querySelector("button");
startBtn.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
