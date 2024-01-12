import catchAsync from '../middlewares/catchAsync';
import User from '../models/User';
import CaptureError from '../utils/CaptureError';
import httpStatus from '../utils/httpStatus';
import { validateUserRegisterData } from '../validations/users';

/**
 * @route   /users/register
 * @method  POST
 * @access  Public
 * @desc    Register a user.
 */
export const registerUser = catchAsync(async (req, res, next) => {
  const { data: userData, error } = await validateUserRegisterData(req.body);
  if (error)
    return res.json({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      message: error.message,
      error,
    });

  const user = await User.findOne({ email: userData.email });
  if (user) {
    const message = 'User is already registered with this email';
    throw new CaptureError(message, httpStatus.BAD_REQUEST);
  }

  const newUser = new User(userData);
  await newUser.save();

  return res.status(httpStatus.CREATED).json({
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registration successful',
    user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  });
});
