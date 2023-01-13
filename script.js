const numeriGenerati=[]
const gridContainer = document.getElementById('grid-container');

const playButton = document.getElementById('play');
setTimeout(function(){
const sparisci= gridContainer.remove("cell")

},3000);
setTimeout(function(){
    const uno=parseInt(prompt("seleziona il primo numero esatto"));
    const due=parseInt(prompt("seleziona il secondo numero esatto"));
    const tre=parseInt(prompt("seleziona il terzo numero esatto"));
    const quattro=parseInt(prompt("seleziona il quarto numero esatto"));
    const cinque=parseInt(prompt("seleziona il quinto numero esatto"));
    
},4000)

playButton.addEventListener('click',

    function () {
       
        let randomNumber;
        for(let i = 0;i<5;i++){
            randomNumber = getNumber(1, 100);
        
            while(numeriGenerati.includes(randomNumber)){
                randomNumber = getNumber(1, 100);
            }
        
            numeriGenerati.push(randomNumber);
        }
        console.log('Cliccato play');

        gridContainer.innerHTML = '';
        
        for (let i = 0; i <numeriGenerati.length; i++) {
           

            const newCell = createNewCell(numeriGenerati[i]);
            gridContainer.append(newCell);
           
        }
       
        
    }

);


function createNewCell(num) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
 
    
        
        cell.innerHTML = num;

        return cell;

}

function getNumber(min, max) {
    return Math.floor((Math.random()) * (max - min + 1)) + min;
}
