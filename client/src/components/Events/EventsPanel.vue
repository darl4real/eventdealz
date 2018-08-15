<template>
  <panel title="Events">
    <v-btn
      slot="action"
      :to="{
        name: 'events-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div
      v-for="event in events"
      class="event"
      :key="event.id">

      <v-layout>
        <v-flex xs6>
          <div class="event-title">
            {{event.title}}
          </div>
          <div class="event-owner">
            {{event.owner}}
          </div>
          <div class="event-type">
            {{event.type}}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'event',
              params: {
                eventId: event.id
              }
            }">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="event.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import EventsService from '@/services/EventsService'

export default {
  data () {
    return {
      events: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.events = (await EventsService.index(value)).data
      }
    }
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
