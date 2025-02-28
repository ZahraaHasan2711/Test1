<template>
  <div class="chat-container">
    <div class="chat-box">

      <!--CHat Massage-->
      <div class="msg-container">
        <div>
          <div v-for="(msg, index) in messages" :key="index" class="Chat-content" :class="{'flex-row-reverse': msg.isUser}">
            <img :src="msg.avatar" width="30px" height="32px" class="rounded-full">
            <div class="Massage-fix">
              <span class="msg-time">{{ msg.name }} . {{ msg.time }}</span>
              <div :class="msg.isUser ? 'greenMassage' : 'grayMassage'">
                <p v-if="msg.text" class="msg-text">{{ msg.text }}</p>
                <img v-if="msg.image" :src="msg.image" width="120" height="110">
              </div>
            </div>
          </div>
        </div>
        <!-- Input Box -->
        <div class="massage-input">
          <button class="input-icons">
            <i class="bi bi-emoji-smile"></i>
          </button>
          <input
            type="text"
            v-model="newMessage"
            placeholder="Type a message"
            class="w-50 border border-white focus:outline-none"
          />
          <button @click="sendMessage" class="input-icons">
            <i class="bi bi-send"></i>
          </button>
          <div>
            <button class="input-icons">
              <i class="bi bi-image"></i>
            </button>
            <button class="input-icons">
              <i class="bi bi-paperclip"></i>
            </button>
            <button class="input-icons">
              <i class="bi bi-mic"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Sidebar (Media Files) -->
      <div class="col sidebar-container ">
        <media-files v-if="showSidebar" class="sidebar"/>
      </div>
    </div>
  </div>
</template>

<script>
import MediaFiles from './MediaFiles.vue';

export default {
  components: {
    MediaFiles,
  },
  data() {
    return {
      showSidebar: true, /*adjurt it to be false to be hidden*/
      messages: [
        { name: "Khalid", time: "2 hours ago", text: "If I don't like something, I'll stay away from it.", avatar: require("@/assets/Khalid.png") },
        { name: "You", time: "2 hours ago", text: "If I don't like something, I'll stay away from it.", avatar: require("@/assets/Ali.png"), isUser: true },
        { name: "Khalid", time: "2 hours ago", text: "I want more detailed information.", avatar: require("@/assets/Khalid.png") },
        { name: "You", time: "2 hours ago", text: "If I don't like something, I'll stay away from it.", avatar: require("@/assets/Ali.png"), isUser: true },
        { name: "You", time: "2 hours ago", text: "They got there early, and they got really good seats.", avatar: require("@/assets/Ali.png") ,isUser: true },
        { name: "Khalid", time: "2 hours ago", image: require("@/assets/Candy.png") , avatar: require("@/assets/Khalid.png") },
      ],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({
          name: "You",
          time: "Just now",
          text: this.newMessage,
          isUser: true,
        });
        this.newMessage = "";
      }
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  } 
};
</script>

<style scoped>
.chat-container {
  display:flex;
  width: 100%;
  height: 102vh;
}
.chat-box {
  flex: 2;
  display: flex;
  flex-direction: row;
  background-color:#ffffff;
  padding: 0 5px;
}
.msg-container {
  width: 60%;
  overflow-y: auto;
  margin-bottom: 10px;
}
.Chat-content {
  display: flex;
  align-items: center;
  margin-bottom: 1%;
}
.msg-time {
  font-size: 9px;
  color: #6e6c6c;
}
.greenMassage {
  background-color: #d6f0f8;
  border-radius: 5px;
  padding: 0 5px;
}
.grayMassage {
  background-color: #f4f4f4af;
  border-radius: 5px;
  padding: 0 5px;
}
.massage-input {
  display: flex;
  align-items: center;
  padding: 0;
  border-top: 1px solid #ddd;
  position: sticky;
}
.input-icons {
  background: none; border: none;
  font-size: 15px;
  cursor: pointer;
}
.sidebar-container {
  flex:1;
  display: flex;
  flex-direction: column;
}
.sidebar {
  width: 100%;  height: 100;
  display: block !important;
  background: white;
  border-left: 1px solid #ddd;
  overflow-y: auto;
  padding: 10px;
}  
</style>
