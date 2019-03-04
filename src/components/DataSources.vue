<template>
	<div class="contentSection">
		<div class="dataSources">

            <!-- <div class="oneDataSource" v-for="(datasource,index) in dataSources" :class="{active:datasource.showAccounts, disabled:datasource.disabled}" >
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
                                <button type="button" class="btn btn-outline-green" @click="toggleAcc(index)">
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
                <ul class="accounts" v-if="!datasource.disabled">
                    <li v-for="(account,i) in datasource.accounts">
                        <span>{{ account }}</span>
                        <font-awesome-icon icon="pencil-alt" />
                        <font-awesome-icon icon="trash-alt" @click="removeAcc(index,i)" />
                    </li>
                </ul>              
            </div> -->
        <DataSource v-for="dataSource in dataSources" :datasource="dataSource" />
        </div>
    </div>
</template>


<script>
import DataSource from "./DataSource.vue";
export default {
    components:{
        DataSource:DataSource
    },
    data:function(){
        return{
            dataSources:[
                {
                    accountName:"Google Analytics",
                    img:"images/data-google.png",
                    disabled:false,
                    showAccounts:false,
                    accounts:["accountOne@gmail.com","accountTwo@gmail.com","accountThree@gmail.com", "accountFour@gmail.com"]
                },
                {
                    accountName:"Google Ads",
                    img:"images/google-ads.png",
                    disabled:false,
                    showAccounts:true,
                    accounts:["accountOne@gmail.com","accountTwo@gmail.com","accountThree@gmail.com", "accountFour@gmail.com"]
                },
                {
                    accountName:"FaceBook Ads",
                    img:"images/fb.png",
                    disabled:false,
                    showAccounts:false,
                    accounts:["accountOne@gmail.com","accountTwo@gmail.com","accountThree@gmail.com", "accountFour@gmail.com"]
                },
                {
                    accountName:"FaceBook Insights",
                    img:"images/fb-insight.png",
                    disabled:false,
                    showAccounts:false,
                    accounts:["accountOne@gmail.com","accountTwo@gmail.com","accountThree@gmail.com", "accountFour@gmail.com"]
                },
                {
                    accountName:"FaceBook insights",
                    img:"images/fb-insight-2.png",
                    disabled:true,
                    showAccounts:false,
                    accounts:["accountOne@gmail.com","accountTwo@gmail.com","accountThree@gmail.com", "accountFour@gmail.com"]
                }
            ]
        }
    },
    methods:{
        toggleAcc(i){
            this.dataSources[i].showAccounts = !this.dataSources[i].showAccounts;
        }
        
    }
}
</script>
