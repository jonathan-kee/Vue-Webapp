import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './pages/PageHome.vue'
import Home from './views/Home.vue'
//import About from './views/About.vue'
import Forum from './views/Forum.vue'
import Contact from './views/Contact.vue'
import SelfCare from './views/SelfCare.vue'
import SuicidePrevention from './views/SuicidePrevention.vue'
import SupportGroup from './views/SupportGroup.vue'
//components imports, @ is 
import ThreadShow from './pages/PageThreadShow.vue'
import NotFound from './pages/PageNotFound.vue'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',//base url
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/forum',//path change got effect
      name: 'forum',//name change no effect
      component: Forum //component change got effect
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/supportGroup',
      name: 'supportGroup',
      component: SupportGroup
    },
    {
      path: '/suicidePrevention',
      name: 'suicidePrevention',
      component: SuicidePrevention
    },
    {
      path: '/selfCare',
      name: 'selfCare',
      component: SelfCare
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
