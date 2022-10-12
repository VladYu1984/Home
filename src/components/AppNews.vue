<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <app-button
        @action="open"
      >{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
      <app-button
        color="danger"
        v-if="wasRead"
        @action="$emit('unmark', id)"
      >Отметить непрочитанной</app-button>
      <div v-if="isNewsOpen">
        <hr>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <app-button
          v-if="!wasRead"
          color="primary"
          @action="mark"
        >Прочесть новость</app-button>

        <app-news-list></app-news-list>
      </div>
    </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import AppNewsList from '@/components/AppNewsList.vue'
export default {
// props: ['title'],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        console.log(value)
        return value === true || value === false
      }
    },
    wasRead: {
      type: Boolean,
      required: false
    }
  },
  // emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unmark: null
  },
  data () {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark () {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    }
    // unmark () {
    //   this.$emit('unmark', this.id)
    // }
  },
  components: {
    AppButton,
    AppNewsList
  }
}
</script>
