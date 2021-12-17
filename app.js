const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "Thet Tun Kyaw",
      confirmedName: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      if (newValue === "") {
        this.confirmedName = "";
      } else {
        this.confirmedName = newValue + " " + "TTk";
      }
    },
  },
  computed: {
    getFullName() {
      console.log("Hello");
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Kyaw";
    },
  },
  methods: {
    addFunction(number) {
      // this.counter = this.counter + number;
      this.counter += number;
    },
    reduceFunction(number) {
      // this.counter--;
      this.counter -= number;
    },
    inputFunction(event, shortName) {
      // this.name = event.target.value + " " + shortName;
      this.name = event.target.value;
    },
    confirmedNameFunction() {
      this.confirmedName = this.name;
    },
    submitFunction() {
      alert("Sign Up Successfully!");
    },
  },
});

app.mount("#events");
