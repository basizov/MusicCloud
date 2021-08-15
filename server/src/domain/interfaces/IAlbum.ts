import { Model, Optional } from "sequelize";
import { ITrack } from "./ITrack";

export interface IAlbum {
  id: string;
  name: string;
  authorId: string;
  picture: string;
  tracks: ITrack[];
};

export interface IAlbumCreationAttributes extends Optional<IAlbum, 'id'> { }

export interface IAlbumInstace extends Model<IAlbum, IAlbumCreationAttributes> { }
