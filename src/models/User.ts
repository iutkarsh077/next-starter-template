import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  english: {
    type: Number,
    required: true
  },
  maths: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});

export const user = mongoose.models.formsubmission || mongoose.model('formsubmission', UserSchema);
