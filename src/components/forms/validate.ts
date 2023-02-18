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
export const validateLastName = (values: any) => {
    const errors: any = {}
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    else if(values.lastName.length < 2){
        errors.lastName = 'Must be at least 2 characters'
    }
    return errors
}
export const validateFirstName = (values: any) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    else if(values.firstName.length < 2){
        errors.firstName = 'Must be at least 2 characters'
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

export const validatePhone = (values: any) => {
    const errors: any = {}
    const phoneNumberRegex = /\d{3}-\d{3}-\d{4}/;
    if( !phoneNumberRegex.test(values.phone)){
        errors.phone = 'Invalid phone number, must be 10 digits (xxx-xxx-xxxx)'
    }
    return errors
}

export const validateAddress = (values: any) => {
    const errors: any = {}

    if (!values.houseNumber) {
        errors.address = 'Required'
    }
    if (!values.street) {
        errors.street = 'Required'
    }
    if (!values.city) {
        errors.city = 'Required'
    }
    if (!values.state) {
        errors.state = 'Required'
    }
    if (!values.zip) {
        errors.zip = 'Required'
    }
    return errors
}