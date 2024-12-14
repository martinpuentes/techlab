import React, { useState } from "react"
import Navbar from "../../components/global/navbar/Navbar"
import RegionalBanner from "../../components/regionalBanner/RegionalBanner"
import { RegionalCardSection } from "../../components/regionalCardSection/RegionalCardSection";
import { imagesAssets } from "../../mocks/ImagesAssets";

import { useEffect} from 'react';
import { RegionalService } from "../../services/regional.service";
import { AboutUsService } from "../../services/aboutUs.service";
import { setRef } from "@material-ui/core";
//import {Map} from '../../components/map/Map';

export const Regional = ({ dataProp }) => {

    
    const [regionalItem, setRegionalItem] = React.useState([]);
    const regionalService = new RegionalService("https://idbg-my.sharepoint.com/personal/mateoc_iadb_org");
    

    regionalService.getNames().then((regionalData) => {
      const regionalItemVar = regionalData.data.value;
      setRegionalItem(regionalItemVar);
  });

    console.log(regionalItem)

    return(
        <>
        <Navbar namePath={'regional'} />
        <RegionalBanner imagenFondo={imagesAssets(`./fondobanner1.svg`)} texto={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit ut. Tempor nec feugiat nisl pretium fusce. Mauris a diam maecenas sed enim ut sem viverra aliquet. In nibh mauris cursus mattis molestie a iaculis at.'} titulo={'Techlab Regionales'} />
        <RegionalCardSection techlabs={regionalItem} />
        
        </>
    )

}
