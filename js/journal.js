const container = document.getElementById("journalContainer");

let dreams = JSON.parse(localStorage.getItem("dreams")) || [];

if (dreams.length === 0) {
  container.innerHTML = "<p style='text-align:center;'>No dreams recorded yet.</p>";
} else {
  dreams.slice().reverse().forEach(dream => {

    const card = document.createElement("div");
    card.classList.add("dream-card");

    // 🎨 mood logic
    const tag = (dream.tag || "").toLowerCase();

    if (tag.includes("happy")) card.classList.add("happy");
    else if (tag.includes("nightmare")) card.classList.add("nightmare");
    else if (tag.includes("weird")) card.classList.add("weird");
    else card.classList.add("normal");

    // content
    const preview = (dream.text || "").substring(0, 80) + "...";

    card.innerHTML = `
      <h3>${dream.title || "Untitled Dream"}</h3>
      <p>${preview}</p>
      <small>${dream.date || ""}</small>
    `;

    // click to open
    card.onclick = () => {
      localStorage.setItem("selectedDream", JSON.stringify(dream));
      window.location.href = "view-dream.html";
    };

    container.appendChild(card);
  });
}