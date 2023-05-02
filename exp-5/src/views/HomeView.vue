<!--Designed & Developed by:
   Nirmal K (@cyberwizard1001)⁶
   Nitin Ravi (@nitinravi)
   Ritwik M (@ritwik-m) &
   Nalinadevi K (@knaldev)
 for the Ministry of Education (MOE) virtual-labs project, Govt.Of.India-->

<script>
import CustomerView from "../components/CustomerViewComponent.vue";
import ReservationView from "../components/ReservationViewComponent.vue";
import VehicleView from "../components/VehicleViewComponent.vue";
import InstructionsView from "../components/InstructionsViewComponent.vue";
import ReservationSystemView from "../components/ReservationSystemViewComponent.vue";
import ClassView from "../components/ClassDiagramView.vue";

export default {
  components: {
    CustomerView,
    ReservationView,
    VehicleView,
    InstructionsView,
    ReservationSystemView,
    ClassView,
  },
  data() {
    return {
      componentSelect: "InstructionsView",
      reservation_complete: false,
      reservation_system_complete: false,
    };
  },
  methods: {
    reservationCallback(value) {
      console.log("Event reservation triggered", value);
      this.reservation_complete = true;
      this.componentSelect = "VehicleView";
    },
    reservationSystemCallBack(value) {
      console.log("Event reservation system triggered", value);
      this.reservation_system_complete = true;
      this.componentSelect = "ClassView";
    },
    instructionsReadCallback(value) {
      console.log("Instructions read", value);
      this.componentSelect = 'ReservationView'
    }
  },
};
</script>

<template>
  <main class="app">
    <button
      @click="componentSelect = 'InstructionsView'"
      :style="
        componentSelect === 'InstructionsView'
          ? 'background-color: #55acee'
          : ''
      "
    >
      1. Instructions
    </button>
    <button
      @click="componentSelect = 'CustomerView'"
      :style="
        componentSelect === 'CustomerView' ? 'background-color: #55acee' : ''
      "
    >
      2. Customer Class
    </button>
    <button
      @click="componentSelect = 'ReservationView'"
      :style="
        componentSelect === 'ReservationView' ? 'background-color: #55acee' : ''
      "
    >
      3. Reservation Class
    </button>
    <button
      @click="componentSelect = 'VehicleView'"
      :style="
        componentSelect === 'VehicleView' ? 'background-color: #55acee' : ''
      "
    >
      4. Vehicle Class
    </button>
    <button
      @click="componentSelect = 'ReservationSystemView'"
      :disabled="!reservation_complete"
      :style="
        componentSelect === 'ReservationSystemView'
          ? 'background-color: #55acee'
          : ''
      "
    >
      5. Reservation System Class
    </button>
    <button
      @click="componentSelect = 'ClassView'"
      :style="
        componentSelect === 'ClassView' ? 'background-color: #55acee' : ''
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
      <button class="navitem" @click="$router.push('/screen-two')">Next</button>
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

button:disabled {
  background-color: #7c8e9d;
}

button:first-of-type {
  margin-left: 30px;
}
</style>
