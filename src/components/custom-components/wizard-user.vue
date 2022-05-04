<template>
  <div>
    <h1>vee-validate array fields</h1>

    
      <p></p>

      <FieldArray name="users" v-slot="{ fields, push, remove }">
        <fieldset
          class="InputGroup"
          v-for="(field, idx) in fields"
          :key="field.key"
        >
          <legend>User #{{ idx }}</legend>
          <label :for="`name_${idx}`">Name</label>
          <Field :id="`name_${idx}`" :name="`users[${idx}].name`" />
          <ErrorMessage :name="`users[${idx}].name`" />

          <label :for="`email_${idx}`">Email</label>
          <Field
            :id="`email_${idx}`"
            :name="`users[${idx}].email`"
            type="email"
          />
          <ErrorMessage :name="`users[${idx}].email`" />
          <button type="button" @click="remove(idx)">X</button>
        </fieldset>

        <button type="button" @click="push({ email: '', name: '' })">
          Add User +
        </button>
      </FieldArray>

      <!-- <button type="submit">Submit</button> -->
  </div>
</template>

<script>
import { Field, Form, ErrorMessage, FieldArray } from "vee-validate";
import { users } from "@/data-custom"
import * as yup from "yup";

export default {
  name: "App",
  components: {
    Field,
    ErrorMessage,
    FieldArray,
  },
  data: () => {
  //   const createAccountSchema = yup.object().shape({
  //     users: yup
  //       .array()
  //       .of(
  //         yup.object().shape({
  //           name: yup.string().required().label("Name"),
  //           email: yup.string().email().required().label("Email"),
  //         })
  //       )
  //       .strict(),
  //   });

    const initialData = {
      users
    };

  //   return {
  //     createAccountSchema,
  //     initialData,
  //   };
  },
  // methods: {
  //   onSubmit(values) {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // },
};
</script>

<style>
.InputGroup {
  padding: 10px;
  border: 2px dotted black;
  margin-bottom: 30px;
  position: relative;
}

.InputGroup button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
