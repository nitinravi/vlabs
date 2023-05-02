 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->

 <script>

import abstractComponent from "../components/help/abstractComponent.vue";
import arrayListComponent from "../components/help/arrayListComponent.vue";
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
       setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000)
     },
     incorrect() {
       var x = document.getElementById("snackbar");
       x.innerHTML = "Inorrect. Try again";
       x.style.backgroundColor = "red";
       x.className = "show";
       setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000)
     },
     validate_one() {
       if (this.one === "Exec") {
         this.correct1();
         this.display[0] = "none";
         this.display[1] = "inherit";
       }
 
       else {
         this.incorrect();
       }
     },
 
     validate_two() {
       if (this.two === "private") {
         this.correct1();
         this.display[1] = "none";
         this.display[2] = "inherit";
       }
       else {
         this.incorrect();
       }
     },
 
     validate_three() {
       if (this.three === "private") {
         this.correct1();
         this.display[2] = "none";
         this.display[3] = "inherit";
       }
       else {
         this.incorrect();
       }
     },
 
     validate_four() {
       if (this.four === "public" && this.five === "int" && this.six === "empID") {
         this.correct1();
         this.display[3] = "none";
         this.display[4] = "inherit";
       }
       else {
         this.incorrect();
       }
 
     },

     validate_five() {
      if (this.seven === "super()") {
        this.correct1();
        this.display[4] = "none";
        this.display[5] = "inherit";
      }

      else {
        this.incorrect();
      }
    },

    validate_six() {
      if (this.eight === "name" && this.nine === "email") {
        this.correct1();
        this.display[5] = "none";
        this.display[6] = "inherit";
      }

      else {
        this.incorrect();
      }
    },

    validate_seven() {
      if (this.ten === "name" && this.eleven === "phone") {
        this.correct1();
        this.display[6] = "none";
        this.display[7] = "inherit";
      }

      else {
        this.incorrect();
      }
    },

    validate_eight() {
      if (this.twelve === "name" && this.thirteen === "email" && this.fourteen === "phone") {
        this.correct1();
        this.display[7] = "none";
        this.display[8] = "inherit";
      }

      else {
        this.incorrect();
      }
    },
 
 
   },
   data() {
     return {
      eight: '',
      nine: '',
      eleven: '',
      twelve: '',
      thirteen: '',
      fourteen: '',
       id: 'container',
       class: 'wrapper',
       currentComponent: 'constructorWritingComponent',
       button_value: 'Evaluate',
       button_text: "Incorrect. Try again",
       button_text_right: "Correct. Next",
       correct: false,
       display: ["inherit", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
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
       <div class="column">
         <h1 style="padding-left: 25px; padding-bottom: 0px;">Fill in the Java code for the following updated<br>Exec
           class.</h1>
         <p style="padding-left: 25px;">You only have to fill in the spaces provided.</p>
          
         <div
            class="flex-col"
            style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
            >
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

            <div class="col"
           style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
           :style="{ display: display[0] }">
           <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
             <mark0>Class Exec</mark0>
           </div>
           <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 50px;">
             - empID: int
             <br>
             - employeeCount: int
             <br>
           </div>
           <div style="padding: 15px; line-height: 50px;">
             + getEmpID(): int
             <br>
           </div>
         </div>
 
         <div class="col"
           style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
           :style="{ display: display[1] }">
           <div style="height : 45px; border-bottom: 1px solid black; text-align: center; padding-top: 15px;">
             <mark1>Class Exec</mark1>
           </div>
           <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 40px;">
             <mark0>- empID: int</mark0>
             <br>
             - employeeCount: int
             <br>
           </div>
           <div style="padding: 15px; line-height: 40px;">
              + getEmpID(): int
             <br>
           </div>
         </div>
 
         <div class="col"
           style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
           :style="{ display: display[2] }">
           <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
             <mark1>Class Exec</mark1>
           </div>
           <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 60px;">
            <mark1>- empID: int</mark1>
             <br>
             <mark0>- employeeCount: int</mark0>
             <br>
           </div>
           <div style="padding: 15px; line-height: 60px;">
             + getEmpID(): int
             <br>
           </div>
         </div>
 
         <div class="col"
           style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
           :style="{ display: display[3] }">
           <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
             <mark1>Class Exec</mark1>
           </div>
           <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 60px;">
            <mark1>- empID: int</mark1>
             <br>
             <mark1>- employeeCount: int</mark1>
             <br>
           </div>
           <div style="padding: 15px; line-height: 60px;">
             <mark0>+ getEmpID(): int</mark0>
             <br>
           </div>
         </div>
 
         <div class="col"
           style="height: fit-content; width: fit-content; border: 1px solid black; background-color: #F9FAFE; box-shadow: 2px 3px 10px 2px #D7DFFF;"
           :style="{ display: display[4] }">
           <div style="height : fit-content; border-bottom: 1px solid black; text-align: center; padding: 15px;">
             <mark1>Class Exec</mark1>
           </div>
           <div style="height : fit-content; border-bottom: 1px solid black; padding: 15px; line-height: 60px;">
            <mark1>- empID: int</mark1>
             <br>
             <mark1>- employeeCount: int</mark1>
             <br>
           </div>
           <div style="padding: 15px; line-height: 60px;">
             <mark1>+ getEmpID(): int</mark1>
             <br>
           </div>
         </div>
          </div>
        </div>
         
 
 
 
       </div>
       <div class="column">
        <div style="display: flex; flex-direction: row;">
        <div style="flex: 5;">
          <h1 style="padding-left: 0px;">Constructing the Exec Class</h1>
        <p style="padding-bottom: 25px;">Implement the Exec class by inheriting the properties of the previously implemented Person class.</p>
        </div>
        <div style="flex: 1;">
          
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[0] }" @click="popup('extendsComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[1] }" @click="popup('newVariableComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[2] }" @click="popup('newVariableComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[3] }" @click="popup('getterComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[4] }" @click="popup('superKeywordComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[5] }" @click="popup('constructorWritingComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[6] }" @click="popup('constructorWritingComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{display: display[7] }" @click="popup('constructorWritingComponent')" class="button-30">Help</button>

        </div>
      </div>
 
         <div class="codebox" id="codebox" :style="{ display: display[0] }">
           public class <input spellcheck="false" id="one" maxlength="5" style="width: 55px;" v-model="one"> extends
           Person{ <p id="comment">
             //Create
             a class "Exec" that inherits "Person" class</p><br>
             <!-- extendsComponent -->
           } <br><button class="button-9" id="btn1" @click="validate_one()"> {{ button_value }} </button>
          
         </div>
 
         <div class="codebox" id="codebox" :style="{ display: display[1] }">
           <pre>
public class Exec extends Person{
 
           </pre>
           &emsp;&emsp;<input spellcheck="false" id="two" maxlength="7" style="width: 95px;" v-model="two"> int empID;
           <br>
           };<p id="comment">
             //Create a variable 'empID' of type int with the appropriate access modifier</p>
             <!-- newvariablecomponent -->
           <br>}<br>
           <button class="button-9" id="btn2" @click="validate_two()"> {{ button_value }} </button>
            
         </div>
 
         <div class="codebox" id="codebox" :style="{ display: display[2] }">
           <pre>
public class Exec extends Person{

    private int empID;
 
           </pre>
           &emsp;&emsp;<input spellcheck="false" id="three" maxlength="7" style="width: 95px;" v-model="three"> int employeeCount;
           <br>
           };<p id="comment">
             //Create a variable 'employeeCount' of type int with the appropriate access modifier</p>
           <br>}<br>
           <!-- newvariablecomponent -->
           <button class="button-9" id="btn2" @click="validate_three()"> {{ button_value }} </button>
            
         </div>
 
         <div class="codebox" id="codebox" :style="{ display: display[3] }">
           <pre>
public class Exec extends Person{

    private int empID;
    private int employeeCount;
 
           </pre>
           &emsp;&emsp;<input spellcheck="false" id="four" maxlength="6" style="width: 70px;" v-model="four"> <input spellcheck="false" id="five" v-model="five" maxlength="3" style="width: 40px;"> getEmpID() {
           <br>
           &emsp;&emsp;&emsp;return <input spellcheck="false" id="six" v-model="six" maxlength="5" style="width: 65px;">;
           };<p id="comment">
             //Create a geter method for getting the employee ID</p>
             <!-- getterComponent -->
           <br>}<br>
           <button class="button-9" id="btn2" @click="validate_four()"> {{ button_value }} </button>
          
         </div>
 
         <div class="codebox" id="codebox" :style="{ display: display[4] }">
          <pre>
public class Exec extends Person{

    private int empID;
    private int employeeCount;

    public int getEmpID(){
        return empID;
    }


          </pre>
          &emsp;&emsp;public Exec()<br>
          &emsp;&emsp;{<br>
            &emsp;&emsp;&emsp;&emsp;<input spellcheck="false" maxlength="7" style="width: 95px;" v-model="seven"><br>
          &emsp;&emsp;&emsp;&emsp;employeeCount++;<br>
		      &emsp;&emsp;&emsp;&emsp;this.empID=employeeCount;<br>
          <p id="comment">
            //Use the appropriate keyword to inherit all parent constructor properties.</p>
          &emsp;&emsp;}

         <br>
          <button class="button-9" id="btn2" @click="validate_five()">{{ button_value }}</button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[5] }">
          <pre>
public class Exec extends Person{
	
	private final int empID;
	private static int employeeCount=0; 
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	

          </pre>
          &emsp;&emsp;public Exec(String <input spellcheck="false" maxlength="4" style="width: 95px;" v-model="eight">, String <input spellcheck="false" maxlength="5" style="width: 55px;" v-model="nine">);<br>
          &emsp;&emsp;{<br>
            &emsp;&emsp;&emsp;&emsp;super({{ eight }},{{ nine }});<br>
          &emsp;&emsp;&emsp;&emsp;employeeCount++;<br>
		      &emsp;&emsp;&emsp;&emsp;this.empID=employeeCount;<br>
          <p id="comment">
            //Create the constructor using Exec's name and email</p>
          &emsp;&emsp;}

         <br>
          <button class="button-9" id="btn2" @click="validate_six()">{{ button_value }}</button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[6] }">
          <pre>
public class Exec extends Person{
	
	private final int empID;
	private static int employeeCount=0; 
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	

          </pre>
          &emsp;&emsp;public Exec(String <input spellcheck="false" maxlength="4" style="width: 95px;" v-model="ten">, long <input spellcheck="false" maxlength="5" style="width: 55px;" v-model="eleven">);<br>
          &emsp;&emsp;{<br>
            &emsp;&emsp;&emsp;&emsp;super({{ ten }},{{ eleven }});<br>
          &emsp;&emsp;&emsp;&emsp;employeeCount++;<br>
		      &emsp;&emsp;&emsp;&emsp;this.empID=employeeCount;<br>
          <p id="comment">
            //Create the constructor using Exec's name and phone</p>
          &emsp;&emsp;}

         <br>
          <button class="button-9" id="btn2" @click="validate_seven()">{{ button_value }}</button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[7] }">
          <pre>
public class Exec extends Person{
	
	private final int empID;
	private static int employeeCount=0; 
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	

          </pre>
          &emsp;&emsp;public Exec(String <input spellcheck="false" maxlength="4" style="width: 95px;" v-model="twelve">, String <input spellcheck="false" maxlength="5" style="width: 55px;" v-model="thirteen">, long <input spellcheck="false" maxlength="5" style="width: 55px;" v-model="fourteen"> );<br>
          &emsp;&emsp;{<br>
            &emsp;&emsp;&emsp;&emsp;super({{ twelve }}, {{ thirteen }}, {{ fourteen }});<br>
          &emsp;&emsp;&emsp;&emsp;employeeCount++;<br>
		      &emsp;&emsp;&emsp;&emsp;this.empID=employeeCount;<br>
          <p id="comment">
            //Create the constructor using Exec's name, email and phone</p>
          &emsp;&emsp;}

         <br>
          <button class="button-9" id="btn2" @click="validate_eight()">{{ button_value }}</button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[8] }">
          <pre>
public class Exec extends Person{
	
	private final int empID;
	private static int employeeCount=0; 
	
	public Exec()
	{
		super();
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email) {
		super(name, email);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, long phone) {
		super(name, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public Exec(String name, String email, long phone) {
		super(name, email, phone);
		employeeCount++;
		this.empID=employeeCount;
	}
	
	public int getempID() {
		return empID;
	}
	
	public String toString()
	{
		return "[ID: "+ getempID()+ ", Name: "+getName()+
				", Email: "+getEmail()+", Phone: "+getPhone()+ ", City: "+getCity()+" ]";
	}
}

          </pre>
         <br>
          <button class="button-9" id="btn2" @click="$router.push('/screen-four')">Next</button>
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

 

 .row-svg {
  display: flex;
  flex-direction: row;
  align-items: start;
}

.col{
  display: flex;
  flex-direction: column;
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
 