import catchAsync from '../middlewares/catchAsync';
import Note from '../models/Note';
import httpStatus from '../utils/httpStatus';
import { validateCreateNoteData } from '../validations/notes';

/**
 * @route   /notes
 * @method  POST
 * @access  Private
 * @desc    Create a note by providing a title and a description.
 */
export const createNote = catchAsync(async (req, res, next) => {
  const { data: noteData, error } = await validateCreateNoteData(req.body);
  if (error)
    return res.json({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      message: error.message,
      error,
    });

  const newNote = new Note({ ...noteData, user: req.user!._id });
  await newNote.save();

  return res.status(httpStatus.CREATED).json({
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'A new note has been created',
    note: newNote,
  });
});
