import './contactForm.css'
import React from "react";

export const ContactForm = ({closeModal}) => {
    return(
        <div className='modal-overlay' onClick={closeModal}>
            <div className='contact-form-container'>
            <form id='contact-form' action="mailto:martinpuentes567@gmail.com" method="POST"  onClick={(e) => e.stopPropagation()}>
                <h1 className='contact-form-title'>Agenda tu visita</h1>
                <label htmlFor="name">Nombre</label>
                <input type='text' id='nombre' placeholder='Nombre' required></input>
                <label htmlFor="email">Correo</label>
                <input type='email' id='correo' placeholder='Correo electronico' required></input>
                <label htmlFor="message">Asunto</label>
                <textarea id="message"  placeholder='Ingresa tu mensaje' required></textarea>
                <div className='button-group'>
                <button className='send-message-button' type='submit'>Enviar Mensaje</button>
                <button className='cancel-button' onClick={closeModal} type='reset'>Cancelar</button>
                </div>
                
            </form>
        </div>
        </div>
        
    )
}

