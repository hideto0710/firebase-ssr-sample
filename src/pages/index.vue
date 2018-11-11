<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        fb-ssr
      </h1>
      <h2 class="subtitle">
        My wondrous Nuxt.js project
        <button @click="greet">Hello</button>
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    <ul>
      <li
        v-for="(fact, factIdx) in facts"
        :key="factIdx"
      >
        {{ fact.text }}
      </li>
    </ul>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData({ app }) {
    const facts = await app.$axios.$get(
      'https://nuxt-ssr.firebaseio.com/facts.json'
    )
    return { facts }
  },
  methods: {
    greet: () => {
      console.log([1, 2].map(i => `Hello, ${i}.`).join('\n'))
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
