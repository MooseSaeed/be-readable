<template>
  <Card class="rounded-xl mx-10">
    <article
      class="post-card text-white dark:hover:bg-blue-50 dark:hover:bg-none dark:text-black transition-all duration-1000 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl"
    >
      <div class="py-6 px-5 lg:flex">
        <div class="flex-1 flex flex-col justify-between">
          <div class="card-info">
            <h1 class="text-3xl font-bold">How to use</h1>
            <div class="mt-4 text-gray-400 text-xs flex items-center">
              <div>Supported by Deepgram</div>
            </div>
          </div>

          <div class="card-info mt-4 text-base">
            <table>
              <tbody>
                <tr>
                  <td>
                    <li>Connect microphone to your device.</li>
                  </td>
                </tr>
                <tr>
                  <li>Allow the browser to use your microphone.</li>
                </tr>
                <tr>
                  <li>Click on the mic icon to start recording.</li>
                </tr>
                <tr>
                  <li>
                    Try to make your words clear and use a good quality
                    microphone for the best results.
                  </li>
                </tr>
                <tr>
                  <li>When you finish, press again on the stop icon.</li>
                </tr>
                <tr>
                  <li>Listen to your recording through the audio player.</li>
                </tr>
                <tr>
                  <li>
                    Download recording by pressing on the three dots within
                    audio player body.
                  </li>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  </Card>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "Tipscard",
  components: {
    Card,
  },
};
</script>

<style scoped>
.post-card:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='100' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
  background-position: calc(100% - 0px) calc(100% - 0px);
  background-size: 200%;
  transition: background 5s 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  background-repeat: no-repeat;
  border-radius: 0.75rem;
}

.post-card {
  transition: background 5s 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  -webkit-transition: background 1s ease-out !important;
  -moz-transition: background 10s ease-out !important;
  -o-transition: background 1s ease-out !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='0' stroke-opacity='0.12' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: 201%;
  background-repeat: no-repeat;
  border-radius: 0.75rem;
}

.card-info {
  transform: translateY(5%);
  transition: transform 0.6s 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info:after {
  top: 0;
  left: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
</style>
