import { useState } from "react";

export const useRefresh = (onRefresh) => {
  const [refreshing, setRefreshing] = useState(false);
  
  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  return {refreshing : refreshing, handleRefresh: handleRefresh};
}