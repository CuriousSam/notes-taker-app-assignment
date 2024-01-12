import * as yup from 'yup';

export const createNotesSchema = yup.object({
  title: yup.string().min(3).max(128).required().label('Title'),
  description: yup.string().required().label('Description'),
});

export type CreateNotesData = yup.InferType<typeof createNotesSchema>;

export const updateNoteSchema = yup.object({
  title: yup.string().min(3).max(128).notRequired().label('Title'),
  description: yup.string().notRequired().label('Description'),
});

export type UpdateNotesData = yup.InferType<typeof updateNoteSchema>;
