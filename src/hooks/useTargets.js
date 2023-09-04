import { useQuery } from "@tanstack/react-query"
import { QueryPaths } from "../Utils/constants"
import { getTargets, getTarget, getUserTarget } from "../Api/target"

export const useTargets = () => {
    return useQuery([QueryPaths.GETTARGET],  () => getTargets())
}

export const useTarget = (id) => {
    return useQuery([QueryPaths.GETTARGET, id],  () => getTarget(id))
}

export const useUserTargets = () => {
    return useQuery([QueryPaths.GETUSERTARGET],  () => getUserTarget())
}

