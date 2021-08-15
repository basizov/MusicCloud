import { Model, Optional } from "sequelize";
import { IComment } from "./IComment";

export interface ITrack {
  id: string;
  name: string;
  artistName: string;
  text: string;
  listensCount: number;
  picture: string;
  audio: string;
  comments: IComment[];
};


export interface ITrackCreationAttributes extends Optional<ITrack, 'id'> { }

export interface ITrackInstace extends Model<ITrack, ITrackCreationAttributes> { }
