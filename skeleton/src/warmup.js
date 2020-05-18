
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // debugger
    let childs = Array.from(htmlElement.children);
    childs.forEach(child => htmlElement.removeChild(child));
    // htmlElement.innerHTML = '';
  

    let p = document.createElement('P');
    p.innerHTML = string;
    htmlElement.append(p);
};

htmlGenerator('Whatever guys.', partyHeader);

