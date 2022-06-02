import "@testing-library/jest-dom";
import { loginSincronico, logoutSync } from "../../../Redux/actions/actionLogin";
import { typesLogin } from "../../../Redux/types/types";


describe("Acciones de Login sincrono", () => {
    test("validar login sincronico", () => {
        const email = "jesudpf21@hotmail.com";
        const password = "123456";

        const loginAction = loginSincronico(email, password);

        expect( loginAction ).toEqual({
            type: typesLogin.login,
            payload: {
                email,
                password
            }
        });
    })

    test("validar logout sincronico", () => {
        const email = "jesudpf21@hotmail.com";
        const password = "123456";

        const logoutAction = logoutSync(email, password);
        expect(logoutAction).toEqual({
            type: typesLogin.logout
        });
    })
})