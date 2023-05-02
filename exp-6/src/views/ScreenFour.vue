 <!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K 
 for the Ministry of Education (MOE) virtual-labs project, Govt. Of India -->


<!--
Reservation list: 
[ID: 1, Customer Object: [ID: 1, Name: ABC, Email: abc@gmail.com, Phone: 0, City: Coimbatore ], Vehicle Object: [Reg Number: 1234, Key Status: available ], Contract Status: Reservation not released, Booking Date: Tue Mar 01 00:00:00 IST 2022, Release Date: null ]
Vehicle is available, initiating contract..
Reservation released
Vehicle key handedover

Process finished with exit code 0
-->

<!--


-->

<script>

</script>

<template>
    <main>
        <div style="padding-left: 2%;">
                <h1>Understanding the Output</h1>
                <p>The TestDriver code on the left end creates the required Customer and Exec ojbects and performs a reservation. Observe the output on the right end.</p>
            </div>
        <div class="flex">

            <div class="row">
            <div class="codebox">

            <h3 style="font-family: monospace;">Test Driver.java</h3>
            <pre>
...

import java.util.Scanner;
import java.util.Date;


public class TestDriver {

    public static void main(String[] args) {
        Customer cobj= new Customer("ABC", "abc@gmail.com");
        cobj.setCity("Coimbatore");
        Clerk clobj = new Clerk("PQR","pqr@gmail.com");
        Vehicle vobj=new Vehicle(1234);
        Reservation robj= new Reservation(cobj,vobj);
        robj.setBookingDate(new Date());
        robj.getVehicleObj().updateKeyStatus();
    }

}
            </pre>
        </div>
    </div>


        
        <div class="outbox">
                    <p>OUTPUT</p>   
                   <p style="color: #fff;">Customer list: </p>
                   <p style="color: #fff;">[ID: 1, Name: ABC, Email: abc@gmail.com, Phone: 0, City: Coimbatore]</p>
                    <p style="color: #fff;">[ID: 2, Name: DEF, Email: null, Phone: 0, City: Coimbatore]</p>
                    <p style="color: #fff;">[ID: 3, Name: GHI, Email: ghi@gmail.com, Phone: 0, City: Chennai]</p><br>
                    <p style="color: #fff;">Exec list: </p>
                    <p style="color: #fff;">[ID: 1, Name: EFG, Email: efg@gmail.com, Phone: 0, City: Coimbatore ]</p><br>
                    <p style="color: #fff;">Vehicle list: </p>
                    <p style="color: #fff">[Reg Number: 1234, Key Status: available ]</p>
                    <p style="color: #fff;">Reservation list: </p>
                    <p style="color: #fff;">[ID: 1, Customer Object: [ID: 1, Name: ABC, Email:abc@gmail.com, Phone: 0, City: Coimbatore ], Vehicle Object: [Reg Number: 1234, Key Status: available ], Contract Status: Reservation not released, Booking Date: Tue Mar 01 00:00:00 IST 2022, Release Date: null ] </p>
                    <p style="color: #fff;">Vehicle is available, initiating contract..</p>
                    <p style="color: #fff;">Reservation released</p>
                    <p style="color: #fff;">Vehicle key handedover</p> <br>
                    <p style="color: #fff;">Process finished with exit code 0</p>
            
                    

                    <div style="height: 100px; background-color: #202020;"></div>
                        <button class="button-9" id="btn1" @click="$router.push('/congratulations')">Continue</button>

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

.comment {
  margin-left: 15px;
  font-style: italic;
  color: gray;
  font-size: small;
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

.flex{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-direction: row;
}




.codebox {
    height: 80%;
    width: fit-content;
    flex: 1;
    margin: 25px;
    padding: 25px;
    border-radius: 10px;
    
    box-shadow: 2px 3px 10px 2px #D7DFFF;
}

.outbox {
    height: 80%;
    min-height: 50vh;
    width: 50%;
    flex: 1;
    margin: 25px;
    padding: 25px;
    border-radius: 10px;
    background-color: #202020;
    color: white;
    font-size: medium;
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
</style>