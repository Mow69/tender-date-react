import Axios from "axios";
import { USER_ENDPOINT } from "../../constants";
import {IUserServiceProps} from "../../interfaces/IProps"

export const getUsers = () => (
    Axios.get(USER_ENDPOINT).then(res => res.data)
);

export const getUser = async (id: number) => {
    const res = await Axios.get(`${USER_ENDPOINT}/${id}`);
    return res.data;
}
