import createTagLine from "./tagline.js"
import addToDoButton from "./addToDo.js"
const fetchJson = function(){

    
//     let obj = fetch('js/components/json/todos.json')
//    .then(response => response.json())
//    .then(json => console.log(json))
//    .then(data => obj = data)

     fetch("js/components/json/todos.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
             var template = template + `
            <div class="object-con">
                  <ul>
                        <div class="child-con-one">
                             <li><span>Category: </span> ${data[i].category}</li>
                             <li><span>Desc: </span> ${data[i].title}</li>
                             <li><span>Due: </span> ${data[i].endDate}</li>
                        </div>
                        <div class="child-con-two">
                                <div>
                                        <li><img src="js/components/icons/wrench.png" alt="edit button icon"></img></li>
                                        <li>Edit</li>
                                </div>
                                <div>
                                        <li><img src="js/components/icons/trash.png" alt="delete button icon"></img></li>
                                        <li>Delete</li>
                                </div>
                        </div>
                  </ul> 
            </div>
            `
        }

        template = template + addToDoButton()
        // const object = document.querySelector(".tagline")

        // object.insertAdjacentHTML("afterend", template)
    })

}

export default fetchJson()
