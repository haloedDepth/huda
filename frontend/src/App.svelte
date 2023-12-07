<script>
  import InputBox from './components/InputBox.svelte';
  import OutputMessage from './components/OutputMessage.svelte';
  import DynamicArea from './components/DynamicArea.svelte';

  let receivedMessage = ''; // Holds the message from the backend
</script>

<style>
  /* Global style for the body, setting up a dark theme */
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    color: white;
    font-family: Arial, sans-serif;
  }

  /* Container for the entire application */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  /* Area for dynamic content display */
  .dynamic-area {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  }

  /* Styling for the input box component */
  .input-box {
    margin-bottom: 0;
    margin-left: 50px;
    margin-right: 50px;
  }

  /* Styling for the output message component */
  .output-message {
    height: 20px;
    margin-top: 5px;
    margin-bottom: 15px;
  }
</style>

<div class="app-container">
  <div class="dynamic-area">
    <DynamicArea />
  </div>
  <div class="input-box">
    <!-- Listen for messageReceived event and update receivedMessage -->
    <InputBox on:messageReceived={(event) => receivedMessage = event.detail} />
  </div>
  <div class="output-message">
    <!-- Pass receivedMessage to OutputMessage component -->
    <OutputMessage message={receivedMessage} />
  </div>
</div>