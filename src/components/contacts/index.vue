<template>
  <!--引擎支持detail与form二合一, 故自定义组件也需要同时实现detail与form表单-->
  <!--详情的最外一层的样式需是inline-block-->
  <div v-if="__mode__ === 'detail'" class="inline-block">
    <div v-for="(item, inx) in curVal" :key="'_' + inx">
      {{ `${item.name}(${item.phone})` }}
    </div>
  </div>
  <div v-else>
    <div v-for="(item, inx) in curVal" class="flex" :key="'_' + inx">
      <el-input v-model="item.name" placeholder="姓名" style="width: 120px" />
      <el-input v-model="item.phone" placeholder="手机号" style="width: 120px" />
      <el-icon>
        <Delete @click="handleDelete(inx)" style="cursor: pointer" />
      </el-icon>
    </div>
    <el-button @click="handleAdd">新增</el-button>
  </div>
</template>

<script lang="ts">
  /** 表单自定义组件 */
  export default {
    name: 'contacts',
  };
</script>

<script setup lang="ts">
  import { Delete } from '@element-plus/icons';
  import { computed, PropType, toRaw, watchEffect } from 'vue';
  type IContacts = {
    name: string;
    phone: string;
  };

  /** 至少有这二个属性 */
  const _props = defineProps({
    value: {
      // 自定义表单组件的默认值, 默认都是'', 所以type需要支持一下string类型, 以避免控制台出现不必要的警告
      type: [Array, String] as PropType<IContacts[]>,
      default: () => [],
    },
    __mode__: {
      type: String,
      default: 'new',
    },
  });

  /** 仅有一个change事件 */
  const emits = defineEmits(['change']);

  /** 采用computed或watch的方式来接收value, 直接操作的用computed, 需要内部管理状态的用watch */
  const curVal = computed({
    get() {
      return _props.value instanceof Array ? _props.value : [];
    },
    set(val: any) {
      emits('change', val);
    },
  });
  function handleAdd() {
    const tmp = [...toRaw(curVal.value)];
    tmp.push({ name: '', phone: '' });
    curVal.value = tmp;
  }

  function handleDelete(inx: number) {
    const tmp = [...toRaw(curVal.value)];
    tmp.splice(inx, 1);
    curVal.value = tmp;
  }

  watchEffect(() => {
    if (curVal.value.length === 0) {
      handleAdd();
    }
  });
</script>
