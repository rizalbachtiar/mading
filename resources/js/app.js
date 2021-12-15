import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import CKEditor from '@ckeditor/ckeditor5-vue'

createInertiaApp({
  resolve: name => import(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(CKEditor)
      .mixin({methods: {route}})
      .mount(el)
  },
})
InertiaProgress.init()
