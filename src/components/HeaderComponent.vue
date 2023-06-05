<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <img :src="header.logo" alt="LOGO">
      </a>

      <div class="scroll-wrapper show">
        <div class="scroll-container">
          <div class="scrolling-content">

            <nav class="nav">
              <ul class="nav-list">
                <MenuItemAtom
                    v-for="item in header.menu"
                    :key="item.link"
                    :link="item.link"
                    :children="item.name"
                />
              </ul>
            </nav>

            <div class="btn-wrap">
              <a href="#" class="btn auth-btn">
                {{ header.btnAuth }}
              </a>

              <a href="#" class="btn registration-btn">
                {{ header.btnRegistr }}
              </a>
            </div>

            <SocialMolecule class-name="socials"/>

          </div>
        </div>
      </div>

      <HamburgerMolecule />
    </div>
  </header>
</template>

<script>

import SocialMolecule from "@/molecules/SocialMolecule";
import HamburgerMolecule from "@/molecules/HamburgerMolecule";
import MenuItemAtom from "@/atoms/MenuItemAtom";
import header from "@/constants/header";

export default {
  name: "HeaderComponent",
  data() {
    return {
      header,
    };
  },
  components: {SocialMolecule, HamburgerMolecule, MenuItemAtom}
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: max-content;
  padding: 10px 0 13px;

  @include tablet {
    padding: 4px 0;
  }
}

.container {
  display: flex;
  align-items: center;

  @include tablet {
    justify-content: space-between;
  }
}

.logo {
  width: 160px;
  height: 59px;

  @include tablet {
    width: 108px;
    height: 40px;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.scroll-wrapper {
  margin-left: auto;

  @include tablet {
    position: absolute;
    top: 48px;
    left: calc((100vw - var(--container)) / -2);
    z-index: 2;
    width: 100vw;
    height: calc(100vh - 48px);
    padding: 55px calc((100vw - var(--container)) / 2 + 20px) 40px;
    background-color: #fff;
    transform: scale(0);
    opacity: 0;
    transition: opacity .3s ease-in-out;

    &.show {
      transform: scale(1);
      opacity: 1;
    }
  }
}

.scrolling-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .socials {
    display: none;

    @include tablet {
      display: flex;
    }
  }

  @include tablet {
    flex-direction: column;
    height: calc(100vh - 143px);
  }
}

.nav {
  margin-right: 111px;

  @include tablet {
    margin-right: 0;
  }
}

.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @include tablet {
    flex-direction: column;
    gap: 30px;
  }

  li {
    a {

    }
  }
}

.btn-wrap {
  display: flex;
  gap: 20px;

  @include tablet {
    display: flex;
    flex-direction: column;
    margin: auto 0 50px;
  }
}

.btn {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  font-weight: 500;
  border-radius: 20px;
  transition: color .3s ease-in-out, border-color .3s ease-in-out, background-color .3s ease-in-out;

  @include tablet {
    width: 180px !important;
  }

  &.auth-btn {
    width: 103px;
    color: #242424;
    background-color: transparent;
    border: 2px solid var(--violet);

    &:hover, &:focus-visible {
      border-color: var(--green);
    }
  }

  &.registration-btn {
    width: 167px;
    color: #fff;
    background-color: var(--violet);
    border: 2px solid var(--violet);

    &:hover, &:focus-visible {
      background-color: var(--green);
      border-color: var(--green);
    }
  }
}


</style>
