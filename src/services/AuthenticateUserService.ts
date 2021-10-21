import axios from "axios";

/** FLOW
 * Receber code(string)
 * Recuperar o access_token no github
 * Verificar se o user existe no DB
 * ---- SIM = Gera um token
 * ---- NAO = Cria no DB e gera um token
 * Retornar o token com as infos do use
 */

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        // await pq precisa aguardar o return
        const response = await axios.post(urp, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                "Accept": "application/json"
            }
        });

        return response.data;
    };
};

export { AuthenticateUserService };