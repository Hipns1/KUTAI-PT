import "@testing-library/jest-dom";
import { registerReducers } from "../../../Redux/reducers/registerReducers";
import { typesRegister } from "../../../Redux/types/types";


describe("Pruebas en LoginReducer", () => {

    //PRUEBA DE REGISTER EN EL REDUCER
    test("Realizar el login", () => {
        const initialState = {};
        const action = {
            type: typesRegister.register,
            payload: { email: "jesudpf21@hotmail.com", pass: "123456", name: "Jesus" }
        }
        const state = registerReducers(initialState, action);
        expect(state).toEqual({ email: "jesudpf21@hotmail.com", pass: "123456", name: "Jesus" });
    })
})