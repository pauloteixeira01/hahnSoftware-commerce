<template>
  <footer class="containerFooter">
    <h3>PapaSand's</h3>
    <p>Developed by</p>
    <div class="developedBy">
      Paulo Teixeira
      <div class="containerImgsSocialMedia">
        <a href="https://github.com/pauloteixeira01" target="_blank">
          <img src="../assets/img/github.png" alt="GitHub" class="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/paulo-teixeira-developer/"
          target="_blank"
        >
          <img
            src="../assets/img/linkedin.png"
            alt="Linkedin"
            class="linkedin"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.containerFooter {
  position: relative;
  padding: 2%;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.developedBy {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
}
.containerImgsSocialMedia {
  display: flex;
  justify-content: space-around;
  width: 20%;
  margin-left: 2%;
}
.linkedin {
  width: 80%;
}
.github {
  width: 80%;
}

@media screen and (max-width: 600px) {
  .developedBy {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  .linkedin {
    width: 100%;
    margin-left: 5%;
  }
  .github {
    width: 100%;
  }
}
</style>
