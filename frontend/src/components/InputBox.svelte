<!-- Input Component: For user text input -->
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

<input class="custom-input" type="text" placeholder="Type here..." aria-label="Input field" />
