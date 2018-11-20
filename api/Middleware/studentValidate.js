import Joi from 'joi'

export const studentSchema = Joi.object().keys({
  firstName: Joi.string().alphanum().min(2).max(200).required(),
  lastName: Joi.string().alphanum().min(3).max(200).required(),
  streetName: Joi.string().alphanum().min(3).max(200).required(),
  phoneNumber: Joi.number(),
  homeNumber: Joi.string(),
  stateOfOrigin: Joi.string().alphanum().min(3).max(50).required(),
  town: Joi.string().alphanum().min(3).max(50)
})
