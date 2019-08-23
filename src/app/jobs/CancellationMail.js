import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class CancelationMail {
  get key() {
    return 'CancelationMail';
  }

  async handle({ data }) {
    const { appointment } = data;
    const formattedDate = format(
      parseISO(appointment.date),
      "MMMM do',' hh:mm a"
    );
    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Cancelled appointment',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: formattedDate,
      },
    });
  }
}

export default new CancelationMail();
