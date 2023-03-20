import dayjs from 'dayjs'

const helpers = {
  formatDate: (date, format) => {
    return dayjs(date).format(format);
  },
  generateKey: (pre) => {
    return `${pre}_${new Date().getTime( )}`;
  }
}

export default helpers;