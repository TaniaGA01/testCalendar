<template>
  <!--begin::Calendar-->

  <div class="fv-row mb-10">
    <!--begin::Label-->
    <i class="far fa-lightbulb text-primary me-2"></i>
    <label class="form-label required">Choix des créneaux horaires</label>

    <FullCalendar class="mt-10 mb-10" :options="calendarOptions">
    </FullCalendar>

    {{ allEvents }}

    <FieldArray name="allEvents">
      <fieldset
        class="mt-5"
        v-for="(field, idx) in allEvents.slice(0)"
        :key="idx"
      >
        <label :for="`idEvent_${idx}`">Date - {{ field.start }}</label>
        <template class="input-group">
          <Field
            :id="`idEvent_${idx}`"
            :name="`allEvents[${idx}].idEvent`"
            :modelValue="field.start + ` - ` + field.end"
            class="
              form-control form-control-lg form-control-solid
              disable-input
            "
          />
          <button
            type="button"
            @click="deleteNewEvent(idx)"
            class="btn btn-primary"
          >
            <i class="bi bi-trash3"></i>
          </button>
        </template>

        <ErrorMessage
          v-if="!`allEvents[${idx}].start`.value"
          :name="`allEvents[${idx}].idEvent`"
          class="fv-plugins-message-container invalid-feedback"
        />
      </fieldset>
    </FieldArray>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive,ref } from "vue";
import { Field, Form, ErrorMessage, FieldArray } from "vee-validate";
import FullCalendar from "@fullcalendar/vue3";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { allEvents, todayDate, TODAY } from "@/data/eventsCal";
import moment from "moment";
import "moment/locale/fr";

export default defineComponent({
  name: "calendar",
  components: {
    FullCalendar,
    Form,
    Field,
    ErrorMessage,
    FieldArray,
  },
  data() {
    return {
      allEvents,
    };
  },
  created() {},
  methods: {},

  setup() {

    const id = ref(12)
    
    const getNewEvent = (e) => {
      allEvents.push(e);
    };

    const getUpdateEvent = (x) => {
      const response = allEvents.findIndex((e) => e.idEvent === x.idEvent);
      allEvents.splice(response, 1, x); // splice : remplacer (il sert à update and delete) --> on récupre l'index, on splice un élément et on le remplace par x
    };

    const deleteNewEvent = reactive((a) => {
      
      allEvents.splice(
        allEvents.findIndex((e) => e.idEvent === a),
        1
      ); // on recupere l'index et on splice 1 élément
       
    });

    const calendarOptions = reactive({
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      headerToolbar: {
        left: "prev,next today myCustomButton",
        center: "",
        // right: "dayGridMonth,timeGridWeek,timeGridDay"
        right: "title",
      },
      footerToolbar: {
        left: "myCustomButton"
      },
      views: {
        // dayGridMonth: { buttonText: "Mois" },
        timeGridWeek: { buttonText: "Semaine" },
        // timeGridDay: { buttonText: "Jours" },
      },
      initialView: "timeGridWeek",
      locales: [frLocale],
      locale: "fr",
      initialDate: TODAY,
      firstDay: todayDate,
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      events: allEvents,
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events

      selectAllow: (selectInfo) => {
        // disable addEvent before today
        const beforeToday = todayDate.diff(selectInfo.start);
        const noEventsBeforeToday = beforeToday <= 0;
        return noEventsBeforeToday;
      },

      select: (e) => {
        
        const cal = e.view.calendar;
        
        cal.unselect();
        cal.addEvent({
          start: e.start,
          end: e.end,
          allDay: e.allDay,
        });
      },

      eventClick: (e) => {
        const idEvent = id.value + 1;
        deleteNewEvent(idEvent);
        e.event.remove();
      },

      eventAdd: (e) => {
        id.value = id.value + 1
        const addEventClass = document.querySelector(`.fc-event-main`)
        const createDiv = document.createElement(`div`)
        addEventClass?.append(createDiv)
        createDiv.classList.add(`updateEvent`)
        createDiv.innerHTML += '=';
        addEventClass?.setAttribute(`id`, `${id.value}`)

        const idEvent = id.value;
        const start = moment(e.event.start).locale("fr").format("LLLL");
        const end = moment(e.event.end).locale("fr").format("LLLL");

        const newEvent = { idEvent, start, end };

        getNewEvent(newEvent);
      },

      eventChange: (e) => {
        const idEvent = id.value;
        const start = moment(e.event.start).locale("fr").format("LLLL");
        const end = moment(e.event.end).locale("fr").format("LLLL");

        const updateEvent = { idEvent, start, end };

        getUpdateEvent(updateEvent);
      },

      eventRemove: (i) => {

      }
    });

    return {
      calendarOptions,
      getNewEvent,
      deleteNewEvent,
      getUpdateEvent,
    };
  },
});
</script>

<style lang="scss">
.fc-day-past {
  background-color: rgb(233, 233, 233);
}
.updateEvent{
  text-align: center;
  margin-top: -9px;
}
</style>
