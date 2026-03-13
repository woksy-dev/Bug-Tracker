Bug Tracker

A simple JavaScript bug tracker built with vanilla JavaScript and DOM manipulation.
The application allows users to add bugs, mark them as fixed, delete them, and filter the list based on status.

Features

Add new bugs

Mark bugs as fixed or undo fixed status

Delete bugs

Filter bugs by:

All bugs

Unfixed bugs

Fixed bugs

Display number of remaining unfixed bugs

How It Works

The application stores bugs in a local array:

let bugs = []

Each bug object contains:

{
  id: Date.now(),
  name: "Bug description",
  fixed: false
}

The interface updates dynamically using DOM manipulation and event listeners.

Core Functions
addBug(name)

Creates a new bug object and adds it to the bug list.

toggleBug(id)

Toggles the fixed status of a bug.

deleteBug(id)

Removes a bug from the list.

getFixedbugs(bugs)

Returns only the bugs that are marked as fixed.

renderBugs(list)

Renders bugs to the UI and updates the remaining bug counter.

Filtering

The application allows filtering through buttons:

All → shows all bugs

Unfixed → shows only bugs that are not fixed

Fixed → shows only bugs that are fixed

Technologies Used

JavaScript (Vanilla JS)

HTML

DOM manipulation

Event listeners

Learning Purpose

This project was built to practice:

DOM manipulation

JavaScript arrays and objects

Event handling

State updates in UI applications

Possible Improvements

Future improvements could include:

LocalStorage persistence

Edit bug descriptions

Improved UI styling

Sorting bugs by date or status

Author

Robin           