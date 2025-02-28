<template>
  <div class="sidebar">
    <h2 class="section-title">Media <span>(36)</span></h2>
    <div class="media-grid">
      <div v-for="(src, index) in mediaItems" :key="index" class="media-item">
        <img :src="src" alt="media item" />
      </div>
    </div>
    <h2 class="section-title">Files <span>(36)</span></h2>
    <div class="file-list">
      <div v-for="(file, index) in fileItems" :key="index" class="file-item">
        <img :src="file.icon" width="30px" height="30px" class="me-3" />
        <div class="file-details">
          <p class="file-name">{{ file.name }}</p>
          <p class="file-info">{{ file.size }} • {{ file.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaItems: [
        require('@/assets/cottoncandy.jpeg'),
        require('@/assets/juice (1).jpeg'),
        require('@/assets/tele.jpeg'),
        require('@/assets/RadioStation.jpeg'),
        require('@/assets/cottoncandy.jpeg'),
        require('@/assets/juice (1).jpeg')
      ],
      fileItems: [
        { name: "service-task.pdf", size: "2 MB", date: "2 Dec 2022", icon:require('@/assets/service.png') },
        { name: "homepage-design.fig", size: "2 MB", date: "2 Dec 2022", icon: require('@/assets/figma.png') },
        { name: "about-us.html", size: "2 MB", date: "2 Dec 2022", icon: require('@/assets/chrom.png') },
        { name: "work-project.zip", size: "2 MB", date: "2 Dec 2022", icon: require('@/assets/ZIP.png') },
        { name: "custom.js", size: "2 MB", date: "2 Dec 2022", icon: require('@/assets/JS.png') }
      ]
    };
  },
  methods: {
    getFileIcon(type) {
        const icons = {
            pdf: "@/path/to/pdf-icon.png",
            figma: "@/path/to/figma-icon.png",
            html: "@/path/to/html-icon.png",
            zip: "@/path/to/zip-icon.png",
            js: "@/path/to/js-icon.png"
        };
        return icons[type] || "/path/to/default-icon.png";
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 50%; height: 83vh;
  background: white;
  margin: 10px 5px;
}
.section-title {
  font-size: 16px;
  margin: 12px 0;
}
.section-title span {
  color: #777;
  font-size: 13px;
}
.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px 0;
  gap: 5px;
}
.media-item img {
  width: 50px; height: 50px;
  object-fit: cover;
  border-radius: 8px;
}
.file-list {
  height: auto;
  overflow-y: auto;
}
.file-item {
  display: flex;
  align-items: center;
  margin: 1px;
}
.file-details {
  display: flex;
  flex-direction: column;
  margin-top:5%;
  
}
.file-name {
  font-size: 12px;
  font-weight: bold;
}
.file-info {
  font-size: 10px;
  color: #777;
}
</style>
