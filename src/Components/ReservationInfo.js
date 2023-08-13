import React, {useState} from 'react';

function ReservationInfo() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        telephone: "",
        date: "",
        guests: "",
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {
        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}
        if (formData.name === "") {
            err.name = "Full name is required" 
        }
        if (formData.email === "") {
            err.email = "Email is required" 
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(formData.email)) {
                err.email = "Valid email required"
            }
        }


        if (formData.telephone === "") {
            err.telephone = "Phone Number is required" 
        } else {
            let phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            if(!phoneRegex.test(formData.telephone)) {
                err.telephone = "Valid phone number is required"
            }
        }


        if (formData.guests === "") {
            err.guests = "Number of guests is required" 
        }
        if (formData.date === "") {
            err.date = "Date is required" 
        }

        setFormError({...err})
        return Object.keys(err).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.table(formData)

        let isValid = validateForm()
        if(isValid) {
            alert("Your information has been sent, thank you!")
        }
    }

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="form">
                <h1>Want to visit?</h1>
                <p>Fill out the form below and submit to reserve a table today!</p>
                <form onSubmit={onSubmitHandler}>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.name}</span>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.email}</span>
                        </div>
                        <div className="field">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="tel"
                                placeholder="XXX-XXX-XXXX"
                                name="telephone"
                                onChange={onChangeHandler}
                            />
                            <span className="non-valid">{formError.telephone}</span>
                        </div>
                        <div className="field">
                                <label htmlFor="date">Day & Time</label>
                                <input 
                                    type="datetime-local" 
                                    name="date"
                                    onChange={onChangeHandler}
                                />
                                <span className="non-valid">{formError.date}</span>
                        </div>
                        <div className="guestsdate">
                            <div className="field guest">
                                <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    name="guests"
                                    onChange={onChangeHandler}
                                /> 
                                <span className="non-valid">{formError.guests}</span>
                            </div>
                            
                        </div>
                        <button className="reserve-btn" type="submit">Reserve</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ReservationInfo;