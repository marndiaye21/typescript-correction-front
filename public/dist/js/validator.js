import { Fournisseur } from "./types.js";
export function isTel(telephone) {
    // let supEspace=telephone.split(' ').join("");
    let tel = telephone.replace(' ', "");
    if (tel.length != 9) {
        return false;
    }
    if (isNaN(+tel)) {
        return false;
    }
    return true;
}
export function isNumCompte(numCompte) {
    let supEspace = numCompte.trim();
    let explod = numCompte.split('_');
    if (explod.length != 2 || !isTel(explod[1]) || !(Object.values(Fournisseur).includes(explod[0]))) {
        return false;
    }
    return true;
}
