import { ref, watch, onUnmounted, onMounted } from "vue";

const useLocalStorage = (key) => {
  const value = ref([]);
  const read = () => {
    const notes = window.localStorage.getItem(key);
    if (notes) {
      value.value = JSON.parse(notes);
    }
  };

  read();
  onMounted(() => {
    window.addEventListener("storage", read);
  });
  onUnmounted(() => {
    window.removeEventListener("storage", read);
  });
  const write = () => {
    window.localStorage.setItem(key, JSON.stringify(value.value));
  };

  watch([value], write, { deep: true });

  return value;
};
const useLocalNotes = () => {
  return useLocalStorage("notes");
};

export { useLocalNotes, useLocalStorage };
