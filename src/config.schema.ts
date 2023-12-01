import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
    STAGE: Joi.string().required(),
    DATABASE_TYPE: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),

    DEV_DB_NAME: Joi.string().required(),
    DEV_DB_PORT: Joi.number().default(5432),
    DEV_DB_USER: Joi.string().required(),
    DEV_DB_PASSWORD: Joi.string().required(),

    TEST_DB_NAME: Joi.string().required(),
    TEST_DB_PORT: Joi.number().default(5434),
    TEST_DB_USER: Joi.string().required(),
    TEST_DB_PASSWORD: Joi.string().required(),
});
