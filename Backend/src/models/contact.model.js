import mongoose from 'mongoose';
import validator from 'validator';

const ContactSchema = new mongoose.Schema(
  {
    firstName: { 
      type: String, 
      required: [true, "FirstName is required"] 
    },
    lastName: { 
      type: String, 
      required: [true, "LastName is required"] 
    },
    email: { 
      type: String, 
      required: [true, "Email is required"], 
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"]
    },
    phone: { 
      type: String, 
      required: true, 
      validate: {
        validator: (value) => validator.isMobilePhone(value, 'en-IN', { strictMode: false }), 
        message: "Please provide a valid phone number"
      }
    },
    company: { type: String },
    jobTitle: { type: String }
  }
);

export const Contact = mongoose.model('Contact', ContactSchema);
