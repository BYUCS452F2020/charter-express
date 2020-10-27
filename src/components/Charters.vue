/* eslint-disable */
<template>
  <ul v-if="charters.length > 0" rounded>
    <h1 class="title px-5 mx-5">Current Charters</h1>
    <li
      v-for="(charter, i) in charters"
      :key="i"
      @click="$router.push('/charter/' + charter.id)"
    >
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Charter Company: {{ charter.company_name }}</p>
              <p class="subtitle is-6">Seats Available: {{ charter.seats_available }}</p>
            </div>
          </div>

          <div class="content">
            ${{ charter.cost }}
            <br />
            <time datetime="2016-1-1">{{ charter.start_date }} - {{ charter.end_date }}</time>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div v-else class="pa-3">No Matches Found</div>
</template>
<script>
import charterService from "../services/CharterService";
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
        company_name: "exampleCompany"
      },
      {
        id: 2,
        start_date: "11/1/2020",
        end_date: "11/12/2020",
        seats_available: 50,
        cost: 300,
        company_id: 1,
        company_name: "exampleCompany"
      }
    ]
  }),
  created() {
    charterService.getAllCharters();
  },
  methods: {}
};
</script>
