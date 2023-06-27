<template>
  <footer class="footer">
    <div class="container">

      <div class="col col_first">
        <a href="/" class="logo">
          <img :src="content.logo" alt="LOGO">
        </a>

      <SocialMolecule class-name="footer-socials" />
      </div>

      <div class="col col_second">
        <h3 class="heading">
          Информация
        </h3>

        <nav class="nav">
          <ul class="nav-list">

            <MenuItemAtom
                v-for="item in content.menu_one"
                :key="item.link"
                :link="item.link"
                :children="item.name"
            />

          </ul>
        </nav>
      </div>

      <div class="col col_third">
        <h3 class="heading">
          Помощь
        </h3>

        <nav class="nav">
          <ul class="nav-list">

            <MenuItemAtom
                v-for="item in content.menu_two"
                :key="item.link"
                :link="item.link"
                :children="item.name"
            />

          </ul>
        </nav>
      </div>

      <div class="sticker">
        <img :src="content.sticker" alt="Стикер">
      </div>

    </div>
  </footer>
</template>

<script>
import SocialMolecule from "@/molecules/SocialMolecule";
import MenuItemAtom from "@/atoms/MenuItemAtom";
import footer from "@/constants/footer";

export default {
  name: "FooterComponent",
  data() {
    return {
      content: footer
    }
  },
  components: {
    SocialMolecule,
    MenuItemAtom
  }
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 3px solid var(--violet);

  @include laptop {
    overflow: hidden;
  }

  .container {
    position: relative;
    display: flex;
    gap: 130px;
    padding: 30px 0 40px;

    @include tablet {
      gap: 0;
      justify-content: space-between;
    }

    @include mobile {
      gap: 25px;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 30px 20px 40px;
    }

    @include fullMobile {
      flex-direction: column;
      padding: 80px 20px 22px;
    }
  }
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @include mobile {
    position: relative;
    z-index: 1;
    width: max-content;
  }
}

.col_first {
  margin-right: 81px;

  @include tablet {
    margin-right: 0;
  }

  @include mobile {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  @include fullMobile {
    position: static;
    order: 2;
  }

  .socials {
    position: relative;
  }
}

.col_second {
  @include fullMobile {
    order: 0;
  }
}

.col_third {
  @include fullMobile {
    order: 1;
  }
}

.logo {
  width: 160px;
  height: 59px;

  @include mobile {
    width: 108px;
    height: 40px;
  }

  @include fullMobile {
    position: absolute;
    top: 15px;
    left: 20px;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.heading {
  font-size: 24px;
  font-weight: 600;
  color: var(--violet);
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    a {
      color: #242424;
    }
  }
}

.sticker {
  position: absolute;
  top: 17px;
  right: -65px;
  width: 190px;
  height: 250px;
  //background: #fff url("@/assets/img/footer-sticker.png") center / contain no-repeat;

  @include tablet {
    display: none;
  }

  @include mobile {
    display: block;
    top: auto;
    bottom: 0;
    right: 0;
  }

  @include fullMobile {
    top: auto;
    bottom: 68px;
    right: 3px;
  }
}

</style>
