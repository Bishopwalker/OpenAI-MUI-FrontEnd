export const validateSignUp = (values: any) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    else if(values.firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if(values.lastName.length < 2){
        errors.lastName = 'Must be at least 2 characters'
    }
    // if (values.over18 ==false) {
    //     errors.over18 = 'Required'
    // }
  if (values.over18 !== true) {
        errors.over18 = 'Must be >18'
    }
    return errors

}

export const validateLogin = (values: any) => {
    const errors: any = {}
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}

export const validateService = (values: any) => {
    const errors: any = {}
    if (!values.services) {
        errors.name = 'Must select at least one service'
    }
    return errors
}