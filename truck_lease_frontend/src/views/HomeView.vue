<template>
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-blue-800 rounded-lg p-4 lg:h-96 md:p-8 text-white flex flex-col items-center">
        <h1 class="text-2xl md:text-4xl mb-4">Are you a sponsor?</h1>
        <p class="text-lg md:text-xl mb-4">Help truckers finance their business.</p>
        <button class="btn bg-white text-green-500 py-2 px-4 rounded-full flex items-center">
          Login here
          <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
      <div class="bg-green-600 rounded-lg p-4 md:p-8 text-white flex flex-col items-center">
        <h1 class="text-2xl md:text-4xl mb-4">Are you a trucker?</h1>
        <p class="text-lg md:text-xl mb-4">Find sponsors to finance your business. Browse 
          through our Available Trucks section inside the app to find the sponsor that
          suits your business needs.
        </p>
        <br/>
        <p class="text-lg md:text-xl mb-4">
          You can also read the lease terms for any of the available trucks. All this 
          information is available at the click of a button.
        </p>
        <button class="btn bg-white text-green-500 py-2 px-4 rounded-full flex items-center">
          Login here
          <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>
