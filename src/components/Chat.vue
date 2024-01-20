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
    async sendMessage() {
      if (this.newMessage.trim() === "") {
        return;
      }

      this.messages.push({ sender: "user", content: this.newMessage });

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: this.newMessage }),
        });

        if (!response.ok) {
          throw new Error("Server error");
        }

        const data = await response.json();
        this.messages.push({ sender: "ai", content: data.reply });
      } catch (error) {
        console.error("Error:", error);
        this.messages.push({
          sender: "ai",
          content: "Error getting response.",
        });
      }

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
  