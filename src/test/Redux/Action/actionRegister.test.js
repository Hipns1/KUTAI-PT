import "@testing-library/jest-dom";
import { registerSync } from "../../../Redux/actions/actionRegister";
import { typesRegister } from "../../../Redux/types/types";


describe("Acciones de Register sincrono", () => {
    test("validar register sincronico", () => {
        const email = "jesudpf21@hotmail.com";
        const pass = "123456";
        const name = "Jesus";

        const registerAction = registerSync(email, pass, name);

        expect( registerAction ).toEqual({
            type: typesRegister.register,
            payload: {
                email,
                pass,
                name
            }
        });
    })
})