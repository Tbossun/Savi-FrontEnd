import { useQuery } from "@tanstack/react-query";
import { QueryPaths } from "../Utils/constants"
import { getUserProfile } from "../Api/userProfile";

export const useGetProfile = () => {
  return useQuery([QueryPaths.GETUSER], () => getUserProfile());
};
