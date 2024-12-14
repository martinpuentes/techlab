import * as React from 'react';
import { ContactCard } from '../contactCard/ContactCard';
import './contact.css'

export const Contact = ({name, cardDescription, description, teams, outlook}) => {
    return(
        <div className='contact-container'>
            <ContactCard name={name} cardDescription={cardDescription} teams={teams} outlook={outlook} />
            <p className='description-text'>{description}</p>
        </div>
        
    )
}

