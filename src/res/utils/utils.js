import moment from 'moment';

const formatTime = (time: number) => moment(time).format('LT');

export default {formatTime};
