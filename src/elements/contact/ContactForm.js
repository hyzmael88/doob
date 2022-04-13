import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactForm({props , formStyle}) {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_s4u6j5a', 
            'template_vdua1of', 
            e.target, 
            'Em7V_Jy6Q7eg8LGqp'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Tu nombre"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                name="email"
                placeholder="Dirección de correo"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Número Telefónico"
                required
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Asunto"
                required
                />
            </div>

            <div className="form-group">
                <textarea 
                name="message"
                placeholder="Escribe tu mensaje..."
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Enviar</button>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
