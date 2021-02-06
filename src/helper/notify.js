import { Notify } from 'quasar';

Notify.registerType('custom-warning', {
  icon: 'announcement',
  color: 'grey-4',
  textColor: 'grey-9',
});

Notify.registerType('custom-warning-2', {
  icon: 'announcement',
  color: 'orange-10',
  textColor: 'grey-1',
});

function notify(type, message) {
  Notify.create({
    type,
    message,
  });
}

export default notify;
