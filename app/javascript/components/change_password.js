import attachEvent from "~/helpers/attachEvent";

function changePassword() {
  const changePasswordButton = document.getElementById('change-password')

  const handleChangePassword = () => {
    const newPasswordLabel = document.getElementById('new-password-label')
    const newPasswordField = document.getElementById('new-password-field')
    const saveNewPasswordButton = document.getElementById('save-new-password')

    if (newPasswordField && newPasswordField) {
      newPasswordLabel.classList.toggle('hidden')
      newPasswordField.classList.toggle('hidden')
      changePasswordButton.classList.toggle('hidden')
      saveNewPasswordButton.classList.toggle('hidden')
    }
  }

  const removeChangePasswordEvent =  attachEvent(
    'click',
    handleChangePassword,
    changePasswordButton
  )

  return function cleanup() {
    removeChangePasswordEvent()
  }
}

export default changePassword
