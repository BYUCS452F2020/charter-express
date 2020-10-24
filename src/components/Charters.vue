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
              <p class="title is-4">{{ charter.message }}</p>
              <p class="subtitle is-6">{{ charter.message }}</p>
            </div>
          </div>

          <div class="content">
            {{ charter.message }}
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div v-else class="pa-3">No Matches Found</div>
</template>
<script>
import axios from "axios";
export default {
  name: "Charters",
  data: () => ({
    charters: [{ message: "Foo" }, { message: "Bar" }]
  }),
  created() {
    axios.get();
  },
  methods: {}
};
</script>
