<template>
  <div>
    <div>
      <p>This is a banner announcement. It is very important.</p>
    </div>
    <b-carousel :pause-info="false">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.text }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
    <section class="hero is-black">
      <div class="hero-head" />
      
      <div class="hero-body columns is-centered">
        <div class="container column is-half">
          <h1 class="title is-1">
            {{ heroMessage }}
          </h1>
          <h1 class="subtitle">
            {{ heroSubtitle }}
          </h1>
        </div>
      </div>
    </section>
    <b-carousel-list
      :data="items"
      :repeat="repeat">
      <template slot="item" slot-scope="props">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img :src="props.list.image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="title is-6">{{ props.list.title }}</p>
              <p>{{ props.list.message }}</p>
              <p class="subtitle is-8">{{ props.list.user }}</p>
            </div>
          </div>
        </div>
      </template>
    </b-carousel-list>
    <section class="hero is-secondary">
      <div class="hero-body columns is-centered">
        <div class="container column is-half">
          <h1 class="title is-1">
            About us
          </h1>
          <h1 class="subtitle is-5">
            Your Casino Travel Specialist
          </h1>
          <h1 class="is-6">
            Our passion is exceeding your expectations! We believe in providing a personal touch beyond just making your reservations. All our agents have traveled extensively and have first-hand knowledge of the destinations we book. We will make your travel arrangements hassle-free. Contact us today to learn more about our offerings.
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container columns">
        <template v-for="item in infoCards">
          <div :key="item.index" class="column card is-half">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="item.image">
              </figure>
            </div>
            <div class="card-content">
              {{ item.message }}
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
// import Navbar from '@/components/global/GamblerNavbar'
export default {
  components: {
    //'gam-navbar': Navbar
  },
  data () {
    return {
      heroMessage: 'BOOK YOUR NEXT TRIP WITH CHARTER EXPRESS',
      heroSubtitle: 'We\'re here to ensure your next trip exceeds your expectations',
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' }
      ],
      autoplay: true,
      arrow: true,
      arrowHover: true,
      drag: true,
      gray: false,
      opacity: false,
      values: 1,
      perList: 1,
      repeat: true,
      items: [
        {
          title: 'Slide 1',
          image: 'https://picsum.photos/id/0/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@num1fan'
        },
        {
          title: 'Slide 2',
          image: 'https://picsum.photos/id/1/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@bencollins'
        },
        {
          title: 'Slide 3',
          image: 'https://picsum.photos/id/2/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@gamblersexpress'
        },
        {
          title: 'Slide 4',
          image: 'https://picsum.photos/id/3/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@bencollins'
        },
        {
          title: 'Slide 5',
          image: 'https://picsum.photos/id/4/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@gamblersexpress'
        },
        {
          title: 'Slide 6',
          image: 'https://picsum.photos/id/5/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@bencollins'
        },
        {
          title: 'Slide 7',
          image: 'https://picsum.photos/id/6/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@bencollins'
        },
        {
          title: 'Slide 8',
          image: 'https://picsum.photos/id/7/1230/500',
          message: 'Wow loved the trip to Reno! #winitall',
          user: '@gamblersexpress'
        }
      ],
      infoCards: [
        {
          image: 'https://picsum.photos/id/0/1230/500',
          message: 'Hello this is a message for you from me.'
        },
        {
          image: 'https://picsum.photos/id/4/1230/500',
          message: 'Hello this is a message for you from me.'
        },
        {
          image: 'https://picsum.photos/id/7/1230/500',
          message: 'Hello this is a message for you from me.'
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
