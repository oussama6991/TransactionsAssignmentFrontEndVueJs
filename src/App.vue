<template>
  <!-- <app-server-status></app-server-status> -->
  <header>
        <div class="logo-title">
            <h4 class="title">Transactions Assignment</h4>
        </div>

        <nav>
          <ul>
            <li><router-link to="/" class="routerClass"  active-class="active1" exact> Home </router-link></li>
            <li>  <router-link to="/payment" class='routerClass'  active-class="active1" exact> Payment</router-link></li>
            <li>  <router-link to="/invoice" class='routerClass'  active-class="active1" exact> Invoice</router-link></li>
            <li>  <router-link to="/transaction" class='routerClass'  active-class="active1" exact> Transactions</router-link></li>
          </ul>
        </nav>

      </header>
  <div class="container1">
          <hr class="line">
          <router-view></router-view>



      </div>
  </template>
  <script>
  // import HelloWorld from './components/HelloWorld.vue';
  export default {
   name: 'app',
   data(){
     return {
       show:false
     }
   }
  };
  </script>
  <style lang="css" scoped>
    *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    }

 .active1{
   border-bottom: 3px solid #b1b1b1;
 }

 body{
 font-family: 'Poppins', sans-serif;

 }
 header{
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 90%;
 height: 10vh;
 margin: auto;
 }
 nav{
 flex: 2;
 }
 .logo-title{
 display: flex;

 flex: 1;
 font-weight: 400;
 }

 .right-logo{
 flex: 1;
 justify-self: flex-end;

 }
 nav ul {
 list-style: none;
 display: flex;
 justify-content: space-between;
 align-items: center;
 }

 nav li{
 margin: 0 2em ;
 }
 nav a{
 text-decoration: none;
 color: #707070;
 font-weight: 700;
 padding: .25em 0
 }
 .routerClass{
 text-decoration: none;
 color: #707070;
 font-weight: 700;
 padding: .25em 0
 }
 .title{
 margin: 5px;
 }
hr{
  width:100vw;
}

 </style>
