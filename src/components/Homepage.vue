<template>
  <div>
    <HomeBar></HomeBar>
    <Alert></Alert>
    <div class="container-fluid ">
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-8 ml-auto mr-auto">
            <CustomerOrders></CustomerOrders>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Alert from "./AlertMessage";
import HomeBar from "./HomeBar";
import CustomerOrders from "./pages/CustomerOrders";


export default {
  components: {
    Sidebar,
    Navbar,
    Alert,
    HomeBar,
    CustomerOrders,
    
    
  }
};
</script>