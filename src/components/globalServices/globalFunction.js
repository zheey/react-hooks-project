

export  const handleFields = (setError, setInput, evt)=> {
    setError([])
    const name = evt.target.name;
    const newValue = evt.target.value;
    setInput({[name]: newValue});
};

export const RegisterUser = (setLoading, setError, formInput,  userAuth, onRegister, type) => {
    setLoading(true)

    let errors = [];
    let parameters;

    if((type === "register" || type === "sponsor") && ((formInput.full_name.split(" ")[1] === undefined ) || (formInput.full_name.split(" ")[1].length < 1 ))){
        errors.push("full_name")
    }

    if(formInput.phone_number.length < 1 ){
        errors.push("phone_number")
    }

    if(formInput.password.length < 1 ){
        errors.push("password")
    }

    if(type === "sponsor" && formInput.email.length < 1 ){
        errors.push("email")
    }

    setError(errors)
    if(errors.length > 0){
        setLoading(false);
        return
    }


    if(type === "register"){
        parameters = {first_name: formInput.full_name.split(" ")[0], last_name: formInput.full_name.split(" ")[1],
            phone_number: formInput.phone_number, password: formInput.password, role: "student"}
    } else if(type === "sponsor") {
        parameters = {first_name: formInput.full_name.split(" ")[0], last_name: formInput.full_name.split(" ")[1],
            phone_number: formInput.phone_number, email: formInput.email, password: formInput.password, role: "sponsor"}
    } else{
        parameters = {phone_number: formInput.phone_number, password: formInput.password}
    }
    console.log("here", parameters)

    return userAuth(type, parameters, onRegister)

};

export const redirectToPage = (url) => {
    window.location.href = url
}