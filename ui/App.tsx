import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
// import "../styled-system/styles.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { SetStateAction, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Author from "./pages/Author/Author";
import CustomPokemon from "./pages/CustomePokemon/CustomPokemon";
import React from "react";

const queryClient = new QueryClient();

setupIonicReact();

const App: React.FC = () => {
  const [user, setUser] = useState<string[]>([]);
  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/login">
              <LogIn
                setUser={setUser}
              />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/CVDiegoFernandez">
              <Author />
            </Route>
            <Route exact path="/pokemon">
              <CustomPokemon />
            </Route>
          </IonRouterOutlet> 
        </IonReactRouter>
      </IonApp>
    </QueryClientProvider>
  );
};
export default App;
