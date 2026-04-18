"use strict";
const getElement = selector => document.querySelector(selector);
window.onload = () => {
    const calendar = getElement("#calendar");
    const header = getElement("#month_year");

    const today = new Date();

    const currentMonth = today.getMonth(); // 0–11
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    // Month names
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    // Display Month + Year
    header.textContent = `${months[currentMonth]} ${currentYear}`;

    // First day of month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // Total days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let row = document.createElement("tr");

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    // Fill calendar days
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("td");
        cell.textContent = day;

        // Highlight today
        if (day === currentDate) {
            cell.classList.add("today");
        }

        row.appendChild(cell);

        // End of week → new row
        if ((firstDay + day) % 7 === 0) {
            calendar.appendChild(row);
            row = document.createElement("tr");
        }
    }

    // Append last row
    calendar.appendChild(row);
};