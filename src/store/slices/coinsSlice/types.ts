import { ICoin } from "types/coinType";

export type TCoinData = Array<Array<number>>;

export interface ICoinObjHistory {
    prices: TCoinData,
    market_caps: TCoinData,
    total_volumes: TCoinData,
};

export interface ICoinHistoryState {
    data: TCoinHistory,
    error: string | null,
    loading: boolean
};

export type TCoinHistory = Record<string, ICoinObjHistory>;

export interface IMarketDataPayload {
    active_cryptocurrencies: number;
    upcoming_icos: number;
    ongoing_icos: number;
    ended_icos: number;
    markets: number;
    total_market_cap: {
        [key: string]: number;
    };
    total_volume: {
        [key: string]: number;
    };
    market_cap_percentage: {
        [key: string]: number;
    };
    market_cap_change_percentage_24h_usd: number;
    updated_at: number;
};

export interface IFetchCoinsHistoryPayload {
    ids: string[];
    days: string;
    currency: string
};

export interface IFetchCoinsHistoryPayload {
    coinsHistoryPayload: IFetchCoinsHistoryPayload;
    controller: AbortController;
};

export interface ICoinSummaryPayload {
    id: string;
    symbol: string;
    name: string;
    web_slug: string;
    asset_platform_id: null | string;
    platforms: Record<string, string>;
    detail_platforms: Record<string, { decimal_place: null | number; contract_address: string }>;
    block_time_in_minutes: number;
    hashing_algorithm: string;
    categories: string[];
    preview_listing: boolean;
    public_notice: null | string;
    additional_notices: any[]; 
    description: {
        en: string;
    };
    links: {
        homepage: string[];
        whitepaper: string;
        blockchain_site: string[];
        official_forum_url: string[];
        chat_url: string[];
        announcement_url: string[];
        twitter_screen_name: string;
        facebook_username: string;
        bitcointalk_thread_identifier: null | string;
        telegram_channel_identifier: string;
        subreddit_url: string;
        repos_url: {
            github: string[];
            bitbucket: string[];
        };
    };
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    country_origin: string;
    genesis_date: string;
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    watchlist_portfolio_users: number;
    market_cap_rank: number;
    market_data: {
        current_price: {
            [key: string]: number;
        };
        max_supply: number;
        total_supply: number;
        circulating_supply: number;
        total_value_locked: null | number;
        mcap_to_tvl_ratio: null | number;
        fdv_to_tvl_ratio: null | number;
        roi: null | number;
        ath: {
            [key: string]: number;
        };
        ath_change_percentage: {
            [key: string]: number;
        };
        ath_date: {
            [key: string]: string;
        };
        atl: {
            [key: string]: number;
        };
        atl_change_percentage: {
            [key: string]: number;
        };
        atl_date: {
            [key: string]: string;
        };
        market_cap: {
            [key: string]: number;
        };
        fully_diluted_valuation: {
            [key: string]: number;
        };
        market_cap_fdv_ratio: number;
        total_volume: {
            [key: string]: number;
        };
        high_24h: {
            [key: string]: number;
        };
        low_24h: {
            [key: string]: number;
        };
        price_change_24h_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_1h_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_24h_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_7d_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_14d_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_30d_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_60d_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_200d_in_currency: {
            [key: string]: number;
        };
        price_change_percentage_1y_in_currency: {
            [key: string]: number;
        };
        market_cap_change_24h_in_currency: {
            [key: string]: number;
        };
        market_cap_change_percentage_24h_in_currency: {
            [key: string]: number;
        };
    };
    community_data: {
        facebook_likes: number | null;
        twitter_followers: number;
        reddit_average_posts_48h: number;
        reddit_average_comments_48h: number;
        reddit_subscribers: number;
        reddit_accounts_active_48h: number;
        telegram_channel_user_count: number | null;
    };
    status_updates: [];
    last_updated: string;
}

export interface IHistoricalDataParams {
    purchasedAmount: string,
    purchasedDate: string
};

export interface IHistoricalData {
    id: string;
    symbol: string;
    name: string;
    localization: { [key: string]: string };
    image: {
      thumb: string;
      small: string;
    };
    market_data: {
      current_price: { [key: string]: number };
      market_cap: { [key: string]: number };
      total_volume: { [key: string]: number };
    };
    community_data: {
      facebook_likes: number | null;
      twitter_followers: number | null;
      reddit_average_posts_48h: number;
      reddit_average_comments_48h: number;
      reddit_subscribers: number | null;
      reddit_accounts_active_48h: number | null;
    };
    developer_data: {
      forks: number;
      stars: number;
      subscribers: number;
      total_issues: number;
      closed_issues: number;
      pull_requests_merged: number;
      pull_request_contributors: number;
      code_additions_deletions_4_weeks: {
        additions: number;
        deletions: number;
      };
      commit_count_4_weeks: number;
    };
    public_interest_stats: {
      alexa_rank: number | null;
      bing_matches: number | null;
    };
}

export interface ICompleteHistoricalData extends IHistoricalDataParams, IHistoricalData {}

export type TCoinsState = {
    coinsHistory: ICoinHistoryState;
    coinList: {
        data: ICoin[];
        lastCoins: ICoin[];
        loading: boolean;
        error: string | null;
    };
    coinSummary: {
        data: ICoinSummaryPayload | null;
        loading: boolean;
        error: string | null;
    };
    marketData: {
        data: IMarketDataPayload | null;
        loading: boolean;
        error: string | null;
    };
    historicalData: {
        data: ICompleteHistoricalData[];
        loading: boolean;
        error: string | null;
    };
    page: number;
};

