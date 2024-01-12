// import mongoose from 'mongoose';
import { Request } from 'express';
import catchAsync from '../middlewares/catchAsync';
import Note, { NoteSchema } from '../models/Note';
import httpStatus from '../utils/httpStatus';
import { validateCreateNoteData } from '../validations/notes';
import CaptureError from '../utils/CaptureError';
// const ObjectId = mongoose.Schema.Types.ObjectId;

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

interface NotesQueryParams {
  page?: string;
}

type Count = [{ count: number }];

/**
 * @route   /notes
 * @method  GET
 * @access  Private
 * @desc    Get list of notes for current logged in user.
 */
export const getNotes = catchAsync(
  async (req: Request<{}, {}, {}, NotesQueryParams>, res, next) => {
    const user = req.user;

    const page = parseInt(req.query?.page || '1');
    const pageSize = 2;

    const notesRes = await Note.aggregate<{
      count: Count;
      notes: NoteSchema[];
    }>([
      {
        $match: {
          user: user._id,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $facet: {
          count: [{ $count: 'count' }],
          notes: [
            {
              $skip: (page - 1) * pageSize,
            },
            {
              $limit: pageSize,
            },
          ],
        },
      },
    ]);

    console.log({ ct: notesRes[0].count[0]?.count });
    const totalResults = notesRes[0].count[0]?.count ?? 0;
    const notes = notesRes[0].notes ?? [];

    return res.status(httpStatus.CREATED).json({
      success: true,
      statusCode: httpStatus.CREATED,
      totalResults,
      page,
      pageSize,
      count: notes,
      notes: notes,
    });
  }
);

/**
 * @route   /notes/:id
 * @method  GET
 * @access  Private
 * @desc    Get notes details.
 */
export const getNoteById = catchAsync(
  async (req: Request<{ id?: string }, {}, {}, {}>, res, next) => {
    const note = await Note.findOne({ _id: req.params.id, user: req.user._id });
    if (!note)
      throw new CaptureError('Note does not exist', httpStatus.NOT_FOUND);

    return res.json({
      success: true,
      statusCode: httpStatus.OK,
      note,
    });
  }
);
