<template>
  <div class="chat-container">
    <div class="chat-history">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <span
          :class="{
            'user-message': message.sender === 'user',
            'ai-message': message.sender === 'ai',
          }"
        >
          {{ message.content }}
        </span>
      </div>
    </div>
    <div class="chat-input">
      <textarea
        v-model="newMessage"
        placeholder="Type your message here..."
      ></textarea>
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      newMessage: "",
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === "") {
        return;
      }
      // Add the user's message to the chat
      this.messages.push({ sender: "user", content: this.newMessage });

      // Call OpenAI API or serverless function to get a response
      // For now, let's simulate a response
      setTimeout(() => {
        this.messages.push({
          sender: "ai",
          content: `AI Response to "${this.newMessage}"`,
        });
      }, 1000);

      // Clear the input field
      this.newMessage = "";
    },
  },
};
</script>
  
  <style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
}

.chat-history {
  flex-grow: 1;
  overflow: auto;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
}

.user-message {
  color: blue;
}

.ai-message {
  color: green;
}

.chat-input {
  display: flex;
}

textarea {
  flex-grow: 1;
  padding: 10px;
}

button {
  padding: 10px;
}
</style>
  