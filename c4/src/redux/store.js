import { authReducer  } from "./userlogin/reducer";
import {createStore} from "redux"

export const store=createStore(authReducer)