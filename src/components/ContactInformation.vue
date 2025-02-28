<template>
  <!-- **********Contact Info******** -->
  <div class="contact-info">
    <img src="@/assets/Ali.png" width="40" height="45" />
    <span class="ms-3">Ali (Away)</span>
    <div class="right-side">
      <button class="btn-menu" @click="openModal('block')">
        <i class="bi bi-ban text-primary"></i>
       </button>
        <button class="btn-menu" @click="openModal('delete')">
          <i class="bi bi-trash3 text-danger"></i>
        </button>
        <div>
          <button class="btn-menu">
            <i class="bi bi-telephone"></i>
          </button>
          <button class="btn-menu">
            <i class="bi bi-camera-video"></i>
          </button>
          <button class="btn-menu">
            <i class="bi bi-list"></i>
          </button>
        </div>
    </div>
    <!-- Delete Conversation Modal -->
    <div v-if="modalType === 'delete'" class="modal">
      <div class="modal-content">
        <i class="bi bi-trash3"></i>
        <h3>Delete Conversation</h3>
        <p>Once you delete this conversation, you will not be able to undo this action.</p>
        <div class="modal-buttons">
          <button class="btn cancel" @click="closeModal">Cancel</button>
          <button class="btn confirm">Yes</button>
        </div>
      </div>
    </div>
    <!-- Block User Modal -->
    <div v-if="modalType === 'block'" class="modal">
      <div class="modal-content">
        <i class="bi bi-ban"></i>
        <h3>Block User</h3>
        <p>You are going to block this user, are you sure?</p>
        <div class="modal-buttons">
          <button class="btn cancel" @click="closeModal">Cancel</button>
          <button class="btn confirm">Yes</button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: "ContactInformation",
  data() {
    return {
      modalType: null
    };
  },
  methods: {
    openModal(type) {
      this.modalType = type;
    },
    closeModal() {
      this.modalType = null;
    }
  }
};
</script>

<style scoped>
.contact-info {
  width: 100%; height: 5%;
  display: inline;
  align-items: center;
}
.right-side {
  display: flex;
  float: right;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
}
.btn-menu {
  background: none; border: none;
  font-size: 17px;
  cursor: pointer;
}
.btn-menu:hover{
  background-color: #c0c9eba9;
  color: #ffffff;
  border-radius: 20px;
} 
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.btn {
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.btn.cancel {
  background-color: grey;
  color: white;
}

.btn.confirm {
  background-color: blue;
  color: white;
}
</style>