import { bootstrapApplication } from '@angular/platform-browser'; //se importa bootstrap desde las dependencias de Angular

import { AppComponent } from './app/app.component'; //Se importa AppComponent desde el archivo app.componente.ts pero no es necesario poner la extension


bootstrapApplication(AppComponent).catch((err) => console.error(err));
