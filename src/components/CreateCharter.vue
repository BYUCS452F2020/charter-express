<template>
  <div class="push">
    <article v-if="$store.state.access_level>0" class="box">
      <p class="panel-heading">
        Create a new charter for {{ $store.state.user.company.name }}
      </p>
      <p class="box">
        <b-field label="Title">
          <b-input v-model="title" />
        </b-field>
        <b-field label="Location">
          <b-select v-model="location" placeholder="Location">
            <option
              v-for="option in locations"
              :key="option.id"
              :value="option.id">
              {{ option.city }}
            </option>
          </b-select>
        </b-field>
        <b-field label="Start Date">
          <b-datepicker v-model="start_date" />
        </b-field>
        <b-field label="End Date">
          <b-datepicker v-model="end_date" />
        </b-field>
        <b-field label="Space Available">
          <b-input v-model="seats_available" />
        </b-field>
        <b-field label="Cost">
          <b-input v-model="cost" />
        </b-field>
        <button class="button is-primary" @click="submitCharter()">Submit</button>
      </p>
    </article>
    <div v-else>
      <b-message type="is-danger">
        Oops! Looks like you don't have permission to access this page.
        <br>
        If you think this is an error please contact your manager about your site access level.
      </b-message>
    </div>
  </div>
</template>
<script>
import CharterService from '@/services/CharterService'
export default {
  data() {
    return {
      title: '',
      start_date: null,
      end_date: null,
      seats_available: null,
      cost: null,
      location: null,
      locations: null,
      loading: false
    }
  },
  created () {
    this.getLocations()
  },
  methods: {
    async getLocations () {
      this.loading = true
      if(this.locations == null){
        this.locations = await CharterService.getLocations()
        this.locations = this.locations.data.results
      }
      this.loading = false
    },
    async submitCharter() {
      CharterService.submitCharter({
        start_date: this.start_date,
        end_date: this.end_date,
        company_id: this.$store.state.user.company.id,
        seats_available: this.seats_available,
        cost: this.cost
      })
    }
  }
}

</script>
<style scoped>
.push{
  margin: 20px;
  padding: 50px;
}
</style>