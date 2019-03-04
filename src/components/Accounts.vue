<template>
    <ul class="accounts" >
        <Account v-for="(account,i) in accounts" :account="account" :deleteAcc="removeAcc" :index="i"/>
    </ul>
</template>
<script>
import Account from "./Account.vue"
export default {
  components:{
      Account:Account
  },
    props:["accounts"],
    methods:{
        removeAcc(i){
             this.accounts.splice(i,1);
        }
    }
}
</script>
