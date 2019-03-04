<template>
    <div class="oneDataSource">
        <div class="row">
            <div class="col-md-4">
                <ul>
                    <li><img :src="datasource.img"></li>
                    <li>{{datasource.accountName}}</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li v-if="!datasource.disabled" class="accNumber">{{datasource.accounts.length }}</li>
                    <font-awesome-icon icon="clock" v-if="datasource.disabled" />
                    <li v-if="!datasource.disabled">Accounts Connected</li>
                    <li v-if="datasource.disabled">coming soon</li>
                </ul>
            </div>
            <div class="col-md-4" v-if="!datasource.disabled">
                <ul>
                    <li>
                        <button type="button" class="btn btn-outline-green" @click="toggleAcc()">
                            <font-awesome-icon icon="eye" v-if="!datasource.showAccounts" />
                            <span v-if="!datasource.showAccounts">view</span>
                            <font-awesome-icon icon="eye-slash" v-if="datasource.showAccounts" />
                            <span v-if="datasource.showAccounts">Hide</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" class="btn btn-main ">
                            <font-awesome-icon icon="plus" />
                            <span>connect account</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <Accounts :accounts="datasource.accounts" :isShown="datasource.showAccounts" v-if="datasource.showAccounts"/>
    </div>
</template >
<script>
    import Accounts from "./Accounts.vue";
export default {
    props:{
        datasource:{
            type:Object,
            required:true
        }
    },
    components:{
        Accounts:Accounts
    },
    methods:{
         toggleAcc(){
            this.datasource.showAccounts = !this.datasource.showAccounts;
        },
    }
}
</script>
