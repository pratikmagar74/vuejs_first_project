
<template>
  <div>
    <h2>Add Student</h2>

    <form @submit.prevent="addStudent">
      <label>Name</label>
      <input type="text" v-model="name">

      <br><br>

      <label>Age</label>
      <input type="number" v-model="age">

      <br><br>

      <label>Email</label>
      <input type="email" v-model="email">

      <br><br>

      <label>Department</label>
      <select v-model="department_id">
        <option value="1">GE</option>
      </select>

      <br><br>

      <button type="submit">Add Student</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const age = ref('')
const email = ref('')
const department_id = ref('')

const router = useRouter()
function addStudent() {

  fetch('http://127.0.0.1:8000/api/students/', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: name.value,
      age: age.value,
      email: email.value,
      department_id: department_id.value
    })
  })
    .then(data => {
  console.log(data)
  router.push('/')
})

}

</script>