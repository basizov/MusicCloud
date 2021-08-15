import { Model, Optional } from "sequelize";

export interface IComment {
  id: string;
  trackId: string;
  username: string;
  text: string;
};

export interface ICommentCreationAttributes extends Optional<IComment, 'id'> { }

export interface ICommentInstace extends Model<IComment, ICommentCreationAttributes> { }
