import mongoose, { Document } from "mongoose";
export interface INote extends Document {
    title: string;
    content: string;
    user: mongoose.Types.ObjectId;
}
//# sourceMappingURL=types.d.ts.map