import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PhotosService {
  // async find(query = {}) {
  //   let values = await dbContext.Photos.find(query);
  //   return values;
  // }
  async getAll(req, res, next) {
    try {
      return await dbContext.Photos.find();
       
    } catch (error) {
      console.error(error);
    }
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(rawData) {
    let data = await dbContext.Photos.create(rawData)
    return data
  } catch(error) {
    console.error(error);
  }
}

export const photosService = new PhotosService();