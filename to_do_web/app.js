document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();
    if (!todoText) return;

    const listItem = document.createElement("li");
    listItem.innerText = todoText;

    document.getElementById("todoList").appendChild(listItem);
    todoInput.value = "";
  });

document
  .getElementById("alarmForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const alarmTime = document.getElementById("alarmTime").value;
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (alarmTime === currentTime) {
      document.getElementById("alarmMessage").innerText = "Alarm Çalıyor!";
    } else {
      document.getElementById("alarmMessage").innerText =
        "Alarm Kuruldu: " + alarmTime;
    }
  });
