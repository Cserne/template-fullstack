const config = {
    auth: {

        google: {
        client_id: process.env.GOOGLE_CLIENT_ID ||"423125049963-vnhlm59vvirdjsquu0efhqvq5u91orks.apps.googleusercontent.com",
        client_secret: process.env.GOOGLE_CLIENT_SECRET ||"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",
        redirect_uri: process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/callback",
        token_endpoint: "https://oauth2.googleapis.com/token",
        user_endpoint: null,
        user_id: null, //Itt erre nincs szükség, ez egy oauth flow.
        },
        
        github: {
        client_id: process.env.GITHUB_CLIENT_ID || "ed08b763b1bc357943f6",
        client_secret: process.env.GITHUB_CLIENT_SECRET || "a980a3bd37867b1f0675c3e0356933aadcd25118",
        redirect_uri: process.env.GITHUB_REDIRECT_URI || "http://localhost:3000/callback/github",
        token_endpoint: "https://github.com/login/oauth/access_token",
        user_endpoint: "https://api.github.com/user",
        user_id: "id",
        },
        
        // facebook: {
        //     clientId: "", //appid?
        //     clientsecret: "", //appsecret?
        //     redirecturi: "",
        //     tokenendpoint: ""
        // },
    }

}

module.exports = config;