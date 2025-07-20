/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Movie } from "@/types/Movie";
import type { CamelCase } from "@shared-vendor/types";

type GetTransactionsGeneratorOptions = Record<"startDate" | "endDate" | "categoryId", string>;
type GetTransactionReportOptions = Omit<GetTransactionsGeneratorOptions, "categoryId">;

const MOVIE_QUERY_KEYS = [
  { key: "GET_MOVIES", generator: (page: number, search: string) => `${page}/${search}` },
  { key: "GET_MOVIE_DETAILS", generator: (id: Movie["id"]) => `${id}` },
  "GET_GENRES",
] as const;

const FINANCE_QUERY_KEYS = [
  {
    key: "GET_TRANSACTIONS",
    generator: ({ startDate, endDate, categoryId }: GetTransactionsGeneratorOptions) =>
      `${startDate}/${endDate}/${categoryId}`,
  },
  {
    key: "GET_TRANSACTION_REPORT",
    generator: ({ startDate, endDate }: GetTransactionReportOptions) => `${startDate}/${endDate}`,
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
  ? (...args: Parameters<K["generator"]>) => [`${K["key"]}/${ReturnType<K["generator"]>}`]
  : () => [K];
type NormalizeKey<K extends Key> = CamelCase<ExtractKey<K>>;

type EndPoints<T extends readonly Key[]> = {
  [Index in T[number] as NormalizeKey<ExtractKey<Index>>]: ExtractGenerator<Index>;
};

const extractKey = (key: Key) => toCamelCase(isString(key) ? key : key.key);
const extractGenerator = (key: Key) =>
  isString(key)
    ? () => [key]
    : (...args: Parameters<typeof key.generator>) => [`${key.key}/${key.generator(...args)}`];

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
  const movie = generateEndPoints(MOVIE_QUERY_KEYS);
  const authentication = generateEndPoints(AUTHENTICATION_MUTATION_KEYS);
  const finance = generateEndPoints([...FINANCE_MUTATION_KEYS, ...FINANCE_QUERY_KEYS]);

  return {
    movie,
    authentication,
    finance,
  };
};
