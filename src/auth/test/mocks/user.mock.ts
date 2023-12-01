import { User } from '../../../auth/user.entity';
import { v4 } from 'uuid';

export const mockUser = new User();
mockUser.id = v4(); // Assuming v4 is imported from 'uuid'
mockUser.username = 'testUser';
mockUser.password = 'testPassword!';
