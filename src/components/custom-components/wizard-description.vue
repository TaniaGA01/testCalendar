<template>
      <div class="mb-0">
        <!--begin:Option-->
        <label class="d-flex flex-stack mb-5 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/finance/fin001.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >NUEVA OPCION</span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >Use images to enhance your post flow</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="1"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->

        <!--begin:Option-->
        <label class="d-flex flex-stack mb-5 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra006.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >Developer Account</span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >Use images to your post time</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              checked
              name="accountPlan"
              value="2"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->

        <!--begin:Option-->
        <label class="d-flex flex-stack mb-0 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >Testing Account</span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >Use images to enhance time travel rivers</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->
      </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Field } from "vee-validate";

export default defineComponent({
  name: "opcion",
  components: {
    Field
  },
});
</script>