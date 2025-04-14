import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  hasProducts?: boolean;
  isActive?: boolean;
}

const ServiceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    category: { type: String }, // تصنيف فرعي إن وجد
    hasProducts: { type: Boolean, default: false }, // هل الخدمة تحتوي منتجات؟
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// لتجنب الخطأ عند إعادة بناء Next.js
export default mongoose.models.Service ||
  mongoose.model<IService>("Service", ServiceSchema);
