<template lang="html">
  <h2></h2>
  <div class="container">
    <div class="tableHeader">
      <div class="headerItem  ">id</div>
      <div class="headerItem">status</div>
      <div class="headerItem">number</div>
      <div class="headerItem">Total</div>
    </div>
    <div v-for="item in listinvoice" class="tableContent " :key="item.id">
      <div class="tableData ">{{item[0]}}</div>
      <div class="tableData"><i>PAID</i></div>
      <div class="tableData">{{item[2]}}</div>
      <div class="tableData">{{item[3]}}</div>
  </div>
</div>
</template>

<script>
export default {

  data(){
    return{
      listinvoice:{}

    }
  },
  methods:{
    async loadData(){
      try{
          const  data  = await this.axios.get("http://localhost:8080/invoices/total");
           this.listinvoice=data.data.filter(invoice =>invoice[1]==1 )
           console.log( data.data);
           console.log(this.listinvoice);

         }catch(e){console.error(e)}
    },

},
  beforeMount(){
 this.loadData();
}
  // ,
  // watch:{
  //   // $route(to, from){
  //    $route(to){
  //     this.id=to.params.id
  //   }
  // }

}

</script>

<style lang="css" scoped>
ul {
  list-style: none;
}
li {
  margin: 0.8rem;
}
.numberId {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30%;
  display: inline-block;
  line-height: 2rem;
  color: white;
  text-align: center;
  margin-right: 0.5rem;
}

.colorInvoice{
  background: #00BFFF;

}

.colorPayment{
  background: #32CD32;

}

body {
  font-family: 'PT Serif', serif;
}


.container {
  margin: 2rem 15%;
	display:flex;
	justify-content:center;
	align-items:center;
  flex-direction:column;

}

.table{
	width:100%;
	border:1px solid #EEEEEE;
}
.tableContent{
  display:flex;
  justify-content:space-between;
  width: 100%;



}

.tableHeader {
	display:flex;
	width:100%;
	background:#FFF;
}

.tableRow {
	display:flex;
	width:100%;
}

.tableData, .headerItem {
	flex: 1 1 20%;
	text-align:center;
  margin-top: 1.2rem;
}

.headerItem {
	text-transform:uppercase;
}

</style>
