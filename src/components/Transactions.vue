<template lang="html">
  <div class="notify" id="notifyDiv"> <strong id="#msg">{{msg}}</strong></div>
<div class="inputDiv">
  <label for="dateStart"> starting date</label>
  <input type="date" v-model="dateStart" name="dateStart" >

  <label for="dateEnd"> ending date</label>
  <input type="date" v-model="dateEnd" name="dateEnd"  >
<input type="button"  @click="search" value="search" >
</div>


  <ul >
    <li v-for="item in listPayments" :key="item.id"> <span class="numberId colorInvoice"><strong> id:</strong> {{item.id}} </span> <strong>method </strong>: {{item.method}} - <strong> value </strong>: {{item.value}} - <strong>dateCreated</strong> : {{item.dateCreated}}</li>
    <li v-for="item in listinvoice" :key="item.id"> <span class="numberId colorPayment"><strong> id:</strong> {{item.id}} </span> <strong>status </strong>: {{item.status}} - <strong> value </strong>: {{item.value}}-<strong> value </strong>: {{item.value}} - <strong>number</strong> : {{item.number}} - <strong>dateCreated</strong> : {{item.dateCreated}}</li>

  </ul>
</template>

<script>
export default {

  data(){
    return{
      dateEnd:"",
      dateStart:"",
      listPayments:"",
      listinvoice:"",
      msg:""


    }
  },
  methods:{
    alertMessage(message){
      this.msg=message;
      let notifyDiv = document.getElementById('notifyDiv');
      notifyDiv.classList.add("active");
      setTimeout(function(){
         notifyDiv.classList.remove("active");
      },2500)
    },
    async search(){
      if(!this.dateEnd || !this.dateStart ){
        // alert("please fill out dates " )
        this.alertMessage("please Add dates !!")
        return;
      }
      if( this.dateEnd < this.dateStart){
        this.alertMessage(this.dateEnd+"date is greater than"+this.dateEnd+" !!")
        return;
      }
        console.log(this.dateEnd);
      //console.log("http://localhost:8080/payments/between"?dateStart"+this.dateStart+"&dateEnd="+this.dateStart");
      //  const { data } = await this.axios.get("http://localhost:8080/payments/between?dateStart"+
      // this.dateStart+"&dateEnd="+this.dateStart
      //      );

    //  const  {data}  = await this.axios.get("http://localhost:8080/payments/findall");
    //  const { datainvoice } = await this.axios.get("http://localhost:8080/invoicesfindall");
      try{
          const  data1  = await this.axios.post("http://localhost:8080/payments/between",{"dateStart":this.dateStart,"dateEnd":this.dateEnd });
           this.listPayments=data1.data
           const  data2  = await this.axios.post("http://localhost:8080/invoices/between",{"dateStart":this.dateStart,"dateEnd":this.dateEnd });
           this.listinvoice=data2.data
           console.log( this.listPayments[3]);
         }catch(e)
         {
           console.error(e)
         }
    }



  },
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  margin: 2rem 12%;

}
li {
  margin: 0.8rem;
}
.numberId {
  width: 2.6rem;
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

.notify{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:10vh;
  width:100vw;
  height:0px;
  box-sizing:border-box;
  color:white;
  text-align:center;
  background:rgba(0,0,0,.6);
  box-sizing:border-box;
  z-index: 1;
   transition:height .5s;
}



.active{
  height:50px;
}

input {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=button]{
  margin-left:2rem;

}

input[type=button]:hover {
  background-color: #4CAF50;
}
.inputDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}
label{
  margin-left: 4rem;
  margin-right: 1rem;
}


body {
  font-family: 'PT Serif', serif;
}
</style>
