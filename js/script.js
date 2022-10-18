/*
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
 
*/

const list = document.querySelector('ul');

const aliments = [
    'Pane',
    'Latte',
    'Pasta',
    'Verdure',
    'Merendine',
    'cioccolato'

];


//CON CICLO FOR
/*for(let i = 0; i < aliments.length; i++){
    const item = document.createElement('li')
    item.append(aliments[i]);
    list.append(item);
};*/

//CON CICLO WHILE
let i = 0;

while(aliments[i]){
    const item = document.createElement('li')
    item.append(aliments[i]);
    list.append(item);
    i++
}