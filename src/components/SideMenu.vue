<template>
    <div class="sidebar">
      <div class="logo">
        <img src="@/assets/Cliped.png" width="90px" height="70px"/>
        <p class="fw-bold">HI TEAM</p>
      </div>
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.name" :class="{ active: item.active }">
          <router-link :to="item.link">
            <i :class="item.icon"></i> {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
</template>
  
<script>
export default {
    data() {
      return {
        menuItems: [
          { name: "Dashboard", link: "/dashboard", icon: "bi bi-house-door"},
          { name: "Orders", link: "/orders", icon: "bi bi-box" },
          { name: "Passengers", link: "/passengers", icon: "bi bi-people" },
          { name: "Captains", link: "/captains", icon: "bi bi-bus-front" },
          { name: "Categories", link: "/categories", icon: "bi bi-list" },
          { name: "Settlement", link: "/settlement", icon: "bi bi-wallet" },
          { name: "Contact", link: "/contact", icon: "bi bi-envelope" },
          { name: "Reviews", link: "/reviews", icon: "bi bi-star" },
          { name: "Premissions", link: "/premissions", icon: "bi bi-shield-check" },
          { name: "Translation", link: "/translation", icon: "bi bi-globe-europe-africa" },
          { name: "Education Video", link: "/education", icon: "bi bi-film" },
          { name: "Settings", link: "/settings", icon: "bi bi-gear" },
          { name: "Content", link: "/content", icon: "bi bi-body-text" }
        ],
      };
    },
};
</script>
  
<style scoped>
.sidebar {
    width:200px;
    height:590px;
    background-color: #ffffff;
    padding:0 10px;
    position:fixed;
    left:0;
    top:0;
} 
.logo {
    display:flex;
    align-items:center;
    gap:10px;
    padding-bottom:10px;
} 
.menu {
    list-style:none;
    padding:0;
    font-size: 14px;
} 
.menu li {
    padding:7px;
} 
.menu li a {
    text-decoration:none;
    color: #333;
    display:flex;
    align-items:center;
    gap:5px;
} 
.menu li a:hover {
    background-color: #8691c2;
    color:white;
    cursor:pointer;
    border-radius:5px;
    height: 25px;
    padding: 0 5px;
}
</style>
  