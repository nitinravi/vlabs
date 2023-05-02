<!-- eslint-disable vue/no-multiple-template-root -->
<!--Designed & Developed by:
   Nirmal K (@cyberwizard1001)⁶
   Nitin Ravi (@nitinravi)
   Ritwik M (@ritwik-m) &
   Nalinadevi K (@knaldev)
for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

<template>
    <header style="padding: 20px">
    <h5>HELP</h5>
    <h1>Creating Arrays</h1>
  </header>
  <div id="snackbar">Some text some message..</div>
  <main>
    <div class="flex-row">
        <div style="width: 30%;">
            <h2>Theory</h2>
            <div class="outbox">
                <p>int a[]=new int[4];</p>
                <span id="comment">//variable declaration and instantiation</span>
                <p>a[0]=33</p>
                <p>a[1]=6</p>
                <p>a[2]=22</p>
                <p>a[3]=3</p>
                <span id="comment">//variable initialization</span>
                <p>int b[]={22,4,5,6};</p>
                <span id="comment">//variable declaration and initialization of singledimentional</span>
                <p>int arr[][]={ {1,2,3},{2,4,5},{4,4,5} };</p>
                <span id="comment">//variable declaration and initialization of multidimentional</span>
                <br>
            </div>
            <div class="content">
                <p>
                   Array is a collection of elements of the same data type. An array has a fixed size
                   .To declare an array you need to specify the data type
                   of the elements it will hold and the number of elements it will contain.
                </p>
         
            </div>
        </div>
        <div style="width: 70%;">
            <h2>Try it yourself</h2>
    <div class="outbox">
        <input type="text" v-model="one"> <input type="text" v-model="two"> = <input type="text" v-model="three"> <input type="text" v-model="four">;
        <br>
        <br>
        <span id="comment">//Declare a singledimentional array "key" of type float with size 5</span>
        <br>
    </div>
    <button class="button-9"  @click="validate_one()" >Validate</button>
</div>
  </div>
    <footer>
      <div id="buttons" class="relative">
        <button class="navitem" v-if="currentStep === 1">Next</button>
      </div>
    </footer>
  </main>
</template>


<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    incorrect(msg) {
      var x = document.getElementById("snackbar");
      x.innerHTML = msg;
      x.style.backgroundColor = "red";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000)
    },

    correct1(){
      var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000)
    },

    validate_one(){
      if(this.one.trim()=="float" && this.two.trim()=="key[]" && this.three.trim()=="new" && this.four.trim()=="float[5]"){
        this.correct1();
        alert("Correct ")
      }
      else{

        this.incorrect("Try again");
        alert("Incorrect, please try again")
      }
    }

    
  }
}
</script>


<style scoped>
.checkbox-rect2 input[type="checkbox"] {
  display: none;
}

body {
  background-color: #F9FAFE;
  font-family: 'Roboto', sans-serif;
}

#comment {
  font-style: italic;
  margin-top: 0%;
  color: gray;
  font-size: large;
}

.content{
    padding: 25px;
    font-size: large;
    width: 90%;
    line-height: 150%;
}


li {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

h4 {
  margin-top: 0px;
  margin-bottom: 10px;
}

h5{
    margin-top: 0px;
    margin-bottom: 10px;
    color: #868686;
    font-weight: lighter;
    font-size: large;
    font-family: monospace;
}

.nounphrases {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  gap: 10px;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  border-radius: 20px;
  width: fit-content;
  height: 20vh;
  max-width: 40ch;
  padding: 30px;
  min-width: 20ch;
  overflow: auto;
  overflow-x: auto;
}

input[type=text] {
  border: none;
  border-bottom: 1px solid #868686;
  background-color: transparent;
  font-size: large;
  font-family: monospace;
  font-weight: bold;
  color: white;
  outline: none;
}

body webkit-scrollbar {
  display: none;
}

.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #202020;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 25px;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: 20px;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s, box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}

.outbox {
    height: fit-content;
    min-height: 10vh;
    width: fit-content;
    min-width: 50%;
    margin: 25px;
    padding: 25px;
    border-radius: 5px;
    background-color: #202020;
    color: white;
    font-size: large;
    font-family: monospace;
    font-weight: bold;
    box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.outbox p{
    background-color: inherit;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
}


/* Hide scrollbar for IE, Edge and Firefox */
.body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 20px;
  justify-content: center;
  background-color: #F9FAFE;
  justify-content: space-between;
}

.checkbox-rect2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
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

.selected {
  color: #343a3f;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  border-radius: 7%;
  background-color: #d8e3f8;
  height: fit-content;
  width: fit-content;
  padding: 14px;
  margin: 15px;
}

.unselected {
  color: #343a3f;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
  border-radius: 10%;
  background-color: #f8f9fa;
  height: fit-content;
  width: fit-content;
  padding: 14px;
  margin: 15px;
}

.checkbox-rect2 input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  font: 14px/20px "Open Sans", Arial, sans-serif;
  cursor: pointer;
}

.checkbox-rect2 input[type="checkbox"]:hover + label:before {
  border: 1px solid #343a3f;
  box-shadow: 2px 1px 0 #343a3f;
}

.checkbox-rect2 input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 1.4em;
  height: 1.4em;
  border: 1px solid #343a3f;
  border-radius: 0.2em;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: all 0.2s, background 0.2s ease-in-out;
  transition: all 0.2s, background 0.2s ease-in-out;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: -2px -1px 0 #343a3f;
  background: #f3f3f3;
}

.checkbox-rect2 input[type="checkbox"]:checked + label:before {
  border: 2px solid #fff;
  border-radius: 0.3em;
  background: #192f4e;
  box-shadow: 2px 1px 0 #192f4e;
}

/* checkbox-rect2 end */
h4 {
  margin-top: 0;
  padding: 0;
  margin-bottom: 10px;
}

</style>