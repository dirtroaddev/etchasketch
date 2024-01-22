const container = document.querySelector('.container');
const btn = document.querySelector('#btn');


btn.addEventListener('click', () => {
    container.innerHTML = ''
    const mainPrompt = prompt("Enter your grid size");
    for( let i = 0; i < parseInt(mainPrompt); i += 1) {
        let divMain = document.createElement('div');
        
        divMain.className = 'row'
        
    
        for(let j = 0; j < parseInt(mainPrompt); j += 1) {
            let div = document.createElement('div');
            div.className = 'gridBoxes'
            divMain.appendChild(div);
        }
    
        container.appendChild(divMain);
    }
});

for( let i = 0; i < 16; i += 1) {
    let divMain = document.createElement('div');
    
    divMain.className = 'row'
    

    for(let j = 0; j < 16; j += 1) {
        let div = document.createElement('div');
        div.className = 'gridBoxes'
        divMain.appendChild(div);
    }

    container.appendChild(divMain);
}