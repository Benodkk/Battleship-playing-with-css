import {myTurn, player} from "../factories/player.js"
import gameboard from "../factories/gameboard.js"
// import fourFieldsToPlace from "./render.js"



let janusz = player()
let januszBoard = gameboard()
let myShips=[]

let compBoard = gameboard()
let compShips=[]









export {myTurn, janusz, januszBoard, compBoard, myShips, compShips}