import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './theme.css'

// App -> AppNews -> AppNewsList
// App -> AppNewsList

const app = createApp(App)
app.component('async-component', defineAsyncComponent(() => {
  return import('./components/AppAsyncComponent')
}))

app.mount('#app')
