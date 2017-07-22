import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ChattingComponent } from './chatting/chatting.component';
import { UserInformationComponent } from './user-information/user-information.component';
 
const appRoutes :Routes = [
	{ path : '' , component : UserInformationComponent},
	{ path : 'chat' , component : ChattingComponent},
	{ path : 'chat/:userId' , component : ChattingComponent},
];
 
export const appRouting :ModuleWithProviders = RouterModule.forRoot(appRoutes);