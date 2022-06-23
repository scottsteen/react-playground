import { ApiResponse } from '../../main/common/api';

export const readApiResponse = async <T>(response: ApiResponse<T>): Promise<T> => {
  try {
    return response.read();
  } catch (e) {
    if (e instanceof Promise) {
      await e;
      return response.read();
    }
    throw e;
  }
};
