import { EntityManager } from 'typeorm';
import { User } from '../../auth/user.entity';
import { generatePassword } from '../../common/utils/password.util';

export const seedUsers = async (
    manager: EntityManager,
    overrides?: Omit<Partial<User>, 'id'>,
): Promise<User> => {
    const defaultValues: Omit<Partial<User>, 'id'> = {
        username: 'johnsnow',
        password: generatePassword(10),
    };

    const newUser = manager.create(User, {
        ...defaultValues,
        ...overrides,
    });

    await manager.save(User, newUser);

    return newUser;
};
