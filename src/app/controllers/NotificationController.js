import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const isUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isUserProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifications.' });
    }

    const notifications = await Notification.find({
      user: req.userId,
      read: false,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const { id } = req.params;

    const notification = await Notification.findByIdAndUpdate(
      id,
      {
        read: true,
      },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
