/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Movie } from "@/types/Movie";
import type { CamelCase } from "@shared-vendor/types";

type GetTransactionsGeneratorOptions = Record<"startDate" | "endDate" | "categoryId", string>;
type GetTransactionReportOptions = Omit<GetTransactionsGeneratorOptions, "categoryId">;

const joinKeys = (keys: object, separator = "&") =>
  Object.entries(keys).reduce(
    (acc, [key, value], index) => `${acc}${index ? separator : ""}${key}=${value}`,
    "",
  );

const MOVIE_QUERY_KEYS = [
  { key: "GET_MOVIES", generator: (page: number, search: string) => joinKeys({ page, search }) },
  { key: "GET_MOVIE_DETAILS", generator: (id: Movie["id"]) => joinKeys({ id }) },
  "GET_GENRES",
] as const;

const FINANCE_QUERY_KEYS = [
  {
    key: "GET_TRANSACTIONS",
    generator: ({ startDate, endDate, categoryId }: GetTransactionsGeneratorOptions) =>
      joinKeys({ startDate, endDate, categoryId }),
  },
  {
    key: "GET_TRANSACTION_REPORT",
    generator: ({ startDate, endDate }: GetTransactionReportOptions) => joinKeys({ startDate, endDate }),
  },
  "GET_CATEGORIES",
] as const;
const FINANCE_MUTATION_KEYS = [
  "ADD_CATEGORY",
  "EDIT_CATEGORY",
  "DELETE_CATEGORY",
  "ADD_TRANSACTION",
  "EDIT_TRANSACTION",
  "DELETE_TRANSACTION",
] as const;

const AUTHENTICATION_MUTATION_KEYS = ["SIGNIN", "SIGNUP", "REFRESH_TOKEN"] as const;

type KeyObject = {
  key: string;
  generator: (...args: any[]) => string;
};
type Key = string | KeyObject;

type ExtractKey<K extends Key> = K extends KeyObject ? K["key"] : K;
type ExtractGenerator<K extends Key> = K extends KeyObject
  ? (...args: Parameters<K["generator"]>) => [`${K["key"]}?${ReturnType<K["generator"]>}`]
  : () => [K];
type NormalizeKey<K extends Key> = CamelCase<ExtractKey<K>>;

type EndPoints<T extends readonly Key[]> = {
  [Index in T[number] as NormalizeKey<ExtractKey<Index>>]: ExtractGenerator<Index>;
};

const extractKey = (key: Key) => toCamelCase(isString(key) ? key : key.key);
const extractGenerator = (key: Key) =>
  isString(key)
    ? () => [key]
    : (...args: Parameters<typeof key.generator>) => [`${key.key}?${key.generator(...args)}`];

const generateEndPoints = <T extends readonly Key[]>(keys: T): EndPoints<T> => {
  const endPoints = {} as any;

  for (const key of keys) {
    const objectKey = extractKey(key);
    const generator = extractGenerator(key);

    endPoints[objectKey] = generator;
  }

  return endPoints;
};

export type EndPoint = [string];
export const useEndPoints = () => {
  const movieEndPoints = generateEndPoints(MOVIE_QUERY_KEYS);
  const authenticationEndPoints = generateEndPoints(AUTHENTICATION_MUTATION_KEYS);
  const financeEndPoints = generateEndPoints([...FINANCE_MUTATION_KEYS, ...FINANCE_QUERY_KEYS]);

  const movie = {
    ...movieEndPoints,
    QUERY_KEYS: MOVIE_QUERY_KEYS,
  };
  const authentication = {
    ...authenticationEndPoints,
    MUTATION_KEYS: AUTHENTICATION_MUTATION_KEYS,
  };
  const finance = {
    ...financeEndPoints,
    QUERY_KEYS: FINANCE_QUERY_KEYS,
    MUTATION_KEYS: FINANCE_MUTATION_KEYS,
  };

  return {
    movie,
    authentication,
    finance,
  };
};
