<template>
  <div>
    <lb-body></lb-body>
    <lb-footer></lb-footer>
  </div>
</template>
<script>
import footer from './footer.vue'
import body from './body.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    'lb-footer': footer,
    'lb-body': body
  },
  methods: {

  }
}
</script>
