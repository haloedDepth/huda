
<script>
  import { createEventDispatcher } from 'svelte';
  import { ApiService } from '/home/dami/project_huda/huda/frontend/src/services/ApiService';

  const dispatch = createEventDispatcher();
  let inputValue = '';

  const handleInput = async (event) => {
  if (event.key === 'Enter' && inputValue.trim() !== '') {
    const response = await ApiService.sendInput(inputValue);
    if (response && response.message) {
      dispatch('messageReceived', response.message); // Dispatch the message part of the response
    } else {
      dispatch('messageReceived', 'No response message'); // Fallback message
    }
    inputValue = ''; // Clear the input after sending
  }
};

</script>

<style>
  /* Style for the input field */
  .custom-input {
    width: 100%;
    border: none;
    border-bottom: 1px solid white; /* Underline style */
    background: transparent;
    color: white;
    padding: 0;
    height: 20px; /* Align text with the underline */
  }

  /* Removes the outline on focus for a cleaner look */
  .custom-input:focus {
    outline: none;
  }
</style>

<input
  class="custom-input"
  type="text"
  placeholder="Type here..."
  aria-label="Input field"
  bind:value={inputValue}
  on:keydown={handleInput}
/>