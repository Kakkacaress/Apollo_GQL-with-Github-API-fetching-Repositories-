const GITHUBGQL_SERVER = "https://api.github.com/graphql";
const LOCAL_SERVER = "http://localhost:2020/graphql";

const mode = process.env.NODE_ENV  === "production";

export const SERVER_URL = !mode ? GITHUBGQL_SERVER : LOCAL_SERVER;
