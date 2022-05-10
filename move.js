const move = (character) => {
    character.style.position = 'fixed'

    const moveToCoordinates = (left, bottom) => {
        character.style.left = left + 'px'
        character.style.bottom = bottom + 'px'
    }

    const moveWithArrowKeys = (left, bottom) => {
       
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}

const moveWithArrowKeys = (left, bottom,) => {
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    
    const moveCharacter= () => { 
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
    
    setInterval(moveCharacter)
    
    document.addEventListener('keydown', e => {
        if(e.repeat) return;
    
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
}
