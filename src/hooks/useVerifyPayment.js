import { useQuery } from "@tanstack/react-query";
import { QueryPaths } from "../Utils/constants";
import { verifyPayment } from "../Api/payments";


export const useVerifyPayment = (reference) => {
    return useQuery(QueryPaths.VERIFYPAYMENT, () => verifyPayment(reference))
};
