import type { GetTransactionsParams } from "@/types/Finance";

class Mapper {
  private static removeEmptyValues<T extends object>(object: T) {
    return Object.entries(object).reduce(
      (acc, [key, value]) => ({
        ...acc,
        ...(value && {
          [key]: value,
        }),
      }),
      {} as T,
    );
  }

  static toGetTransactionParams(params: GetTransactionsParams) {
    return Mapper.removeEmptyValues(params);
  }
}

export default Mapper;
