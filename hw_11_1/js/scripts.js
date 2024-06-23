function pythagoreanTable(size = 10) {
    const table = document.getElementById("pythagorean_table");
    for(let i = 1; i <= size; i++) {
       const row = table.insertRow()
        for(let j = 1; j <= size; j++) {
            const cell = row.insertCell();
            cell.innerHTML = i * j;
            if(i === j) {
                cell.style.background = "#D2691E";
            }
        }
    }
}

pythagoreanTable();