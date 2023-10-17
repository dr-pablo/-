import "./App.css";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import React, { useState } from "react";
import {
  Button,
  Menu as MenuC,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Image,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import arb from "./assets/support/arbitrum-logo.png";
import op from "./assets/support/op-logo.png";
import eth from "./assets/support/eth-logo.png";
import matic from "./assets/support/polygon.png";
import ftm from "./assets/support/fantom-logo.png";

export const Menu = () => {
  const provider = React.useMemo(() => {
    return new ethers.providers.JsonRpcProvider(window.ethereum);
  });
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/Web3">Web3</Link>
      <Link to="/Betz">Betz</Link>
      <Link to="/Ideas">Ideas</Link>
      <Link to="/back">Background</Link>
      <div className="donate">
        <Donate />
      </div>
    </div>
  );
};

const Donate = () => {
  const [ethersAvailable, setEthersAvailable] = useState(false);
  const toast = useToast();

  const supportOptions = [
    {
      name: "Ethereum",
      rpc: "https://eth.llamarpc.com	",
      logo: eth,
      tokens: ["ETH", "ERC20"],
    },
    {
      name: "Arbitrum",
      rpc: "",
      logo: arb,
      tokens: ["ETH", "ARB"],
    },
    {
      name: "Optimism",
      rpc: "",
      logo: op,
      tokens: ["ETH", "OP"],
    },
    {
      name: "Fantom",
      rpc: "",
      logo: ftm,
      tokens: ["FTM", "WETH"],
    },
    {
      name: "Polygon",
      rpc: "",
      logo: matic,
      tokens: ["MATIC", "WETH"],
    },
  ];

  const checkEthers = async () => {
    if (window.ethereum) {
      try {
        // Request access to the user's Ethereum wallet
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setEthersAvailable(true);
      } catch (error) {
        setEthersAvailable(false);
      }
    } else {
      setEthersAvailable(false);
    }
  };

  const handleImageClick = async (imageIndex, chainId, chainName, rpc) => {
    if (chainId == window.ethereum.isConnected())
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId,
                  chainName,
                  rpc,
                },
              ],
            });
          } catch (addError) {
            alert("Issue Adding chain " + chainName + "  \nERROR: " + addError);
          }
        }
        // handle other "switch" errors
      }
    if (ethersAvailable) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Example transaction
        const transaction = {
          to: "0x8836BB46d4fB181Ba2118281bF817aaF3D8ec7c0",
          value: ethers.utils.parseEther("1"), // Amount in ether
        };

        // Send transaction
        const tx = await signer.sendTransaction(transaction);

        // Wait for the transaction to be mined
        await tx.wait();

        // Show success toast
        toast({
          title: "Transaction Sent",
          description: "Your transaction has been sent successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error(error);
        // Handle transaction error and show an error toast
      }
    } else {
      // Show error toast for no ethers-enabled wallet found
      toast({
        title: "No Ethereum Wallet Found",
        description:
          "Please install an Ethereum-enabled wallet to perform transactions.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <MenuC>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        onClick={checkEthers}
      >
        Support
      </MenuButton>
      <MenuList height={"10vh"} width={"10vw"}>
        <HStack justify={"space-evenly"}>
          {supportOptions.map((option, index) => {
            return (
              <MenuItem
                key={index}
                onClick={() =>
                  handleImageClick(index, option.id, option.name, option.rpc)
                }
                boxSize={"15%"}
              >
                <Image boxSize={"fit-content"} src={option.logo} />
              </MenuItem>
            );
          })}
        </HStack>
      </MenuList>
    </MenuC>
  );
};

export default Donate;
