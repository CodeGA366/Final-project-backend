"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movieModel_1 = __importDefault(require("../models/movieModel"));
const movieResolver = {
    Query: {
        movies: async () => {
            return await movieModel_1.default.find();
        },
        movie: async (_, { id }) => {
            return await movieModel_1.default.findById(id);
        },
    },
    Mutation: {
        addMovie: async (_, { input }) => {
            const newMovie = new movieModel_1.default(input);
            return await newMovie.save();
        },
        updateMovie: async (_, { id, input }) => {
            return await movieModel_1.default.findByIdAndUpdate(id, input, { new: true });
        },
        deleteMovie: async (_, { id }) => {
            return await movieModel_1.default.findByIdAndRemove(id);
        },
    },
};
exports.default = movieResolver;
