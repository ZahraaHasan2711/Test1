<template>
    <nav class="navbar">
      <div class="nav-left">
        <button class="menu-btn" @click="$emit('toggleSidebar')">
            <i class="bi bi-search"></i>
        </button>
        <button class="menu-btn" @click="$emit('toggleSidebar')">
            <i class="bi bi-app-indicator"></i>
        </button>

      </div>
      
      <div class="nav-right">
        <button class="menu-btn" @click="$emit('toggleSidebar')">
            <i class="bi bi-moon"></i>
        </button>
        <button class="menu-btn" @click="$emit('toggleSidebar')">
            <i class="bi bi-bell"></i>
        </button>
        <button class="menu-btn" @click="$emit('toggleSidebar')">
            <i class="bi bi-translate"></i>
        </button>
        <div class="profile">
          <div class="dropdown">
            <button class="btn btn-sm border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="@/assets/ClipedAvatar.png" alt="User profile" />
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#">other</a></li>
                <li><a class="dropdown-item" href="#">other</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>
  
<script>
export default {
    emits: ['toggleSidebar']
};
</script>
  
<style scoped>
.navbar {
    height: 50px; width: 1000px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    position: relative;
    left: 200px;
    top: 0;
    z-index: 100;
}
  
.nav-left {
    display: flex;
    align-items:center;
    gap: 15px;
    padding:0 10px;
}
  
.menu-btn {
    background: none;
    border: none;
    font-size: 20px;
}
.menu-btn:hover{
    background-color: #8691c2;
    color: #fff;
    cursor: pointer;
    border-radius: 50%;
    padding:7 7px;
}
  
.nav-right {
    display: flex;
    align-items: center;
    gap: 5px;
}
  
.profile img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
}
.profile img:hover{
    background-color: #8691c2;
    border: none;
    
}
</style>
  