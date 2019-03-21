<template>
    <div>
        <AlertMessage></AlertMessage>
        <div class="bg-light pb-5">
            <div class="container">
                <nav aria-label="breadcrumb" class="pt-4">
                    <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                        <li class="breadcrumb-item"><a href="#" >{{ text }}</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ item.title }}</li>
                    </ol>
                </nav>

                <div class="row">
                    <div class="col-md-6">
                        <img class="w-100" :src="item.imageUrl" alt="">                    
                    </div>
                    <div class="col-md-6">
                        <h3 class="h3">{{ item.title }}</h3>
                        <p>{{ item.content }}</p>
                        <div class="border border-primary  p-4 mt-4">
                            <div class="h5 text-secondary" v-if="!item.price">NT$ {{ item.origin_price }}</div>
                            <del class="h6 text-secondary" v-if="item.price">NT$ {{ item.origin_price }}</del>
                            <div class="h4" v-if="item.price">NT$ {{ item.price }}</div>
                            <div class="text-dark mt-4">
                                <i class="mr-2 far fa-clock"></i>
                                24小時內確認訂單
                            </div>
                            <div class="text-dark mt-2">
                                <i class="mr-2 far fa-smile-wink"></i>
                                價格保證優惠
                            </div>
                            <div class="d-flex justify-content-end mt-3">
                                <div class="mr-3 d-flex align-items-center">
                                    小計 <strong>{{ itemNum * item.price }}</strong> 元                                    
                                </div>
                                <button type="button" class="btn btn-primary btn-sm">
                                    <i class="fas fa-spinner fa-spin" ></i>
                                    加到購物車
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      getItem:'',
      product:{},
      pagination:{},
      isLoading:false,
    };
  },
  methods: {
      getItem(){
        const vm = this;    
        const url = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/product/${vm.getItem}`;     
        vm.isLoading=true;
        this.$http.get(url).then((response) => {    
        vm.product=response.data.product;
        console.log(response); 
        vm.isLoading=false;
            });    
      },

    },
      created() {
        this.getItem();
  },
};
</script>
