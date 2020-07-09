class Entry {
    constructor(task) {
        this.task = task;
    }
}

// UI Class
class UI {
    addEntry(entry) {
        const list = document.getElementById("task-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${entry.task}</td>
        <td><button type="button" class="edit" aria-label="Left Align">
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </button></td>
        <td><a class="delete" style="cursor: pointer;">x</a></td>
      `;

        list.appendChild(row);
    }

    clearFields() {
        document.getElementById("task").value = "";
    }

    deleteEntry(target) {
        target.parentElement.parentElement.remove();
        console.log("here");
    }
    editEntry(target) {

        console.log("edit");
        document.getElementById("task").value = target.parentElement.parentElement.childNodes[1].textContent;
    }
}

// Event Listeners
document.getElementById("task-form").addEventListener("submit", function (e) {
    const task = document.getElementById("task").value;
    const entry = new Entry(task);

    const ui = new UI();
    ui.addEntry(entry);
    ui.clearFields();
    e.preventDefault();
});

// Delete Entry or Edit
document.getElementById("task-list").addEventListener("click", function (e) {
    const ui = new UI();
    if (e.target.className === "delete") {
        ui.deleteEntry(e.target);
    }
    else if (e.target.className === "edit") {
        ui.editEntry(e.target);
        ui.deleteEntry(e.target);
    }
    e.preventDefault();
});
