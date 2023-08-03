import { Fournisseur, Transaction } from "./types.js";
import { isTel, isNumCompte } from "./validator.js";
import { numero, nomComplet, port, fournisseurSelect, transactionSelect } from "./dom.js";
import { chargerSelect } from "./functions.js";
const fournisseurs = Object.values(Fournisseur);
fournisseurs.push("WR");
chargerSelect(fournisseurSelect, fournisseurs);
chargerSelect(transactionSelect, Object.values(Transaction));
numero.addEventListener("change", () => {
    if (!(isNumCompte(numero.value) || isTel(numero.value))) {
        alert("Numero de compte ou telphone invalide");
        return;
    }
    nomComplet.value = "";
    fetch(port + "/clients/" + numero.value)
        .then(response => response.json())
        .then(dataResponse => {
        if (dataResponse.data) {
            nomComplet.value = dataResponse.data.nomComplet;
        }
        else {
            console.log(dataResponse);
            alert(dataResponse.message);
        }
    });
});
