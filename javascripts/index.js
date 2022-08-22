import dogs from './data.js'
import Dog from './Dog.js'


    
    let currentDogArray = 0
    let hasBeenSwiped = dogs.map((obj) => obj.hasBeenSwiped);
    let hasBeenliked = dogs.map((obj) => obj.hasBeenliked)

    hasBeenSwiped = true
    hasBeenliked = true



   
    const heartBtn = ()=> {
        document.querySelector('.hidden-like').style.display = 'block'  
        runDogArray()
    }


    const crossBtn = ()=> {
        document.querySelector('.hidden-nope').style.display = 'block'
        runDogArray()
    }




    const  runDogArray = ()=> {
        currentDogArray++
        setTimeout(()=> {
            if (currentDogArray === 3) {
                 document.body.innerHTML = `no dogs found in the area`

        }else  {
                    tinder = new Dog(dogs[currentDogArray])
                    render()
                    removeBadge()
        }
        },1000)
}


    document.getElementById('cross-btn').addEventListener('click', crossBtn)
    document.getElementById('heart-btn').addEventListener('click', heartBtn)

const render = ()=> document.querySelector('#section-two').innerHTML
 = tinder.getDogsHtml()

let tinder = new Dog(dogs[currentDogArray])
    render()
    


function removeBadge() {
    document.querySelector('.hidden-like').style.display = 'none'
    document.querySelector('.hidden-nope').style.display = 'none'
}

