fetch('http://localhost:3000/api/products')
  .then((response) => response.json())
  .then(produits => afficherProduit(produits))
  .catch(error => console.log(error))

//créer une fonction pour afficher les produits
function afficherProduit (produits){

//créer une boucle qui va afficher chaque produits tant qu'il y en a 
  const sectionElement = document.getElementById("items");
    for (produit of produits){

//créer chaque balise       
      const productElement = document.createElement("a");
      const articleElement = document.createElement("article");
      const imageElement = document.createElement("img");
      const productNameElement = document.createElement("h3");
      const productDescriptionElement = document.createElement("p");

//attribuer un élément à chaque balise
      productElement.setAttribute ("href","./product.html?id=" + produit._id);
      productNameElement.classList.add ("productName");
      productNameElement.textContent = produit.name;
      imageElement.setAttribute ("src", produit.imageUrl);
      imageElement.setAttribute ("alt",produit.altTxt);
      productDescriptionElement.classList.add  ("productDescription");
      productDescriptionElement.textContent = produit.description;

//donner à chaque parent son enfant
      articleElement.appendChild(imageElement);
      articleElement.appendChild(productNameElement);
      articleElement.appendChild(productDescriptionElement);
      productElement.appendChild(articleElement);
      sectionElement.appendChild(productElement);
    }
}

//faire le lien entre un produit de la page d'accueil et la page produit 
  
  const linkProduct = ""





 



  
  

