 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

 <script>
 import { ref } from 'vue'
 export default {
     setup() {
        //  const items = ref([
 
        //      { id: 10, word: 'getCustomerName():String', list: 13 },
        //      { id: 6, word: 'setCustomerName(name:String):void', list: 13 },
        //      { id: 4, word: 'setExecName(name:String):void', list: 13 },
        //      { id: 13, word: 'signContract(cObj:Customer):void', list: 13 },
        //      { id: 31, word: 'getExecName():String', list: 13 },
        //      { id: 12, word: 'visitOffice():void', list: 13 },
        //      { id: 5, word: 'releaseContract():String', list: 13 },
        //      { id: 1, word: 'locateReservation(cName:String):String', list: 13 },
        //      { id: 15, word: 'updateKeyStatus(processedBy:String):void', list: 13 },
        //      { id: 7, word: 'requestVehicle(cObj:Customer):String', list: 13 },
 
        //  ]);

        const items = ref([
 
             { id: 6, word: 'Customer', list: 13 },
             { id: 4, word: 'Person', list: 13 },
             { id: 13, word: 'Office Executive', list: 13 },
             { id: 31, word: 'Vehicle', list: 13 },
            
         ]);
 
         const getList = (list) => {
             return items.value.filter((item) => item.list === list)
         }
 
         const startDrag = (event, item) => {
             console.log(item)
             event.dataTransfer.setData('itemID', item.id)
             event.dataTransfer.effectAllowed = 'move'
             event.dataTransfer.dropEffect = 'move'
         }
 
         const onDrop = (event, list) => {
             event.preventDefault()
             const itemID = event.dataTransfer.getData('itemID')
             const item = items.value.find((item) => item.id === parseInt(itemID))
             item.list = list
         }
 
         return {
             getList,
             startDrag,
             onDrop
         }
     },
     data() {
         return {
             valid: [false, false],
             validated: false
         }
     },
     methods: {
         reload() {
             this.$router.go();
         },
         validate() {
             this.validated = true;
 
             for (let i = 0; i < 2; i++) {
                 this.valid[i] = false;
             }
 
             let box_one = ''
             let box_two = ''

 
             for (let i = 0; i < this.getList(1).length; i++) {
                 box_one = box_one + this.getList(1)[i].word
             }
 
             for (let i = 0; i < this.getList(2).length; i++) {
                 box_two = box_two + this.getList(2)[i].word
             }
 
            
 
             if (box_one.includes("Person") && (box_one.length == 6)) {
                 this.valid[0] = true;
                 var x = document.getElementById("snackbar");
                 x.innerHTML = "Person is placed right.";
                 x.style.backgroundColor = "green";
                 x.className = "show";
                 setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
             }
 
             if ((box_two.includes("Customer") && (box_two.length == 8)) || (box_two.includes("Office Executive") && (box_two.length == 16))) {
                 this.valid[1] = true;
                 // eslint-disable-next-line no-redeclare
                 var x = document.getElementById("snackbar");
                 x.innerHTML = "You got it right!";
                 x.style.backgroundColor = "green";
                 x.className = "show";
                 setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
             }
 
 
 
             if ((this.valid[0] == true) && (this.valid[1] == true)) { this.$router.push('screen-clerk-customer'); }
 
             console.log(this.validated)
             console.log(box_one)
             console.log(box_two)
 
 
         },
         popup() {
             var modal = document.getElementById("myModal");
 
             // Get the button that opens the modal
             var btn = document.getElementById("myBtn");
 
             // Get the <span> element that closes the modal
             var span = document.getElementsByClassName("close")[0];
 
             // When the user clicks the button, open the modal 
             btn.onclick = function () {
                 modal.style.display = "block";
             }
 
             // When the user clicks on <span> (x), close the modal
             span.onclick = function () {
                 modal.style.display = "none";
             }
 
             // When the user clicks anywhere outside of the modal, close it
             window.onclick = function (event) {
                 if (event.target == modal) {
                     modal.style.display = "none";
                 }
             }
         }
     }
 }
 </script>
 
 
 <template class="app">
 
     <header style="padding: 20px; display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
     <div>
     <h1>Step 0: Understanding Generalization</h1>
     <p>In order to understand Generalization please drag the class names into boxes to establish has-a and is-a relations.<br>
    Note: There maybe more than one solution and providing any one would suffice.</p>
     </div>
     <button @click="reload()" class="button-30">Reload</button>
 
 <button id="myBtn" @click="popup()" class="button-30" style="margin-left: 20px;">Help</button>
       <!--TODO: Add a help button that opens a popup with the help text-->
   </header>
 
     <main>
         <div id="snackbar">Some text some message..</div>
         <div id="myModal" class="modal">
 
             <!-- Modal content -->
             <div class="modal-content">
                 <span class="close">&times;</span>
                 <p style="padding: 25px;">The following is an example of is-a and has-a relationship</p>
                 <img src="..\assets\clue.jpg" style="height: 500px;">
             </div>
 
 
         </div>
 
         <div class="flex">
             <div class="flex-horizontal">
                 <div>
                     <div class="flex-horizontal">
                         <div class="outer-box">
                             <h3>Is-A</h3>
                             <div class="unidentified drag-el-horizontal" draggable="false"
                                 :class="{ correct: (validated && valid[0]), incorrect: (validated && !valid[0]) }">
 
                                 <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
                                     <div v-for="item in getList(1)" :key="item.id" class="unidentified drag-el-horizontal"
                                         draggable="true" @dragstart="startDrag($event, item)">
                                         <p>{{ item.word }}</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
 
 

                     </div>
 
                     <div class="flex-horizontal">
                         <div class="outer-box">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="202.000000pt" height="52.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2490 5109 c-27 -7 -153 -129 -583 -562 -362 -364 -555 -566 -568
-592 -54 -115 26 -261 150 -273 111 -10 91 -25 498 381 l373 371 2 -2149 3
-2150 24 -38 c13 -21 42 -50 64 -65 34 -23 52 -27 107 -27 55 0 73 4 107 27
22 15 51 44 64 65 l24 38 3 2150 2 2149 373 -371 c407 -406 387 -391 498 -381
122 12 204 157 151 270 -19 42 -1062 1104 -1117 1138 -40 25 -124 34 -175 19z"/>
</g>
</svg>
<br><br>
 
                             <div class="unidentified drag-el-horizontal" draggable="false"
                                 :class="{ correct: (validated && valid[1]), incorrect: (validated && !valid[1]) }">
 
                                 <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
                                     <div v-for="item in getList(2)" :key="item.id" class="unidentified drag-el-horizontal"
                                         draggable="true" @dragstart="startDrag($event, item)">
                                         <p>{{ item.word }}</p>
                                     </div>
                                 </div>
                             </div>
 
                         </div>
 
        
                     </div>
                 </div>
 
             </div>
 
             <div>
                 <div class="outer-box">
                     <h3>Classes</h3>
 
                     <div class="unidentified drag-el-horizontal" draggable="false">
                         <div class="drop-zone" @drop="onDrop($event, 13)" @dragenter.prevent @dragover.prevent>
                             <div v-for="item in getList(13)" :key="item.id" class="unidentified drag-el-horizontal"
                                 draggable="true" @dragstart="startDrag($event, item)">
                                 <p>{{ item.word }}</p>
                             </div>
                         </div>
                     </div>
 
                 </div>
             </div>
         </div>
     </main>
     <!--eslint-disable-next-line vue/no-multiple-template-root-->
     <footer>
         <div id="buttons" class="relative">
             <button class="navitem" @click="validate()">Next</button>
         </div>
     </footer>
 </template>
 
 <style scoped>
 .image {
     align-items: center;
     display: flex;
     flex-direction: row;
     justify-content: center;
     width: 15%;
     height: auto;
     padding: 0;
 }
 
 .identify-box {
     background-color: #fff;
 }
 
 .identified {
     box-shadow: 2px 3px 10px 2px #D7DFFF;
     background-color: #6D71FA;
     color: white;
 }
 
 .unidentified {
     background-color: #fff;
     color: black;
     box-shadow: 2px 3px 10px 2px #D7DFFF;
 }
 
 .incorrect {
     border: 1px solid #CB3434;
 }
 
 .correct {
     border: 1px solid #32A962;
 }
 
 .flex-between {
     display: flex;
     flex-direction: column;
     margin-left: 10px;
     margin-right: 10px;
     width: auto;
     gap: 10px;
     background-color: #F9FAFE;
 }
 
 .drop-zone {
     display: flex;
     /* width: fit-content; */
     min-width: 30ch;
     max-width: 600px;
     margin: 5px;
     height: fit-content;
     /* box-shadow: 2px 3px 10px 2px #D7DFFF; */
     max-height: fit-content;
     min-height: 8vh;
     flex-wrap: wrap;
     flex-direction: column;
     border-radius: 10px;
     padding: 5px;
 }
 
 
 .flex-horizontal {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     align-items: flex-start;
     justify-content: space-between;
 }
 
 .flex {
     display: flex;
     flex-direction: row;
     flex-wrap: nowrap;
     justify-content: space-between;
 }
 
 .outer-box {
     padding: 20px;
     background-color: #F9FAFE;
     /* box-shadow: 1px 2px 5px 1px #D7DFFF; */
     max-width: 600px;
     min-width: fit-content;
     border-radius: 10px;
     display: flex;
     flex-direction: column;
 
 }
 
 .drag-el-horizontal {
     padding-left: 2vh;
     padding-right: 2vh;
     border-radius: 5px;
     margin: 5px;
     padding-top: 1vh;
     padding-bottom: 1vh;
     height: fit-content;
     max-width: inherit;
     /* box-shadow: 2px 3px 10px 2px #D7DFFF; */
     cursor: pointer;
 }
 
 .drop-zone-horizontal {
     display: flex;
     max-width: 1000px;
     min-width: 700px;
     margin: 10px;
     margin-bottom: 25px;
     box-shadow: 2px 3px 10px 2px #D7DFFF;
     background-color: #F9FAFE;
     min-height: 10vh;
     border-radius: 10px;
     max-height: fit-content;
     overflow: auto;
     flex-wrap: wrap;
     flex-direction: row;
     padding: 10px;
 }
 
 .drag-el-horizontal:nth-last-child() {
     margin-bottom: 0;
 }
 
 .drag-el:nth-last-child() {
     margin-bottom: 0;
 }
 
 .flexbox {
     display: flex;
     justify-content: space-between;
 
     height: 100%;
     width: 98%;
 
     overflow: hidden;
 
     margin: 15px;
     padding: 15px
 }
 
 #buttons {
     margin: 0;
     text-align: center;
 }
 
 .relative {
     padding: 10px;
     display: flex;
     width: 100%;
     flex-direction: row;
     justify-content: space-between;
 }
 
 .navitem {
     width: 100px;
     height: 50px;
     padding: 10px;
     text-align: center;
     border: none;
     background-color: #272971;
     border-radius: 5px;
     color: #fff;
     cursor: pointer;
     font-weight: normal;
     font-size: large;
 }
 
 .navitem:hover {
     background-color: #fff;
     color: #272971;
     border: 1px solid #272971;
     cursor: pointer;
     font-weight: bold;
 }
 
 #snackbar {
     visibility: hidden;
     min-width: 250px;
     margin-left: -125px;
     background-color: #333;
     color: #fff;
     text-align: center;
     border-radius: 2px;
     padding: 16px;
     position: fixed;
     z-index: 1;
     left: 50%;
     bottom: 30px;
     font-size: 17px;
 }
 
 #snackbar.show {
     visibility: visible;
     -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
     animation: fadein 0.5s, fadeout 0.5s 2.5s;
 }
 
 @-webkit-keyframes fadein {
     from {
         bottom: 0;
         opacity: 0;
     }
 
     to {
         bottom: 30px;
         opacity: 1;
     }
 }
 
 @keyframes fadein {
     from {
         bottom: 0;
         opacity: 0;
     }
 
     to {
         bottom: 30px;
         opacity: 1;
     }
 }
 
 @-webkit-keyframes fadeout {
     from {
         bottom: 30px;
         opacity: 1;
     }
 
     to {
         bottom: 0;
         opacity: 0;
     }
 }
 
 @keyframes fadeout {
     from {
         bottom: 30px;
         opacity: 1;
     }
 
     to {
         bottom: 0;
         opacity: 0;
     }
 }
 
 .button-30 {
     align-items: center;
     appearance: none;
     background-color: #FCFCFD;
     border-radius: 4px;
     border-width: 0;
     box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
     box-sizing: border-box;
     color: #36395A;
     cursor: pointer;
     display: inline-flex;
     font-family: "JetBrains Mono", monospace;
     height: 48px;
     justify-content: center;
     line-height: 1;
     list-style: none;
     overflow: hidden;
     padding-left: 16px;
     padding-right: 16px;
     position: relative;
     text-align: left;
     text-decoration: none;
     transition: box-shadow .15s, transform .15s;
     user-select: none;
     -webkit-user-select: none;
     touch-action: manipulation;
     white-space: nowrap;
     will-change: box-shadow, transform;
     font-size: 18px;
 }
 
 .button-30:focus {
     box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
 }
 
 .button-30:hover {
     box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
     transform: translateY(-2px);
 }
 
 .button-30:active {
     box-shadow: #D6D6E7 0 3px 7px inset;
     transform: translateY(2px);
 }
 
 .modal {
     display: none;
     /* Hidden by default */
     position: fixed;
     /* Stay in place */
     z-index: 1;
     /* Sit on top */
     padding-top: 100px;
     /* Location of the box */
     left: 0;
     top: 0;
     width: 100%;
     /* Full width */
     height: 100%;
     /* Full height */
     overflow: auto;
     /* Enable scroll if needed */
     background-color: rgb(0, 0, 0);
     /* Fallback color */
     background-color: rgba(0, 0, 0, 0.4);
     /* Black w/ opacity */
 }
 
 /* Modal Content */
 .modal-content {
     background-color: #fefefe;
     margin: auto;
     padding: 20px;
     border: 1px solid #888;
     width: 80%;
 }
 
 /* The Close Button */
 .close {
     color: #aaaaaa;
     float: right;
     font-size: 28px;
     font-weight: bold;
 }
 
 .close:hover,
 .close:focus {
     color: #000;
     text-decoration: none;
     cursor: pointer;
 }
 </style>
 
 