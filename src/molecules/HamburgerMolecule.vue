<template>
  <div class="hamburger">
    <div class="hamburger-wrap">
      <div class="hamburger-ico line-1"></div>
      <div class="hamburger-ico line-2"></div>
      <div class="hamburger-ico line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMolecule"
}
</script>

<style scoped lang="scss">
.hamburger {
  display: none;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @include tablet {
    display: flex;
  }

  &.open {
    .hamburger-wrap {
      position: relative;
      //width: 22px;
      //height: 22px;
    }

    .hamburger-ico {
      position: absolute;
      top: 45%;
      width: 18px;

      &.line-1 {
        transform: rotate(45deg);
      }

      &.line-2 {
        transform: rotate(0);
        opacity: 0;
      }

      &.line-3 {
        transform: rotate(-45deg);
      }

    }
  }
}

.hamburger-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 16.67px;
}

.hamburger-ico {
  position: relative;
  width: 26px;
  height: 2px;
  background-color: var(--green);
  transform: rotate(180deg);
  transition: transform .3s ease-in-out;


  &::after, &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 4px;
    height: 2px;
    background-color: var(--green);
    border-radius: 40%;
  }

  &::before {
    left: -2px;
  }

  &::after {
    right: -2px;
  }
}

</style>
