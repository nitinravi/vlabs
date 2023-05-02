<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-multiple-template-root -->
 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

 <!--Style update-->
 <!--Specific errors-->

<template>
  <header style="padding: 20px">
    <h1>Step 1: Identifying common variables</h1>
    <p>To facilitate the generalisation of Exec and Customer, identify variables that are common and assign them to class Person.</p>
  </header>

  <div id="snackbar">Some text some message..</div>

  <div id="myModal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <component v-bind:is=currentComponent />
            </div>
          </div>

  <div class="root">

    <div class="col">
      <div class="row codebox">
        <h4>
          Exec Class
        </h4>
        <form class="checkbox-rect2">
          <template v-for="item in variables">
            <div style="margin-top: 10px" :class="{selected: item.selected, unselected: !item.selected}"
                 v-if="item.variable === 'employee' || item.variable === 'shared'">
              <input type="checkbox" :id="item.id" v-model="item.selected"/>
              <label :for="item.id">{{ item.value }}</label>
            </div>
          </template>
        </form>

      </div>
      <div class="row codebox">
        <h4>
          Customer Class
        </h4>
        <form class="checkbox-rect2">
          <template v-for="item in variables">
            <div style="margin-top: 10px" :class="{selected: item.selected, unselected: !item.selected}"
                 v-if="item.variable === 'customer' || item.variable === 'shared'">
              <input type="checkbox" :id="item.id" v-model="item.selected"/>
              <label :for="item.id">{{ item.value }}</label>
            </div>
          </template>
        </form>
      </div>
    </div>
    <div class="col codebox">
      <h4>
        Person Class
      </h4>
      <br>
      <br>
      <template v-for="item in variables">
        <div v-if="item.selected" class="variable">
          {{ item.value }}
        </div>
      </template>
      <br>
    </div>
    <div class="col button-space">
      <button class="button-9" id="btn5" @click="validate()"> Submit </button>
    </div>

  </div>


</template>
<script>

import abstractComponent from "../components/help/abstractComponent.vue";
import arrayListComponent from "../components/help/arrayListComponent.vue";
import arraysComponent from "../components/help/arraysComponent.vue";
import classCastExceptionComponent from "../components/help/classCastExceptionComponent.vue";
import constructorWritingComponent from "../components/help/constructorWritingComponent.vue";
import dateComponent from "../components/help/dateComponent.vue";
import extendsComponent from "../components/help/extendsComponent.vue";
import functionCallingWithObjectComponent from "../components/help/functionCallingWithObjectComponent.vue";
import getterComponent from "../components/help/getterComponent.vue";
import interfaceComponent from "../components/help/interfaceComponent.vue";
import newVariableComponent from "../components/help/newVariableComponent.vue";
import nullPointerExceptionComponent from "../components/help/nullPointerExceptionComponent.vue";
import objectCreationComponent from "../components/help/objectCreationComponent.vue";
import parseExceptionComponent from "../components/help/parseExceptionComponent.vue";
import passingArgumentsToFunctionsComponent from "../components/help/passingArgumentsToFunctionsComponent.vue";
import printFunctionComponent from "../components/help/printFunctionComponent.vue";
import setterComponent from "../components/help/setterComponent.vue";
import stringCompareComponent from "../components/help/StringcompareComponent.vue";
import superKeywordComponent from "../components/help/superKeywordComponent.vue";
import thisComponent from "../components/help/thisComponent.vue";
import tryCatchComponent from "../components/help/tryCatchComponent.vue";


export default {
  components: {
    abstractComponent,
    arrayListComponent,
    arraysComponent,
    classCastExceptionComponent,
    constructorWritingComponent,
    dateComponent,
    extendsComponent,
    functionCallingWithObjectComponent,
    getterComponent,
    interfaceComponent,
    newVariableComponent,
    nullPointerExceptionComponent,
    objectCreationComponent,
    parseExceptionComponent,
    passingArgumentsToFunctionsComponent,
    printFunctionComponent,
    setterComponent,
    stringCompareComponent,
    superKeywordComponent,
    thisComponent,
    tryCatchComponent,
  },
  name: "ExecCustomer",
  data() {
    return {
      variables: [
        {id: 0, value: "Name", selected: false, variable: "shared"},
        {id: 1, value: "City", selected: false, variable: "shared"},
        {id: 2, value: "Phone", selected: false, variable: "shared"},
        {id: 3, value: "Email", selected: false, variable: "shared"},
        {id: 4, value: "empID", selected: false, variable: "employee"},
        {id: 5, value: "employeeCount", selected: false, variable: "employee"},
        {id: 6, value: "customerID", selected: false, variable: "customer"},
        {id: 7, value: "customerCount", selected: false, variable: "customer"},
      ],
      currentComponent: 'constructorWritingComponent',
    }
  },
  methods: {
    popup(chosenComponent) {
      this.currentComponent = chosenComponent;
      console.log("popup")
      var modal = document.getElementById("myModal");
      console.log(modal)
      var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        console.log(modal.style.display)
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
    },
    correct1(msg){
      var x = document.getElementById("snackbar");
                x.innerHTML = msg;
                x.style.backgroundColor = "green";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000)
    },
    incorrect(msg) {
      var x = document.getElementById("snackbar");
      x.innerHTML = msg;
      x.style.backgroundColor = "red";
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000)
    },

    validate(){
      let count = 0;
      for (let i = 0; i < this.variables.length; i++) {
        if (this.variables[i].selected && this.variables[i].variable === "shared") {
          count++;
        }
        else if(this.variables[i].selected && this.variables[i].variable !== "shared"){
          count = 0;
          break;
        }
      }
      if (count === 4) {
        this.correct1("Answer is right")
        this.$router.push('/screen-one')
      } else {
        this.incorrect("Please choose ONLY variables that are common to both classes")
      }
    }
  }
}
</script>

<style scoped>

h4 {
  padding: 0;
  margin-right: 15px;
  margin-top: 0;
}

.root {
  display: flex;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  margin: 10px;
  min-width: 30%;
  display: flex;
  flex-direction: column;
}

.col {
  margin: 5px;
  display: flex;
  justify-content: center;
}

.col:nth-child(1) {
  width: 100%;
}

.col:nth-child(2) {
  width: 40%;
  flex: 2;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

}

.button-space {
  flex: 1;
  align-self: end;
  justify-self: end;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}

.codebox {
  padding: 25px;
  border-radius: 10px;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.variable {
  margin-left: 40px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: #192f4e 1px solid;
  padding: 10px;
  background-color: #192f4e;
  color: #fff;
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

.checkbox-rect2 input[type="checkbox"] {
  display: none;
}

.button-9 {
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0 25px;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s, box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 200px;
}

.button-9:hover {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
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

#myModal {
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