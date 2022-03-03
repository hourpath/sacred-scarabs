import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const useNFT = (params) => {
  const { account } = useMoralisWeb3Api();
  const { isInitialized, chainId, account: walletAddress } = useMoralis();

  const [assets, setNFTs] = useState();

  useEffect(() => {
    if (isInitialized) {
      fetchNFTBalance().then((balance) => setNFTs(balance));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);

  const fetchNFTBalance = async () => {
    return await account
      .getNFTs({
        address: walletAddress,
        chain: params?.chain || chainId,
      })
      .then((result) => result);
  };

  return { fetchNFTBalance, assets };
};
