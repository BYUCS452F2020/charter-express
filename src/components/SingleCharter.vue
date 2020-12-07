<template>
  <div style="position: relative;">
    <div style="padding: 20px; display: flex; flex-direction: column; align-items: center;">
      <h1 class="title push" style="text-align: center;">We'd love for you to join us with {{ charter.charter_title }} </h1>

      <p>We'll be going these amazing places!</p>

      <div class="locationlist">
        <ol>
          <li v-for="location in charter.charter_locations" :key="location">
            {{ location }}
          </li>
        </ol>
      </div>

      <p>From {{ charter.start_date }} to {{ charter.end_date }}</p>

      <p>Hurry! We only have {{ charter.seats_available }} seats left at {{ charter.cost }} per person!</p>

      <div style="margin-top: 20px" class="buttons">
        <a class="button is-light"
           @click="$router.push('/Upcoming')">
          <strong>No Thanks</strong>
        </a>
        <a class="button is-primary"
           @click="showPopUp(true)">
          Yes Please!
        </a>
      </div>
    </div>
    <div ref="popUp" style="position: absolute; top: 0px; left:0px; width:100%; height: 100%; display: none; justify-content: center; align-items: center; background-color: rgb(0,0,0,0.5)">
      <div style="background-color: white; width: 50%; height: 75%; padding: 30px; border-radius: 50px; display: flex; flex-direction: column;">
        <h1 style="text-align:center;">Great! How many people would you like to join?</h1>
        <label for="numPeople">Number of people</label>
        <input ref="numCharter" type="number" value="1">
        <div style="margin-top: 20px" class="buttons">
          <a class="button is-light"
             @click="showPopUp(false)">
            <strong>Never Mind</strong>
          </a>
          <a class="button is-primary"
             @click="submitPeopleToCharter()">
            Submit
          </a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import charterService from "../services/CharterService";
export default {
  name: "Charter",
  data: () => ({
    charter: {
      id: 1,
      start_date: "10/27/2020",
      end_date: "10/30/2020",
      seats_available: 45,
      cost: 200,
      company_id: 1,
      company_name: "exampleCompany",
      charter_title: "Southern Coast Cruise",
      charter_locations: ["Houston", "New Orleans", "Miami"]
    }
  }),
  created() {
    let paths = window.location.pathname.split(/(.)*[/]/)
    charterService.getCharterById(paths[paths.length -1]).then(response => {
      this.charter = response.data.results
    });
  },
  methods: {
    showPopUp: function(toShow) {
      if (toShow) {
        this.$refs.popUp.style.display = "flex"
      } else {
        this.$refs.popUp.style.display = "none"
      }
    },
    submitPeopleToCharter: function() {
      let numToSubmit = this.$refs.numCharter.value
      if (numToSubmit > 0) {
        alert("Awesome we've added " + numToSubmit + " to our trip!")
        this.$refs.popUp.style.display = "none"
      } else {
        alert("Please put a positive number of people")
      }
    }
  }
};

</script>
<style>

.locationlist {
  margin-left: 40px;
}
</style>
