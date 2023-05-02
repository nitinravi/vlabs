import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/screen-three',
      name: 'screen-three',
      component: () => import('../views/CompositionView.vue')
    },
    {
      path: '/screen-four',
      name: 'screen-four',
      component: () => import('../views/OutputView.vue')
    },
    {
      path: '/screen-two',
      name: 'screen-two',
      component: () => import('../views/CompositionClassDiagram.vue')
    },
    {
      path: '/completion',
      name: 'completion',
      component: () => import('../views/CongratulationsPage.vue')
    },
    {
      path: '/help-new-variable',
      name: 'path-new-variable',
      component: () => import('../components/help/newVariableComponent.vue')
    },
    {
      path: '/help-super-keyword',
      name: 'path-super-keyword',
      component: () => import('../components/help/superKeywordComponent.vue')
    },
    {
      path: '/help-constructor-writing',
      name: 'path-constructor-writing',
      component: () => import('../components/help/constructorWritingComponent.vue')
    },
    {
      path: '/help-passing-arguments-to-functions',
      name: 'path-passing-arguments-to-functions',
      component: () => import('../components/help/passingArgumentsToFunctionsComponent.vue')
    },
    {
      path: '/help-getter',
      name: 'path-getter',
      component: () => import('../components/help/getterComponent.vue')
    },
    {
      path: '/help-setter',
      name: 'path-setter',
      component: () => import('../components/help/setterComponent.vue')
    },
    {
      path: '/help-print-function',
      name: 'path-print-function',
      component: () => import('../components/help/printFunctionComponent.vue')
    },
    {
      path: '/help-object-creation',
      name: 'path-object-creation',
      component: () => import('../components/help/objectCreationComponent.vue')
    },
    {
      path: '/help-function-calling-with-object',
      name: 'path-function-calling-with-object',
      component: () => import('../components/help/functionCallingWithObjectComponent.vue')
    },
    {
      path: '/help-array-list',
      name: 'path-array-list',
      component: () => import('../components/help/arrayListComponent.vue')
    },
    {
      path: '/help-arrays',
      name: 'path-arrays',
      component: () => import('../components/help/arraysComponent.vue')
    },
    {
      path: '/help-string-compare',
      name: 'path-string-compare',
      component: () => import('../components/help/StringcompareComponent.vue')
    },
    {
      path: '/help-this',
      name: 'path-this',
      component: () => import('../components/help/thisComponent.vue')
    },
    {
      path: '/help-date-object',
      name: 'path-date-object',
      component: () => import('../components/help/dateComponent.vue')
    },
    {
      path: '/help-abstract',
      name: 'path-abstract',
      component: () => import('../components/help/abstractComponent.vue')
    },
    {
      path: '/help-class-cast-exception',
      name: 'path-class-cast-exception',
      component: () => import('../components/help/classCastExceptionComponent.vue')
    },
    {
      path: '/help-extends',
      name: 'path-extends',
      component: () => import('../components/help/extendsComponent.vue')
    },
    {
      path: '/help-interface',
      name: 'path-interface',
      component: () => import('../components/help/interfaceComponent.vue')
    },
    {
      path: '/help-null-pointer-exception',
      name: 'path-null-pointer-exception',
      component: () => import('../components/help/nullPointerExceptionComponent.vue')
    },
    {
      path: '/help-parse-exception',
      name: 'path-parse-exception',
      component: () => import('../components/help/parseExceptionComponent.vue')
    },
    {
      path: '/help-try-catch',
      name: 'path-try-catch',
      component: () => import('../components/help/tryCatchComponent.vue')
    }
    
  ]
})

export default router