<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <event-metadata :event="v" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="event.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :event="event" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <descriptions :event="event" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Descriptions from './Descriptions'
import Tab from './Tab'
import EventMetadata from './EventMetadata'
import YouTube from './YouTube'
import EventsService from '@/services/EventsService'
import EventHistoryService from '@/services/EventHistoryService'

export default {
  data () {
    return {
      event: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const eventId = this.route.params.eventId
    this.event = (await EventsService.show(eventId)).data

    if (this.isUserLoggedIn) {
      EventHistoryService.post({
        eventId: eventId
      })
    }
  },
  components: {
    EventMetadata,
    YouTube,
    Descriptions,
    Tab
  }
}
</script>

<style scoped>
</style>
