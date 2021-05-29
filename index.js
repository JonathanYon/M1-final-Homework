
//  JS EXERCISES

//         21) Given variable x = "John" and y = "Doe", write on tde console log "John <> Doe"
//         22) Create an object witd properties such name, surname, email
//         23) Delete Email from tde previously created object
//         24) Create an array witd 10 strings in it
//         25) Print in tde console every string in tde previous array
//         26) Create an array witd 100 random numbers in it
//         27) Wrote a function to get tde MAX and tde MIN from tde previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function tdat gets 2 arrays and returns tde longest one
//         30) Create a function tdat gets 2 arrays of numbers and returns tde one witd tde higher sum of values

//     let x = "John";
//     let y = "Doe"
//     console.log("John <> Doe") //John <> Doe
//     //-----------------------------------------------------------------
//     let obj = {
//         name: "Jon",
//         surname: "Doe",
//         email: "Jon@hotmail.com"
//     }
//     let ab = delete obj.email
//     console.log(obj) //{name: "Jon", surname: "Doe"}
//     //------------------------------------------------------------------
//     let arr = []
//     for (let i = 0; i < 11; i++){
//         arr.push(i)
//     }
//     console.log(arr)//(11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //----------------------------------------------------------------
//     for (num of arr){
//         console.log(num) //
//     }
// //------------------------------------------------------------------
// let arr1 = [];
// for (let i = 0; i < 101; i++){
//     let random = Math.floor(Math.random()*101)
//     arr1.push(random)
// }
// console.log(arr1) //(100) [78, 12, 52, 0, 30, 5, 6, 7, 65, 98, 99, 37, 21, 88, 69, 1, 87, 10, 94, 20, 13, 79, 61, 65, 87, 14, 77, 18, 27, 58, 51, 3, 19, 58, 77, 58, 60, 60, 66, 21, 23, 54, 36, 67, 30, 10, 8, 26, 19, 73, 39, 13, 41, 83, 84, 95, 29, 8, 97, 29, 96, 3, 59, 66, 13, 83, 42, 36, 4, 90, 20, 71, 2, 23, 66, 59, 20, 26, 75, 67, 19, 75, 6, 24, 68, 32, 32, 82, 32, 18, 70, 1, 38, 25, 92, 74, 24, 39, 21, 70]
// //--------------------------------------------------------------------------------------------------------------------------------------------
// let max = Math.max(...arr1);
// let min = Math.min(...arr1)
// console.log(max) // 99
// console.log(min) // 0
//------------------------------------------------------------------------------------------------------------------
// let arr2 = new Array(3).fill([]);

// for (let i = 0; i < arr2.length; i++){
//     let random = Math.floor(Math.random()*10)
//     arr2[i].push(random)
// }
// console.log(arr2) //(3) [Array(3), Array(3), Array(3)]
// // 0: (3) [7, 0, 0]
// // 1: (3) [7, 0, 0]
// // 2: (3) [7, 0, 0]
// // length: 3
// // __proto__: Array(0)
//------------------------------------------------------------------------------------------------------------------

// const longest = function(arr1, arr2){
//     if (arr1.length > arr2.length){
//         return arr1
//     } else if (arr2.length > arr1.length){
//         return arr2
//     } else {
//         return "They must be the same lenth"
//     }
// }
// let arr1 = [1, 2, 3]
// let arr2 = [1, 1, 1, 1]
// console.log(longest(arr1, arr2)) //(4) [1, 1, 1, 1]
//----------------------------------------------------------------------------------------------------

// const largest = function(arr1, arr2){
//     let arr11 = 0;
//     let arr22 = 0;
//     for (num of arr1){
//         arr11 += num
//     }
//     for (num1 of arr2){
//         arr22 += num1
//     }
//     if (arr11 > arr22){
//         return "arr1 with its sum equal to "+arr11
//     } else if (arr22 > arr11){
//         return "arr1 with its sum equal to "+arr22
//     } else {
//         return "they must be equal"
//     }
// }

// let arr1 = [1, 2, 3]
// let arr2 = [1, 1, 1, 1]
// console.log(largest(arr1, arr2)) //arr1 with its sum equal to 6
//         DOM 

//         31) Get element witd ID "container" from tde page
//         32) Get every "td" from tde page
//         33) Create a cycle tdat prints tde text inside every td of tde page
//         34) Write a function to change tde heading of tde page
//         35) Write a function to add an extra row to tde table
//         36) Write a function to add tde class "test" to each row in tde table
//         37) Write a function to add a red background to every link in tde page
//         38) Console log "Page loaded" when tde page is correctly loaded
//         39) Write a function to add new items to a UL
//         40) Write a function to empty a list

// let contain = document.getElementById("container")
// //-----------------------------------------------------------------------------------------
let tdd = document.getElementsByTagName("td")
// // console.log(tdd)
// //------------------------------------------------------------------------------------
for (let i = 0; i < tdd.length; i++){
    // for (let j = 0; j < tdd[i].length; j++)
    tdd[i].innerText = Math.floor(Math.random()*100)
}
// //-------------------------------------------------------------------------------------------
// let h11 = document.querySelector("h1")
// // console.log(h11)
// const newHeader = function(){
//     let newHe = h11.innerText;
//     newHe = "The Header"
//     return newHe
// }
// // console.log(newHeader())
// //--------------------------------------------------------------------------------------------

// const addRow = function(){
// let table1 = document.getElementById("container")
// let roww = document.createElement("tr")
//     for (let i = 0; i < 4; i++){
//         let column = document.createElement("td")
//         column.innerText = `column ${i}`
//             roww.appendChild(column)
//     }
//         table1.appendChild(roww)

// }
// addRow()

// //----------------------------------------------------------------------------------------------------
// const addClass = function(){
//     let rowClass = document.getElementsByTagName("tr")
//     for (let i = 0; i < rowClass.length; i++){
//         rowClass[i].classList.add("test")
        
//     }
    
// }
// addClass()
// //---------------------------------------------------------------------------------------------------
// const redColor = function(){
//     let theLink = document.getElementsByTagName("a")
//     for (let i = 0; i < theLink.length; i++){
//         theLink[i].style.backgroundColor = "red"
//     }
// }
// redColor()
// //-------------------------------------------------------------------------------------------------------

// window.onload = function(){
//     console.log("page loaded")
// }
// //-----------------------------------------------------------------------------------------------------
// const newItem = function(){
//     let newList = document.getElementsByTagName("ul")[0]
//     let newItem = document.createElement("li")
//     newItem.innerText = "New Item"
//     newList.appendChild(newItem)
// }
// newItem()
// //-------------------------------------------------------------------------------------------------------------
// const emptyLi = function(){
//     let newList = document.querySelectorAll("ul>li")
//     for (let i = 0; i < newList.length; i++){
//         newList[i].remove()
//     }
// }

// emptyLi()


//         EXTRA 

//         41) Add an eventListener to alert when tde mouse is over a link, displaying tde URL
//         42) Add a button to hide every image on tde page
//         43) Add a button to hide and show tde table from tde page
//         44) Write a function to sum every number inside tde TD (if tde content is numeric)
//         45) Delete tde last letter from tde title each time tde user clicks on it
//         46) Change a single TD background color when tde user clicks on it
//         47) Add a button DELETE, on click it should delete a random TD from tde page
//         48) Add a pink border to a cell when tde mouse is over it
//         49) Write a function to add a table witd 4 rows and 3 columns programmatically
//         50) Write a function to remove tde table from tde page
//----------------------------------------------------------------------------------------------------

//     let aHref = document.getElementsByTagName('a')
    
//     for (let i = 0; i < aHref.length; i++){
//        let linkz = aHref[i].href 
//        aHref[i].addEventListener("mouseover", function(){
//            alert(linkz)
//        }) 
//     }





// //------------------------------------------------------------------------------------------------------

//     let theDiv = document.getElementsByTagName("div")[2]
//     let addButton = document.createElement("button")
//     addButton.innerText = "Click"
//     theDiv.appendChild(addButton)
//     addButton.addEventListener("click", function(){
        
//         let img = document.getElementsByTagName("img")
//         for (let i = 0; i < img.length; i++){
//             img[i].classList.toggle("img-toggle")
//         }
        
//     })
// //--------------------------------------------------------------------------------------------------------

// let theDivs = document.getElementsByTagName("div")[2]
//     let addButtons = document.createElement("button")
//     addButtons.innerText = "Toggle"
//     theDivs.appendChild(addButtons)

// addButtons.addEventListener("click", function(){
//     let table = document.getElementById("container")
//     table.classList.toggle("table-toggle")
// })
// //-------------------------------------------------------------------------------------------------------------
// const sum = function(){
//     let tdds = document.getElementsByTagName("td")
//     let add = null;
//     for (let i = 0; i < tdds.length; i++){
//         add += +tdds[i].innerText
//     }
//     return add;
// }
// console.log(sum())
// //-------------------------------------------------------------------------------------------------------------

// let h11 = document.querySelector("h1")


// h11.addEventListener("click", function(){
//     let str = h11.innerText
//     console.log(str)

//     str = str.substring(0, str.length - 1);
//     h11.innerText = str
  
// })
//---------------------------------------------------------------------------------------------------------------

    let theDiv = document.getElementsByTagName("div")[2]
    let addButto = document.createElement("button")
    addButto.innerText = "Delete"
    theDiv.appendChild(addButto)
    addButto.addEventListener("click", function(){
        let td = document.getElementsByTagName("td")
        let  randomItem = td[Math.floor(Math.random() * td.length)]
        console.log(randomItem)
        randomItem.remove()
        
    })
    
    

