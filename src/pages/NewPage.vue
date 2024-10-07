<template>
  <q-page padding>
  <Container>
    <div class="">
      <h1>
        New note!
      </h1>
      <q-form
      @submit="saveNote"

      class="q-gutter-md"
    >
        <q-input filled v-model="note.title" label="Title" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <q-input filled v-model="note.description" label="Description" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <q-card flat bordered style="max-width: 100%;">
          <q-card-section>
            <q-editor v-model="note.content" />
          </q-card-section>
        </q-card>
        <div class="q-mt-md">
          <q-btn type="submit" class="q-mr-sm" label="Save" color="positive"/>
          <q-btn type="cancel" label="Cancel" color="grey" @click="cancelNote"/>
        </div>

      </q-form>
    </div>
  </Container>
  </q-page>

</template>

<script setup>
import Container from 'src/components/ContainerForPage.vue';
import { ref, onMounted } from 'vue';
import { useLocalNotes } from 'src/helper';
// import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';


defineOptions({
  name: 'NewPage'
});
const notes=useLocalNotes();
const router = useRouter();
const note= ref({
  title: '',
  description: '',
  content:''
})
function saveNote(){
  notes.value.push({...note.value, createDate: Date.now(), updateDate: Date.now()})
  note.value={
    title: '',
    description: '',
    content:''
  }
  router.push('/')
}
function cancelNote(){
  note.value={
    title: '',
    description: '',
    content:''
  }
  router.push('/')
}
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
