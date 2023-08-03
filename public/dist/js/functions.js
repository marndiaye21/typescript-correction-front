export function chargerSelect(select, tableau) {
    tableau.forEach((element) => {
        let option = document.createElement("option");
        option.innerHTML = element;
        select.appendChild(option);
    });
}
