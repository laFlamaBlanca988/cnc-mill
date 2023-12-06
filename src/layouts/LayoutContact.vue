<template>
  <div ref="kontakt" id="kontakt" class="flex flex-col lg:pb-0">
    <div
      class="relative flex-1 overflow-hidden bg-cover bg-fixed bg-center pt-10 lg:h-full"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <h3 class="mb-20 text-center text-4xl text-white">
        {{ t("contact.title") }}
      </h3>
      <form
        class="mb-20 flex flex-col items-center justify-center gap-4 px-4 text-black lg:px-[30%]"
        @submit.prevent="sendEmail"
      >
        <div class="flex w-full justify-center gap-2">
          <input
            type="text"
            id="name"
            v-model="name"
            name="name"
            class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 opacity-60 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            :placeholder="t('contact.form.name')"
            required
          />
          <input
            v-model="phone"
            type="text"
            id="phone"
            name="phone"
            class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 opacity-60 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            :placeholder="t('contact.form.phone')"
            required
          />
        </div>
        <div class="w-full">
          <input
            v-model="email"
            type="text"
            id="email"
            name="email"
            class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 opacity-60 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            :placeholder="t('contact.form.email')"
            required
          />
          <p class="mt-2 hidden text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
        <div class="w-full">
          <textarea
            v-model="message"
            id="message"
            rows="4"
            class="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 opacity-60 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            :placeholder="t('contact.form.message')"
          ></textarea>
          <p class="mt-2 hidden text-sm text-red-600 dark:text-red-500">
            <span class="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
        <div class="w-full">
          <label
            id="inputFileUpload"
            for="file-upload"
            class="focus:border-primary focus:shadow-te-primary relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.32rem] text-sm font-normal text-neutral-700 opacity-60 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:text-neutral-700 focus:outline-none"
          >
            {{ t("contact.form.chooseFile") }}
          </label>
          <input
            ref="fileInput"
            id="file-upload"
            type="file"
            style="display: none"
            @change="handleFileChange"
          />
        </div>
        <button
          type="submit"
          class="mb-2 me-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4"
        >
          {{ t("contact.form.submutButton") }}
          <div v-if="spinnerIsActive" role="status">
            <svg
              aria-hidden="true"
              class="inline h-6 w-6 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </button>
      </form>
      <AppAlertEmailDanger v-if="messageError"></AppAlertEmailDanger>
      <AppAlertEmailSuccess v-if="messageSucces"></AppAlertEmailSuccess>
      <LayoutFooter></LayoutFooter>
    </div>
  </div>
</template>
<script setup>
import AppAlertEmailDanger from "../components/AppAlertEmailDanger.vue";
import AppAlertEmailSuccess from "../components/AppAlertEmailSuccess.vue";
import backgroundImage from "../assets/images/AboutUsBackgroundImage.png";
import LayoutFooter from "../layouts/LayoutFooter.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const fileInput = ref(null);
const name = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");
let messageError = ref(false);
let messageSucces = ref(false);

let spinnerIsActive = ref(false);
const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    event.target.parentElement.querySelector("#inputFileUpload").textContent =
      selectedFile.name;
  }
};

const sendEmail = () => {
  spinnerIsActive.value = true;
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("phone", phone.value);
  formData.append("email", email.value);
  formData.append("message", message.value);

  // If you need to send the file as well
  const selectedFile = fileInput.value.files[0];
  if (selectedFile) {
    formData.append("file", selectedFile);
  }

  fetch("./sendemail.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      spinnerIsActive.value = false;
      messageSucces.value = true;
      setTimeout(() => {
        messageSucces.value = false;
      }, 4000);
    })
    .catch((err) => {
      spinnerIsActive.value = false;
      messageError.value = err;
      setTimeout(() => {
        messageError.value = false;
      }, 4000);
    });
};
</script>
<style scoped>
.custom-file-upload:hover {
  background: #e9e9e9;
}
.calc-screen-height {
  height: calc(100vh - 64px);
}
</style>
