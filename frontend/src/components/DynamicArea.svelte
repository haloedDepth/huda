<script>
  import  items  from '/home/dami/project_huda/huda/frontend/src/stores/ItemStore'; // Adjust the path as needed
  import BlackBox from '/home/dami/project_huda/huda/frontend/src/items/BlackBox.svelte'; // Adjust the path to your BlackBox component

</script>

<style>
  /* Container styling for dynamic area */
  .dynamic-area-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px; /* Suitable font size for dynamic content */
  }
</style>

<div class="dynamic-area-container">
  {#each $items as item}
    {#if item.type === 'BlackBox'}
      <BlackBox {...item.props} />
    {/if}
    <!-- Add additional conditions for other item types as needed -->
  {/each}
</div>
