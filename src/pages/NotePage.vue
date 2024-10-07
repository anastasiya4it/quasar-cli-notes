<template>
  <Container >
    <div v-if="editing" >
      <q-form
      @submit="editing=false"
      class="q-gutter-md"
    >
        <q-input filled v-model="note.title" label="Title" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']" class="flex">
        <q-icon name="close" size="1.5rem" @click="note.title=''" style="top: 15px;"/>
      </q-input>
        <q-input filled v-model="note.description" label="Description" lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']">
        <q-icon name="close" size="1.5rem" @click="note.description=''" style="top: 15px;"/>
      </q-input>
        <q-card flat bordered style="max-width: 100%;">
          <q-card-section>
            <q-editor v-model="note.content" />
          </q-card-section>
        </q-card>
        <div class="q-mt-md">
          <q-btn type="submit" class="q-mr-sm" label="Save" color="positive"/>

        </div>

      </q-form>
    </div>
    <div v-else >
      <q-icon name="chevron_left" size="2.2rem" @click="$router.go(-1)"/>
      <div class="row items-center justify-between">
        <h4 style="width: 80%;">{{note.title}}</h4>
        <div>
          <q-btn round color="secondary" icon="edit" class="q-mr-md" @click="editing=true"/>
          <q-btn round color="red" icon="delete" @click="remove"/>
        </div>
      </div>
      <div>{{ note.description }}</div>
      <div class="q-mt-md" v-html="note.content"/>
    </div>
  </Container>
</template>

<script setup>
import { useLocalNotes } from 'src/helper';
import { useRoute } from 'vue-router';
import Container from 'src/components/ContainerForPage.vue';
import { computed,ref } from 'vue';
// import { defineProps } from 'vue';
const editing = ref(false);
const notes = ref(useLocalNotes());
const router = useRoute();
console.log(router.params.id);
const noteId=computed(()=>router.params.id);
console.log(noteId.value);
const note=computed(()=>notes.value[noteId.value]);
const remove=()=>{
  note.value.splice(noteId.value,1);
  router.push('/');
}
// const note = defineProps({
//   title: String,
//   description: String,
//   content: String,
// });
defineOptions({
  name: 'NotePage'
});
</script>
