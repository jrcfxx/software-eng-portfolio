import { usePortfolioContent } from '~/composables/usePortfolioContent'

type ContactFormState = {
  name: string
  email: string
  message: string
}

export function useContactForm() {
  const { ui } = usePortfolioContent()

  const config = useRuntimeConfig().public as {
    emailjsPublicKey?: string
    emailjsServiceId?: string
    emailjsTemplateId?: string
  }

  const form = reactive<ContactFormState>({
    name: '',
    email: '',
    message: ''
  })
  const errors = reactive<Record<keyof ContactFormState, string>>({
    name: '',
    email: '',
    message: ''
  })
  const formStatus = ref('')
  const formSuccess = ref(false)
  const formSubmitting = ref(false)

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const emailjsConfig = computed(() => ({
    publicKey: config.emailjsPublicKey || '',
    serviceId: config.emailjsServiceId || '',
    templateId: config.emailjsTemplateId || ''
  }))

  function clearErrors() {
    errors.name = ''
    errors.email = ''
    errors.message = ''
  }

  function validate() {
    clearErrors()
    let valid = true

    if (!form.name.trim()) {
      errors.name = ui.value.required
      valid = false
    }

    if (!form.email.trim()) {
      errors.email = ui.value.required
      valid = false
    } else if (!emailRegex.test(form.email)) {
      errors.email = ui.value.invalidEmail
      valid = false
    }

    if (!form.message.trim()) {
      errors.message = ui.value.required
      valid = false
    }

    return valid
  }

  function resetForm() {
    form.name = ''
    form.email = ''
    form.message = ''
  }

  async function onSubmit() {
    formStatus.value = ''

    if (!validate()) {
      return
    }

    if (!emailjsConfig.value.publicKey || !emailjsConfig.value.serviceId || !emailjsConfig.value.templateId) {
      formStatus.value = ui.value.formError
      formSuccess.value = false
      return
    }

    formSubmitting.value = true

    try {
      const emailjs = await import('@emailjs/browser')

      emailjs.init({ publicKey: emailjsConfig.value.publicKey })
      await emailjs.send(emailjsConfig.value.serviceId, emailjsConfig.value.templateId, {
        from_name: form.name,
        reply_to: form.email,
        from_email: form.email,
        message: form.message,
        sender_line: `${form.name} <${form.email}>`
      })

      formStatus.value = ui.value.formSuccess
      formSuccess.value = true
      resetForm()
    } catch {
      formStatus.value = ui.value.formError
      formSuccess.value = false
    } finally {
      formSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    formStatus,
    formSuccess,
    formSubmitting,
    onSubmit
  }
}
