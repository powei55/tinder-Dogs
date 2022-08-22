 class Dog {
    constructor(data) {
        Object.assign(this, data)
    } 
    
    getDogsHtml() {
        const {name, avatar, age, bio} = this
        
        return `
             <div class="tinder-info">
                <img class="avatar" src="${avatar}"/>
                <h2 >${name} ${age}</h2>
                <p>${bio}</p>
             </div>
        ` 
        
        
    }
 }
 
 
export default Dog 