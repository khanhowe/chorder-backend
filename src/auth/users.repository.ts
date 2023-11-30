import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';

enum UserErrors {
    USERNAME_CONFLICT = '23505',
}

@Injectable()
export class UsersRepository extends Repository<User> {
    constructor(@InjectDataSource() dataSource: DataSource) {
        super(User as EntityTarget<User>, dataSource.createEntityManager());
    }

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.create({
            username,
            password: hashedPassword,
        });

        try {
            await this.save(user);
        } catch (error) {
            if (error.code === UserErrors.USERNAME_CONFLICT) {
                throw new ConflictException('Username already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }
}
