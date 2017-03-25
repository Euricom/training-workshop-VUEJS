Vue.component('markdown', {
  props: ['markdown'],
  template: '<div v-html="compiledMarkdown"></div>',
  computed: {
        compiledMarkdown: function () {
            return marked(this.markdown, { sanitize: true })
        }
    },
})

new Vue({
    el: '#app',
    data: {
        input: '# Advanced exercise example\n\n## Markdown editor',
    },
    methods: {
        update: function (e) {
            this.input = e.target.value
        },

        reset: function () {
            this.input = '';
        },
    }
})