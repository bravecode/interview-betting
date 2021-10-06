import { TRaces } from "@services/types";
import axios from "axios";

export {
    fetchRaces
}

function fetchRaces() {
    // In real world application I would keep this in the .env file so all api endpoints is kept in one place
    // and it can be easy changed.
    const URL = 'https://my-json-server.typicode.com/hdjfye/bet-api/races';

    return axios.get<TRaces>(URL);
}