<template>
  <div class="container pt-1">
    <div class="card">
      <async-component></async-component>
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button
        ref="myBtn"
        :color="oneColor"
        @action="active = 'one' "
      >One</app-button>
      <app-button
        :color="secondColor"
        @action="active = 'two' "
      >Two</app-button>
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import AppTextOne from '@/components/AppTextOne.vue'
import AppTextTwo from '@/components/AppTextTwo.vue'

export default {
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  },
  data () {
    return {
      active: 'one' // two
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.componentName = 'new comp name'
    // }, 1500)

    this.$refs.myBtn.btnLog()
  },
  computed: {
    // componentName () {
    //   if (this.active === 'one') {
    //     return 'app-text-one'
    //   }
    //   return 'app-text-two'
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get () {
        return 'app-text-two'
      },
      set (value) {
        console.log('componentName', value)
      }
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    secondColor () {
      return this.active === 'two' ? 'primary' : ''
    }
  }
}
</script>

<style scoped>

</style>
