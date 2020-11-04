<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Hi,</h3><br>
    My name is Alex Giannini and this is my portfolio site! It features some projects using a variety of technologies including:
    <ul>
      <li>Angular</li>
      <li>Vue</li>
      <li>Node</li>
      <li>Express</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>HTMLM</li>
      <li>CSS</li>
      <li>AWS</li>
      <li>Azure</li>
      <li>MySQL</li>
      <li>RDS</li>
      <li>Docker</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
