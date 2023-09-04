import { useQuery } from "@tanstack/react-query"
import { QueryPaths } from "../Utils/constants"
import { getIdentityType } from "../Api/kyc"

export const useIndentityTypes = () => {
    return useQuery([QueryPaths.INDENTITY],  () => getIdentityType())
}
