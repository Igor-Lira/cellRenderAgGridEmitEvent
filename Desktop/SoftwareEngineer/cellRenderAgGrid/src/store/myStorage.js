import {ref} from 'vue';
export const updateComponentCount = ref(0);
export const pushUpdateComponentCount = () => updateComponentCount.value++;