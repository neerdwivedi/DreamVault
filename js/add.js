document.getElementById("dreamForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const mood = document.getElementById("mood").value;

  if (!title || !description) {
    alert("Please fill all fields");
    return;
  }

  let dreams = JSON.parse(localStorage.getItem("dreams")) || [];

  const newDream = {
    id: Date.now(),
    title,
    description,
    mood,
    created_at: new Date().toLocaleString()
  };

  dreams.push(newDream);

  localStorage.setItem("dreams", JSON.stringify(dreams));

  alert("Dream saved successfully!");

  window.location.href = "journal.html";
});