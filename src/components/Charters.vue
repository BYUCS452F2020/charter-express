/* eslint-disable */
<template>
  <ul v-if="charters.length > 0" rounded>
    <h1 class="title push">Current Charters</h1>
    <li
      v-for="(charter, i) in charters"
      :key="i"
      @click="$router.push('/charter/' + charter.id)"
    >
      <div class="card cardmargin">
        <div class="card-content">
          <h1 class="title is-4">{{ charter.title }}</h1>
          <div class="media">
            <div class="media-content">
              <p class="subtitle is-4">
                {{ charter.company_name }}
              </p>
              <p class="subtitle is-6">
                Seats Available: {{ charter.seats_available }}
              </p>
            </div>
          </div>

          <div class="content">
            ${{ charter.cost }} per passenger
            <br />
            <time>{{ charter.start_date }} - {{ charter.end_date }}</time>
          </div>
          <div class="locationlist">
            <ol>
              <li v-for="location in charter.charter_locations" :key="location">
                {{ location }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div v-else class="pa-3">No Matches Found</div>
</template>
<script>
import charterService from "../services/CharterService";
import companyService from "../services/CompanyService";
export default {
  name: "Charters",
  data: () => ({
    charters: [
      {
        id: 1,
        start_date: "10/27/2020",
        end_date: "10/30/2020",
        seats_available: 45,
        cost: 200,
        company_id: 1,
        company_name: "exampleCompany",
        title: "Southern Coast Cruise",
        charter_locations: ["Houston", "New Orleans", "Miami"]
      },
      {
        id: 2,
        start_date: "11/1/2020",
        end_date: "11/12/2020",
        seats_available: 50,
        cost: 300,
        company_id: 1,
        company_name: "exampleCompany",
        title: "East Coast Cruise",
        charter_locations: ["New York", "Virginia Beach", "Myrtle Beach"]
      }
    ]
  }),
  created() {
    charterService.getAllCharters().then(response => {
      console.log(response.data.results);
      this.charters=response.data.results
      this.getCompanies().then(result =>{
        this.charters = result
        console.log(this.charters)
      })
    });

  },
  methods: {
    async getCompanies () {
      let temp = JSON.parse(JSON.stringify(this.charters))
      for(let i=0; i< temp.length; i++){
        let response = await companyService.getCompanyById(temp[i].company_id)
        temp[i].company_name = response.data.company.name
      }
      console.log(temp)
      return temp
    }
  }
};
</script>
<style scoped>
.push {
  margin: 20px;
  padding: 50px;
}
.cardmargin {
  margin: 10px;
  padding: 10px;
}
.locationlist {
  margin-left: 40px;
}
</style>