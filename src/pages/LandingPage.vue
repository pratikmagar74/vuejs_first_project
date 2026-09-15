<template>
  <div>
    <h2>Welcome to Student Management System</h2>

    <p>This is my Vue application.</p>

    <hr>

    <h2>Student List</h2>

    <div
      v-for="student in students"
      :key="student.id"
      class="student-card"
    >
    <br>
      <h3>{{ student.name }}</h3>
      <p>Age: {{ student.age }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Department: {{ student.department.name }}</p>

      <a :href="`/edit/${student.id}`">Edit</a>
      <a :href="`/delete/${student.id}`">Delete</a>

    </div>

    <p v-if="students.length === 0">
      No students found.
    </p>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const students = ref([])

onMounted(() => {

  fetch('http://127.0.0.1:8000/api/students/')
    .then(response => response.json())
    .then(data => {
      students.value = data
    })

})

</script>
