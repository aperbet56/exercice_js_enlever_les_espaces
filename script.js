// Créez une fonction qui retourne une chaîne de caractères dont les espaces ont été retirés.

// Déclaration de la fonction removeStringSpaces ayant comme paramètre str (une chaîne de caractères) qui va permettre de supprimer les espaces
const removeStringSpaces = (str) => {
  return str.replace(/\s/g, ""); // Regex qui cible tous les espaces et qui les remplace par une chaîne de caractère vide
};

//const removeStringSpaces = (str) => return str.replace(/\s/g, "");

console.log(removeStringSpaces("Hello World"));
console.log(
  removeStringSpaces("On ne fait pas d'omelettes sans casser d'oeufs")
);
console.log(
  removeStringSpaces(" Donner, c'est donner ; reprendre, c'est voler.")
);

/* Autre méthode
const removeStringSpaces = (str) => {
    return str.split(" ").join("");
}
 */

// const removeStringSpaces = (str) => str.split(" ").join("");

// La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode.

// La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau. La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
