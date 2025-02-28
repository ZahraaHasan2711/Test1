<template>
        <div class="row">
            <div class="col chat-headerBox">
                <div class="card chat-header">
                    <div class="breadcrumb">
                        <div class="title-left">
                          <h4>Chat</h4>
                        </div>
                        <div class="right-btnn">
                          <button class="btnn">
                            <i class="bi bi-house"></i>
                          </button> /  
                          <button class="btnn"><span class="active">Chat</span></button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
</template>
  
<script>
export default {
    name: "chatHeader"
};
</script>
  
<style scoped>
.chat-headerBox {
    margin:2px ; padding: 1px;
}
.chat-header {
    display:flex; 
    background: #f4f5f7;
    width: 100%; height: 50px;
    border: none; border-radius: 10px;
    box-shadow: 0 2px 5px #0000001a;
}
.breadcrumb{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}
.breadcrumb span {
    margin: 0 5px;
}
.title-left {
   float: left;
   font-size: 16px;
   color: #333;
   margin: 5px 20px;
}
.right-btnn {
    float: right;
    margin: 0 20px;
    align-items: center;
}
.btnn {
    background: none;
    border: none;
} 
.btnn i {
    margin-right: 5px;
    font-size: 20px;
    padding: 0 5px;
} 
.btnn i:hover {
    background-color:#8691c2;
    color: #fff;
    cursor: pointer;
    border-radius: 70%;
}
.active {
    color: #6a5acd;
    background: #6a5acd33;
    padding: 2px 5px;
    margin-left: 5px;
    border-radius: 8px;
    font-weight: bold;
}
.active:hover{
    background-color:#5038ec33;
    color:#9282ff;
}
</style>
  