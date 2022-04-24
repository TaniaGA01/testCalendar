<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header">
      <h2 class="card-title fw-bolder">Test Calendrier</h2>
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Calendar-->
      <FullCalendar
        class="demo-app-calendar"
        :options="calendarOptions"
      ></FullCalendar>
      <!--end::Calendar-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import frLocale from '@fullcalendar/core/locales/fr';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import events, { todayDate } from "@/core/data/events";
import { TODAY } from "@/core/data/events";

export default defineComponent({
  name: "calendar-app-1",
  components: {
    FullCalendar
  },
  setup() {
    
    const calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      initialView: 'timeGridWeek',
      locales: [ frLocale ],
      locale: "fr",
      initialDate: TODAY,
      firstDay: todayDate,
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      events: events,
      
      selectAllow: (selectInfo) => { // disable addEvent before today

        const beforeToday = todayDate.diff(selectInfo.start)
        const noEventsBeforeToday = beforeToday <= 0
      
        console.log({noEventsBeforeToday})
        console.log(selectInfo)
        return noEventsBeforeToday
      },

      views: {
        dayGridMonth: { buttonText: "month" },
        timeGridWeek: { buttonText: "week" },
        timeGridDay: { buttonText: "day" },
      },

      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      

      select: (e) => {
        
        const cal = e.view.calendar
        console.log(`select`, cal)

        cal.unselect() // allow drag and drop
        cal.addEvent({
          start: e.start,
          end: e.end
        })
      },
      eventClick:(e) => {
        if (e.event) {
          e.event.remove()
        }
      }
    };

    return {
      calendarOptions
    };
  },


});
</script>

<style lang="scss">
.fc .fc-button {
  padding: 0.75rem 1.25rem;
  box-shadow: none !important;
  border: 0 !important;
  border-radius: 0.475rem;
  vertical-align: middle;
  font-weight: 500;
  text-transform: capitalize;
}
.fc-day-past {
    background-color: rgb(233, 233, 233);
}
</style>
