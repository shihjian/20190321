<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
         
        </ul>

        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"><i class="fas fa-th"></i><span class="ml-2">產品列表</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders"><i class="fas fa-toolbox"></i><span class="ml-2">訂單列表</span></router-link>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>
