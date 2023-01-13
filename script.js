const numbers=parseInt(["70","32","87","103","27"]);
const gridContainer = document.getElementById('grid-container');

const playButton = document.getElementById('play');
setTimeout(function(){
const sparisci= gridContainer.remove("cell")

},5000)

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
           
            
            console.log(num);

            this.classList.add('clicked');

        }

    );
    
        
        cell.innerHTML = num;

        return cell;

}


