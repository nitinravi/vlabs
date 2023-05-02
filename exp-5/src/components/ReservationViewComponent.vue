<!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K (@knaldev)
 for the Ministry of Education (MOE) virtual-labs project, Govt.Of.India-->

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
  props: {},
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
    correct() {
      var x = document.getElementById("snackbar");
      x.innerHTML = "Correct";
      x.style.backgroundColor = "green";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
    incorrect() {
      var x = document.getElementById("snackbar");
      x.innerHTML = "Inorrect. Try again";
      x.style.backgroundColor = "red";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
    validate_one() {
      if (
        this.one == "final" &&
        this.two == "int" &&
        this.three == "reservationID"
      ) {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
        this.display[0] = "none";
        this.display[1] = "inherit";
      } else {
        this.incorrect();
      }
    },

    validate_two() {
      if (this.four == "Customer" && this.five == "customerObj") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
        this.display[1] = "none";
        this.display[2] = "inherit";
      } else {
        this.incorrect();
      }
    },

    validate_three() {
      if (this.six == "Vehicle" && this.seven == "vehicleObj") {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
        this.display[2] = "none";
        this.display[3] = "inherit";
      } else {
        this.incorrect();
      }
    },
    validate_four() {
      if (
        this.eight == "Customer" &&
        this.nine == "customerObj" &&
        this.ten == "Vehicle" &&
        this.eleven == "vehicleObj"
      ) {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Correct";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
        this.display[3] = "none";
        this.display[4] = "inherit";
      } else {
        this.incorrect();
      }
    },
    validate_five() {
      if (
        this.twelve == "reservationCount++" &&
        this.thirteen == "reservationID" &&
        this.fourteen == "reservationCount"
      ) {
        var x = document.getElementById("snackbar");
        x.innerHTML = "Good Job! You're done here.";
        x.style.backgroundColor = "green";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
        this.display[4] = "none";
        this.display[5] = "inherit";
        this.$emit("reservationComplete", true);
      } else {
        this.incorrect();
      }
    },
  },
  data() {
    return {
      id: "container",
      class: "wrapper",
      currentComponent: 'constructorWritingComponent',
      button_value: "Next",
      button_text: "Incorrect. Try again",
      button_text_right: "Correct. Next",
      //eslint-disable-next-line vue/no-dupe-keys
      correct: false,
      display: [
        "inherit",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
      ],
    };
  },
};
</script>

<template>
  <main class="app">
    <div id="snackbar">Some text some message..</div>

    <div id="myModal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <component v-bind:is=currentComponent />
            </div>
          </div>
          
    <div class="row">
      <div class="column">
        <div style="display: flex; flex-direction: row;">
        <div style="flex:5">
          <h1 style="padding: 25px; padding-bottom: 0px;">Constructing the Reservation Class</h1>
        <p style="padding: 25px; padding-top: 0px">Create the Reservation class with methods and variables that associate a Customer object with the corresponding Vehicle object</p>

        </div>
        <!--help buttons-->
        <div style="flex:1">
          <button style="float: right; margin-bottom: 30px;" :style="{ display: display[0] }" @click="popup('newVariableComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;"  :style="{ display: display[1] }" @click="popup('objectCreationComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;" :style="{ display: display[2] }" @click="popup('objectCreationComponent')" class="button-30">Help</button>
          <button style="float: right; margin-bottom: 30px;"  :style="{ display: display[3] }" @click="popup('constructorWritingComponent')" class="button-30">Help</button>
        
      
        </div>
        
      </div>
        <div class="codebox" id="codebox" :style="{ display: display[0] }">
          <pre>
import java.util.Date;

public class Reservation {
</pre
          >
          &emsp;&emsp;&emsp;private
          <input
            spellcheck="false"
            maxlength="5"
            style="width: 60px"
            v-model="one"
          />
          <input
            spellcheck="false"
            maxlength="3"
            style="width: 45px"
            v-model="two"
          />
          <input
            spellcheck="false"
            maxlength="13"
            style="width: 130px"
            v-model="three"
          />;
          <p id="comment">//Create attribute reservationID of type final int</p>

          <!-- newvariablecomponent -->

          <br />
          } <br /><button class="button-9" id="btn1" @click="validate_one()">

            {{ button_value }}
          </button>
          
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[1] }">
          <pre>
import java.util.Date;

public class Reservation {
	private final int reservationID;
                </pre
          >
          <br />&emsp;&emsp;&emsp;private
          <input
            spellcheck="false"
            maxlength="8"
            style="width: 90px"
            v-model="four"
          />
          <input
            spellcheck="false"
            maxlength="11"
            style="width: 110px"
            v-model="five"
          />;
          <p id="comment">//Create a new Customer object called customerObj</p>

          <!-- objectCreationComponent -->

          <br />
          } <br /><button class="button-9" id="btn2" @click="validate_two()">
            {{ button_value }}
          </button>
       
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[2] }">
          <pre>
import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;

      </pre
          >
          <br />&emsp;&emsp;&emsp;private
          <input
            spellcheck="false"
            maxlength="7"
            style="width: 75px"
            v-model="six"
          />
          <input
            spellcheck="false"
            maxlength="10"
            style="width: 100px"
            v-model="seven"
          />; <br />&emsp;
          <p id="comment">//Create a new Vehicle object called "vehicleObj"</p>
          
          <!-- objectCreationComponent -->

          <br />&emsp;
          <br />
          } <br /><button class="button-9" id="btn3" @click="validate_three()">
            {{ button_value }}
          </button>
       
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[3] }">
          <pre>
import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;

      </pre
          >
          &emsp;&emsp;&emsp;public Reservation(
          <input
            spellcheck="false"
            maxlength="8"
            style="width: 85px"
            v-model="eight"
          />
          <input
            spellcheck="false"
            maxlength="11"
            style="width: 105px"
            v-model="nine"
          />,
          <input
            spellcheck="false"
            maxlength="7"
            style="width: 70px"
            v-model="ten"
          />
          <input
            spellcheck="false"
            maxlength="10"
            style="width: 110px"
            v-model="eleven"
          />)

          <br />&emsp;
          <p id="comment">
            //Create a constructor for Reservation class with Customer and
            Vehicle objects to establish aggregation
          </p>

          <!-- constructorWritingComponent -->

          <br />
          } <br /><button class="button-9" id="btn4" @click="validate_four()">
            {{ button_value }}
          </button>
          
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[4] }">
          <pre>
import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;
	
	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
      </pre
          >
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <input
            spellcheck="false"
            maxlength="18"
            style="width: 160px"
            v-model="twelve"
          />; <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; this.
          <input
            spellcheck="false"
            maxlength="13"
            style="width: 110px"
            v-model="thirteen"
          /> = 
          <input
            spellcheck="false"
            maxlength="16"
            style="width: 140px"
            v-model="fourteen"
          />; <br />&emsp;&emsp; <br />&emsp;}
          <p id="comment">
            //Increment the reservationCount by 1 and assign it to reservationID
          </p>
          <br />
          } <br /><button class="button-9" id="btn5" @click="validate_five()">
            {{ button_value }}
          </button>
        </div>

        <div class="codebox" id="codebox" :style="{ display: display[5] }">
          <pre>
import java.util.Date;

public class Reservation {
	private final int reservationID;
	private Customer customerObj;
	private Vehicle vehicleObj;
	private String contractStatus;
	private Date bookingDate;
	private Date releaseDate;
	private static int reservationCount=0;

	public Reservation(Customer customerObj, Vehicle vehicleObj) {
		this.customerObj = customerObj;
		this.vehicleObj = vehicleObj;
		reservationCount++;
		this.reservationID=reservationCount;
	}

	public String getContractStatus() {
		return contractStatus;
	}

	public void setContractStatus(String contractStatus) {
		this.contractStatus = contractStatus;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public String releaseContract(){
		if(bookingDate.compareTo(releaseDate)==0 && vehicleObj.getKeyStatus().compareTo("available")==0)
			return vehicleObj.updateKeyStatus();
		else
			return "Vehicle not avaible";
	}

	public Customer getCustomerObj() {
		return customerObj;
	}

	public Vehicle getVehicleObj() {
		return vehicleObj;
	}

	public int getReservationID() {
		return reservationID;
	}

}

      </pre
          >
          <br/>
        </div>
      </div>

      <div
        class="column"
        style="position: relative; left: 5%; width: fit-content"
      >
        <div
          style="
            margin-left: 15%;
            height: fit-content;
            width: fit-content;
            border: 1px solid black;
            background-color: #f9fafe;
            box-shadow: 2px 3px 10px 2px #d7dfff;
          "
          :style="{ display: display[0] }"
        >
          <div
            style="
              height: 45px;
              border-bottom: 1px solid black;
              text-align: center;
              padding-top: 15px;
            "
          >
            <mark1>Class Reservation</mark1>
          </div>
          <div
            style="
              height: fit-content;
              border-bottom: 1px solid black;
              padding: 15px;
              line-height: 40px;
            "
          >
            <mark0>-reservationID: int </mark0>
            <br />
            -customerObj: Customer
            <br />
            -vehicleObj: Vehicle
            <br />
            -contractStatus: String
            <br />
            +booking Date: Date
            <br />
            -releaseDate: Date
            <br />
            -reservationCount: int
          </div>

          <div style="padding: 15px; line-height: 40px">
            +Reservation(Customer customerObj, Vehicle vehicleObj)
            <br />
            +setContractStatus(String contractStatus): void
            <br />
            +getContractStatus(): String
            <br />
            +releaseContract(): String
            <br />
            +getReleaseDate(): Date
          </div>
        </div>

        <div
          style="
            margin-left: 15%;
            height: fit-content;
            width: fit-content;
            border: 1px solid black;
            background-color: #f9fafe;
            box-shadow: 2px 3px 10px 2px #d7dfff;
          "
          :style="{ display: display[1] }"
        >
          <div
            style="
              height: 45px;
              border-bottom: 1px solid black;
              text-align: center;
              padding-top: 15px;
            "
          >
            <mark1>Class Reservation</mark1>
          </div>
          <div
            style="
              height: fit-content;
              border-bottom: 1px solid black;
              padding: 15px;
              line-height: 40px;
            "
          >
            <mark1>-reservationID: int </mark1>
            <br />
            <mark0>-customerObj: Customer</mark0>
            <br />
            -vehicleObj: Vehicle
            <br />
            -contractStatus: String
            <br />
            +booking Date: Date
            <br />
            -releaseDate: Date
            <br />
            -reservationCount: int
          </div>

          <div style="padding: 15px; line-height: 40px">
            +Reservation(Customer customerObj, Vehicle vehicleObj)
            <br />
            +setContractStatus(String contractStatus): void
            <br />
            +getContractStatus(): String
            <br />
            +releaseContract(): String
            <br />
            +getReleaseDate(): Date
          </div>
        </div>

        <div
          style="
            margin-left: 15%;
            height: fit-content;
            width: fit-content;
            border: 1px solid black;
            background-color: #f9fafe;
            box-shadow: 2px 3px 10px 2px #d7dfff;
          "
          :style="{ display: display[2] }"
        >
          <div
            style="
              height: 45px;
              border-bottom: 1px solid black;
              text-align: center;
              padding-top: 15px;
            "
          >
            <mark1>Class Reservation</mark1>
          </div>
          <div
            style="
              height: fit-content;
              border-bottom: 1px solid black;
              padding: 15px;
              line-height: 40px;
            "
          >
            <mark1>-reservationID: int </mark1>
            <br />
            <mark1>-customerObj: Customer</mark1>
            <br />
            <mark0>-vehicleObj: vehicle</mark0>
            <br />
            -contractStatus: String
            <br />
            +booking Date: Date
            <br />
            -releaseDate: Date
            <br />
            -reservationCount: int
          </div>

          <div style="padding: 15px; line-height: 40px">
            +Reservation(Customer customerObj, Vehicle vehicleObj)
            <br />
            +setContractStatus(String contractStatus): void
            <br />
            +getContractStatus(): String
            <br />
            +releaseContract(): String
            <br />
            +getReleaseDate(): Date
          </div>
        </div>

        <div
          style="
            margin-left: 15%;
            height: fit-content;
            width: fit-content;
            border: 1px solid black;
            background-color: #f9fafe;
            box-shadow: 2px 3px 10px 2px #d7dfff;
          "
          :style="{ display: display[3] }"
        >
          <div
            style="
              height: 45px;
              border-bottom: 1px solid black;
              text-align: center;
              padding-top: 15px;
            "
          >
            <mark1>Class Reservation</mark1>
          </div>
          <div
            style="
              height: fit-content;
              border-bottom: 1px solid black;
              padding: 15px;
              line-height: 40px;
            "
          >
            <mark1>-reservationID: int </mark1>
            <br />
            <mark1>-customerObj: Customer</mark1>
            <br />
            <mark1>-vehicleObj: vehicle</mark1>
            <br />
            <mark1>-contractStatus: String</mark1>
            <br />
            <mark1>+booking Date: Date</mark1>
            <br />
            <mark1>-releaseDate: Date</mark1>
            <br />
            <mark1>-reservationCount: int</mark1>
          </div>

          <div style="padding: 15px; line-height: 40px">
            <mark0
              >+Reservation(Customer customerObj, Vehicle vehicleObj)</mark0
            >
            <br />
            +setContractStatus(String contractStatus): void
            <br />
            +getContractStatus(): String
            <br />
            +releaseContract(): String
            <br />
            +getReleaseDate(): Date
          </div>
        </div>

        <div
          style="
            margin-left: 15%;
            height: fit-content;
            width: fit-content;
            border: 1px solid black;
            background-color: #f9fafe;
            box-shadow: 2px 3px 10px 2px #d7dfff;
          "
          :style="{ display: display[4] }"
        >
          <div
            style="
              height: 45px;
              border-bottom: 1px solid black;
              text-align: center;
              padding-top: 15px;
            "
          >
            <mark1>Class Reservation</mark1>
          </div>
          <div
            style="
              height: fit-content;
              border-bottom: 1px solid black;
              padding: 15px;
              line-height: 40px;
            "
          >
            <mark1>-reservationID: int </mark1>
            <br />
            <mark1>-customerObj: Customer</mark1>
            <br />
            <mark1>-vehicleObj: vehicle</mark1>
            <br />
            <mark1>-contractStatus: String</mark1>
            <br />
            <mark1>+booking Date: Date</mark1>
            <br />
            <mark1>-releaseDate: Date</mark1>
            <br />
            <mark1>-reservationCount: int</mark1>
          </div>

          <div style="padding: 15px; line-height: 40px">
            <mark0
              >+Reservation(Customer customerObj, Vehicle vehicleObj)</mark0
            >
            <br />
            +setContractStatus(String contractStatus): void
            <br />
            +getContractStatus(): String
            <br />
            +releaseContract(): String
            <br />
            +getReleaseDate(): Date
          </div>
        </div>

        <div
          style="
            margin-left: 15%;
            height: fit-content;
            width: fit-content;
            border: 1px solid black;
            background-color: #f9fafe;
            box-shadow: 2px 3px 10px 2px #d7dfff;
          "
          :style="{ display: display[5] }"
        >
          <div
            style="
              height: 45px;
              border-bottom: 1px solid black;
              text-align: center;
              padding-top: 15px;
            "
          >
            <mark1>Class Reservation</mark1>
          </div>
          <div
            style="
              height: fit-content;
              border-bottom: 1px solid black;
              padding: 15px;
              line-height: 40px;
            "
          >
            <mark1>-reservationID: int </mark1>
            <br />
            <mark1>-customerObj: Customer</mark1>
            <br />
            <mark1>-vehicleObj: vehicle</mark1>
            <br />
            <mark1>-contractStatus: String</mark1>
            <br />
            <mark1>+booking Date: Date</mark1>
            <br />
            <mark1>-releaseDate: Date</mark1>
            <br />
            <mark1>-reservationCount: int</mark1>
          </div>

          <div style="padding: 15px; line-height: 40px">
            <mark1
              >+Reservation(Customer customerObj, Vehicle vehicleObj)</mark1
            >
            <br />
            <mark1>+setContractStatus(String contractStatus): void</mark1>
            <br />
            <mark1>+getContractStatus(): String</mark1>
            <br />
            <mark1>+releaseContract(): String</mark1>
            <br />
            <mark1>+getReleaseDate(): Date</mark1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
  background-color: #f9fafe;
}



h1,
h2,
p {
  font-family: sans-serif;
  color: rgb(0, 3, 40);
}

.column {
  float: left;
  width: 60%;
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
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  margin: 25px;
  background-color: #f9fafe;
  box-shadow: 2px 3px 10px 2px #d7dfff;
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
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
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
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 200px;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
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
