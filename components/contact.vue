<template>
  <div class="py-20">
    <h6 class="ml-8">
      questions, ideas or <span class="span-highlight">just want a chat</span>
    </h6>
    <Subtitle :color="'orange'">
      Get_<wbr/>in_<wbr/>touch
    </Subtitle>
    <form
      class="form flex flex-col space-y-4 -mt-4"
      data-netlify="true"
      method="POST"
      name="contact-form"
      netlify-honeypot="bot-field"
    >
      <label class="hidden">
        Don’t fill this out if you’re human:
        <input name="bot-field" />
      </label>
      <label class="form__label w-full lg:w-3/4">
        Your Name:
        <input class="form__input" type="text" name="name"/>
      </label>
      <label class="form__label w-full lg:w-3/4">
        Your Email:
        <input class="form__input" type="email" name="email" />
      </label>
      <label class="form__label w-full lg:w-3/4">
        Message:
        <textarea class="form__textarea" rows="5" name="message"></textarea>
      </label>
      <button class="w-full sm:w-1/2 lg:w-2/5 ml-0" type="submit">Send</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &__left, &__right {
        box-sizing: border-box;
        width: 50%;

        @media (max-width: 575px) {
            width: 100%;
        }
    }

    &__left {
        padding: 10px 0 10px 2.5rem;

        @media (max-width: 575px) {
            margin-left: 2.5rem;
            padding: 10px 0 10px 0;
        }

        @media (max-width: 450px) {
            margin-left: 0;
        }
    }

    &__right {
        background-color: var(--secondary);
        padding: 10px;
        transition: background-color 1s ease;

        @media (max-width: 575px) {
            margin-bottom: 3rem;
            margin-left: 2.5rem;
        }

        @media (max-width: 450px) {
            margin-left: 0;
        }

        &--blue {
            background-color: var(--primary);
        }
    }

    &__group {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 1.5rem;

        &--height {
            height: 100%;
        }
    }

    &__input {
        @apply text-lg font-normal;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--outline);
        box-shadow: none;
        box-shadow: 0 0 0 0 var(--secondary);
        // font-size: 1.05rem;
        margin-bottom: 0.5rem;
        transition-property: box-shadow, border;
        transition-duration: 0.5s;
        transition-timing-function: ease;
        width: 100%;

        @media (max-width: 575px) {
            width: 100%;
        }

        &:focus {
            box-shadow: 0 5px 0 0 var(--secondary);
            border-color: var(--secondary);
            outline: none;
        }
    }

    &__label {
        
        @apply text-lg font-bold;
    }

    &__textarea {
        @apply text-lg font-normal;
        background-color: transparent;
        border-bottom: 1px solid var(--outline);
        // border: none;
        height: 100%;
        // font-size: 1.05rem;
        width: 100%;

        &:focus {
            outline: none;
        }

        @media (max-width: 575px) {
            width: 100%;
        }
    }

    &__error {
        font-style: italic;
        margin-top: 0.5rem;
        min-height: 1.2rem;
        padding-right: 10px;
        text-align: left;
    }

    button {
        font-size: 1.6rem;
        // margin-left: 2.5rem;
        margin-top: 0;
        position: relative;

        @media (max-width: 450px) {
            margin: auto;
        }
    }
}
</style>

<script>
import Subtitle from './subtitle'
/* jshint esversion: 6 */
export default {
  name: 'Contact',

  components: {
    Subtitle
  },
  data () {
    return {
      focus: false,
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      message: '',
      messageError: '',
      errors: [],
      success: false
    }
  },
  methods: {
    focusToggle () {
      if (this.focus === true) {
        this.focus = false
      } else {
        this.focus = true
      }
    },
    validateForm () {
      this.success = false
      this.errors = []
      if (!this.name) {
        this.nameError = 'Please add your name.'
        this.errors.push('name')
      }
      if (!this.email) {
        this.emailError = 'Add your email so I can contact you!'
        this.errors.push('email')
      } else if (!this.validEmail(this.email)) {
        this.emailError = 'I don\'t think this is a real email...'
        this.errors.push('email')
      }
      if (!this.message) {
        this.messageError = 'What\'s your cool idea?'
        this.errors.push('message')
      }
    },

    validEmail (email) {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      return reg.test(email)
    },

    submitForm (e) {
      e.preventDefault()

      this.validEmail()
      this.validateForm()
    }

  }

}
</script>
