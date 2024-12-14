import * as React from 'react';
import { useState } from 'react';
import { InnerBanner } from '../../components/innerBanner/InnerBanner';
import { ContactForm} from '../../components/contactForm/ContactForm';
import {Contact} from '../../components/contact/Contact';
import {PillarSection} from '../../components/pillarSection/PillarSection';
import { Initiative } from '../../components/initiatives/Inititative';
import { Gallery } from '../../components/gallery/Gallery';
import { imagesAssets } from "../../mocks/ImagesAssets";
import Navbar from "../../components/global/navbar/Navbar"
import { InnerRegionalService } from "../../services/innerRegional.service";

export const InnerPage = () =>{



    const [isModalOpen, setIsModalOpen] = useState(false);

    

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [innerItem, setInnerItem] = React.useState([]);
    const InnerService = new InnerRegionalService("https://idbg-my.sharepoint.com/personal/mateoc_iadb_org");
        
    
    InnerService.getRegional().then((RegionalData) => {
        const InnerItemVar = RegionalData.data.value;
        setInnerItem(InnerItemVar);
      });

      
     console.log(innerItem)

     
    const ubicaciones : { titulo: string; descripcion: string }[] = [
        { titulo: 'HQ', descripcion: 'TechLab es el Laboratorio de Tecnología Emergente del BID, y forma parte ITE. Su objetivo es preparar al Grupo BID en el uso de tecnología emergente. Nuestros laboratorios, ubicados en puntos estratégicos, actúan como centros abiertos para la experimentación y la colaboración; nuestro objetivo es crear soluciones transformadoras que promuevan el desarrollo sostenible, mejorando el acceso a servicios públicos y abordando desafíos socioeconómicos y ambientales' },
        { titulo: 'Panama', descripcion: 'La sede del TechLab en Panamá, operativa desde 2022, se ha consolidado como un centro de innovación y colaboración en nuestra red, abordando las necesidades y desafíos de países como México, República Dominicana, Haití y Centroamérica. Desde el TechLab Panamá, trabajamos con tecnologías como blockchain, Inteligencia Artificial y robótica realizando, desarrollo de prototipos, brindando asesoría en la implementación de tecnologías y colaborando con actores locales para asegurar que las soluciones sean viables y sostenibles tanto en Panamá como en la región centroamericana.' },
        { titulo: 'Paraguay', descripcion: 'El TechLab Paraguay, inaugurado en 2024, se enfoca en la exploración y adopción de tecnologías emergentes como Inteligencia Artificial generativa, realidad virtual y aumentada, robots y drones. Nuestro objetivo es acelerar la innovación y apoyar a los países del Cono Sur, incluyendo Brasil, Chile, Argentina, Uruguay y Paraguay, en la creación de soluciones sostenibles frente a sus desafíos más urgentes. El TechLab está abierto al público y ofrece oportunidades para investigación, experimentación de nuevas ideas, y organización de talleres que fortalecen el ecosistema tecnológico de la región.' },
        { titulo: 'Trinidad & Tobago', descripcion: 'La sede en Trinidad y Tobago, que se lanzará oficialmente en 2025, está diseñada para ser un centro de tecnologías emergentes como Inteligencia Artificial, el internet de las cosas (IoT), blockchain y análisis de datos, con el objetivo de impulsar la innovación, investigación y colaboración para resolver desafíos tanto a nivel local como regional. El TechLab TyT ofrece recursos para empresas tecnológicas e investigadores en todo el Caribe para probar y escalar ideas innovadoras y se enfoca en desarrollar soluciones que promuevan la sostenibilidad, la inclusión digital y el crecimiento económico.' }
    ]

    //const siteId = location.pathname.split("/").pop();

    const hash = location.hash; 
    const siteId = hash.split("/").pop();
    const country = siteId.replace(/%20/g, " ")

    //const findLocation = ubicaciones.find((ubicacion) => ubicacion.titulo === country);
    
    

    let findLocation = null;

    for (let i = 0; i < ubicaciones.length; i++) {
        if (ubicaciones[i].titulo === country) {
        findLocation = ubicaciones[i];
        break;
  }
}


    return(
        

        <div>
            <Navbar namePath={'regional'} />
            
            {isModalOpen && <ContactForm closeModal ={closeModal}/>}
            {
                innerItem.map((item, i) => {
                                            
                    console.log(item.Ubicacion)
                    console.log(country)
                    if( country.indexOf(item.Ubicacion) !== -1){
                        return(
                            <>
                            <InnerBanner imagenFondo={item.Banner_img.Url} nombre={`${country}`} openModal={openModal} />
                            <Contact name={item.Nombrecont_x00e1_cto} cardDescription={""} teams={item.Enlace_teams_contacto} outlook={item.Enlace_outlook} description={item.Descripci_x00f3_n}  /> 
                            <PillarSection pillars={item.Pilares} />
                            <Initiative order={'row'} justify={'space-between'} initiatives={item.Iniciativas} />
                            </>
                            
                                          
                          )
                    }                        
                    
                                                
                                            
                    return null;    
                                            
                                        })
                                        
            }

            
            
            
            
            
            <Gallery />
            
        </div>
    )

}