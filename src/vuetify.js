import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#00124E',
        secondary: '#38B6AB',
        primaryLight: '#E1E5F5',
        secondaryLight: '#e0f2f1',
        error: '#ED4B46',
        info: '#FFDC01',
        success: '#2CB753',
        warning: '#FBAA30',
        epopiaYellow: '#F3C144',
        downloadLight: '#FFECB3',
        downloadDark: '#5D4037',
      },
    },
  },
  icons: {
    iconfont: 'md',
  },
}

export default new Vuetify(opts)
