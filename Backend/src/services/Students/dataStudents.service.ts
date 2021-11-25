import { validateId } from '../../helpers/validateId';

class DataServiceStudents {
  async getAllData() {
    // buscar todos dados
    return { data: ['all data'] };
  }

  async getData(id: string): Promise<{data: string} | Error> {
    try {
      const typeSearch = validateId(id);

      return { data: 'single data' };
    } catch (error) {
      console.log(error);

      return error;
    }
  }

  updateData() {
    return 'updated';
  }
}
export { DataServiceStudents };
