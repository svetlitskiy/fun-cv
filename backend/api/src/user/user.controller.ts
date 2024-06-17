import userService from './user.service'

const getUserList = async (req: any, res: any, next: any) => {
  try {
    const data = await userService.users();
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export default {
  getUserList
}
