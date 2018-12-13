import * as mongoose from 'mongoose';
 
export const ProductSchema = new mongoose.Schema({
    prod_name: String,
    prod_desc: String
});