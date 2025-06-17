document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    app.innerHTML = \`
        <h1>Grabbit App</h1>
        <button id="listenToggle">🎤 Always Listening: Off</button>
        <ul id="reminderList"></ul>
    \`;

    let listening = false;
    const toggle = document.getElementById("listenToggle");
    const list = document.getElementById("reminderList");

    toggle.onclick = () => {
        listening = !listening;
        toggle.textContent = `🎤 Always Listening: ${listening ? "On" : "Off"}`;
        if (listening) {
            alert("Hey Grabbit is now listening...");
            list.innerHTML += "<li>Example Reminder: Buy Toothpaste at Safeway</li>";
        }
    };
});