import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './component/product/product.component';

import { CompraComponent } from './component/compra/compra.component';

const routerM:Routes = [
    {
        path:'producto',
        component: ProductComponent
},
    {
        path: 'compra',
        component: CompraComponent
}

];
export const appRouter = RouterModule.forRoot(routerM);
