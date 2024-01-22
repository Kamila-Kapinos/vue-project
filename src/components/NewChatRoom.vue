<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection.js';
import { timestamp } from '../firebase/config';

export default {
  setup() {
    const { user } = getUser();
    const message = ref('');
    const { addDoc, error } = useCollection('messages');

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      //console.log(chat);
      message.value = '';
    };
    return { message, handleSubmit };
  },
};
</script>

<style></style>
