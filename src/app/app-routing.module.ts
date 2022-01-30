import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  //para redireccionamientos puedo usar el prefix o el full, prefix basta que escriba las primeras letras, full tengo que escribir tal cual
  { path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then(module => module.CatalogoModule)
  },
  { path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(module => module.SharedModule)
  },
  //para cuando me den errores, el usuario escriba mal la ruta
  { path: '**',
    redirectTo: '/home/page-principal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
