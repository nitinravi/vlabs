 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

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
    correct1() {
      var x = document.getElementById("snackbar");
      x.innerHTML = "Correct";
      x.style.backgroundColor = "green";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000)
    },
    incorrect() {
      var x = document.getElementById("snackbar");
      x.innerHTML = "Inorrect. Try again";
      x.style.backgroundColor = "red";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000)
    },
    validate_one() {
      if (this.one === "class" && this.two === "Person") {
        this.correct1();
        this.display[0] = "none";
        this.display[1] = "inherit";
      } else {
        this.incorrect();
      }
    },
    validate_two() {
      if (this.three === "String" && this.four === "name") {
        this.correct1();
        this.display[1] = "none";
        this.display[2] = "inherit";
      } else {
        this.incorrect();
      }
    },

    validate_three() {
      if (this.five === "String" && this.six === "city") {
        this.correct1();
        this.display[2] = "none";
        this.display[3] = "inherit";
      } else {
        this.incorrect();
      }
    },

    validate_four() {
      if (this.seven === "long" && this.eight === "phone") {
        this.correct1();
        this.display[3] = "none";
        this.display[4] = "inherit";
      } else {
        this.incorrect();
      }
    },

    validate_five() {
      if (this.nine === "String" && this.ten === "email") {
        this.correct1();
        this.display[4] = "none";
        this.display[5] = "block";
      } else {
        this.incorrect();
      }
    },

    validate_six() {
      let eleven = this.eleven;
      let twelve = this.twelve;
      eleven.trim();
      twelve.trim();
      if (eleven == "String" && twelve == "name") {
        this.correct1();
        console.log("correct six")
        this.display[5] = "none";
        this.display[6] = "block";
      } else {
        console.log("incorrect six")
        console.log(this.eleven)
        console.log(this.twelve)
        this.incorrect();
      }
    },

    validate_seven() {
      if (this.thirteen === "String" && this.fourteen === "email") {
        this.correct1();
        this.display[6] = "none";
        this.display[7] = "block";
      } else {
        this.incorrect();
      }
    },

    validate_eight() {
      if (this.fifteen === "String" && this.sixteen === "city") {
        this.correct1();
        this.display[7] = "none";
        this.display[8] = "block";
      } else {
        this.incorrect();
      }
    },

    validate_nine() {
      if (this.seventeen === "long" && this.eighteen === "phone") {
        this.correct1();
        this.display[8] = "none";
        this.display[9] = "block";
      } else {
        this.incorrect();
      }
    },

    validate_ten() {
      if (this.nineteen === "void" && this.twenty === "name" && this.twenty_one === "this") {
        this.correct1();
        this.display[9] = "none";
        this.display[10] = "block";
      } else {
        this.incorrect();
      }
    }
  },
  data() {
    return {
      id: 'container',
      class: 'wrapper',
      currentComponent: 'constructorWritingComponent',
      button_value: 'Evaluate',
      button_text: "Incorrect. Try again",
      button_text_right: "Next",
      correct: false,
      display: ["block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
    }
  }

}

</script>

<template class="app">

  <main>
    <div id="snackbar">Some text some message..</div>

    <div id="myModal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <component v-bind:is=currentComponent />
            </div>
          </div>

    <div class="row">
      <div class="column col-box">
        <h1 style="padding: 25px;">Fill in the Java code for the following Person class.</h1>
        <h2 style="padding: 25px;">You only have to fill in the spaces provided.</h2>

        <div class="flex-col"
            style="height: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[0] }">
          <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
            <mark0>Class Person</mark0>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            - name: String
            <br>
            - city: String
            <br>
            - phone: long
            <br>
            - email: String
            <br>
          </div>
          <div style="padding: 15px; line-height: 50px;">
            + getName(): String
            <br>
            + getEmail(): String
            <br>
            + getCity(): String
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>

        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[1] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark0>- name: String</mark0>
            <br>
            - city: String
            <br>
            - phone: long
            <br>
            - email: String
            <br>
          </div>
          <div style="padding: 15px; line-height: 50px;">
            + getName(): String
            <br>
            + getEmail(): String
            <br>
            + getCity(): String
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>

        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[2] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark0>- city: String</mark0>
            <br>
            - phone: long
            <br>
            - email: String
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getName(): String
            <br>
            + getEmail(): String
            <br>
            + getCity(): String
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>

        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[3] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark0>- phone: long</mark0>
            <br>
            - email: String
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getName(): String
            <br>
            + getEmail(): String
            <br>
            + getCity(): String
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>

        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[4] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark0>- email: String</mark0>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            + getName(): String
            <br>
            + getEmail(): String
            <br>
            + getCity(): String
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>

        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[5] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark0>+ getName(): String</mark0>
            <br>
            + getEmail(): String
            <br>
            + getCity(): String
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>


        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[6] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getName(): String</mark1>
            <br>
            <mark0>+ getEmail(): String</mark0>
            <br>
            + getCity(): String
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>


        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[7] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getName(): String</mark1>
            <br>
            <mark1>+ getEmail(): String</mark1>
            <br>
            <mark0>+ getCity(): String</mark0>
            <br>
            + getPhone(): long
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>

        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[8] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getName(): String</mark1>
            <br>
            <mark1>+ getEmail(): String</mark1>
            <br>
            <mark1>+ getCity(): String</mark1>
            <br>
            <mark0>+ getPhone(): long</mark0>
            <br>
            + setName(name: String): void
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            + setPhone(phone: long): void
            <br>
          </div>
        </div>


        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[9] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getName(): String</mark1>
            <br>
            <mark1>+ getEmail(): String</mark1>
            <br>
            <mark1>+ getCity(): String</mark1>
            <br>
            <mark1>+ getPhone(): long</mark1>
            <br>
            <mark0>+ setName(name: String): void</mark0>
            <br>
            + setEmail(email: String): void
            <br>
            + setCity(city: String): void
            <br>
            >+ setPhone(phone: long): void
            <br>
          </div>
        </div>

        <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            :style="{ display: display[10] }">
          <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
            <mark1>Class Person</mark1>
          </div>
          <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
            <mark1>- name: String</mark1>
            <br>
            <mark1>- city: String</mark1>
            <br>
            <mark1>- phone: long</mark1>
            <br>
            <mark1>- email: String</mark1>
            <br>
          </div>
          <div style="padding: 15px; line-height: 40px;">
            <mark1>+ getName(): String</mark1>
            <br>
            <mark1>+ getEmail(): String</mark1>
            <br>
            <mark1>+ getCity(): String</mark1>
            <br>
            <mark1>+ getPhone(): long</mark1>
            <br>
            <mark1>+ setName(name: String): void</mark1>
            <br>
            <mark1>+ setEmail(email: String): void</mark1>
            <br>
            <mark1>+ setCity(city: String): void</mark1>
            <br>
            <mark1>+ setPhone(phone: long): void</mark1>
            <br>
          </div>
        </div>


        <!--        my box -->
        <div class="flex-box-svg">
          <!--from here-->
          <div class="row-svg">
            <svg width="104" height="198" style="background-color: transparent" viewBox="0 0 104 198"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <line x1="25.4733" y1="209.504" x2="88.1127" y2="21.0543" stroke="black"/>
              <path d="M98.0787 23.9775L79.127 17.8467L93.9122 4.49953L98.0787 23.9775Z" stroke="black"/>
            </svg>
            <svg width="220" height="198" style="background-color: transparent" viewBox="0 0 220 198"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <line x1="163.266" y1="197.357" x2="64.4637" y2="25.0918" stroke="black"/>
              <path d="M73.2833 19.6074L56.0851 29.6559L55.9819 9.73754L73.2833 19.6074Z" stroke="black"/>
            </svg>
          </div>
          <div class="row-svg">
            <div
                style="width: fit-content; height: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;">
              <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
                Class Customer
              </div>
              <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 50px;">
                - customerID: int
                <br>
                - customerCount: int
              </div>
              <div style="padding: 15px; line-height: 50px;">
                + getCustomerID(): int
                <br>
              </div>
            </div>

            <svg width="100%" height="26.1" viewBox="0 0 181 35" fill="none" style="background-color: transparent"
                 xmlns="http://www.w3.org/2000/svg" class="svg-mid">
              <line y1="19.5" x2="181" y2="19.5" stroke="black"/>
              <path
                  d="M42.4773 10.4659V4.84091H43.4318V10.4659H42.4773ZM40.142 8.13068V7.17614H45.767V8.13068H40.142ZM53.9329 6C53.8391 5.71307 53.7156 5.45597 53.5621 5.22869C53.4116 4.99858 53.2312 4.80256 53.021 4.64062C52.8136 4.47869 52.5778 4.35511 52.3136 4.26989C52.0494 4.18466 51.7596 4.14205 51.4442 4.14205C50.9272 4.14205 50.457 4.27557 50.0337 4.54261C49.6104 4.80966 49.2738 5.20312 49.0238 5.72301C48.7738 6.2429 48.6488 6.88068 48.6488 7.63636C48.6488 8.39205 48.7752 9.02983 49.0281 9.54972C49.2809 10.0696 49.6232 10.4631 50.055 10.7301C50.4869 10.9972 50.9727 11.1307 51.5124 11.1307C52.0124 11.1307 52.4528 11.0241 52.8335 10.8111C53.217 10.5952 53.5153 10.2912 53.7283 9.89915C53.9442 9.50426 54.0522 9.03977 54.0522 8.50568L54.3761 8.57386H51.7511V7.63636H55.0749V8.57386C55.0749 9.29261 54.9215 9.91761 54.6147 10.4489C54.3107 10.9801 53.8903 11.392 53.3533 11.6847C52.8192 11.9744 52.2056 12.1193 51.5124 12.1193C50.7397 12.1193 50.0607 11.9375 49.4755 11.5739C48.8931 11.2102 48.4386 10.6932 48.1119 10.0227C47.788 9.35227 47.6261 8.55682 47.6261 7.63636C47.6261 6.94602 47.7184 6.32528 47.9031 5.77415C48.0906 5.22017 48.3548 4.74858 48.6957 4.35938C49.0366 3.97017 49.44 3.67188 49.9059 3.46449C50.3718 3.2571 50.8846 3.15341 51.4442 3.15341C51.9045 3.15341 52.3335 3.22301 52.7312 3.36222C53.1317 3.49858 53.4883 3.69318 53.8008 3.94602C54.1161 4.19602 54.3789 4.49574 54.5891 4.84517C54.7994 5.19176 54.9442 5.5767 55.0238 6H53.9329ZM59.4929 12.1364C58.8622 12.1364 58.3182 11.9972 57.8608 11.7188C57.4062 11.4375 57.0554 11.0455 56.8082 10.5426C56.5639 10.0369 56.4418 9.44886 56.4418 8.77841C56.4418 8.10795 56.5639 7.51705 56.8082 7.00568C57.0554 6.49148 57.3991 6.09091 57.8395 5.80398C58.2827 5.5142 58.7997 5.36932 59.3906 5.36932C59.7315 5.36932 60.0682 5.42614 60.4006 5.53977C60.733 5.65341 61.0355 5.83807 61.3082 6.09375C61.581 6.34659 61.7983 6.68182 61.9602 7.09943C62.1222 7.51705 62.2031 8.03125 62.2031 8.64205V9.06818H57.1577V8.19886H61.1804C61.1804 7.82955 61.1065 7.5 60.9588 7.21023C60.8139 6.92045 60.6065 6.69176 60.3366 6.52415C60.0696 6.35653 59.7543 6.27273 59.3906 6.27273C58.9901 6.27273 58.6435 6.37216 58.3509 6.57102C58.0611 6.76705 57.8381 7.02273 57.6818 7.33807C57.5256 7.65341 57.4474 7.99148 57.4474 8.35227V8.93182C57.4474 9.42614 57.5327 9.84517 57.7031 10.1889C57.8764 10.5298 58.1165 10.7898 58.4233 10.9688C58.7301 11.1449 59.0866 11.233 59.4929 11.233C59.7571 11.233 59.9957 11.196 60.2088 11.1222C60.4247 11.0455 60.6108 10.9318 60.767 10.7812C60.9233 10.6278 61.044 10.4375 61.1293 10.2102L62.1009 10.483C61.9986 10.8125 61.8267 11.1023 61.5852 11.3523C61.3438 11.5994 61.0455 11.7926 60.6903 11.9318C60.3352 12.0682 59.9361 12.1364 59.4929 12.1364ZM66.5795 5.45455V6.30682H63.1875V5.45455H66.5795ZM64.1761 3.88636H65.1818V10.125C65.1818 10.4091 65.223 10.6222 65.3054 10.7642C65.3906 10.9034 65.4986 10.9972 65.6293 11.0455C65.7628 11.0909 65.9034 11.1136 66.0511 11.1136C66.1619 11.1136 66.2528 11.108 66.3239 11.0966C66.3949 11.0824 66.4517 11.071 66.4943 11.0625L66.6989 11.9659C66.6307 11.9915 66.5355 12.017 66.4134 12.0426C66.2912 12.071 66.1364 12.0852 65.9489 12.0852C65.6648 12.0852 65.3864 12.0241 65.1136 11.902C64.8438 11.7798 64.6193 11.5938 64.4403 11.3438C64.2642 11.0938 64.1761 10.7784 64.1761 10.3977V3.88636ZM72.6115 6.92045L71.7081 7.17614C71.6513 7.02557 71.5675 6.87926 71.4567 6.73722C71.3487 6.59233 71.201 6.47301 71.0135 6.37926C70.826 6.28551 70.5859 6.23864 70.2933 6.23864C69.8928 6.23864 69.5589 6.33097 69.2919 6.51562C69.0277 6.69744 68.8956 6.92898 68.8956 7.21023C68.8956 7.46023 68.9865 7.65767 69.1683 7.80256C69.3501 7.94744 69.6342 8.06818 70.0206 8.16477L70.9922 8.40341C71.5774 8.54545 72.0135 8.76278 72.3004 9.0554C72.5874 9.34517 72.7308 9.71875 72.7308 10.1761C72.7308 10.5511 72.6229 10.8864 72.407 11.1818C72.1939 11.4773 71.8956 11.7102 71.5121 11.8807C71.1286 12.0511 70.6825 12.1364 70.174 12.1364C69.5064 12.1364 68.9538 11.9915 68.5163 11.7017C68.0788 11.4119 67.8018 10.9886 67.6854 10.4318L68.6399 10.1932C68.7308 10.5455 68.9027 10.8097 69.1555 10.9858C69.4112 11.1619 69.745 11.25 70.157 11.25C70.6257 11.25 70.9979 11.1506 71.2734 10.9517C71.5518 10.75 71.6911 10.5085 71.6911 10.2273C71.6911 10 71.6115 9.80966 71.4524 9.65625C71.2933 9.5 71.049 9.38352 70.7195 9.30682L69.6286 9.05114C69.0291 8.90909 68.5888 8.68892 68.3075 8.39062C68.0291 8.08949 67.8899 7.71307 67.8899 7.26136C67.8899 6.89205 67.9936 6.56534 68.201 6.28125C68.4112 5.99716 68.6967 5.77415 69.0575 5.61222C69.4212 5.45028 69.8331 5.36932 70.2933 5.36932C70.9411 5.36932 71.4496 5.51136 71.8189 5.79545C72.1911 6.07955 72.4553 6.45455 72.6115 6.92045ZM77.9947 7.78977V8.72727H74.1765V7.78977H77.9947ZM80.7017 9.61364L80.6847 8.36932H80.8892L83.7528 5.45455H84.9972L81.946 8.53977H81.8608L80.7017 9.61364ZM79.7642 12V3.27273H80.7699V12H79.7642ZM83.9233 12L81.3665 8.76136L82.0824 8.0625L85.2017 12H83.9233ZM88.7663 12.1364C88.1357 12.1364 87.5916 11.9972 87.1342 11.7188C86.6797 11.4375 86.3288 11.0455 86.0817 10.5426C85.8374 10.0369 85.7152 9.44886 85.7152 8.77841C85.7152 8.10795 85.8374 7.51705 86.0817 7.00568C86.3288 6.49148 86.6726 6.09091 87.1129 5.80398C87.5561 5.5142 88.0732 5.36932 88.6641 5.36932C89.005 5.36932 89.3416 5.42614 89.674 5.53977C90.0064 5.65341 90.3089 5.83807 90.5817 6.09375C90.8544 6.34659 91.0717 6.68182 91.2337 7.09943C91.3956 7.51705 91.4766 8.03125 91.4766 8.64205V9.06818H86.4311V8.19886H90.4538C90.4538 7.82955 90.38 7.5 90.2322 7.21023C90.0874 6.92045 89.88 6.69176 89.6101 6.52415C89.343 6.35653 89.0277 6.27273 88.6641 6.27273C88.2635 6.27273 87.9169 6.37216 87.6243 6.57102C87.3345 6.76705 87.1115 7.02273 86.9553 7.33807C86.799 7.65341 86.7209 7.99148 86.7209 8.35227V8.93182C86.7209 9.42614 86.8061 9.84517 86.9766 10.1889C87.1499 10.5298 87.3899 10.7898 87.6967 10.9688C88.0036 11.1449 88.3601 11.233 88.7663 11.233C89.0305 11.233 89.2692 11.196 89.4822 11.1222C89.6982 11.0455 89.8842 10.9318 90.0405 10.7812C90.1967 10.6278 90.3175 10.4375 90.4027 10.2102L91.3743 10.483C91.272 10.8125 91.1001 11.1023 90.8587 11.3523C90.6172 11.5994 90.3189 11.7926 89.9638 11.9318C89.6087 12.0682 89.2095 12.1364 88.7663 12.1364ZM93.4549 14.4545C93.2844 14.4545 93.1325 14.4403 92.9989 14.4119C92.8654 14.3864 92.7731 14.3608 92.7219 14.3352L92.9776 13.4489C93.2219 13.5114 93.4379 13.5341 93.6254 13.517C93.8129 13.5 93.979 13.4162 94.1239 13.2656C94.2717 13.1179 94.4066 12.8778 94.5288 12.5455L94.7163 12.0341L92.2958 5.45455H93.3867L95.1935 10.6705H95.2617L97.0685 5.45455H98.1594L95.381 12.9545C95.256 13.2926 95.1012 13.5724 94.9165 13.794C94.7319 14.0185 94.5174 14.1847 94.2731 14.2926C94.0316 14.4006 93.7589 14.4545 93.4549 14.4545ZM104.123 6.92045L103.22 7.17614C103.163 7.02557 103.079 6.87926 102.968 6.73722C102.86 6.59233 102.713 6.47301 102.525 6.37926C102.338 6.28551 102.098 6.23864 101.805 6.23864C101.404 6.23864 101.071 6.33097 100.804 6.51562C100.539 6.69744 100.407 6.92898 100.407 7.21023C100.407 7.46023 100.498 7.65767 100.68 7.80256C100.862 7.94744 101.146 8.06818 101.532 8.16477L102.504 8.40341C103.089 8.54545 103.525 8.76278 103.812 9.0554C104.099 9.34517 104.243 9.71875 104.243 10.1761C104.243 10.5511 104.135 10.8864 103.919 11.1818C103.706 11.4773 103.407 11.7102 103.024 11.8807C102.64 12.0511 102.194 12.1364 101.686 12.1364C101.018 12.1364 100.466 11.9915 100.028 11.7017C99.5906 11.4119 99.3136 10.9886 99.1971 10.4318L100.152 10.1932C100.243 10.5455 100.414 10.8097 100.667 10.9858C100.923 11.1619 101.257 11.25 101.669 11.25C102.137 11.25 102.51 11.1506 102.785 10.9517C103.064 10.75 103.203 10.5085 103.203 10.2273C103.203 10 103.123 9.80966 102.964 9.65625C102.805 9.5 102.561 9.38352 102.231 9.30682L101.14 9.05114C100.541 8.90909 100.1 8.68892 99.8192 8.39062C99.5408 8.08949 99.4016 7.71307 99.4016 7.26136C99.4016 6.89205 99.5053 6.56534 99.7127 6.28125C99.9229 5.99716 100.208 5.77415 100.569 5.61222C100.933 5.45028 101.345 5.36932 101.805 5.36932C102.453 5.36932 102.961 5.51136 103.331 5.79545C103.703 6.07955 103.967 6.45455 104.123 6.92045ZM109.506 7.78977V8.72727H105.688V7.78977H109.506ZM114.191 5.45455V6.30682H110.662V5.45455H114.191ZM111.719 12V4.55114C111.719 4.17614 111.807 3.86364 111.983 3.61364C112.159 3.36364 112.388 3.17614 112.669 3.05114C112.951 2.92614 113.248 2.86364 113.56 2.86364C113.807 2.86364 114.009 2.88352 114.165 2.9233C114.321 2.96307 114.438 3 114.515 3.03409L114.225 3.90341C114.174 3.88636 114.103 3.86506 114.012 3.83949C113.924 3.81392 113.807 3.80114 113.662 3.80114C113.33 3.80114 113.09 3.88494 112.942 4.05256C112.797 4.22017 112.725 4.46591 112.725 4.78977V12H111.719ZM115.6 12V5.45455H116.572V6.44318H116.64C116.759 6.11932 116.975 5.85653 117.288 5.65483C117.6 5.45312 117.952 5.35227 118.344 5.35227C118.418 5.35227 118.511 5.35369 118.621 5.35653C118.732 5.35937 118.816 5.36364 118.873 5.36932V6.39205C118.839 6.38352 118.761 6.37074 118.638 6.35369C118.519 6.33381 118.393 6.32386 118.259 6.32386C117.941 6.32386 117.657 6.39062 117.407 6.52415C117.16 6.65483 116.964 6.83665 116.819 7.0696C116.677 7.29972 116.606 7.5625 116.606 7.85795V12H115.6ZM122.525 12.1364C121.934 12.1364 121.415 11.9957 120.969 11.7145C120.526 11.4332 120.18 11.0398 119.93 10.5341C119.683 10.0284 119.559 9.4375 119.559 8.76136C119.559 8.07955 119.683 7.48437 119.93 6.97585C120.18 6.46733 120.526 6.07244 120.969 5.79119C121.415 5.50994 121.934 5.36932 122.525 5.36932C123.116 5.36932 123.633 5.50994 124.076 5.79119C124.522 6.07244 124.869 6.46733 125.116 6.97585C125.366 7.48437 125.491 8.07955 125.491 8.76136C125.491 9.4375 125.366 10.0284 125.116 10.5341C124.869 11.0398 124.522 11.4332 124.076 11.7145C123.633 11.9957 123.116 12.1364 122.525 12.1364ZM122.525 11.233C122.974 11.233 123.343 11.1179 123.633 10.8878C123.923 10.6577 124.137 10.3551 124.276 9.98011C124.415 9.60511 124.485 9.19886 124.485 8.76136C124.485 8.32386 124.415 7.91619 124.276 7.53835C124.137 7.16051 123.923 6.85511 123.633 6.62216C123.343 6.3892 122.974 6.27273 122.525 6.27273C122.076 6.27273 121.707 6.3892 121.417 6.62216C121.127 6.85511 120.913 7.16051 120.773 7.53835C120.634 7.91619 120.565 8.32386 120.565 8.76136C120.565 9.19886 120.634 9.60511 120.773 9.98011C120.913 10.3551 121.127 10.6577 121.417 10.8878C121.707 11.1179 122.076 11.233 122.525 11.233ZM127.026 12V5.45455H127.998V6.47727H128.083C128.219 6.12784 128.439 5.85653 128.743 5.66335C129.047 5.46733 129.412 5.36932 129.838 5.36932C130.27 5.36932 130.63 5.46733 130.917 5.66335C131.206 5.85653 131.432 6.12784 131.594 6.47727H131.662C131.83 6.1392 132.081 5.87074 132.417 5.67188C132.752 5.47017 133.154 5.36932 133.623 5.36932C134.208 5.36932 134.686 5.55256 135.059 5.91903C135.431 6.28267 135.617 6.84943 135.617 7.61932V12H134.611V7.61932C134.611 7.13636 134.479 6.79119 134.215 6.58381C133.951 6.37642 133.64 6.27273 133.282 6.27273C132.821 6.27273 132.465 6.41193 132.212 6.69034C131.959 6.96591 131.833 7.31534 131.833 7.73864V12H130.81V7.51705C130.81 7.14489 130.689 6.84517 130.448 6.6179C130.206 6.38778 129.895 6.27273 129.515 6.27273C129.253 6.27273 129.009 6.34233 128.782 6.48153C128.557 6.62074 128.375 6.81392 128.236 7.06108C128.1 7.3054 128.032 7.58807 128.032 7.90909V12H127.026Z"
                  fill="black"/>
              <path d="M12.9716 23.2727V32H11.9148V24.3807H11.8636L9.73295 25.7955V24.7216L11.9148 23.2727H12.9716Z"
                    fill="black"/>
              <path d="M171.972 23.2727V32H170.915V24.3807H170.864L168.733 25.7955V24.7216L170.915 23.2727H171.972Z"
                    fill="black"/>
            </svg>
            <div
                style="width: fit-content; height: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;">
              <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
                Class Exec
              </div>
              <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
                - empID: int
                <br>
                - employeeCount: int
                <br>
              </div>
              <div style="padding: 15px; line-height: 60px;">
                + getEmpID(): int
                <br>
              </div>
            </div>
          </div>
        </div>
        <!--        my box end -->
      </div>
      <div class="column">
        <div style="display:flex; flex-direction: row;">
          <div style="flex:5">
            <h1 style="padding: 25px;">Creating the Person Class</h1>
            <p style="padding: 25px; padding-top: 0px">Implement the Person class by declaring variables identified through the generalisation exercise in the previous screen.</p>
          </div>
          <!--Help buttons-->
          <div style="flex:1">
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[1] }" @click="popup('newVariableComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[2] }" @click="popup('newVariableComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[3] }" @click="popup('newVariableComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[4] }" @click="popup('newVariableComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[5] }" @click="popup('getterComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[6] }" @click="popup('getterComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[7] }" @click="popup('getterComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[8] }" @click="popup('getterComponent')" class="button-30">Help</button>
            <button style="float: right; margin-bottom: 30px;" :style="{display: display[9] }" @click="popup('setterComponent')" class="button-30">Help</button>

          </div>
        </div> 

        <div class="codebox" id="codebox" :style="{ display: display[0] }">
          public
          <input spellcheck="false" maxlength="5" style="width: 55px;" v-model='one'>
          <input spellcheck="false" id="two" maxlength="6" style="width: 70px;" v-model="two">{ <p id="comment">//Create
          a class "Person"</p><br>
          } <br>
          <button class="button-9" id="btn1" @click="validate_one()"> {{ button_value }}</button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[1] }">
          public class Person{
          <br>&emsp;private
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='three'>
          <input spellcheck="false" id="three" maxlength="4" style="width: 60px;" v-model='four'>;
          <p id="comment">//Create a "name" attribute of type String</p><br>
          <!-- newvariablecomponent -->
          } <br>
          <button class="button-9" id="btn2" @click="validate_two()"> {{ button_value }}</button>
         
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[2] }">
          <pre>public class Person {

private String name;

</pre>
          <br>&emsp;private
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='five'>
          <input spellcheck="false" id="six" maxlength="4" style="width: 60px;" v-model='six'>;
          <p id="comment">//Create a "city" attribute of type String</p><br>
          <!-- newvariablecomponent -->
          } <br>
          <button class="button-9" id="btn3" @click="validate_three()"> {{ button_value }}</button>
         
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[3] }">
          <pre>public class Person {

private String name;
private String city;

</pre>
          <br>&emsp;private
          <input spellcheck="false" maxlength="4" style="width: 70px;" v-model='seven'>
          <input spellcheck="false" id="eight" maxlength="5" style="width: 75px;" v-model='eight'>;
          <p id="comment">//Create a "phone" attribute of type long</p><br>
          <!-- newvariablecomponent -->
          } <br>
          <button class="button-9" id="btn4" @click="validate_four()"> {{ button_value }}</button>
          
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[4] }">
          <pre>public class Person {

private String name;
private String city;
private long phone;

</pre>
          <br>&emsp;private
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='nine'>
          <input spellcheck="false" id="ten" maxlength="5" style="width: 75px;" v-model='ten'>;
          <p id="comment">//Create an "email" attribute of type String</p><br>
          <!-- newvariablecomponent -->
          } <br>
          <button class="button-9" id="btn5" @click="validate_five()"> {{ button_value }}</button>
         
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[5] }">
          <pre>public class Person {

private String name;
private String city;
private long phone;
private String email;

</pre>
          <br>&emsp;public
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='eleven'> getName() {
          <br>&emsp;&emsp;return <input spellcheck="false" maxlength="4" style="width: 60px;" v-model='twelve'>;
          <br>&emsp;}
          <p id="comment">//Create a getter method for the variable 'name'</p><br>
          <!-- getterComponent -->
          } <br>
          <button class="button-9" id="btn6" @click="validate_six()"> {{ button_value }}</button>
         
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[6] }">
          <pre>public class Person {

private String name;
private String city;
private long phone;
private String email;

public String getName() {
        return name;
}

</pre>
          <br>&emsp;public
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='thirteen'> getEmail() {
          <br>&emsp;&emsp;return <input spellcheck="false" id="fourteen" maxlength="5" style="width: 70px;"
                                        v-model='fourteen'>;
          <br>&emsp;}
          <p id="comment">//Create a getter method for the variable 'email'</p><br>
          <!-- getterComponent -->
          } <br>
          <button class="button-9" id="btn7" @click="validate_seven()"> {{ button_value }}</button>
        
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[7] }">
          <pre>public class Person {

private String name;
private String city;
private long phone;
private String email;

public String getName() {
        return name;
}

public String getEmail() {
        return email;
}

</pre>
          <br>&emsp;public
          <input spellcheck="false" maxlength="6" style="width: 70px;" v-model='fifteen'> getCity() {
          <br>&emsp;&emsp;return <input spellcheck="false" id="sixteen" maxlength="4" style="width: 60px;"
                                        v-model='sixteen'>;
          <br>&emsp;}
          <p id="comment">//Create a getter method for the variable 'city'</p><br>
          <!-- getterComponent -->
          } <br>
          <button class="button-9" id="btn8" @click="validate_eight()"> {{ button_value }}</button>
        
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[8] }">
          <pre>public class Person {

private String name;
private String city;
private long phone;
private String email;

public String getName() {
        return name;
}

public String getEmail() {
        return email;
}

public String getCity() {
        return city;
}

</pre>
          <br>&emsp;public
          <input spellcheck="false" maxlength="4" style="width: 60px;" v-model='seventeen'> getPhone() {
          <br>&emsp;&emsp;return <input spellcheck="false" id="eighteen" maxlength="5" style="width: 70px;"
                                        v-model='eighteen'>;
          <br>&emsp;}
          <p id="comment">//Create a getter method for the variable 'phone'</p><br>
          <!-- getterComponent -->
          } <br>
          <button class="button-9" id="btn9" @click="validate_nine()"> {{ button_value }}</button>
       
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[9] }">
          <pre>public class Person {

private String name;
private String city;
private long phone;
private String email;

public String getName() {
        return name;
}

public String getEmail() {
        return email;
}

public String getCity() {
        return city;
}

public long getPhone() {
        return phone;
}

</pre>
          <br>&emsp;public
          <input spellcheck="false" maxlength="6" style="width: 60px;" v-model='nineteen'> setName(String <input
            spellcheck="false" id="twenty" maxlength="4" style="width: 60px;" v-model='twenty'>) {
          <br>&emsp;&emsp;<input spellcheck="false" id="twenty_one" maxlength="4" style="width: 70px;"
                                 v-model='twenty_one'>.name = name;
          <br>&emsp;}
          <p id="comment">//Create a setter method for the variable 'name'</p><br>
          <!-- setterComponent -->
          } <br>
          <button class="button-9" id="btn9" @click="validate_ten()"> {{ button_value }}</button>
       
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[10] }">
          <pre>public class Person {

private String name;
private String city;
private long phone;
private String email;

public String getName() {
        return name;
  }

public String getEmail() {
        return email;
  }

public String getCity() {
        return city;
  }

public long getPhone() {
        return phone;
  }

public void setName(String name) {
        this.name = name;
  }

public void setEmail(String email) {
        this.email = email;
  }
    

    public void setCity(String city) {
        this.city = city;
  }

    public void setPhone(long phone) {
        this.phone = phone;
  }
}


</pre>
          <button class="button-9" id="btn10" @click="$router.push('/screen-two')"> Next</button>
        </div>

      </div>
    </div>
  </main>
</template>


<style scoped>
* {
  box-sizing: border-box;
  background-color: #F9FAFE;
}

h1,
h2,
p {
  font-family: sans-serif;
  color: rgb(0, 3, 40);
}

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

mark1 {
  background-color: rgb(176, 230, 183);
  box-shadow: 1px 6px 15px 2px rgb(160, 222, 159);
  color: black;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

mark0 {
  box-shadow: 1px 6px 15px 2px rgb(249, 255, 191);
  background-color: rgb(231, 238, 162);
  color: black;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

#comment {
  margin-left: 15px;
  font-style: italic;
  color: gray;
  font-size: small;
}


.codebox {
  height: 80%;
  width: 90%;
  padding: 25px;
  border-radius: 10px;
  background-color: #F9FAFE;
  box-shadow: 2px 3px 10px 2px #D7DFFF;
}

input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  color: black;
}

/* CSS */
.button-9 {
  appearance: button;
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
  margin: 12px 0 0;
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

.flex-box-svg {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: min-content;
}

.row-svg {
  display: flex;
  flex-direction: row;
  align-items: start;
}


.svg-mid {
  align-self: center;
  justify-self: center;
  width: 150px;
}

.row-svg:nth-child(1) {
  justify-content: space-around;
}

.col-box {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.flex-col{
  display: flex;
  flex-direction: column;
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

