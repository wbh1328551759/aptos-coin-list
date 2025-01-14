export type TokenType = {
  type: string,
  account_address: string,
  module_name: string,
  struct_name: string,
}

export type ExtensionType = {
  data: [string, string][],
}

export type RawCoinInfo = {
  name: string,
  symbol: string,
  official_symbol: string,
  coingecko_id: string,
  decimals: number,
  logo_url: string,
  project_url: string,
  token_type: TokenType,
  extensions: ExtensionType,
};

export const DEFAULT_COIN_LIST: RawCoinInfo[] = [
  {
    "name": "Argo USD",
    "symbol": "USDA",
    "official_symbol": "USDA",
    "coingecko_id": "",
    "decimals": 6,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDA.svg",
    "project_url": "https://argo.fi/",
    "token_type": {
      "type": "0x1000000f373eb95323f8f73af0e324427ca579541e3b70c0df15c493c72171aa::usda::USDA",
      "account_address": "0x1000000f373eb95323f8f73af0e324427ca579541e3b70c0df15c493c72171aa",
      "module_name": "usda",
      "struct_name": "USDA"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "StakedAptosCoin",
    "symbol": "tAPT",
    "official_symbol": "tAPT",
    "coingecko_id": "",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/TortugaStakedAptos.png",
    "project_url": "https://tortuga.finance/",
    "token_type": {
      "type": "0x12d75d5bde2535789041cd380e832038da873a4ba86348ca891d374e1d0e15ab::staked_aptos_coin::StakedAptosCoin",
      "account_address": "0x12d75d5bde2535789041cd380e832038da873a4ba86348ca891d374e1d0e15ab",
      "module_name": "staked_aptos_coin",
      "struct_name": "StakedAptosCoin"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "Ditto Staked Aptos",
    "symbol": "stAPT",
    "official_symbol": "stAPT",
    "coingecko_id": "",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/DittoStakedAptos.svg",
    "project_url": "https://www.dittofinance.io/",
    "token_type": {
      "type": "0x4d87417a2fb3248887d820f7737d9c4aeeb9591c5de91d08f7f490550e733894::staked_coin::StakedAptos",
      "account_address": "0x4d87417a2fb3248887d820f7737d9c4aeeb9591c5de91d08f7f490550e733894",
      "module_name": "staked_coin",
      "struct_name": "StakedAptos"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "DAI",
    "symbol": "devDAI",
    "official_symbol": "DAI",
    "coingecko_id": "dai",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/DAI.webp",
    "project_url": "project_url",
    "token_type": {
      "type": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::devnet_coins::DevnetDAI",
      "account_address": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68",
      "module_name": "devnet_coins",
      "struct_name": "DevnetDAI"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "Tether",
    "symbol": "devUSDT",
    "official_symbol": "USDT",
    "coingecko_id": "tether",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDT.webp",
    "project_url": "project_url",
    "token_type": {
      "type": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::devnet_coins::DevnetUSDT",
      "account_address": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68",
      "module_name": "devnet_coins",
      "struct_name": "DevnetUSDT"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "USD Coin",
    "symbol": "devUSDC",
    "official_symbol": "USDC",
    "coingecko_id": "usd-coin",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/USDC.webp",
    "project_url": "project_url",
    "token_type": {
      "type": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::devnet_coins::DevnetUSDC",
      "account_address": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68",
      "module_name": "devnet_coins",
      "struct_name": "DevnetUSDC"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "Bitcoin",
    "symbol": "devBTC",
    "official_symbol": "BTC",
    "coingecko_id": "bitcoin",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/BTC.webp",
    "project_url": "project_url",
    "token_type": {
      "type": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68::devnet_coins::DevnetBTC",
      "account_address": "0x498d8926f16eb9ca90cab1b3a26aa6f97a080b3fcbe6e83ae150b7243a00fb68",
      "module_name": "devnet_coins",
      "struct_name": "DevnetBTC"
    },
    "extensions": {
      "data": []
    }
  },
  {
    "name": "Aptos Coin",
    "symbol": "APT",
    "official_symbol": "APT",
    "coingecko_id": "aptos",
    "decimals": 8,
    "logo_url": "https://raw.githubusercontent.com/hippospace/aptos-coin-list/main/icons/APT.webp",
    "project_url": "https://aptoslabs.com/",
    "token_type": {
      "type": "0x1::aptos_coin::AptosCoin",
      "account_address": "0x1",
      "module_name": "aptos_coin",
      "struct_name": "AptosCoin"
    },
    "extensions": {
      "data": []
    }
  }
];

