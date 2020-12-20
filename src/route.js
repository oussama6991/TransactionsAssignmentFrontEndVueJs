import Payment from './components/Payment.vue'
import Home from './Home.vue'
import Transactions from './components/Transactions.vue'
import Invoice from './components/Invoice.vue'

import { createWebHistory, createRouter } from "vue-router";

const routes=[
  {path: '/payment',component: Payment},
  {path: '',component: Home},
  {path: '/transaction',component: Transactions},
  {path: '/invoice',component: Invoice},


]
 export const router = createRouter({
  history: createWebHistory(),
  routes,
});
