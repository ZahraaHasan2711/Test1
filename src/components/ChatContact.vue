<template>
    <div class=" container chat-contacts">
      <!-- User Profile -->
      <div class="user-profile">
        <img src="@/assets/ClipedAvatar.png" class="avatar" />
        <div class="user-info">
          <h4>Mathew Anderson</h4>
          <p>Marketing Director</p>
          <button class="dots">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
        </div>
      </div>
  
      <!-- Search Bar -->
      <div class="search-container">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search contacts" v-model="searchQuery" class="search-input" />
      </div>
  
      <!-- Chat contacts -->
      <div class="recent-chats">
        <span>Recent Chats</span>
      </div>
          
      <!-- Contacts List -->
      <div class="contacts-list">
        <li v-for="contact in filteredContacts" :key="contact.id" class="contact">
          <img :src="contact.avatar" class="contact-avatar" />
          <div class="contact-info">
            <h4>{{ contact.name }}</h4>
            <p>{{ contact.lastMessage }}</p>
          </div>
          <span class="time">{{ contact.time }}</span>
        </li>
      </div>
    </div>
</template>
  
<script>
export default {
    name: "ChatContacts",
    data() {
      return {
        searchQuery: "",
        contacts: [
          {
            id: 1,
            link:'/Ali Al-Ali',
            name: "Ali Al-Ali",
            avatar:require('@/assets/Ali.png'),
            lastMessage: "You: Yesterday was great...",
            time: "15 min",
          },
          {
            id: 2,
            link:'/Nada Al-Aseel' ,
            name:"Nada Al-Aseel",
            avatar:require("@/assets/Nada.png"),
            lastMessage: "Nice looking dress you...",
            time: "30 min",
          },
          {
            id: 3,
            link:"/Khalid Al-Khalid" ,
            name: "Khalid Al-Khalid",
            avatar:require("@/assets/Khalid.png"),
            lastMessage: "Sent a photo",
            time: "2 hours",
          },
          {
            id: 4,
            link:'/Narjes Al-Jamil',
            name: "Narjes Al-Jamil",
            avatar: require("@/assets/Narjes.png"),
            lastMessage: "Lorem ipsum text sud...",
            time: "5 days",
          },
          {
            id: 5,
            link:'/Hamed Al-Hamed',
            name: "Hamed Al-Hamed",
            avatar: require("@/assets/Hamed.png"),
            lastMessage: "Lorem ipsum text sud...",
            time: "5 days",
          }
        ],
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
};
</script>
  
<style scoped>
.chat-contacts {
  width: 250px; height: 110vh;
  background: #ffffff;
  padding: 0 10px;
  margin: 0 10px;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
}
  
.user-profile {
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 5px 0;
}
.user-profile i {
  justify-content: right;
}
  
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
  
.user-info h4 {
  margin: 0;
  font-size: 15px;
}
  
.user-info p {
  margin: 0;
  color: gray;
  font-size: 13px;   
}
 
.options-icon {
  cursor: pointer;
}
  
.search-container {
  display: flex;
  align-items: center;
  background: #f1f3f5;
  padding: 0 10px;
  border-radius: 8px;
  margin: 15px 0;
}
  
.search-icon {
  color: #999;
}
  
.search-input {
  border: none;
  outline: none;
  background: transparent;
  margin-left: 10px;
  flex-grow: 1;
}
  
.recent-chats {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color:#999;
}
  
.contacts-list {
  margin-top: 10px;
  overflow: auto;
}
  
.contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}
  
.contact-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
  
.contact-info {
    flex-grow: 1;
    margin-left: 10px;
}
  
.contact-info h4 {
    margin: 0;
    font-size: 14px;
}
  
.contact-info p {
    margin: 0;
    font-size: 12px;
    color: gray;
}
.dots {
  position: absolute;
  left:440px;
  top: 150px;
  background: none;
  border: none;
}  
.dot:hover{
  background-color: #aab3dfa6;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  padding:7 7px;
}
.time {
    font-size: 12px;
    color: gray;
}
</style>
  