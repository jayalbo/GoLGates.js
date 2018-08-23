# GoLGates.js
JavaScript ECMAScript6 logic gates (AND, OR, NOT, XOR) using Conway's Game of Life 

## Installation
##### HTML5
```
<script src="baseGOL.js"></script>
<script src="logicGates.js"></script>
```
##### HTML 4     
```
<script type="text/javascript src="baseGOL.js"></script>
<script type="text/javascript src="logicGates.js"></script>
```
## How to use it
```
golGates = new LOGICGates();

//AND Gate
golGates.andGate(1,1); //1

//OR Gate
golGates.orGate(1,0); //1

//NOT Gate
golGates.notGate(1); //0

//XOR Gate
golGates.xorGate(1,0); //1
```
## Demo
##### Game of Life 8-bit Adder
Demo of a simple 8-bit calculator (adder) using GoLGates.js - 
[Link](http://whatcreates.com/GameOfLife8BitAdder/)
> HTML/CSS by [Andrew Creech](https://codepen.io/AndrewCreech)
