<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">Account Info</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
        If you need more info, please check out
        <a href="#" class="link-primary fw-bolder">Help Page</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="mb-10 fv-row">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label mb-3">
        Specify Team Size
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Provide your team size to help us setup your billing"
        ></i>
      </label>
      <!--end::Label-->

      <!--begin::Row-->
      <div class="row mb-2" data-kt-buttons="true">
        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              value="1-1"
            />
            <span class="fw-bolder fs-3">1-1</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4 active"
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              value="2-10"
            />
            <span class="fw-bolder fs-3">2-10</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              value="10-50"
            />
            <span class="fw-bolder fs-3">10-50</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col">
          <!--begin::Option-->
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
          >
            <Field
              type="radio"
              class="btn-check"
              name="accountTeamSize"
              checked
              value="50+"
            />
            <span class="fw-bolder fs-3">50+</span>
          </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Hint-->
      <div class="form-text">
        Customers will see this shortened version of your statement descriptor
      </div>
      <!--end::Hint-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">Team Account Name</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName"
        placeholder=""
        value=""
      />
      <ErrorMessage
        name="accountName"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="mb-0 fv-row">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label mb-5">
        Select Account Plan
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Monthly billing will be based on your account plan"
        ></i>
      </label>
      <!--end::Label-->

      <!--begin::Options-->
      <!-- <router-view/> -->

  <UserForm v-if="opinionBlock" />
  <Calendar v-if="calendarBlock" />

  
      <!--end::Options-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import UserForm from '@/components/custom-components/wizard-user.vue'
import Calendar from '@/components/calendar/CalendarApp1.vue'

export default defineComponent({
  name: "step-2",
  components: {
    Field,
    ErrorMessage,     
    UserForm,
    Calendar
  },
  computed: {
    opinionBlock() {
      return this.$route.name === 'opinion'
    },
    calendarBlock() {
      return this.$route.name === 'calendar'
    }
  }
});
</script>
