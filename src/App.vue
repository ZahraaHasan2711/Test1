<script>
import SideMenu from './components/SideMenu.vue';
import NavBar from './components/NavBar.vue';
import ChatHeader from './components/ChatHeader.vue';
import ChatContact from './components/ChatContact.vue';
import ChatMassage from './components/ChatMassage.vue';
import ContactInformation from './components/ContactInformation.vue';

export default {
  components: {
    SideMenu,
    NavBar,
    ChatHeader,
    ChatContact,
    ChatMassage, 
    ContactInformation
  },
  data() {
    return {
      showBlockModal: false,
      showDeleteModal: false
    };
  },
  methods: {
    blockUser() {
      this.showBlockModal = false;
    },
    deleteConversation() {
      this.showDeleteModal = false;
    }
  }
}
</script>

<template>
  <div class="sideMenu">
    <side-menu />
    <nav-bar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  <div class="chat-page">
    <chat-header class="headerchat" />
    <div class="chat-box">
      <div class="column1">
        <chat-contact />
      </div>
      <div class="column2">
        <div class="Con-information">
          <contact-information/>
        </div>
        <chat-massage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sideMenu {
  display: flex;
  flex-direction: column;
}
.content {
  padding: 5px;
  flex-grow: 1;
}
.chat-page {
  display: flex;
  flex-direction: column;
  height:130vh;
  margin-top: 20px;
  background: #e7e8e9; 
}
.headerchat{
  margin-left: 18%;
  width: 81%;
}
.chat-box{
  display: flex;
  flex: 1;
  margin-left:18%;
  width: 80%;
}
.column1 {
  flex: 1;
  max-width: 265px;
  height: 100%;
  padding:10px 0;
}
.column2 {
  flex: 2;
  height: 100%;
  max-width: 750px;
  padding: 1px 0;
  margin-top: 10px ;
}
.Con-information {
  background: #ffffff;
  border-bottom:0.5px solid #bebebe;
}
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: #81808075;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: auto;
}

.modal {
  background: white;
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px #0000001a;
  z-index: 90000;
}

.icon {
  font-size: 40px;
  color: #6a5acd;
  z-index: 90000;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  z-index: 90000;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  z-index: 90000;
}

.cancel {
  background: gray;
  color: white;
  z-index: 90000;
}

.confirm {
  background: #6a5acd;
  color: white;
  z-index: 90000;
}
</style>