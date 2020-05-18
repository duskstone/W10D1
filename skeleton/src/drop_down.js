

 const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export function dogLinkCreator(){
  let taggedDogs = [];

  for(let name in dogs) {
    let link = dogs[name];

    let a = document.createElement('A');
    a.innerHTML = name;
    a.setAttribute('href', link);

    let li = document.createElement('LI');
    li.classList.add('dog-link');
    li.appendChild(a);

    taggedDogs.push(li);
  }
  return taggedDogs;
}

export function attachDogLinks(){
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach(dog => ul.append(dog));
}

attachDogLinks();