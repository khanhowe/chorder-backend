import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
    STAGE: Joi.string().required(),
    DATABASE_TYPE: Joi.string().required(),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_PORT: Joi.number().default(5432).required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
});
