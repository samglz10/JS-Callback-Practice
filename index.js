const inventory = newInventory()
move(inventory).to(0, 0);


let character = newImage('assets/green-character/static.gif')
character.style.position = "absolute"
let direction = null;
let x = 100;
let y = 250;

setInterval( () => { 
    if(direction === 'west'){
        x = x - 1
        character.src = 'JS-Callback-Practice/assets/green-character/west.gif'
    }
    if(direction === 'north'){
        y = y + 1
        character.src = 'JS-Callback-Practice/assets/green-character/north.gif'
    }
    if(direction === 'east'){
        x = x + 1
        character.src = 'JS-Callback-Practice/assets/green-character/east.gif'
    }
    if(direction === 'south'){
        y = y - 1
        character.src ='JS-Callback-Practice/assets/green-character/south.gif'
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
    
}, 1)
                                  
                                  

document.addEventListener('keydown', e =>{  
    if (e.repeat) return;              
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})


document.addEventListener('keyup', e => {
    direction = null
})





move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)