<template>
  <div class="about">
    <h1>About Me</h1>
    <p>
      Welcome to my gw2 pvp stats project!
    </p>
    <p>My name is Joachim, and I am a passionate developer specializing in backend and frontend technologies.
      This site showcases my journey, skills, and projects.</p>
    <section class="skills">
      <h2>My Skills</h2>
      <ul>
        <li>Backend: Spring Boot, Python</li>
        <li>Frontend: Vue.js, JavaScript, HTML, CSS</li>
        <li>Database: PostgreSQL, Neo4j</li>
        <li>Tools: Grafana, Apache Kafka</li>
      </ul>
    </section>
    <section class="journey">
      <h2>My Journey</h2>
      <p>
        I began my career with a strong foundation in IT, graduating with a degree in Computer Science from Henallux. Since then, I have worked on various projects, developing innovative solutions for clients and continuously expanding my expertise.
      </p>
    </section>
    <section class="contact">
      <h2>Get in Touch</h2>
      <p>
        Feel free to reach out to me for collaboration or to learn more about my work!
      </p>
      <ul>
        <li >Github: <a href="https://github.com/LJKhnor" target="_blank">LJKhnor</a></li>
        <li>Email: <a href="mailto:lejeune.joachim.dev@gmail.com">lejeune.joachim.dev@gmail.com</a></li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about {
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1, h2 {
  color: hsla(160, 100%, 37%, 1);
}

p {
  color: var(--color-text);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

a {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
