
const gridContainer = document.getElementById('grid-container');

const playButton = document.getElementById('play');
setTimeout(function(){
const sparisci= gridContainer.remove("cell")

},3000);
setTimeout(function(){
    const aggiungiNumeri=prompt("seleziona i numeri esatti")
    
},4000)


playButton.addEventListener('click',

    function () {

        console.log('Cliccato play');

        gridContainer.innerHTML = '';
        
        for (let i = 1; i <=5; i++) {
           

            const newCell = createNewCell(i);
            gridContainer.append(newCell);
           
        }
        

    }

);


function createNewCell(num) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',

        function () {
            if(aggiungiNumeri.includes(cell)){
                alert("HAI VINTO")
            }
            else{
                alert("hai perso")
            }
            
            console.log(num);

            this.classList.add('clicked');

        }

    );
    
        
        cell.innerHTML = num;

        return cell;

}


