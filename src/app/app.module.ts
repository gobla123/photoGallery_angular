import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { rootReducer, IAppState, INITIAL_STATE } from '../store';

import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers);
  }
}
