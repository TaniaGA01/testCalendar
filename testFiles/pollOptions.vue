  <template>
  <!--begin::Input group-->
  <div class="fv-row">
    <!--begin::Label-->
    <i class="fas fa-caret-right me-2"></i>
    <label class="form-label">Autre options</label>
    <!--end::Label-->

    <FieldArray name="pollOptions" v-slot="{ fields }">
      <fieldset v-for="(field, idx) in fields" :key="field.key">
        <div
          class="d-flex flex-stack mb-5 form-check form-switch form-check-custom form-check-solid"
          :id="`div_${idx}`"
        >
          <label class="fs-6 fw-bold" :for="`${idx}`"
            >{{ field.value.name }}
            <template v-if="field.value.type === 'gratuit'">
              <span class="badge-light-warning badge fs-7 fw-bolder">
                {{ field.value.type }}
              </span>
            </template>
            <template v-else>
              <span class="badge-light-info fs-7 badge fs-7 fw-bolder me-1">
                {{ field.value.type }}
              </span>
            </template>
          </label>

          <Field
            :id="`input_${idx}`"
            :name="field.value.name"
            :value="field.value.opId"
            class="form-check-input checkbox-input"
            type="checkbox"
            @click="checkPollOptions(idx)"
          />
        </div>
        <hr />
      </fieldset>
    </FieldArray>
  </div>
</template>

<script lang="ts">

import { Field, FieldArray } from "vee-validate";
import { defineComponent,reactive,ref,computed,onMounted, onBeforeMount } from "vue";
import { pollOptions } from '@/data/pollOptions';

export default defineComponent ({
  name: "pollOptions",
  components: {
    Field,
    FieldArray,
  },
  setup() {
    const allPollOptions = ref(pollOptions);
    
    const checkPollOptions = reactive((e) => {
      
      // const activeTrue = allPollOptions.value[e].active = true
      const getOptionInputId = document.querySelector(`input[id="input_${e}"]`)
      
      if(!getOptionInputId?.hasAttribute(`checked`)){
        getOptionInputId?.setAttribute(`checked`,`checked`)
        if(getOptionInputId?.hasAttribute(`checked`)){
          allPollOptions.value[e].active = true
          // allPollOptions.value.map( x => x.active != activeTrue ? {...x, active: true } : x )
        }
      }else{
        getOptionInputId?.removeAttribute(`checked`)
        if(!getOptionInputId?.hasAttribute(`checked`)){
          allPollOptions.value[e].active = false
          // allPollOptions.value.map( x => x.active == activeTrue ? {...x, active: false } : x )
        } 
      }


      const getCommentsInputOptId = document.querySelector(`input[id="input_9"]`)
      const getCommentsDivId = document.querySelector(`div[id="div_9"]`)
      const addLabelOption = document.createElement(`input`)
      getCommentsInputOptId?.hasAttribute(`checked`) ? getCommentsDivId?.appendChild(addLabelOption) : getCommentsInputOptId
      

      console.log('getOption', getOptionInputId)
      console.log('allPollOptions.value', allPollOptions.value[e])
    });

    

    return{
      checkPollOptions
    }

  }
});
</script>
