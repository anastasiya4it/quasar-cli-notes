<template>
  <q-page class="flex">
  <Container>
    <div class="">
      <h1>
        Main page!
      </h1>
      <div class="flex justify-between items-center">
        <h2>
          Your notes:
        </h2>
        <q-btn round color="positive" icon="add" to="/new"/>
      </div>
      <NoteCard class='q-mb-sm' v-for="({title, description,content},index) in notes"
      :key="index"
      :title="title"
      :content="content"
      :description="description"
      @click="router.push(`/note/${index}`)"/>
      <div v-if="notes.length===0">You have not created any notes</div>
    </div>
  </Container>
  </q-page>

</template>

<script setup>
import Container from 'src/components/ContainerForPage.vue';
import { ref, onMounted , watch} from 'vue';
import { useLocalNotes } from 'src/helper';
// import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import NoteCard from 'src/components/NoteCard.vue';

defineOptions({
  name: 'IndexPage'
});
// function useLocalNotes() {
//     const notes = localStorage.getItem('notes');
//     return notes ? JSON.parse(notes) : [];
// }

const notes = ref(useLocalNotes());

// watch(notes, (newNotes) => {
//     localStorage.setItem('notes', JSON.stringify(newNotes));
// }, { deep: true });
// const notes=ref([useLocalNotes()]);
// console.log(notes.value);
const router = useRouter();
// onMounted(() => {
//   notes.value=useLocalNotes()
//   console.log(notes.value);
// });
// export default defineComponent({
  // components: {
  //   Container
  // },
  // name: 'IndexPage',
  // setup(){
  //   const notes=useLocalNotes()
  //   const router = useRouter()
  //   return {
  //     notes,
  //     router
  //   }
  // }
// });
// const note=ref(useLocalNotes())
</script>
