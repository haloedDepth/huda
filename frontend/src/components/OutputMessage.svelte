<script>
  // Function to update the message when received from InputBox
  export let message = '';

  // Event listener for messageReceived event
  export function updateMessage(event) {
    message = event.detail; // Update the message with the received data
  }
</script>

<style>
  .output-message-container {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 16px;
    padding: 5px 0;
  }
</style>

<div class="output-message-container">
  {#if message}
    <p>{message}</p> <!-- Display the message -->
  {/if}
</div>
