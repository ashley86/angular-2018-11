import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TemplateModule } from '../template/template.module';
import { ClientDetailPrestationComponent } from './components/client-detail-prestation/client-detail-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ReactiveFormPrestationComponent } from './components/reactive-form-prestation/reactive-form-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    PrestationComponent,
    PageAddPrestationComponent,
    AddPrestationComponent,
    FormPrestationComponent, // soit form, soit reactive form
    ReactiveFormPrestationComponent, // soit form, soit reactive form
    DetailPrestationComponent,
    ClientDetailPrestationComponent,
    PageEditPrestationComponent,
    EditPrestationComponent
  ],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    TemplateModule,
    FormsModule,
    ReactiveFormsModule, // Permet d'utiliser les reactive forms
  ]
})
export class PrestationsModule { }
