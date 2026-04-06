const dream = JSON.parse(localStorage.getItem("selectedDream"));

if (dream) {
  document.getElementById("dreamTitle").innerText = dream.title;
  document.getElementById("dreamDesc").innerText = dream.description;
  document.getElementById("dreamMood").innerText = dream.mood;
  document.getElementById("dreamDate").innerText = dream.created_at;
}