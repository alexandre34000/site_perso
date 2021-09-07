/**
* photographe.js  1.0 juin 2021 by Alexandre CHARLIER  
*
* Author : Alexandre CHARLIER.
* GitHub : https://github.com/alexandre34000/AlexandreCharlier_6_03062021
* GitHub Pages :https://alexandre34000.github.io/AlexandreCharlier_6_03062021/.
* Theme Name : fisheye .
* Description : fichier pour le control de la page photographe.html.
* Date: juin 2021. 
*/

import { createPagePhotographe, fillHeaderPagePhotographe } from './scripts/htmlElement.js';
import { getPicturesByPhotographe, getHeaderByPhotographe } from './scripts/webService.js';

const params = new URL(window.location.href).searchParams;

var photographeId = params.get("id");
var photographeName = params.get("name");

async function getHeader(){
    const headerObjs = await getHeaderByPhotographe(photographeId);
    fillHeaderPagePhotographe(headerObjs,photographeName);
}

async function getPictures() {
    const file = await getPicturesByPhotographe(photographeId);
    createPagePhotographe(file, photographeName);
}

getHeader();
getPictures();
