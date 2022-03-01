import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router'
import { HomeRoutes } from "./paginas/components";
import { ComponentesRoutes } from "./paginas/components";
import { Databinding } from "./paginas/components";
import { DiretivasRoutes } from "./paginas/components";
import { InstalacoesRoutes } from "./paginas/components";
import { ModuloRoutes } from "./paginas/components";
import { ServicosRoutes } from "./paginas/components";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    ...HomeRoutes,
    ...InstalacoesRoutes,
    ...ComponentesRoutes,
    ...ModuloRoutes,
    ...ServicosRoutes,
    ...DiretivasRoutes,
    ...Databinding
];

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}