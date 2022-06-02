import "@testing-library/jest-dom";
import { loginReducers } from "../../../Redux/reducers/loginReducers";
import { typesLogin } from "../../../Redux/types/types";


describe("Pruebas en LoginReducer", () => {

    //PRUEBA DE LOGIN EN EL REDUCER
    test("Realizar el login", () => {
        const initialState = {};
        const action = {
            type: typesLogin.login,
            payload: { email: "jesudpf21@hotmail.com", password: "Jesus" }
        }
        const state = loginReducers(initialState, action);
        expect(state).toEqual({ email: "jesudpf21@hotmail.com", password: "Jesus" });
    })

    test("State por default", () => {
        const initialState = {
            email: "jesudpf21@hotmail.com",
            password: "123456"
        }
        const action = {
            type: typesLogin.hola,
        }
        const state = loginReducers(initialState, action);
        expect(state).toEqual(initialState);
    })


    //PRUEBA DE LOGOUT EN EL REDUCER
    test("Realizar el logout", () => {
        const initialState = { email: "jesudpf21@hotmail.com", password: "123456" };
        const action = {
            type: typesLogin.logout
        }
        const state = loginReducers(initialState, action);
        expect(state).toEqual({});
    })
})