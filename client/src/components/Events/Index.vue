<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <events-bookmarks />
      <recently-viewed-events class="mt-2" />
    </v-flex>

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <events-search-panel />
      <events-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import EventsPanel from './EventsPanel'
import EventsBookmarks from './EventsBookmarks'
import RecentlyViewedEvents from './RecentlyViewedEvents'
import EventsSearchPanel from './EventsSearchPanel'
import EventsService from '@/services/EventsService'
import {mapState} from 'vuex'

export default {
  components: {
    EventsPanel,
    EventsSearchPanel,
    EventsBookmarks,
    RecentlyViewedEvents
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      events: null
    }
  },
  async mounted () {
    this.events = (await EventsService.index()).data
  }
}
</script>

<style scoped>
.event {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.event-title {
  font-size: 30px;
}

.event-owner {
  font-size: 24px;
}

.event-type {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
