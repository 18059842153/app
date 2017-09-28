<template>
<lb-footer></lb-footer>
</template>
<script>
import footer from './footer.vue'
import header from './header.vue'
import body from './body.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    'lb-footer': footer,
    'lb-header': header,
    'lb-body': body
  },
  methods: {
   
  }
}
</script>
