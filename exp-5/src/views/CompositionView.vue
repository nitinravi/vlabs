<!--Designed & Developed by:
    Nirmal K (@cyberwizard1001)⁶
    Nitin Ravi (@nitinravi)
    Ritwik M (@ritwik-m) &
    Nalinadevi K (@knaldev)
 for the Ministry of Education (MOE) virtual-labs project, Govt.Of.India-->
<script>
import CustomerView2 from "../components/CustomerViewComponent2.vue";
import ReservationView2 from "../components/ReservationViewComponent2.vue";
import VehicleView2 from "../components/VehicleViewComponent2.vue";
import InstructionsView2 from "../components/InstructionsViewComponent2.vue";
import ReservationSystemView2 from "../components/ReservationSystemViewComponent2.vue";
import ClassView2 from "../components/ClassDiagramView2.vue";

export default {
  components: {
    CustomerView2,
    ReservationView2,
    VehicleView2,
    InstructionsView2,
    ReservationSystemView2,
    ClassView2,
  },
  data() {
    return {
      componentSelect: "InstructionsView2",
      reservation_complete: false,
      reservation_system_complete: false,
    };
  },
  methods: {
    reservationCallback(value) {
      console.log("Event reservation triggered", value);
      this.reservation_complete = true;
      this.componentSelect = "VehicleView2";
    },
    reservationSystemCallBack(value) {
      console.log("Event reservation system triggered", value);
      this.reservation_system_complete = true;
      this.componentSelect = "ClassView2";
    },
    instructionsReadCallback(value) {
      console.log("Instructions read", value);
      this.componentSelect = 'ReservationView2'
    }
  },
};
</script>

<template>
  <main class="app">
    <button
      @click="componentSelect = 'InstructionsView2'"
      :style="
        componentSelect === 'InstructionsView2'
          ? 'background-color: #55acee'
          : ''
      "
    >
      1. Instructions
    </button>
    <button
      @click="componentSelect = 'CustomerView2'"
      :style="
        componentSelect === 'CustomerView2' ? 'background-color: #55acee' : ''
      "
    >
      2. Customer Class
    </button>
    <button
      @click="componentSelect = 'ReservationView2'"
      :style="
        componentSelect === 'ReservationView2'
          ? 'background-color: #55acee'
          : ''
      "
    >
      3. Reservation Class
    </button>
    <button
      @click="componentSelect = 'VehicleView2'"
      :style="
        componentSelect === 'VehicleView2' ? 'background-color: #55acee' : ''
      "
    >
      4. Vehicle Class
    </button>
    <button
      @click="componentSelect = 'ReservationSystemView2'"
      :style="
        componentSelect === 'ReservationSystemView2'
          ? 'background-color: #55acee'
          : ''
      "
      :disabled="!reservation_complete"
    >
      5. Reservation System Class
    </button>
    <button
      @click="componentSelect = 'ClassView2'"
      :style="
        componentSelect === 'ClassView2' ? 'background-color: #55acee' : ''
      "
    >
      6. Class diagram
    </button>
    <KeepAlive>
      <component
        v-bind:is="componentSelect"
        @reservation-complete="reservationCallback"
        @reservation-system-complete="reservationSystemCallBack"
        @instructions-read="instructionsReadCallback"
      />
    </KeepAlive>
  </main>
  <!--eslint-disable-next-line vue/no-multiple-template-root-->
  <footer v-show="reservation_complete && reservation_system_complete">
    <div id="buttons" class="relative">
      <button class="navitem" @click="$router.push('/screen-four')">
        Next
      </button>
    </div>
  </footer>
</template>

<style>
.app {
  background-color: #f9fafe;
  min-height: 1024px;
}

button {
  margin-top: 30px;
  border: none;
  padding: 20px;
  margin-left: 5px;
  background-color: #2c3e50;
  color: white;
}

button:first-of-type {
  margin-left: 30px;
}
</style>
