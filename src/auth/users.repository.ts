import { Injectable } from '@nestjs/common';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository extends Repository<User> {
    constructor(@InjectDataSource() dataSource: DataSource) {
        super(User as EntityTarget<User>, dataSource.createEntityManager());
    }
}
