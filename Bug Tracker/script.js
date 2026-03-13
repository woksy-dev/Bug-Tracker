const form = document.querySelector("#form");
const countDisplay = document.querySelector("#countDisplay");
const bugInput = document.querySelector("#bugInput");
const allBtn = document.querySelector("#allBtn");
const unfixedBtn = document.querySelector("#unfixedBtn");
const fixedBtn = document.querySelector("#fixedBtn");
const bugList = document.querySelector("#bugList");

let bugs = [];

function addBug(name) {
  let bug = {
    id: Date.now(),
    name,
    fixed: false,
  }

  bugs.push(bug);
}

function toggleBug(id) {
  for (const b of bugs) {
    if (id === b.id) {
      b.fixed = !b.fixed;
      return
    }
  }
}

function deleteBug(id) {
  bugs = bugs.filter((b) => b.id !== id);
  return;
}

function getFixedbugs(bugs) {
    let filtered = bugs.filter((b) => b.fixed === true)
    return filtered;
}

function renderBugs(list = bugs) {
  bugList.innerHTML = "";

  for (const b of list) {
    let li = document.createElement("li");
    let toggleBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    let status = b.fixed ? " Yes " : " No ";

    li.textContent = `${b.name} // Bug Fixed? ${status} `;
    toggleBtn.textContent = b.fixed ? "Undo" : "Fixed";
    deleteBtn.textContent = "X";

    bugList.appendChild(li);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    toggleBtn.addEventListener("click", () => {
      toggleBug(b.id);
      renderBugs()
    });
    
    deleteBtn.addEventListener("click", () => {
        deleteBug(b.id)
        renderBugs()
    });

  }
  const remaining = bugs.filter((b) => !b.fixed).length;
countDisplay.querySelector("span").textContent = remaining;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = bugInput.value.trim();

  addBug(name);
  renderBugs();

  form.reset();
  bugInput.focus();
});

allBtn.addEventListener("click",() => {
    renderBugs(bugs)
});

unfixedBtn.addEventListener("click", () => {
    let unfixed = bugs.filter((b) => b.fixed === false)
    renderBugs(unfixed)
});

fixedBtn.addEventListener("click", () => {
    renderBugs(getFixedbugs(bugs))
});

