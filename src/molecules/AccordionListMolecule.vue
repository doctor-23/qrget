<template>
  <div class="accordion" :class="{className, 'accordion--columns': columns }">
    <AccordionAtom
        v-for="( item, index) in modifiedList"
        :key="'accordion-item-' + index"
        :item="item"
        :index="index"
        :columns="columns"
        @changeList="changeList"
    />
  </div>

</template>

<script>
import AccordionAtom from "@/atoms/AccordionAtom";

export default {
  data() {
    return {
      listCopy: [...this.list] // создаем новый массив списка, чтобы можно было манипулировать им внутри этого компонента
    };
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    columns: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    }
  },
  components: {
    AccordionAtom,
  },
  methods: {
    changeList(i) {
      // получаем индекс, измененного объекта, из дочернего компонента и меняем наш новый массив, чтобы активный элемент остался открыт, а остальные закрылись

      /* this.listCopy = this.listCopy.map((item, index) => ({
         ...item,
         isActive: i === index ? !item.isActive : false
      }));
      код без функциональности multiple
       */

      // если multiple false, то для всех остальных элементов массива ставим isActive false
      if (!this.multiple) {
        this.listCopy.forEach((item) => {
          item.isActive = false;
        });
      }

      // удаляем элемент массива по индексу и добавляем по новой, изменяя значение isActive
      this.listCopy.splice(i, 1, { ...this.listCopy[i], isActive: !this.listCopy[i].isActive });
    }
  },
  computed: {
    modifiedList() {
      // вычисляем новый массив с открытыми и закрытыми элементами
      return this.listCopy.map(item => ({...item}));
    }
  }
}
</script>

<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion--columns {
  flex-direction: row;
  gap: 10px 40px;
  flex-wrap: wrap;
}

.column {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(50% - 20px);
}
</style>
