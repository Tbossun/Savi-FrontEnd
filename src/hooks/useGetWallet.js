import { useQuery } from "@tanstack/react-query";
import { QueryPaths } from "../Utils/constants"
import { getWallet } from "../Api/payments";

export const useGetWallet = () => {
    return useQuery([QueryPaths.GETWALLET],  () => getWallet())
}