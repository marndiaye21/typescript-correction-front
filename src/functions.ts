export function chargerSelect(select: HTMLSelectElement, tableau:any)
{
    tableau.forEach((element:string) => {
        let option=document.createElement("option");
        option.innerHTML=element;
        select.appendChild(option); 
    });
}