 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K (@knaldev)
 for the Ministry of Education (MOE) virtual-labs project, Govt.Of.India-->
<template>
    <header style="padding: 30px">
        <div style="display: flex; flex-direction: row;">
            <div class="header-content" style="flex: 5;">
                <h1>
                Step 1: Updating the Class Diagram 
                </h1>

                <p>
                    Now that finetuned verbs have been identified and classified,
                    they can be added to the class diagram. Identify the 
                    applicable method names from the list given based on the 
                    requirements speficied in the question.
                </p>
            </div>
            <!--help buttons-->
            <div style="display: flex; flex: 1; align-items: center; justify-content: center;">
                <button id="myBtn" style="float: right; margin: 30px;" @click="popup()" class="button-30">Help</button>
            </div>


        </div>
       

    </header>
    <!--eslint-disable-next-line vue/no-multiple-template-root-->
    <main>
        <div id="snackbar">Error Message.</div>
        <div id="myModal" class="modal">

<!-- Modal content -->
<div class="modal-content">
    <span class="close">&times;</span>
    <p style="padding: 25px;">The following is a demonstration of the interactivity.</p>
    <img src="..\assets\s1.gif" style="height: 500px;">
</div>


</div>

        <div class="row">
            <div class="column">
                <div class="codebox" :style="{ display: display[0] }">
                    <img style="max-width: 800px;" src="..\assets\Screen1.png" />
                </div>
                <div class="codebox" :style="{ display: display[1] }">
                    <img style="max-width: 800px;" src="..\assets\Screen2.png" />
            </div>
            <div class="codebox" :style="{ display: display[2] }">
                    <img style="max-width: 800px;" src="..\assets\Screen3.png" />
            </div>
            <div class="codebox" :style="{ display: display[3] }">
                    <img style="max-width: 800px;" src="..\assets\Screen4.png" />
            </div>
            <div class="codebox" :style="{ display: display[4] }">
                    <img style="max-width: 800px;" src="..\assets\Screen5.png" />
            </div>
            <div class="codebox" :style="{ display: display[5] }">
                    <img style="max-width: 800px;" src="..\assets\Screen6.png" />
            </div>
            <div class="codebox" :style="{ display: display[6] }">
                    <img style="max-width: 800px;" src="..\assets\Screen7.png" />
            </div>
            <div class="codebox" :style="{ display: display[7] }">
                    <img style="max-width: 800px;" src="..\assets\Screen8.png" />
            </div>
            <div class="codebox" :style="{ display: display[8] }">
                    <img style="max-width: 800px;" src="..\assets\Screen9.png" />
            </div>
            <div class="codebox" :style="{ display: display[9] }">
                    <img style="max-width: 800px;" src="..\assets\Screen10.png" />
            </div>
            <div class="codebox" :style="{ display: display[10] }">
                    <img style="max-width: 800px;" src="..\assets\Screen11.png" />
            </div>
            <div class="codebox" :style="{ display: display[11] }">
                    <img style="max-width: 800px;" src="..\assets\Screen12.png" />
            </div>
            <div class="codebox" :style="{ display: display[12] }">
                    <img style="max-width: 800px;" src="..\assets\Screen13.png" />
            </div>
            <div class="codebox" :style="{ display: display[13] }">
                    <img style="max-width: 800px;" src="..\assets\Screen14.png" />
            </div>
        </div>
        <div class="column" style="margin-left: 100px">
            <div class="row">
                <div class="codebox" style="max-width: 300px;">
                    <ul>
                        <li :class="{completed: valid[10]}">setPhone(): void</li>
                        <li :class="{completed: valid[1]}">email: String</li>
                        <li :class="{completed: valid[5]}">getCustomerID(): int</li>
                        <li :class="{completed: valid[0]}">customerID: int</li>
                        <li :class="{completed: valid[3]}">city: String</li>
                        <li :class="{completed: valid[6]}">getEmail(): String</li>
                        <li :class="{completed: valid[8]}">getCity(): String</li>
                        <li :class="{completed: valid[2]}">phone: long</li>
                        <li :class="{completed: valid[9]}">setEmail(): void</li>
                        <li :class="{completed: valid[7]}">getPhone(): long integer</li>
                        <li :class="{completed: valid[11]}">setCity(): void</li>
                        <li :class="{completed: valid[4]}">customerCount: integer</li>
                    </ul>
                    

                </div>
            </div>
            <div class="row" style="margin-top:35px">
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[0] }">
                         Fill in attribute from the list above that assigns an id for customer
                        <br>
                        <br>
                        1. <input v-model="one">
                        <button class="button-9" id="btn1" @click="validate_one()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[1] }">
                        Fill in attribute from the list above that assigns an email for customer
                        <br>
                        <br>
                        2. <input v-model="two">
                        <button class="button-9" id="btn2" @click="validate_two()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[2] }">
                        Fill in attribute from the list above that assigns a phone no. for customer
                        <br>
                        <br>
                        3. <input v-model="three">
                        <button class="button-9" id="btn3" @click="validate_three()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[3] }">
                        Fill in attribute from the list above that assigns a city for customer
                        <br>
                        <br>
                        4. <input v-model="four">
                        <button class="button-9" @click="validate_four()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[4] }">
                        Fill in attribute from the list above that declares a count for customer
                        <br>
                        <br>
                        5. <input v-model="five">
                        <button class="button-9" id="btn1" @click="validate_five()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[5] }">
                        Fill in the method from the list above that implements the getter for customerID
                        <br>
                        <br>
                        6. <input v-model="six">
                        <button class="button-9" id="btn1" @click="validate_six()"> Validate </button>
                    </div>
                    <!--Write codebox divs that request for input from the user as done above for a total of 12 times-->
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[6] }">
                        Fill in the method from the list above that implements the getter for email
                        <br>
                        <br>
                        7. <input v-model="seven">
                        <button class="button-9" id="btn1" @click="validate_seven()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[7] }">
                        Fill in the method from the list above that implements the getter for phone
                        <br>
                        <br>
                        8. <input v-model="eight">
                        <button class="button-9" id="btn1" @click="validate_eight()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[8] }">
                        Fill in the method from the list above that implements the getter for city
                        <br>
                        <br>
                        9. <input v-model="nine">
                        <button class="button-9" id="btn1" @click="validate_nine()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[9] }">
                        Fill in the method from the list above that implements the setter for email
                        <br>
                        <br>
                        10. <input v-model="ten">
                        <button class="button-9" id="btn1" @click="validate_ten()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[10] }">
                        Fill in the method from the list above that implements the setter for phone
                        <br>
                        <br>
                        11. <input v-model="eleven">
                        <button class="button-9" id="btn1" @click="validate_eleven()"> Validate </button>
                    </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[11] }">
                        Fill in the method from the list above that implements the setter for city
                        <br>
                        <br>
                        12. <input v-model="twelve">
                        <button class="button-9" id="btn1" @click="validate_twelve()"> Validate </button>
                        </div>
                    <div class="codebox" style="max-width: 350px;" :style="{ display: display[12] }">
                        <button class="button-9" @click="$router.push('/code')">Next</button>
                    </div>
            </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    methods: {
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
        },
        validate_one() {
            if (this.one == "customerID: int") {
                this.display[0] = "none";
                this.display[1] = "block";
                this.valid[0] = true;
            }

            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }

        },
        validate_two() {
            if (this.two == "email: String") {
                this.display[1] = "none";
                this.display[2] = "block";
                this.valid[1] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }

        },
        validate_three() {
            if (this.three == "phone: long") {
                this.display[2] = "none";
                this.display[3] = "block";
                this.valid[2] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_four() {
            if (this.four == "city: String") {
                this.display[3] = "none";
                this.display[4] = "block";
                this.valid[3] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_five() {
            if (this.five == "customerCount: integer") {
                this.display[4] = "none";
                this.display[5] = "block";
                this.valid[4] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_six() {
            if (this.six == "getCustomerID(): int") {
                this.display[5] = "none";
                this.display[6] = "block";
                this.valid[5] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_seven() {
            if (this.seven == "getEmail(): String") {
                this.display[6] = "none";
                this.display[7] = "block";
                this.valid[6] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_eight() {
            if (this.eight == "getPhone(): long integer") {
                this.display[7] = "none";
                this.display[8] = "block";
                this.valid[7] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_nine() {
            if (this.nine == "getCity(): String") {
                this.display[8] = "none";
                this.display[9] = "block";
                this.valid[8] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_ten() {
            if (this.ten == "setEmail(): void") {
                this.display[9] = "none";
                this.display[10] = "block";
                this.valid[9] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_eleven() {
            if (this.eleven == "setPhone(): void") {
                this.display[10] = "none";
                this.display[11] = "block";
                this.valid[10] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
        validate_twelve() {
            if (this.twelve == "setCity(): void") {
                this.display[11] = "none";
                this.display[12] = "block";
                this.valid[11] = true;
            }
            else {
                var x = document.getElementById("snackbar");
                x.innerHTML = "Incorrect. Try again";
                x.style.backgroundColor = "red";
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        },
    },
    data() {
        return {
            id: 'container',
            class: 'wrapper',
            button_text: "Incorrect. Try again.",
            button_text_right: "Next",
            correct: false,
            valid: [false, false],
            display: ["block", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
        }
    }
}


</script>

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

.row {
    display: flex;
}

.column {
    flex: 50%;
}

.completed {
    color: cadetblue;
    text-decoration: line-through;
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


.header-content{
    display: flex;
    flex-direction: column;
    flex: 5;
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
    height: 100%;
    width: 100%;
    padding: 25px;
    border-radius: 10px;
    margin: 25px;
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