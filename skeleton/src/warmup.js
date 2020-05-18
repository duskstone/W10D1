
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let p = document.createElement('P');
    p.innerHTML = string;
    htmlElement.append(p);
};

htmlGenerator('Whatever guys.', partyHeader);

