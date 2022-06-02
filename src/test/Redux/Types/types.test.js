import "@testing-library/jest-dom";
import { typesLogin, typesRegister } from "../../../Redux/types/types";

describe("Verificar todos los types", () => {

    //VERIFICAR TYPES DEL LOGIN
    test("Verificar el type de login", () => {
        expect(typesLogin).toEqual({
            login: 'login',
            logout: 'logout'
        });
    })

    //VERIFICAR TYPES DEL REGISTER
    test("Verificar el type de register", () => {
        expect(typesRegister).toEqual({
            register: 'register'
        });
    })
})