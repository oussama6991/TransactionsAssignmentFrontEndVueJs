<template>
  <div class="coverDiv">
    <h1>Transactions</h1>
    <h2>Make the right choices,With US</h2>
  </div>
  <div class="mainDiv">
    <particles-bg type="cobweb" :bg="false" />

  </div>


</template>

<script>
export default {
//   data : function (){ //should be a function
//    return {
//    status:"Critical"
//  }
// },
//  methods :{
//    changeStatus(){
//      this.status='Normal';
//    }
//  }
}
</script>

<style lang="css" scoped>
.mainDiv{
  width:100vw;
  height:89.8vh;
  background-image:url('https://images.myhelcim.com/img/pub/an-overview-of-credit-card-processing-transaction-types-154818033111.png');
  background-size: cover;
  opacity: .4;
}
.coverDiv{
  position: absolute;
  background: black;
  width:100vw;
  height:89.8vh;
  display:flex;
  align-items: center;
  color: white;
  flex-direction: column;
}
h1{
  margin-top: 8rem;
}

/*@keyframes slideh1 {
  100%{
    opacity: 1;
  }
}*/
h2{
border-right: .1em solid black;
width: 30rem;
margin: 2em 1em;
white-space: nowrap;
overflow: hidden;
-webkit-animation: typing 7s steps(21, end) ,
          blink-caret .5s step-end infinite alternate ;
}
@-webkit-keyframes typing { from { width: 0; } }
@-webkit-keyframes blink-caret { 50% { border-color: white; } }

#backanim{
  position: "absolute";
 z-index: -1;
top: 200px;
left:200px;
}
</style>
