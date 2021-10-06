import { TPlayers } from "@services/types";
import axios from "axios";

export {
    fetchPlayers
}

function fetchPlayers() {
    // In real world application I would keep this in the .env file so all api endpoints is kept in one place
    // and it can be easy changed.
    const URL = 'https://my-json-server.typicode.com/hdjfye/bet-api/participants';

    return axios.get<TPlayers>(URL);
}