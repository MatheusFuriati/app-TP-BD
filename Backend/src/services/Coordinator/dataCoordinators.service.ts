import { validateId } from '../../helpers/validateId';

class DataServiceCoordinators {
  async getAllData() {
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

  getStudent(id: string) {
    return 'student';
  }

  getAllStudents() {
    return ['allStudents'];
  }
}
export { DataServiceCoordinators };
