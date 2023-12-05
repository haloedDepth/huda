<script>
    import InputBox from './components/InputBox.svelte';
    import OutputMessage from './components/OutputMessage.svelte';
    import DynamicArea from './components/DynamicArea.svelte';
  </script>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      background-color: #1a1a1a; /* Dark theme background */
      color: white;
      font-family: Arial, sans-serif;
    }
  
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  
    .dynamic-area {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;

    }
  
    .input-box {
        margin-bottom: 0; /* Remove extra space below InputBox */
        margin-left: 50px;
        margin-right: 50px;
      /* Adjust as needed */
    }
  
    .output-message {
        height: 20px; /* Adjust for one line of output */
        margin-top: 5px; /* Reduce space above OutputMessage */
        margin-bottom: 15px;
    }
  </style>
  
  <div class="app-container">
    <div class="dynamic-area">
      <DynamicArea />
    </div>
    <div class="input-box">
      <InputBox />
    </div>
    <div class="output-message">
      <OutputMessage />
    </div>
  </div>
  