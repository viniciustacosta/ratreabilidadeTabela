import { bootstrapApplication } from '@angular/platform-browser';
import { TreeTableBasicDemo } from './app/tree-table-basic-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(TreeTableBasicDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));