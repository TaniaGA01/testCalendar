<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header">
      <h2 class="card-title fw-bolder">Test Calendrier</h2>
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <Form novalidate="novalidate">
      <div class="card-body">

      <!--begin::Calendar-->

      <!-- <FieldArray name="allEvents" v-slot="{ fields,remove }">
        <fieldset
          class="InputGroup"
          v-for="(field, idx) in fields"
          :key="field.key"
        >
          <legend>Event #{{ field }}</legend>
          <label :for="`name_${field}`">Event</label>
          <Field
          class="form-control form-control-lg form-control-solid w-50"
          :id="`name_${idx}`" 
          :name="`allEvents[${field}].start`" />
          <ErrorMessage :name="`allEvents[${field}]`" />
          <button type="button" @click="remove(field)">X</button>
        </fieldset>
      </FieldArray> -->


      <!-- <FieldArray name="allEvents" v-slot="{ fields }">
        <fieldset
          class="InputGroup w-50"
          v-for="(event, idx) in fields"
          :key="event.key"
        > 
          <legend>Date #{{ idx }}</legend>
          <label :for="`name_${idx}`">{{ event.start }}</label>
          <Field 
          class="form-control form-control-lg form-control-solid" 
          :id="`name_${idx}`" 
          :name="`allEvents[${idx}]`" />
          <ErrorMessage :name="`fields[${event}]`" />
          <button type="button" @click="remove(event)">X</button>
        </fieldset>

        <p class="mt-10">{{ allEvents }}</p>
        
      </FieldArray> -->
      
      <FieldArray name="allEvents" >
        <fieldset
          class="InputGroup"
          v-for="(event, idx) in allEvents"
          :key="event.key"
        > 
          <legend>Date #{{ idx }}</legend>
          <label :for="`name_${idx}`">{{ event.start }} - {{ event.end }}</label>
          <Field  
          class="form-control form-control-lg form-control-solid w-50" 
          :id="`name_${idx}`" 
          :name="`${event.start} - ${event.end}`"
          />
          <ErrorMessage :name="`allEvents[${event}]`" />
          <!-- <button type="button" @click="remove(event)">X</button> -->
        </fieldset>
      </FieldArray>
      
      
      <FullCalendar
      class="mt-10"
        :options="calendarOptions"
      >
      </FullCalendar>
      <!--end::Calendar-->
      
    </div>
    </Form>
    
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent,reactive,ref } from "vue";
import { Field, Form, ErrorMessage, FieldArray } from "vee-validate";
import FullCalendar from "@fullcalendar/vue3";
import frLocale from '@fullcalendar/core/locales/fr';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import allEvents, { todayDate } from "@/core/data/events";
import { TODAY } from "@/core/data/events";
import moment from "moment";
// import momentPlugin from '@fullcalendar/moment';


export default defineComponent({
  name: "calendar",
  components: {
    FullCalendar,
    Form,
    Field,
    ErrorMessage, 
    FieldArray
  },
  data(){
    return{
      allEvents
    }
  },
  
  setup() {
    const id = ref(0)
    const dateFormat = (e) =>{
      moment(e).format("LLL")
    }
    const getNewEvent = (e) => {
      console.log('all events : ', allEvents)
      allEvents.push(e)
    }
    const deleteNewEvent = (e) => {
      console.log('delete from all events : ', allEvents)
      allEvents.splice(e)

    }
    const calendarOptions = reactive({
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
      events: allEvents,
      
      selectAllow: (selectInfo) => { // disable addEvent before today
        const beforeToday = todayDate.diff(selectInfo.start)
        const noEventsBeforeToday = beforeToday <= 0
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
        id.value = id.value + 1
        const cal = e.view.calendar
        cal.unselect() // allow drag and drop
        cal.addEvent({
          id: id.value,
          start: e.start,
          end: e.end
          
        })
      },

      eventClick:(e) => {
        const evento = e.event
        const eventIdent = e.event['_instance'].defId
        console.log('evento :', evento)
        console.log('eventIdent :', eventIdent)

        
        if (eventIdent) { 
          deleteNewEvent(evento)
          evento.remove()
        }
      },

      eventAdd: (e) => {
        const idEvent = id.value
        const start = e.event.start 
        const end = e.event.end
        
        const newEvent = { idEvent, start, end }

        
        getNewEvent(newEvent)
        console.log('newEvent :', newEvent)
      },
      

    });

    return {
      calendarOptions,
      getNewEvent,
      deleteNewEvent,
      dateFormat
    };
  },
});
</script>

<style lang="scss">
.fc-day-past {
    background-color: rgb(233, 233, 233);
}
</style>
