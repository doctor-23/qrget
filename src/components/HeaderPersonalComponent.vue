<template>
  <div class="container">
    <a href="/" class="logo">
      <img :src="headerPersonal.logo" alt="LOGO">
    </a>

    <div class="user">
      <form action="#" id="header_user">
        <label class="form-row custom-photo">
          <input type="file" name="user_photo" class="input_photo">

          <span class="custom-photo__content">
              <img
                  src="@/assets/img/icons/user.svg"
                  alt="Пользователь"
                  v-if="userPhoto === null"
              >
              <img
                  :src="userPhoto"
                  alt="Пользователь"
                  v-if="userPhoto !== null"
              >

              <span class="custom-photo__ico">

                <SvgSpriteAtom
                    name="plus"
                    width="19"
                    height="19"
                />

              </span>

          </span>
        </label>

        <label class="form-row user-name-row">
          <span class="user-name empty-name">
              Введите имя
          </span>

          <span class="ico-pencil">

            <SvgSpriteAtom
                name="edit-pencil"
                width="26"
                height="26"
            />

          </span>
        </label>
      </form>
    </div>

    <HamburgerMolecule />
  </div>
</template>

<script>

import HamburgerMolecule from "@/molecules/HamburgerMolecule";
import SvgSpriteAtom from "@/atoms/SvgSpriteAtom";
import headerPersonal from "@/constants/headerPersonal";

export default {
  name: "HeaderPersonalComponent",
  data() {
    return {
      headerPersonal,
      userPhoto: headerPersonal.userPhoto
    }
  },
  components: { SvgSpriteAtom, HamburgerMolecule }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  padding-top: 14px;

  @include mobile {
    padding-top: 0;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.hamburger {
  display: none;

  @include mobile {
    order: 1;
    display: flex;
  }
}

.hamburger-ico {
  background-color: var(--violet);

  &::before, &::after {
    background-color: var(--violet);
  }
}

.logo {
  width: 180px;
  height: 67px;
  margin-right: 80px;

  @include mobile {
    order: 0;
    width: 108px;
    height: 40px;
    padding: 8px 0;
    margin-right: 0;
    box-sizing: unset;
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }
}

.user {
  padding: 7px 0;

  @include mobile {
    width: 100%;
    order: 2;
    padding: 4px 0;
  }
}

#header_user {
  display: flex;
  align-items: center;
  gap: 42px;

  @include mobile {
    gap: 14px;
  }

  .form-row {
    @include mobile {
      width: max-content;
    }
  }
}

.custom-photo__content {
  position: relative;
  display: block;
  width: 66px;
  height: 66px;
  cursor: pointer;

  @include mobile {
    width: 42px;
    height: 42px;
  }

  &:hover, &:focus-visible {
    .custom-photo__ico {
      background-color: var(--violet);
    }
  }

  img {
    width: 100%;
    height: max-content;
    object-fit: contain;
  }

  .custom-photo__ico {
    position: absolute;
    display: flex;
    right: -12px;
    bottom: -4px;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: var(--green);
    border-radius: 50%;
    transition: background-color .3s ease-in-out;

    @include mobile {
      right: -4px;
      bottom: -2.19px;
      width: 20px;
      height: 21px;
    }

    .svg-ico {
      color: #fff;

      @include mobile {
        width: 12px;
        height: 13px;
      }
    }
  }
}

.user-name-row {
  display: flex;
  align-items: center;
  gap: 10px;

  .user-name {
    width: max-content;
    font-size: 40px;
    line-height: 1.1;
    font-weight: bold;
    color: var(--violet);

    @include mobile {
      font-size: 26px;
    }

    &.empty-name {
      color: rgba(106, 75, 153, 0.6);
    }
  }

  .ico-pencil {
    @include mobile {
      transform: translateY(2px);
    }
  }
}

</style>
