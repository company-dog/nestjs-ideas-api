import { IsString } from 'class-validator';
import { UserRO } from 'src/user/user.dto';
export class IdeaDto {
  @IsString()
  idea: string;

  @IsString()
  description: string;
}

export class IdeaRO {
  id?: string;
  updated: Date;
  created: Date;
  description: string;
  author: UserRO;
}
